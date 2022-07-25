import React from "react";
import classNames from "classnames";

function SvgFade(props) {
  const color = props.color

  return (
      <svg className="svgfade"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="none"
        viewBox="0 0 105.833 105.833"
      >
        <defs>
          <linearGradient id={`${color}-c`}>
            <stop offset="0.216" stopColor="currentColor"></stop>
            <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient id={`${color}-b`}>
            <stop offset="0.142" stopColor="currentColor"></stop>
            <stop offset="0.456" stopColor="currentColor" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient id={`${color}-a`}>
            <stop offset="0.264" stopColor="currentColor" stopOpacity="0"></stop>
            <stop offset="1" stopColor="currentColor" stopOpacity="0.646"></stop>
          </linearGradient>
          <linearGradient
            id={`${color}-e`}
            x1="-63.702"
            x2="1.498"
            y1="51.774"
            y2="62.915"
            gradientTransform="translate(63.702 1.143)"
            gradientUnits="userSpaceOnUse"
            xlinkHref={`#${color}-b`}
          ></linearGradient>
          <linearGradient
            id={`${color}-f`}
            x1="-63.702"
            x2="-19.641"
            y1="51.774"
            y2="64.343"
            gradientTransform="matrix(.99796 0 0 1.00543 -42.26 -104.684)"
            gradientUnits="userSpaceOnUse"
            xlinkHref={`#${color}-c`}
          ></linearGradient>
          <radialGradient
            id={`${color}-d`}
            cx="52.847"
            cy="52.99"
            r="53.133"
            fx="52.847"
            fy="52.99"
            gradientTransform="translate(.284 .142) scale(.99593)"
            gradientUnits="userSpaceOnUse"
            xlinkHref={`#${color}-a`}
          ></radialGradient>
        </defs>
        <path fill={`url(#${color}-d)`} d="M0 0h105.833v105.833H0z"></path>
        <path fill={`url(#${color}-e)`} d="M0 0h52.917v105.833H0z"></path>
        <path
          fill={`url(#${color}-c)`}
          d="M-105.833-105.833H0V0h-105.833z"
          transform="scale(-1)"
        ></path>
      </svg>
  );
}

export default SvgFade;
