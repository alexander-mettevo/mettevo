import React, {useEffect, useRef} from 'react';
import servicesAnimationScript
  from "@/components/pages/homePage/items/services/items/ServicesSVGImages/animationScript";
import {showLineAnimationWithCircle} from "@/components/reusable/animations/showLineAnimation";

const Home = () => {
  const ref = useRef(null)

  useEffect(() => {
    const tl = servicesAnimationScript(ref)
    showLineAnimationWithCircle(ref, tl, 'bottom left')
  }, [])

  return (
    <svg ref={ref} width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1027_16661)">
        <path className="animation-line"
              d="M79.0009 29.7658L67.8871 40.8797C67.4579 41.3089 66.764 41.3089 66.3348 40.8797C65.9055 40.4505 65.9055 39.7566 66.3348 39.3274L77.4486 28.2135C77.8778 27.7843 78.5717 27.7843 79.0009 28.2135C79.4301 28.6427 79.4301 29.3366 79.0009 29.7658Z"
              fill="#BEBEBE"/>
        <path className="animation-line"
              d="M35.7573 40.8802C35.3288 41.3087 34.6334 41.3087 34.2049 40.8802L23.0911 29.7664C22.6627 29.338 22.6627 28.6425 23.0911 28.2141C23.5195 27.7856 24.215 27.7856 24.6434 28.2141L35.7573 39.3279C36.1865 39.7571 36.1857 40.4518 35.7573 40.8802Z"
              fill="#BEBEBE"/>
        <path className="animation-line"
              d="M51.8223 34.2246C51.6236 34.4233 51.3488 34.546 51.0461 34.546C50.4391 34.546 49.9478 34.0546 49.9486 33.4485L49.9478 17.732C49.9478 17.125 50.4391 16.6337 51.0453 16.6345C51.6515 16.6353 52.1436 17.1258 52.1428 17.732L52.1436 33.4485C52.1444 33.7519 52.021 34.0259 51.8223 34.2246Z"
              fill="#BEBEBE"/>
        <path className="animation-figure"
              d="M54.246 7.1502C53.8168 7.57942 53.1221 7.57864 52.6937 7.1502L47.8714 2.32792C47.4429 1.89948 47.4422 1.20481 47.8714 0.775598C48.3006 0.346381 48.9953 0.347157 49.4237 0.775598L54.246 5.59788C54.6752 6.02555 54.6752 6.72098 54.246 7.1502Z"
              fill="#BEBEBE"/>
        <path className="animation-figure"
              d="M54.247 2.3279L49.4247 7.15018C48.9955 7.5794 48.3008 7.57862 47.8724 7.15018C47.4439 6.72174 47.4431 6.02708 47.8724 5.59786L52.6946 0.775582C53.1238 0.346365 53.8185 0.347142 54.247 0.775582C54.6754 1.20402 54.6754 1.89946 54.247 2.3279Z"
              fill="#BEBEBE"/>
        <path className="animation-figure"
              d="M17.9143 22.8084C16.116 24.6068 13.1883 24.6068 11.3899 22.8084C9.59079 21.0092 9.59079 18.0816 11.3892 16.2832C13.1883 14.4841 16.116 14.4841 17.9151 16.2832C19.7127 18.0823 19.7135 21.0092 17.9143 22.8084ZM12.9423 17.8363C11.9992 18.7793 12 20.3138 12.9423 21.2561C13.8845 22.1983 15.419 22.1991 16.362 21.2561C17.305 20.313 17.305 18.7793 16.362 17.8363C15.419 16.8933 13.8845 16.894 12.9423 17.8363Z"
              fill="#BEBEBE"/>
        <path className="animation-figure"
              d="M91.0025 22.8096C89.2034 24.6087 86.2757 24.6087 84.4766 22.8096C82.6774 21.0104 82.6782 18.0835 84.4773 16.2844C86.2765 14.4852 89.2026 14.4852 91.0017 16.2844C92.8017 18.0827 92.8017 21.0104 91.0025 22.8096ZM86.0297 17.8367C85.0866 18.7797 85.0866 20.315 86.0289 21.2572C86.9719 22.2003 88.5072 22.2003 89.4502 21.2572C90.3924 20.315 90.3925 18.7797 89.4494 17.8367C88.5072 16.8944 86.9727 16.8937 86.0297 17.8367Z"
              fill="#BEBEBE"/>
        <path className="animation-circle"
              d="M50.793 90.2759C59.2703 90.2759 66.1426 83.4037 66.1426 74.9263C66.1426 66.4489 59.2703 59.5767 50.793 59.5767C42.3156 59.5767 35.4434 66.4489 35.4434 74.9263C35.4434 83.4037 42.3156 90.2759 50.793 90.2759Z"
              fill="#DCDCDC"/>
        <path
          d="M72.3295 100H58.6389C58.0927 100 57.6493 99.5567 57.6493 99.0104V81.7058C57.6493 79.4594 55.8984 77.632 53.7464 77.632H47.8821C45.7301 77.632 43.9785 79.4594 43.9785 81.7058V99.0104C43.9785 99.5567 43.5358 100 42.9889 100H29.2996C28.7527 100 28.31 99.5567 28.31 99.0104V64.795H22.1165C21.6929 64.795 21.3169 64.5259 21.1803 64.1254C21.0431 63.725 21.1764 63.2816 21.5115 63.023L50.2096 40.8318C50.5659 40.5561 51.0639 40.5561 51.4202 40.8318L80.1183 63.023C80.4528 63.2823 80.586 63.725 80.4495 64.1254C80.3122 64.5259 79.9362 64.795 79.5126 64.795H73.3191V99.0104C73.3191 99.5567 72.8758 100 72.3295 100ZM59.6285 98.0208H71.34V63.8055C71.34 63.2585 71.7833 62.8159 72.3295 62.8159H76.6151L50.8146 42.8651L25.014 62.8159H29.2996C29.8465 62.8159 30.2892 63.2585 30.2892 63.8055V98.0208H42V81.7058C42 78.3682 44.6389 75.6528 47.8827 75.6528H53.7471C56.9903 75.6528 59.6292 78.3682 59.6292 81.7058V98.0208H59.6285Z"
          fill="#101010"/>
      </g>
      <defs>
        <clipPath id="clip0_1027_16661">
          <rect width="100" height="100" fill="white" transform="translate(0.5)"/>
        </clipPath>
      </defs>
    </svg>

  );
};

export default Home;