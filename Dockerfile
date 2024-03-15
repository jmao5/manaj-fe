# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=21.6.2
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Next.js"

# Next.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3
RUN npm install sharp
# Install sharp package


# Install node modules
COPY --link package-lock.json package.json ./
RUN npm ci --include=dev

# Copy application code
COPY --link . .

# Build application
RUN --mount=type=secret,id=NEXT_PUBLIC_API_BASE_URL \
    --mount=type=secret,id=NEXT_PUBLIC_FE_URL \
    --mount=type=secret,id=NEXT_PUBLIC_KAKAO_OAUTH_URL \
    NEXT_PUBLIC_API_BASE_URL="$(cat /run/secrets/NEXT_PUBLIC_API_BASE_URL)" \
    NEXT_PUBLIC_FE_URL="$(cat /run/secrets/NEXT_PUBLIC_FE_URL)" \
    NEXT_PUBLIC_KAKAO_OAUTH_URL="$(cat /run/secrets/NEXT_PUBLIC_KAKAO_OAUTH_URL)" \
    npm run build

# Remove development dependencies
RUN npm prune --omit=dev

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "npm", "run", "start" ]
