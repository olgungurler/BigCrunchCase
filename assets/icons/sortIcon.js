import Svg, { G, ClipPath, Defs, Path, Rect } from "react-native-svg";

const SortIcon = () => {
  return (
    <Svg
      width="12"
      height="17"
      viewBox="0 0 12 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_6_143)">
        <Path
          d="M12 10.5C12 10.7031 11.9258 10.8789 11.7773 11.0273L6.52734 16.2773C6.37891 16.4258 6.20312 16.5 6 16.5C5.79688 16.5 5.62109 16.4258 5.47266 16.2773L0.222656 11.0273C0.0742188 10.8789 0 10.7031 0 10.5C0 10.2969 0.0742188 10.1211 0.222656 9.97266C0.371094 9.82422 0.546875 9.75 0.75 9.75H11.25C11.4531 9.75 11.6289 9.82422 11.7773 9.97266C11.9258 10.1211 12 10.2969 12 10.5ZM12 6C12 6.20312 11.9258 6.37891 11.7773 6.52734C11.6289 6.67578 11.4531 6.75 11.25 6.75H0.75C0.546875 6.75 0.371094 6.67578 0.222656 6.52734C0.0742188 6.37891 0 6.20312 0 6C0 5.79688 0.0742188 5.62109 0.222656 5.47266L5.47266 0.222656C5.62109 0.0742188 5.79688 0 6 0C6.20312 0 6.37891 0.0742188 6.52734 0.222656L11.7773 5.47266C11.9258 5.62109 12 5.79688 12 6Z"
          fill="#D6CCC6"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_6_143">
          <Rect width="12" height="16.5" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SortIcon;