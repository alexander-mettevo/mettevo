import React, {useEffect, useRef} from 'react';
import {ServiceSVGWrapper} from "@/components/pages/homePage/items/services/items/styles";
import servicesAnimationScript
  from "@/components/pages/homePage/items/services/items/ServicesSVGImages/animationScript";
import {showLineAnimationWithCircle} from "@/components/reusable/animations/showLineAnimation";

const LoudSpeaker = () => {
  const ref = useRef(null)

  useEffect(() => {
    const tl = servicesAnimationScript(ref)
    showLineAnimationWithCircle(ref, tl, 'bottom left')
  }, [])

  return (
    <ServiceSVGWrapper ref={ref}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="animation-circle"
              d="M57.1653 75.4861C67.0654 75.4861 75.091 67.4605 75.091 57.5605C75.091 47.6605 67.0654 39.6349 57.1653 39.6349C47.2653 39.6349 39.2397 47.6605 39.2397 57.5605C39.2397 67.4605 47.2653 75.4861 57.1653 75.4861Z"
              fill="#BEBEBE"/>
        <path
          d="M54.635 119.205C53.1269 119.205 51.7122 118.621 50.6519 117.56L37.1955 104.103C36.6804 103.588 36.6804 102.756 37.1955 102.241C37.7105 101.726 38.543 101.726 39.058 102.241L52.5144 115.697C53.6406 116.823 55.6295 116.825 56.7544 115.697C57.3181 115.133 57.6277 114.381 57.6277 113.578C57.6277 112.773 57.3168 112.02 56.7544 111.457L44.7522 99.4563C44.2372 98.9413 44.2372 98.1088 44.7522 97.5938C45.2672 97.0788 46.0997 97.0788 46.6147 97.5938L58.6169 109.595C59.6772 110.655 60.2621 112.07 60.2621 113.578C60.2621 115.086 59.6772 116.501 58.6169 117.56C57.5579 118.621 56.1432 119.205 54.635 119.205Z"
          fill="#101010"/>
        <path
          d="M18.7627 110.335C15.0825 110.335 11.401 108.935 8.59801 106.132C5.88197 103.417 4.38696 99.8066 4.38696 95.967C4.38696 92.1274 5.88197 88.5157 8.59801 85.8023L15.5778 78.8212C23.2267 69.153 28.4138 56.753 30.9968 41.9636C31.2365 40.5911 32.2086 39.4794 33.535 39.0593C34.8575 38.6417 36.2866 38.9908 37.2666 39.9721L74.763 77.4671C75.743 78.4471 76.0933 79.8776 75.6745 81.1987C75.2556 82.5251 74.1426 83.4985 72.7701 83.7383C57.9596 86.3226 45.5451 91.5215 35.8691 99.1902L28.9275 106.132C26.1245 108.932 22.4443 110.335 18.7627 110.335ZM33.5903 42.4154C30.927 57.6737 25.5449 70.4926 17.5944 80.5164L17.493 80.6297L10.4592 87.6648C8.24105 89.8829 7.02002 92.8308 7.02002 95.967C7.02002 99.1032 8.24105 102.051 10.4592 104.269C15.0377 108.846 22.4851 108.846 27.0637 104.269L35.1723 96.1606L35.2829 96.3095C45.146 88.8121 57.5961 83.7119 72.3156 81.1421C72.9005 81.0407 73.102 80.5928 73.1626 80.4044C73.2206 80.2187 73.3114 79.7432 72.8992 79.3296L35.4041 41.8332C34.9905 41.4197 34.515 41.5119 34.3293 41.5698C34.1409 41.6304 33.6931 41.8306 33.5903 42.4154Z"
          fill="#101010"/>
        <path
          d="M64.996 63.1348C64.6588 63.1348 64.3216 63.0057 64.0648 62.7489C63.5497 62.2339 63.5497 61.4014 64.0648 60.8864C66.5674 58.3837 66.3132 54.0554 63.4957 51.238C60.6783 48.4205 56.3513 48.1663 53.8473 50.669C53.3323 51.184 52.4999 51.184 51.9848 50.669C51.4698 50.1539 51.4698 49.3215 51.9848 48.8065C53.7117 47.077 56.0642 46.2011 58.6195 46.3222C61.1208 46.4461 63.5142 47.5301 65.3596 49.3755C69.2031 53.219 69.4586 59.2188 65.9286 62.7489C65.6691 63.0057 65.3332 63.1348 64.996 63.1348Z"
          fill="#101010"/>
        <path className="animation-line"
              d="M84.1216 56.7386C83.7844 56.7386 83.4472 56.6095 83.1903 56.3526C82.6753 55.8376 82.6753 55.0052 83.1903 54.4901L96.1739 41.5066C96.6889 40.9916 97.5213 40.9916 98.0364 41.5066C98.5514 42.0216 98.5514 42.8541 98.0364 43.3691L85.0528 56.3526C84.796 56.6108 84.4588 56.7386 84.1216 56.7386Z"
              fill="#BEBEBE"/>
        <path className="animation-line"
              d="M77.6516 39.8009C77.3144 39.8009 76.9772 39.6718 76.7203 39.4149C76.2053 38.8999 76.2053 38.0675 76.7203 37.5524L100.58 13.6929C101.095 13.1779 101.927 13.1779 102.442 13.6929C102.957 14.2079 102.957 15.0404 102.442 15.5554L78.5828 39.4149C78.326 39.6731 77.9888 39.8009 77.6516 39.8009Z"
              fill="#BEBEBE"/>
        <path className="animation-line"
              d="M61.6781 32.6393C61.3409 32.6393 61.0037 32.5102 60.7468 32.2533C60.2318 31.7383 60.2318 30.9058 60.7468 30.3908L76.5939 14.5437C77.1089 14.0287 77.9414 14.0287 78.4564 14.5437C78.9714 15.0588 78.9714 15.8912 78.4564 16.4062L62.6093 32.2533C62.3525 32.5102 62.0153 32.6393 61.6781 32.6393Z"
              fill="#BEBEBE"/>
        <path className="animation-figure"
              d="M110.572 31.3721H108.172V28.9722C108.172 28.2451 107.583 27.655 106.855 27.655C106.127 27.655 105.538 28.2451 105.538 28.9722V31.3721H103.138C102.409 31.3721 101.821 31.9622 101.821 32.6893C101.821 33.4164 102.409 34.0065 103.138 34.0065H105.538V36.4064C105.538 37.1335 106.127 37.7236 106.855 37.7236C107.583 37.7236 108.172 37.1335 108.172 36.4064V34.0065H110.572C111.3 34.0065 111.889 33.4164 111.889 32.6893C111.889 31.9622 111.3 31.3721 110.572 31.3721Z"
              fill="#BEBEBE"/>
        <path className="animation-figure"
              d="M90.5652 4.83478H88.1653V2.43486C88.1653 1.70778 87.5765 1.11768 86.8481 1.11768C86.1197 1.11768 85.5309 1.70778 85.5309 2.43486V4.83478H83.131C82.4026 4.83478 81.8138 5.42488 81.8138 6.15197C81.8138 6.87905 82.4026 7.46915 83.131 7.46915H85.5309V9.86907C85.5309 10.5962 86.1197 11.1863 86.8481 11.1863C87.5765 11.1863 88.1653 10.5962 88.1653 9.86907V7.46915H90.5652C91.2936 7.46915 91.8824 6.87905 91.8824 6.15197C91.8824 5.42488 91.2936 4.83478 90.5652 4.83478Z"
              fill="#BEBEBE"/>
        <path className="animation-figure"
              d="M110.328 10.9558C109.01 10.9558 107.69 10.4539 106.686 9.44889C105.714 8.47681 105.177 7.18333 105.177 5.80687C105.177 4.43173 105.713 3.13825 106.686 2.16485C108.692 0.157453 111.96 0.157453 113.969 2.16485C114.941 3.13825 115.479 4.43173 115.479 5.80687C115.479 7.18201 114.942 8.47549 113.969 9.44889C112.965 10.4539 111.647 10.9558 110.328 10.9558ZM110.328 3.29368C109.684 3.29368 109.039 3.53867 108.549 4.02867C108.075 4.50417 107.811 5.13642 107.811 5.80819C107.811 6.47995 108.072 7.1122 108.549 7.58771C109.529 8.56769 111.127 8.56769 112.107 7.58771C112.582 7.1122 112.844 6.48127 112.844 5.80819C112.844 5.13642 112.582 4.50417 112.107 4.02867C111.617 3.53867 110.972 3.29368 110.328 3.29368Z"
              fill="#BEBEBE"/>
      </svg>
    </ServiceSVGWrapper>
  );
};

export default LoudSpeaker;