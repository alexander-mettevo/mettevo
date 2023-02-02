import React from 'react';
import useInitAnimation from "@/hooks/useInitAnimation";
import {
  callbackAnimation
} from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/callbacksAnimations";

const Marker = () => {
  const [ref, timelineRef, handleOnMouseEnter, handleOnMouseLeave] = useInitAnimation(callbackAnimation, ['center left'])

  return (
    <svg  onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} ref={ref} width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="animation-circle"
            d="M65.5675 60.455C79.3759 60.455 90.5699 49.2611 90.5699 35.4526C90.5699 21.6442 79.3759 10.4502 65.5675 10.4502C51.759 10.4502 40.5651 21.6442 40.5651 35.4526C40.5651 49.2611 51.759 60.455 65.5675 60.455Z"
            fill="#DCDCDC"/>
      <path
        d="M66.1119 99.3384L65.2635 98.3011C58.6325 90.1894 52.546 81.7726 47.6614 73.9617C47.3409 73.448 47.4968 72.774 48.0094 72.4524C48.5231 72.1319 49.1982 72.2866 49.5187 72.8003C54.1453 80.2007 59.8663 88.1555 66.1109 95.872C76.2137 83.3774 97.5258 54.5913 97.5258 34.153C97.5258 16.8309 83.4341 2.73804 66.1109 2.73804C48.7887 2.73804 34.6959 16.8309 34.6959 34.153C34.6959 36.8104 35.0713 39.7554 35.8133 42.9046C35.9527 43.4929 35.5872 44.0824 34.9989 44.2218C34.4138 44.3579 33.8211 43.9956 33.6828 43.4062C32.9024 40.0924 32.5061 36.9783 32.5061 34.153C32.5072 15.6245 47.5824 0.549316 66.1119 0.549316C84.6415 0.549316 99.7167 15.6245 99.7167 34.1541C99.7167 55.8866 76.8097 86.2543 66.9604 98.3011L66.1119 99.3384Z"
        fill="#101010"/>
      <path
        d="M80.0139 36.0569L80.0137 36.0568L60.1896 20.7274C59.8895 20.495 59.4699 20.495 59.1698 20.7274L39.3458 36.0567C39.3458 36.0567 39.3458 36.0567 39.3457 36.0567C39.0634 36.2746 38.9511 36.6481 39.0667 36.9856C39.1818 37.3229 39.4986 37.5495 39.8553 37.5495H43.9837V61.0352C43.9837 61.4953 44.3566 61.8688 44.8173 61.8688H54.2736C54.7343 61.8688 55.1072 61.4953 55.1072 61.0352V49.0813C55.1072 47.6063 56.256 46.4172 57.6538 46.4172H61.7047C63.1025 46.4172 64.2508 47.6063 64.2508 49.0813V61.0352C64.2508 61.4953 64.6242 61.8688 65.0844 61.8688H74.5417C75.0019 61.8688 75.3753 61.4953 75.3753 61.0352V37.5495H79.5036C79.8604 37.5495 80.1771 37.3228 80.2927 36.9856L80.2927 36.9854C80.4078 36.648 80.2954 36.2752 80.0139 36.0569ZM77.0629 35.8823H74.5417C74.0815 35.8823 73.7081 36.2552 73.7081 36.7159V60.2016H65.9184V49.0813C65.9184 46.697 64.0324 44.75 61.7052 44.75H57.6542C55.3266 44.75 53.4405 46.697 53.4405 49.0813V60.2016H45.6509V36.7159C45.6509 36.2553 45.2779 35.8823 44.8173 35.8823H42.2961L59.6795 22.4402L77.0629 35.8823Z"
        fill="#101010" stroke="#101010" strokeWidth="0.3"/>
      <path className="animation-line"
            d="M9.34333 91.9589C9.06342 91.9589 8.78352 91.8524 8.56948 91.6383C8.14139 91.2103 8.14139 90.5176 8.56948 90.0895L24.5645 74.0945C24.9926 73.6664 25.6852 73.6664 26.1133 74.0945C26.5414 74.5226 26.5414 75.2152 26.1133 75.6433L10.1183 91.6383C9.90423 91.8524 9.62433 91.9589 9.34333 91.9589Z"
            fill="#BEBEBE"/>
      <path className="animation-line"
            d="M27.6314 91.2585C27.3515 91.2585 27.0716 91.152 26.8576 90.938C26.4295 90.5099 26.4295 89.8173 26.8576 89.3892L40.8593 75.3875C41.2874 74.9594 41.98 74.9594 42.4081 75.3875C42.8361 75.8156 42.8361 76.5082 42.4081 76.9363L28.4064 90.938C28.1923 91.152 27.9124 91.2585 27.6314 91.2585Z"
            fill="#BEBEBE"/>
      <path className="animation-figure"
            d="M6.69028 94.6347H5.57287V93.5173C5.57287 92.9125 5.08221 92.4219 4.4774 92.4219C3.8726 92.4219 3.38194 92.9114 3.38194 93.5173V94.6347H2.26563C1.66082 94.6347 1.17017 95.1243 1.17017 95.7302C1.17017 96.335 1.66082 96.8257 2.26563 96.8257H3.38304V97.9431C3.38304 98.5479 3.87369 99.0385 4.4785 99.0385C5.08331 99.0385 5.57396 98.549 5.57396 97.9431V96.8246H6.69138C7.29619 96.8246 7.78684 96.335 7.78684 95.7291C7.78464 95.1243 7.29509 94.6347 6.69028 94.6347Z"
            fill="#BEBEBE"/>
      <path className="animation-figure"
            d="M22.4361 98.7327C21.5723 98.7327 20.7073 98.4045 20.0498 97.7459C18.7337 96.4298 18.7337 94.2894 20.0498 92.9722C21.3659 91.6539 23.5074 91.655 24.8235 92.9722C26.1396 94.2883 26.1396 96.4287 24.8235 97.7459C24.166 98.4045 23.3011 98.7327 22.4361 98.7327ZM22.4361 94.1741C22.1332 94.1741 21.8291 94.2894 21.5975 94.521C21.1354 94.9831 21.1354 95.7361 21.5975 96.1971C22.0607 96.6603 22.8115 96.6581 23.2747 96.1971C23.7368 95.735 23.7368 94.982 23.2747 94.521C23.0442 94.2894 22.7402 94.1741 22.4361 94.1741Z"
            fill="#BEBEBE"/>
      <path className="animation-line"
            d="M10.4805 72.7465C10.2006 72.7465 9.92073 72.64 9.70668 72.426C9.2786 71.9979 9.2786 71.3053 9.70668 70.8772L29.796 50.7879C30.2241 50.3598 30.9167 50.3598 31.3448 50.7879C31.7729 51.2159 31.7729 51.9086 31.3448 52.3367L11.2544 72.4249C11.0403 72.6389 10.7604 72.7465 10.4805 72.7465Z"
            fill="#BEBEBE"/>
      <path className="animation-figure"
            d="M5.02071 80.4852C4.15576 80.4852 3.2919 80.157 2.63331 79.4984C1.31722 78.1823 1.31722 76.0408 2.63331 74.7236C3.9494 73.4053 6.08983 73.4053 7.40701 74.7236C8.7231 76.0397 8.7231 78.1812 7.40701 79.4984C6.74952 80.157 5.88457 80.4852 5.02071 80.4852ZM5.02071 75.9255C4.71666 75.9255 4.41371 76.0408 4.1821 76.2724C3.71999 76.7356 3.71999 77.4875 4.1821 77.9496C4.64421 78.4106 5.39501 78.4117 5.85932 77.9496C6.32143 77.4864 6.32143 76.7345 5.85932 76.2724C5.62771 76.0408 5.32366 75.9255 5.02071 75.9255Z"
            fill="#BEBEBE"/>
    </svg>

  );
};

export default Marker;