import Svg, { Path } from "react-native-svg";

const HomeIcon = ({
  none = "none",
  strokeGray = "#D9D8D8",
  fillOrange = "#FE8235",
  strokeWidth = "2.6",
  activeStrokeWidth = "1.4",
  focused,
}) => {
  return (
    <Svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.7253 22.6011L31.4081 14.2432C28.417 11.2523 23.583 11.2523 20.5919 14.2432L12.2747 22.6011C12.0068 22.8684 11.9263 23.2719 12.0711 23.6223C12.2158 23.9727 12.557 24.2003 12.9345 24.1983H14.344V33.3097C14.3495 37.0023 17.3271 39.9945 21.0017 40H22.4312C22.9463 39.9945 23.3609 39.5733 23.3609 39.0557V31.3809H28.6391V39.0557C28.6391 39.5733 29.0537 39.9945 29.5688 40H30.9983C34.6729 39.9945 37.6505 37.0023 37.656 33.3097V24.1983H39.0655C39.443 24.2003 39.7842 23.9727 39.9289 23.6223C40.0737 23.2719 39.9932 22.8684 39.7253 22.6011ZM21.8381 15.612C22.9414 14.5799 24.4386 14 26 14C27.5613 14 29.0586 14.5799 30.1619 15.612L37 22H15L21.8381 15.612ZM31.1073 38C33.8071 37.9945 35.9944 35.8315 36 33.1616V24H16V33.1616C16.0056 35.8315 18.1929 37.9945 20.8928 38H21.3933V30.2727C21.3989 29.7523 21.8271 29.3333 22.3534 29.3333H29.6466C30.1729 29.3333 30.6011 29.7523 30.6067 30.2727V38H31.1073Z"
        fill={focused ? fillOrange : none}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M39.7253 22.6011L31.4081 14.2432C28.417 11.2523 23.583 11.2523 20.5919 14.2432L12.2747 22.6011C12.0068 22.8684 11.9263 23.2719 12.0711 23.6223C12.2158 23.9727 12.557 24.2003 12.9345 24.1983H14.344V33.3097C14.3495 37.0023 17.3271 39.9945 21.0017 40H22.4312C22.9463 39.9945 23.3609 39.5733 23.3609 39.0557V31.3809H28.6391V39.0557C28.6391 39.5733 29.0537 39.9945 29.5688 40H30.9983C34.6729 39.9945 37.6505 37.0023 37.656 33.3097V24.1983H39.0655C39.443 24.2003 39.7842 23.9727 39.9289 23.6223C40.0737 23.2719 39.9932 22.8684 39.7253 22.6011Z"
        fill={focused ? fillOrange : none}
        stroke={focused ? fillOrange : strokeGray}
        strokeWidth={focused ? activeStrokeWidth : strokeWidth}
      />
    </Svg>
  );
};

export default HomeIcon;
