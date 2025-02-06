import Svg, {
  Defs,
  G,
  Image,
  Mask,
  Path,
  Pattern,
  Rect,
  Use,
} from "react-native-svg";

const CardShadowSvg = () => {
  return (
    <Svg
      width="258"
      height="35"
      viewBox="0 0 258 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Mask
        id="mask0_5_391"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="3"
        y="2"
        width="352"
        height="91"
      >
        <Path
          d="M218.216 11.0283C141.717 25.8055 98.9509 59.3723 3.3233 92.9887L345.016 78.4167C345.016 78.4167 368.251 16.3937 341.917 5.75287C322.517 -2.08599 252.642 4.37818 218.216 11.0283Z"
          fill="#F09E54"
        />
      </Mask>
      <G mask="url(#mask0_5_391)">
        <Rect
          opacity="0.3"
          x="248.548"
          y="-41.6694"
          width="111.522"
          height="200.247"
          transform="rotate(60 248.548 -41.6694)"
          fill="url(#pattern0_5_391)"
        />
      </G>
      <Defs>
        <Pattern
          id="pattern0_5_391"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use
            xlinkHref="#image0_5_391"
            transform="matrix(0.0394737 0 0 0.0241935 -1.39474 -0.516129)"
          />
        </Pattern>
        <Image
          id="image0_5_391"
          width="78"
          height="88"
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
};

export default CardShadowSvg;
