import classNames from "classnames";
import "./index.scss";
import { IconName } from "@/type/IconName";
import { FontSize } from "@/type/FontSize";

const ICON_NAME_MAP = {
  CREATE_NEW_PLAN: "add",
  NOTIFICATION_ON: "notifications",
  NOTIFICATION_OFF: "notifications_off",
  PLAN_OPEN: "lock_open",
  PLAN_CLOSE: "lock",
  ITEM_OPEN: "expand_more",
  ITEM_CLOSE: "expand_less",
  OTHER_PLAN: "calendar_today",
  PROFILE: "person",
  ERROR: "error",
  WARNING: "warning",
  LOCAL_FIRE_DEPARTMENT: "local_fire_department",
  WHATSHOT: "whatshot",
  REFRESH: "refresh",
  HELP: "help",
  DROP_DOWN: "arrow_drop_down",
  DROP_UP: "arrow_drop_up",
  ARROW_UP: "arrow_upward",
  ARROW_LEFT: "arrow_back_ios_new",
  ARROW_RIGHT: "arrow_forward_ios",
  CLOSE: "close",
  CHECKED: "check_box",
  UN_CHECKED: "check_box_outline_blank",
  FLUTTER_DASH: "flutter_dash",
  RAVEN: "raven",
  POTTED_PLANT: "potted_plant",
  FLIGHT: "flight",
  GLOBE: "globe",
  SOCIAL_LEADERBOARD: "social_leaderboard",
  STRATEGY: "strategy",
  TROPHY: "trophy",
  STAR: "star",
  FAVORITE: "favorite",
  MENU: "menu",
  MORE_VERT: "more_vert",
  PLAY: "play_arrow",
  SHIFT: "shift",
  ARROW_CIRCLE_UP: "arrow_circle_up",
  SPRINT: "sprint",
  DIRECTIONS_RUN: "directions_run",
  MIC: "mic",
};

interface IconProps {
  name: IconName;
  size?: FontSize;
  color?: string;
  isFilled?: boolean;
  classNameList?: string[];
}

export default function Icon({
  name,
  size = "2xl",
  color = "orange-300",
  isFilled = false,
  classNameList = [],
}: IconProps) {
  return (
    <span
      className={classNames(
        "icon",
        "material-symbols-outlined",
        `text-${size}`,
        `text-${color}`,
        { "icon--isFilled": isFilled },
        classNameList
      )}
    >
      {ICON_NAME_MAP[name]}
    </span>
  );
}
