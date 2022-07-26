import React from "react";
import classNames from "classnames";

function BackgroundDecoration(props) {
  const color = props.color

  const fade = (
    <svg className="background-decoration background-decoration--fade"
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
  )

  const dots = () => {
    const svg = (
    <svg
      className="background-decoration background-decoration--dots"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.912 7.362"
      /*preserveAspectRatio="none"*/
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <defs>
        <pattern id={`${color}-dotsbg`} patternUnits="userSpaceOnUse" width="9.912" height="7.362">
          <path fill="currentColor" d="M2.755-.002a.303.303 0 01-.003.048.285.285 0 01.036.008.285.285 0 01-.005-.056h.569a.285.285 0 01-.007.063.266.266 0 01.081.02.267.267 0 01-.013-.083h.535a.267.267 0 01-.012.08h.002c.05 0 .097.014.136.04a.25.25 0 01-.03-.12h.5a.25.25 0 01-.02.098.233.233 0 11-.007.462.25.25 0 01.008.21.233.233 0 11-.007.462.25.25 0 01.007.21.233.233 0 11-.007.462.25.25 0 01.007.21.233.233 0 11-.007.462.25.25 0 01.007.209.233.233 0 11-.007.462.25.25 0 01.007.21.233.233 0 11-.007.462.25.25 0 01.007.21.233.233 0 11-.007.462.25.25 0 01.007.21.233.233 0 11-.007.462.25.25 0 01.007.209.233.233 0 11-.007.462.25.25 0 01.007.21.233.233 0 11-.007.462.25.25 0 01.007.21.233.233 0 11.006.464.25.25 0 01.013.082h-.5a.25.25 0 01.02-.1.249.249 0 01-.124.035.268.268 0 01.008.065h-.535a.24.24 0 01.009-.066.266.266 0 01-.075.017.287.287 0 01.005.05h-.57c0-.015.002-.028.004-.042a.285.285 0 01-.033.007.304.304 0 01.002.034H0V0h2.755zm-.358.297a.303.303 0 01-.002.08.302.302 0 01.034-.005.286.286 0 01-.001-.071c-.01 0-.02-.002-.03-.004zM2.99.272a.286.286 0 01-.003.125.317.317 0 01.076-.011.268.268 0 01-.002-.103.277.277 0 01-.071-.01zm.589-.026a.267.267 0 01-.006.18.266.266 0 01.126-.022.25.25 0 01-.004-.139.273.273 0 01-.116-.02zm.579-.038a.249.249 0 01-.015.263.249.249 0 01.196-.047.232.232 0 01-.006-.178.252.252 0 01-.175-.038zm.983-.21a.232.232 0 01-.034.121.216.216 0 11-.012.413.232.232 0 01.012.26.216.216 0 11-.012.412.232.232 0 01.012.259.216.216 0 11-.012.412.232.232 0 01.012.26.216.216 0 11-.012.412.232.232 0 01.012.26.216.216 0 11-.012.412.232.232 0 01.012.259.216.216 0 11-.012.413.232.232 0 01.012.259.216.216 0 11-.012.412.232.232 0 01.012.26.216.216 0 11-.012.412.232.232 0 01.012.26.216.216 0 11-.012.412.232.232 0 01.012.259.216.216 0 11-.012.412.232.232 0 01.012.26.216.216 0 11.009.418.232.232 0 01.024.105h-.466a.233.233 0 01.294-.225.215.215 0 01.008-.197.233.233 0 11.01-.441.215.215 0 01-.01-.23.233.233 0 11.01-.442.215.215 0 01-.01-.23.233.233 0 11.01-.442.215.215 0 01-.01-.23.233.233 0 11.01-.441.215.215 0 01-.01-.23.233.233 0 11.01-.442.215.215 0 01-.01-.23.233.233 0 11.01-.442.215.215 0 01-.01-.23.233.233 0 11.01-.442.215.215 0 01-.01-.23.233.233 0 11.01-.441.215.215 0 01-.01-.23.233.233 0 11.01-.442.215.215 0 01-.01-.23.233.233 0 11.01-.442.215.215 0 01-.01-.23.233.233 0 01-.302-.223h.466zm.596 0a.216.216 0 01-.432 0zm.596 0a.199.199 0 01-.397 0h.397zm.597 0a.182.182 0 01-.364 0zm.596 0a.165.165 0 01-.329 0h.329zm.596 0a.147.147 0 01-.294 0zm.597 0a.13.13 0 01-.26 0zm.596 0a.113.113 0 01-.226 0zm.596 0a.096.096 0 01-.192 0h.192zM2.427 7.06a.289.289 0 010-.044c-.01 0-.02-.002-.03-.004a.306.306 0 01.001.051l.029-.003zm.632.016A.268.268 0 013.061 7a.277.277 0 01-.071-.01.286.286 0 01.002.096.253.253 0 01.067-.01zm.633.017a.251.251 0 01.003-.11.273.273 0 01-.116-.02.267.267 0 01.004.148.267.267 0 01.11-.018zm.636.02a.233.233 0 01.005-.15.252.252 0 01-.175-.038.249.249 0 01.01.22.249.249 0 01.16-.033zm.977.247a.216.216 0 01.319-.19.199.199 0 11.062.05.215.215 0 01.051.14h-.432zm.63 0a.199.199 0 01.398 0h-.397zm.631 0a.182.182 0 01.364 0zm.631 0a.165.165 0 01.33 0h-.33zm.63 0a.148.148 0 01.295 0zm.631 0a.13.13 0 01.26 0zm.63 0a.114.114 0 01.227 0zm.631 0a.096.096 0 01.192 0H9.72zm-6.93-.59a.286.286 0 01.003-.124.284.284 0 01-.043.009.303.303 0 01.003.108.282.282 0 01.036.008zm.637.027a.267.267 0 01.006-.18.266.266 0 01-.09.023.285.285 0 01.003.138.266.266 0 01.081.02zm.648.038a.249.249 0 01.016-.263.249.249 0 01-.158.051.267.267 0 01.004.172h.002c.05 0 .097.014.136.04zm2.136.21a.182.182 0 11.363 0 .182.182 0 01-.363 0zm.63 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.631 0a.148.148 0 11.295 0 .148.148 0 01-.295 0zm.63 0a.13.13 0 11.261 0 .13.13 0 01-.26 0zm.631 0a.114.114 0 11.227 0 .114.114 0 01-.227 0zm.631 0a.096.096 0 11.192 0 .096.096 0 01-.192 0zM2.156 6.67v-.001zm.274-.255a.286.286 0 01-.002-.07l-.03-.005a.306.306 0 01-.003.08.303.303 0 01.035-.005zm.634.016a.268.268 0 01-.003-.103.277.277 0 01-.071-.01.286.286 0 01-.003.125.318.318 0 01.077-.012zm.635.018a.25.25 0 01-.004-.138.273.273 0 01-.116-.02.267.267 0 01-.006.18.266.266 0 01.126-.022zm.64.02a.232.232 0 01-.006-.178.252.252 0 01-.175-.037.249.249 0 01-.015.263.249.249 0 01.196-.048zm.966.247a.216.216 0 11.432 0 .216.216 0 01-.432 0zm.63 0a.2.2 0 11.399 0 .199.199 0 01-.398 0zm.632 0a.182.182 0 11.363 0 .182.182 0 01-.363 0zm.63 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.63 0a.148.148 0 11.296 0 .148.148 0 01-.295 0zm.631 0a.13.13 0 11.26 0 .13.13 0 01-.26 0zm.63 0a.114.114 0 11.227 0 .113.113 0 01-.226 0zm.632 0a.096.096 0 11.192 0 .096.096 0 01-.192 0zm-6.932-.617a.286.286 0 01.004-.125.284.284 0 01-.043.01.303.303 0 01.003.107.283.283 0 01.036.008zm.638.027a.267.267 0 01.006-.18.266.266 0 01-.09.022.284.284 0 01.003.138.266.266 0 01.081.02zm.648.037A.249.249 0 014.09 5.9a.249.249 0 01-.158.051.267.267 0 01.004.172h.002c.05 0 .097.015.136.04zm1.506.21a.199.199 0 11.397 0 .199.199 0 01-.397 0zm.63 0a.182.182 0 11.363 0 .182.182 0 01-.363 0zm.63 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.631 0a.148.148 0 11.295 0 .148.148 0 01-.295 0zm.63 0a.13.13 0 11.261 0 .13.13 0 01-.26 0zm.632 0a.113.113 0 11.226 0 .113.113 0 01-.226 0zm.63 0a.096.096 0 11.192 0 .096.096 0 01-.192 0zm-7.207-.375zm.274-.255a.286.286 0 01-.002-.07l-.03-.005a.306.306 0 01-.002.08.304.304 0 01.034-.005zm.634.017a.268.268 0 01-.003-.103.31.31 0 01-.07-.011.286.286 0 01-.004.125.276.276 0 01.077-.011zm.636.017a.25.25 0 01-.004-.138.273.273 0 01-.117-.02.267.267 0 01-.006.18.266.266 0 01.127-.022zm.64.02a.232.232 0 01-.007-.178.252.252 0 01-.175-.037.249.249 0 01-.015.263.249.249 0 01.196-.047zm.965.247a.216.216 0 11.432 0 .216.216 0 01-.432 0zm.631 0a.199.199 0 11.398 0 .199.199 0 01-.398 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.363 0zm.631 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.63 0a.148.148 0 11.296 0 .148.148 0 01-.295 0zm.631 0a.13.13 0 11.26 0 .13.13 0 01-.26 0zm.631 0a.113.113 0 11.226 0 .113.113 0 01-.226 0zm.63 0a.097.097 0 11.193 0 .096.096 0 01-.192 0zm-6.93-.617a.286.286 0 01.003-.125.284.284 0 01-.043.01.303.303 0 01.003.108.283.283 0 01.036.007zm.637.027a.267.267 0 01.006-.18.266.266 0 01-.09.022.284.284 0 01.003.139.266.266 0 01.081.019zm.648.038a.249.249 0 01.016-.264.249.249 0 01-.158.052.267.267 0 01.004.171h.002c.05 0 .097.015.136.04zm1.506.21a.199.199 0 11.397 0 .199.199 0 01-.397 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.364 0zm.63 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.631 0a.148.148 0 11.295 0 .148.148 0 01-.295 0zm.631 0a.13.13 0 11.26 0 .13.13 0 01-.26 0zm.63 0a.114.114 0 11.227 0 .113.113 0 01-.226 0zm.631 0a.096.096 0 11.192 0 .096.096 0 01-.192 0zm-7.207-.376zm.274-.254a.286.286 0 01-.002-.071.3.3 0 01-.03-.004.306.306 0 01-.002.08.304.304 0 01.034-.005zm.634.016a.268.268 0 01-.003-.103.263.263 0 01-.07-.01.286.286 0 01-.004.124.318.318 0 01.077-.011zm.636.018a.25.25 0 01-.004-.139.273.273 0 01-.117-.02.267.267 0 01-.006.18.266.266 0 01.127-.021zm.64.02a.232.232 0 01-.007-.178.252.252 0 01-.175-.038.249.249 0 01-.015.263.249.249 0 01.196-.047zm.965.246a.216.216 0 11.432 0 .216.216 0 01-.432 0zm.631 0a.199.199 0 11.398 0 .199.199 0 01-.398 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.363 0zm.631 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.63 0a.148.148 0 11.296 0 .148.148 0 01-.295 0zm.631 0a.13.13 0 11.261 0 .13.13 0 01-.26 0zm.631 0a.113.113 0 11.226 0 .113.113 0 01-.226 0zm.63 0a.097.097 0 11.193 0 .096.096 0 01-.192 0zm-6.93-.616a.286.286 0 01.003-.125.284.284 0 01-.042.009.303.303 0 01.002.108.283.283 0 01.036.008zm.637.026a.267.267 0 01.006-.18.266.266 0 01-.09.023.284.284 0 01.003.138.266.266 0 01.081.02zm.649.038a.249.249 0 01.015-.263.249.249 0 01-.158.05.267.267 0 01.004.172h.002c.05 0 .097.015.137.04zm1.505.21a.199.199 0 11.397 0 .199.199 0 01-.397 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.364 0zm.63 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.631 0a.148.148 0 11.295 0 .148.148 0 01-.295 0zm.631 0a.13.13 0 11.26 0 .13.13 0 01-.26 0zm.63 0a.114.114 0 11.227 0 .113.113 0 01-.226 0zm.631 0a.096.096 0 11.192 0 .096.096 0 01-.192 0zm-7.207-.376zM2.43 4.4a.286.286 0 01-.002-.07.3.3 0 01-.03-.005.306.306 0 01-.002.08.304.304 0 01.034-.005zm.634.016a.268.268 0 01-.003-.103.269.269 0 01-.07-.01.286.286 0 01-.004.125.243.243 0 01.077-.012zm.636.018a.25.25 0 01-.004-.138.273.273 0 01-.117-.02.267.267 0 01-.006.18.266.266 0 01.127-.022zm.64.02a.232.232 0 01-.007-.178.252.252 0 01-.175-.038.249.249 0 01-.015.264.249.249 0 01.196-.048zm.966.247a.216.216 0 11.431 0 .216.216 0 01-.431 0zm.63 0a.199.199 0 11.398 0 .199.199 0 01-.398 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.363 0zm.631 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.63 0a.148.148 0 11.296 0 .148.148 0 01-.295 0zm.632 0a.13.13 0 11.26 0 .13.13 0 01-.26 0zm.63 0a.113.113 0 11.226 0 .113.113 0 01-.226 0zm.63 0a.097.097 0 11.193 0 .096.096 0 01-.192 0zm-6.93-.617a.286.286 0 01.003-.125.284.284 0 01-.042.009.303.303 0 01.002.108.283.283 0 01.037.008zm.638.027a.267.267 0 01.005-.18.266.266 0 01-.09.022.284.284 0 01.003.138.266.266 0 01.082.02zm.648.037a.249.249 0 01.015-.263.249.249 0 01-.158.051.267.267 0 01.005.172h.001c.05 0 .097.015.137.04zm1.505.21a.199.199 0 11.397 0 .199.199 0 01-.397 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.364 0zm.63 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.631 0a.148.148 0 11.295 0 .148.148 0 01-.295 0zm.631 0a.13.13 0 11.26 0 .13.13 0 01-.26 0zm.63 0a.114.114 0 11.227 0 .113.113 0 01-.226 0zm.631 0a.096.096 0 11.192 0 .096.096 0 01-.192 0zm-7.207-.375v-.001zm.274-.255a.286.286 0 01-.002-.07.3.3 0 01-.03-.005.306.306 0 01-.002.08.304.304 0 01.034-.005zm.634.016a.268.268 0 01-.003-.103.269.269 0 01-.07-.01.286.286 0 01-.004.125.318.318 0 01.077-.012zm.636.018a.25.25 0 01-.004-.138.273.273 0 01-.117-.02.267.267 0 01-.006.18.266.266 0 01.127-.022zm.64.02a.232.232 0 01-.007-.178.252.252 0 01-.175-.037.249.249 0 01-.015.263.249.249 0 01.196-.047zm.966.247a.216.216 0 11.431 0 .216.216 0 01-.431 0zm.63 0a.199.199 0 11.398 0 .199.199 0 01-.398 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.363 0zm.631 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.631 0a.148.148 0 11.295 0 .148.148 0 01-.295 0zm.63 0a.13.13 0 11.261 0 .13.13 0 01-.26 0zm.631 0a.113.113 0 11.226 0 .113.113 0 01-.226 0zm.63 0a.097.097 0 11.193 0 .096.096 0 01-.192 0zm-6.93-.617a.286.286 0 01.003-.125.284.284 0 01-.042.01.303.303 0 01.002.108.283.283 0 01.037.007zm.638.027a.267.267 0 01.005-.18.266.266 0 01-.09.022.284.284 0 01.003.139.266.266 0 01.082.019zm.648.037a.249.249 0 01.015-.263.249.249 0 01-.158.051.267.267 0 01.005.172h.001c.05 0 .097.015.137.04zm1.505.21a.199.199 0 11.397 0 .199.199 0 01-.397 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.364 0zm.631 0a.165.165 0 11.329 0 .165.165 0 01-.329 0zm.63 0a.148.148 0 11.295 0 .147.147 0 01-.294 0zm.631 0a.13.13 0 11.26 0 .13.13 0 01-.26 0zm.63 0a.114.114 0 11.227 0 .113.113 0 01-.226 0zm.631 0a.096.096 0 11.192 0 .096.096 0 01-.192 0zm-7.207-.375zm.274-.255a.286.286 0 01-.002-.07l-.03-.004a.306.306 0 01-.002.08.304.304 0 01.034-.006zm.634.017a.268.268 0 01-.003-.103.32.32 0 01-.07-.01.286.286 0 01-.004.124.276.276 0 01.077-.011zm.636.017a.25.25 0 01-.004-.138.273.273 0 01-.117-.02.267.267 0 01-.005.18.266.266 0 01.126-.022zm.64.02a.232.232 0 01-.007-.177.252.252 0 01-.175-.038.249.249 0 01-.015.263.249.249 0 01.196-.047zm.966.247a.216.216 0 11.432 0 .216.216 0 01-.432 0zm.63 0a.199.199 0 11.398 0 .199.199 0 01-.398 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.363 0zm.631 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.631 0a.148.148 0 11.295 0 .148.148 0 01-.295 0zm.63 0a.13.13 0 11.261 0 .13.13 0 01-.26 0zm.631 0a.113.113 0 11.226 0 .113.113 0 01-.226 0zm.63 0a.097.097 0 11.193 0 .096.096 0 01-.192 0zm-6.93-.616a.286.286 0 01.003-.126.284.284 0 01-.042.01.303.303 0 01.002.108.283.283 0 01.037.008zm.638.026a.267.267 0 01.005-.18.266.266 0 01-.09.022.285.285 0 01.003.139.266.266 0 01.082.02zm.648.038a.249.249 0 01.015-.263.249.249 0 01-.158.05.267.267 0 01.005.172h.001c.05 0 .097.015.137.04zm1.505.21a.199.199 0 11.397 0 .199.199 0 01-.397 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.364 0zm.631 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.63 0a.148.148 0 11.295 0 .147.147 0 01-.294 0zm.631 0a.13.13 0 11.26 0 .13.13 0 01-.26 0zm.63 0a.114.114 0 11.227 0 .113.113 0 01-.226 0zm.631 0a.096.096 0 11.192 0 .096.096 0 01-.192 0zm-7.207-.376zm.274-.254a.286.286 0 01-.002-.07l-.03-.005a.306.306 0 01-.002.08.304.304 0 01.034-.005zm.634.016a.268.268 0 01-.003-.103.269.269 0 01-.07-.01.286.286 0 01-.004.124.325.325 0 01.077-.011zm.636.018a.25.25 0 01-.004-.138.273.273 0 01-.117-.02.267.267 0 01-.005.18.266.266 0 01.126-.022zm.64.02a.232.232 0 01-.007-.178.252.252 0 01-.175-.038.249.249 0 01-.015.263.249.249 0 01.197-.047zm.966.246a.216.216 0 11.432 0 .216.216 0 01-.432 0zm.63 0a.199.199 0 11.398 0 .199.199 0 01-.398 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.363 0zm.631 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.631 0a.148.148 0 11.295 0 .148.148 0 01-.295 0zm.63 0a.13.13 0 11.261 0 .13.13 0 01-.26 0zm.631 0a.114.114 0 11.227 0 .114.114 0 01-.227 0zm.63 0a.097.097 0 11.193 0 .096.096 0 01-.192 0zm-6.93-.616a.286.286 0 01.003-.125.284.284 0 01-.042.009.303.303 0 01.002.108.283.283 0 01.037.008zm.638.026a.267.267 0 01.005-.18.266.266 0 01-.09.023.284.284 0 01.003.138.266.266 0 01.082.02zm.648.038a.249.249 0 01.015-.263.249.249 0 01-.158.051.267.267 0 01.005.171h.001c.05 0 .098.015.137.04zm1.505.21a.199.199 0 11.398 0 .199.199 0 01-.398 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.364 0zm.631 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.63 0a.148.148 0 11.295 0 .147.147 0 01-.294 0zm.631 0a.13.13 0 11.26 0 .13.13 0 01-.26 0zm.63 0a.114.114 0 11.227 0 .113.113 0 01-.226 0zm.631 0a.096.096 0 11.192 0 .096.096 0 01-.192 0zm-7.207-.376zm.274-.254a.286.286 0 01-.002-.07l-.03-.005a.306.306 0 01-.002.08.304.304 0 01.034-.005zm.634.016a.268.268 0 01-.003-.103.269.269 0 01-.07-.01.286.286 0 01-.004.125.326.326 0 01.077-.012zm.636.018a.25.25 0 01-.004-.138.273.273 0 01-.117-.02.267.267 0 01-.005.18.266.266 0 01.126-.022zm.64.02a.232.232 0 01-.006-.178.252.252 0 01-.176-.037.249.249 0 01-.015.263.249.249 0 01.197-.048zm.966.247a.216.216 0 11.432 0 .216.216 0 01-.432 0zm.63 0a.199.199 0 11.398 0 .199.199 0 01-.398 0zm.631 0a.182.182 0 11.363 0 .182.182 0 01-.363 0zm.63 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.631 0a.148.148 0 11.295 0 .148.148 0 01-.295 0zm.63 0a.13.13 0 11.261 0 .13.13 0 01-.26 0zm.631 0a.114.114 0 11.227 0 .114.114 0 01-.227 0zm.63 0a.097.097 0 11.193 0 .096.096 0 01-.192 0zm-6.93-.617a.286.286 0 01.003-.125.284.284 0 01-.042.009.303.303 0 01.002.108.283.283 0 01.037.008zm.638.027a.267.267 0 01.006-.18.266.266 0 01-.091.022.284.284 0 01.003.138.266.266 0 01.082.02zm.648.037a.249.249 0 01.015-.263.249.249 0 01-.158.051.267.267 0 01.005.172h.001c.05 0 .098.015.137.04zm1.505.21a.199.199 0 11.398 0 .199.199 0 01-.398 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.363 0zm.631 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.63 0a.148.148 0 11.296 0 .148.148 0 01-.295 0zm.631 0a.13.13 0 11.26 0 .13.13 0 01-.26 0zm.63 0a.114.114 0 11.227 0 .113.113 0 01-.226 0zm.632 0a.096.096 0 11.192 0 .096.096 0 01-.192 0zm-7.208-.375zm.274-.255a.286.286 0 01-.002-.07.3.3 0 01-.03-.005.306.306 0 01-.002.08.304.304 0 01.034-.005zm.634.016a.268.268 0 01-.003-.102.32.32 0 01-.07-.011.286.286 0 01-.004.125.326.326 0 01.077-.012zm.636.018a.25.25 0 01-.004-.138.273.273 0 01-.117-.02.267.267 0 01-.005.18.266.266 0 01.126-.022zm.64.02a.232.232 0 01-.006-.178.252.252 0 01-.176-.037.249.249 0 01-.015.263.249.249 0 01.197-.047zm.966.247a.216.216 0 11.432 0 .216.216 0 01-.432 0zm.63 0a.199.199 0 11.398 0 .199.199 0 01-.398 0zm.631 0a.182.182 0 11.363 0 .182.182 0 01-.363 0zm.63 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.631 0a.148.148 0 11.295 0 .148.148 0 01-.295 0zm.63 0a.13.13 0 11.261 0 .13.13 0 01-.26 0zm.631 0a.114.114 0 11.227 0 .114.114 0 01-.227 0zm.631 0a.096.096 0 11.192 0 .096.096 0 01-.192 0zM2.789.725A.286.286 0 012.792.6a.284.284 0 01-.042.01.303.303 0 01.002.108.283.283 0 01.037.007zm.638.027a.267.267 0 01.006-.18.266.266 0 01-.09.022.284.284 0 01.002.139.266.266 0 01.082.019zm.648.038A.249.249 0 014.09.526a.249.249 0 01-.158.052.267.267 0 01.005.171h.001c.05 0 .098.015.137.04zM5.58 1a.199.199 0 11.398 0 .199.199 0 01-.398 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.363 0zm.631 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.63 0a.148.148 0 11.296 0 .148.148 0 01-.295 0zm.631 0a.13.13 0 11.26 0 .13.13 0 01-.26 0zm.631 0a.113.113 0 11.226 0 .113.113 0 01-.226 0zm.63 0a.097.097 0 11.193 0 .096.096 0 01-.192 0zM2.156.624zm3.15.046a.216.216 0 11.432 0 .216.216 0 01-.432 0zm.63 0a.199.199 0 11.398 0 .199.199 0 01-.398 0zm.631 0a.182.182 0 11.363 0 .182.182 0 01-.363 0zm.63 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.631 0a.148.148 0 11.295 0 .148.148 0 01-.295 0zm.63 0a.13.13 0 11.261 0 .13.13 0 01-.26 0zm.631 0a.114.114 0 11.227 0 .114.114 0 01-.227 0zM5.58.327a.199.199 0 11.398 0 .199.199 0 01-.398 0zm.63 0a.182.182 0 11.364 0 .182.182 0 01-.363 0zm.631 0a.165.165 0 11.33 0 .165.165 0 01-.33 0zm.63 0a.148.148 0 11.296 0 .148.148 0 01-.295 0zm.631 0a.13.13 0 11.261 0 .13.13 0 01-.26 0zm.631 0a.113.113 0 11.226 0 .113.113 0 01-.226 0zm.63 0a.097.097 0 11.193 0 .096.096 0 01-.192 0zM9.72.67a.096.096 0 11.192 0 .096.096 0 01-.192 0z">
          </path>
        </pattern>
      </defs>
      <rect x="0" y="-50" width="100%" height="100" fill={`url(#${color}-dotsbg)`}/>
    </svg>
    )
    return svg
  }

  return (
    <React.Fragment>
      {props.layoutDecoration === 'fade' && fade }
      {props.layoutDecoration === 'dots' && (
        <React.Fragment>
          <div className="background-decoration__part background-decoration__part--left">
            {dots()}
          </div>
          <div className="background-decoration__part background-decoration__part--right">
            {dots()}
          </div>
        </React.Fragment>
        )  
      }
    </React.Fragment>
    );
}

export default BackgroundDecoration;