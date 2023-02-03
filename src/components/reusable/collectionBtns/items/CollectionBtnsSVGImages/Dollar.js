import React from 'react';
import useInitAnimation from "@/hooks/useInitAnimation";
import {
    callbackAnimation
} from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/callbacksAnimations";

const Dollar = () => {
    const [ref, timelineRef, handleOnMouseEnter, handleOnMouseLeave] = useInitAnimation(callbackAnimation, ['center left'])

  return (
    <svg onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} ref={ref} width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="animation-circle"
            d="M50.3825 65.2759C58.8599 65.2759 65.7322 58.4037 65.7322 49.9263C65.7322 41.4489 58.8599 34.5767 50.3825 34.5767C41.9052 34.5767 35.0329 41.4489 35.0329 49.9263C35.0329 58.4037 41.9052 65.2759 50.3825 65.2759Z"
            fill="#DCDCDC"/>
      <path className="animation-line"
            d="M25.7599 51.0227H15.5934C14.9875 51.0227 14.4968 50.531 14.4968 49.9261C14.4968 49.3213 14.9875 48.8296 15.5934 48.8296H25.7599C26.3658 48.8296 26.8564 49.3202 26.8564 49.9261C26.8564 50.5321 26.3647 51.0227 25.7599 51.0227Z"
            fill="#BEBEBE"/>
      <path className="animation-line"
            d="M32.9572 33.6732C32.6762 33.6732 32.3963 33.5657 32.1823 33.3516L24.9849 26.1532C24.5569 25.7251 24.5569 25.0314 24.9849 24.6033C25.413 24.1752 26.1067 24.1752 26.5348 24.6033L33.7322 31.8017C34.1603 32.2298 34.1603 32.9235 33.7322 33.3516C33.5181 33.5668 33.2371 33.6732 32.9572 33.6732Z"
            fill="#BEBEBE"/>
      <path className="animation-figure"
            d="M5.87364 49.9251L7.27644 48.5223C7.70453 48.0942 7.70453 47.4005 7.27644 46.9724C6.84836 46.5443 6.15464 46.5443 5.72655 46.9724L4.32375 48.3752L2.92094 46.9724C2.49286 46.5443 1.79914 46.5443 1.37105 46.9724C0.942966 47.4005 0.942966 48.0942 1.37105 48.5223L2.77386 49.9251L1.37105 51.3279C0.942966 51.756 0.942966 52.4497 1.37105 52.8778C1.5851 53.0919 1.8661 53.1994 2.146 53.1994C2.4259 53.1994 2.7069 53.0919 2.92094 52.8778L4.32375 51.475L5.72655 52.8778C5.94059 53.0919 6.22159 53.1994 6.5015 53.1994C6.7814 53.1994 7.0624 53.0919 7.27644 52.8778C7.70453 52.4497 7.70453 51.756 7.27644 51.3279L5.87364 49.9251Z"
            fill="#BEBEBE"/>
      <path className="animation-figure"
            d="M17.4363 21.1226C16.2948 21.1226 15.2224 20.6781 14.4156 19.8713C13.6088 19.0645 13.1642 17.9921 13.1642 16.8505C13.1642 15.709 13.6088 14.6366 14.4156 13.8298C16.0291 12.2162 18.8435 12.2162 20.4571 13.8298C22.1222 15.4949 22.1222 18.2051 20.4571 19.8713C19.6503 20.6781 18.5779 21.1226 17.4363 21.1226ZM17.4363 14.7716C16.8809 14.7716 16.3595 14.9878 15.9666 15.3808C15.5736 15.7737 15.3574 16.2962 15.3574 16.8505C15.3574 17.406 15.5736 17.9273 15.9666 18.3203C16.7525 19.1062 18.1213 19.1062 18.9072 18.3203C19.7173 17.5102 19.7173 16.1909 18.9072 15.3797C18.5142 14.9878 17.9917 14.7716 17.4363 14.7716Z"
            fill="#BEBEBE"/>
      <path className="animation-line"
            d="M25.7599 75.5642C25.4789 75.5642 25.199 75.4566 24.9849 75.2426C24.5569 74.8145 24.5569 74.1208 24.9849 73.6927L32.1823 66.4954C32.6104 66.0673 33.3041 66.0673 33.7322 66.4954C34.1603 66.9235 34.1603 67.6172 33.7322 68.0453L26.5348 75.2426C26.3208 75.4577 26.0398 75.5642 25.7599 75.5642Z"
            fill="#BEBEBE"/>
      <path className="animation-figure"
            d="M17.4363 87.2674C16.3431 87.2674 15.2487 86.8514 14.4156 86.0182C13.6088 85.2115 13.1642 84.139 13.1642 82.9975C13.1642 81.8559 13.6088 80.7835 14.4156 79.9767C16.0807 78.3105 18.7908 78.3105 20.4571 79.9767C22.1222 81.6419 22.1222 84.3531 20.4571 86.0182C19.6251 86.8514 18.5307 87.2674 17.4363 87.2674ZM17.4363 80.9196C16.904 80.9196 16.3716 81.1227 15.9666 81.5277C15.5736 81.9207 15.3574 82.4421 15.3574 82.9975C15.3574 83.5529 15.5736 84.0743 15.9666 84.4672C16.7766 85.2762 18.096 85.2751 18.9072 84.4672C19.7173 83.6572 19.7173 82.3378 18.9072 81.5266C18.5021 81.1227 17.9687 80.9196 17.4363 80.9196Z"
            fill="#BEBEBE"/>
      <path className='dark-line'
        d="M56.2154 48.5071H44.5616C41.9272 48.5071 39.7835 46.3645 39.7835 43.7301V34.6887C39.7835 32.0544 41.9261 29.9117 44.5616 29.9117H49.2925V36.7271C49.2925 37.333 49.7832 37.8236 50.3891 37.8236C50.995 37.8236 51.4856 37.333 51.4856 36.7271V29.9117H56.2165C58.8509 29.9117 60.9946 32.0544 60.9946 34.6887C60.9946 35.2946 61.4853 35.7853 62.0912 35.7853C62.6971 35.7853 63.1877 35.2946 63.1877 34.6887C63.1877 30.8458 60.0616 27.7186 56.2176 27.7186H51.4867V21.5399C51.4867 20.934 50.9961 20.4434 50.3902 20.4434C49.7843 20.4434 49.2936 20.934 49.2936 21.5399V27.7186H44.5627C40.7198 27.7186 37.5926 30.8447 37.5926 34.6887V43.7301C37.5926 47.573 40.7198 50.7003 44.5627 50.7003H56.2165C58.8509 50.7003 60.9946 52.8429 60.9946 55.4784V64.5197C60.9946 67.1541 58.8509 69.2978 56.2165 69.2978H51.4856V63.1224C51.4856 62.5165 50.995 62.0259 50.3891 62.0259C49.7832 62.0259 49.2925 62.5165 49.2925 63.1224V69.2978H44.5616C41.9272 69.2978 39.7835 67.1541 39.7835 64.5197C39.7835 63.9138 39.2929 63.4232 38.687 63.4232C38.081 63.4232 37.5904 63.9138 37.5904 64.5197C37.5904 68.3637 40.7176 71.4899 44.5605 71.4899H49.2914V78.3096C49.2914 78.9155 49.7821 79.4062 50.388 79.4062C50.9939 79.4062 51.4845 78.9155 51.4845 78.3096V71.4899H56.2154C60.0594 71.4899 63.1855 68.3637 63.1855 64.5197V55.4784C63.1855 51.6344 60.0594 48.5071 56.2154 48.5071Z"
        fill="#101010"/>
      <path className="animation-line"
            d="M85.2956 51.0227H75.1281C74.5221 51.0227 74.0315 50.531 74.0315 49.9261C74.0315 49.3213 74.5221 48.8296 75.1281 48.8296H85.2956C85.9016 48.8296 86.3922 49.3202 86.3922 49.9261C86.3922 50.5321 85.9016 51.0227 85.2956 51.0227Z"
            fill="#BEBEBE"/>
      <path className="animation-line"
            d="M67.9307 33.6732C67.6497 33.6732 67.3698 33.5657 67.1558 33.3516C66.7277 32.9235 66.7277 32.2298 67.1558 31.8017L74.3531 24.6033C74.7812 24.1752 75.4749 24.1752 75.903 24.6033C76.3311 25.0314 76.3311 25.7251 75.903 26.1532L68.7057 33.3516C68.4916 33.5668 68.2117 33.6732 67.9307 33.6732Z"
            fill="#BEBEBE"/>
      <path className="animation-figure"
            d="M98.1152 49.9251L99.5169 48.5223C99.9449 48.0942 99.9449 47.4005 99.5169 46.9724C99.0888 46.5443 98.3951 46.5443 97.967 46.9724L96.5653 48.3752L95.1636 46.9724C94.7355 46.5443 94.0418 46.5443 93.6137 46.9724C93.1856 47.4005 93.1856 48.0942 93.6137 48.5223L95.0154 49.9251L93.6137 51.3279C93.1856 51.756 93.1856 52.4497 93.6137 52.8778C93.8277 53.0919 94.1087 53.1994 94.3886 53.1994C94.6696 53.1994 94.9495 53.0919 95.1636 52.8778L96.5653 51.475L97.967 52.8778C98.181 53.0919 98.462 53.1994 98.7419 53.1994C99.0218 53.1994 99.3028 53.0919 99.5169 52.8778C99.9449 52.4497 99.9449 51.756 99.5169 51.3279L98.1152 49.9251Z"
            fill="#BEBEBE"/>
      <path className="animation-figure"
            d="M83.4516 21.1226C82.31 21.1226 81.2376 20.6781 80.4308 19.8713C78.7657 18.2062 78.7646 15.496 80.4308 13.8298C82.0433 12.2162 84.8599 12.2162 86.4723 13.8298C87.2791 14.6366 87.7237 15.709 87.7237 16.8505C87.7237 17.9921 87.2791 19.0645 86.4723 19.8713C85.6656 20.6781 84.5921 21.1226 83.4516 21.1226ZM83.4516 14.7716C82.8962 14.7716 82.3748 14.9878 81.9818 15.3808C81.1718 16.1909 81.1718 17.5102 81.9818 18.3214C82.7678 19.1073 84.1365 19.1073 84.9225 18.3214C85.3154 17.9284 85.5317 17.406 85.5317 16.8516C85.5317 16.2962 85.3154 15.7748 84.9225 15.3819C84.5284 14.9878 84.007 14.7716 83.4516 14.7716Z"
            fill="#BEBEBE"/>
      <path className="animation-line"
            d="M75.1281 75.5642C74.8471 75.5642 74.5672 75.4566 74.3531 75.2426L67.1558 68.0453C66.7277 67.6172 66.7277 66.9235 67.1558 66.4954C67.5839 66.0673 68.2776 66.0673 68.7057 66.4954L75.903 73.6927C76.3311 74.1208 76.3311 74.8145 75.903 75.2426C75.689 75.4577 75.4091 75.5642 75.1281 75.5642Z"
            fill="#BEBEBE"/>
      <path className="animation-figure"
            d="M83.4516 87.2674C82.3572 87.2674 81.264 86.8514 80.4308 86.0182C78.7646 84.3531 78.7646 81.6419 80.4308 79.9767C82.0971 78.3105 84.8061 78.3105 86.4723 79.9767C87.2791 80.7835 87.7237 81.8559 87.7237 82.9975C87.7237 84.139 87.2791 85.2115 86.4723 86.0182C85.6381 86.8514 84.5448 87.2674 83.4516 87.2674ZM83.4516 80.9196C82.9192 80.9196 82.3869 81.1227 81.9818 81.5277C81.1718 82.3378 81.1718 83.6572 81.9818 84.4683C82.793 85.2773 84.1102 85.2773 84.9224 84.4683C85.3154 84.0754 85.5316 83.554 85.5316 82.9986C85.5316 82.4432 85.3154 81.9218 84.9224 81.5288C84.5163 81.1227 83.9828 80.9196 83.4516 80.9196Z"
            fill="#BEBEBE"/>
    </svg>

  );
};

export default Dollar;