import React, {useEffect, useRef} from 'react';
import {showLineAnimation} from "@/components/reusable/animations/showLineAnimation";
import gsap from "gsap";
import useInitAnimation from "@/hooks/useInitAnimation";
import {
  callbackAnimation, callbackAnimationLine
} from "@/components/reusable/collectionBtns/items/CollectionBtnsSVGImages/callbacksAnimations";

const Crypto = () => {
  const [ref, timelineRef, handleOnMouseEnter, handleOnMouseLeave] = useInitAnimation(callbackAnimationLine, ['bottom left'])

  return (
    <svg onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} ref={ref} width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1027_16627)">
        <path className='dark-line' fillRule="evenodd" clipRule="evenodd"
              d="M52.6562 24.3619C53.8164 24.5777 54.3943 24.7337 55.1291 25.0545C55.6638 25.2791 56.4714 25.7514 56.9548 26.0971C57.4558 26.4671 58.065 27.0373 58.3986 27.4454C58.7128 27.8397 59.556 29.2438 60.271 30.5738C60.986 31.9038 61.6817 33.2199 61.8186 33.5108C61.9555 33.8017 62.1427 34.2513 62.2288 34.5233C62.3507 34.9088 62.4319 35.0078 62.6734 35.046C62.8308 35.0709 63.3407 35.2484 63.8175 35.4315C64.2943 35.6146 65.0362 35.9581 65.4731 36.1887C65.9101 36.4194 66.7426 36.9387 67.3331 37.3552C67.9252 37.7611 68.8399 38.5089 69.3856 39.0044C69.9314 39.4999 70.7648 40.3532 71.2375 40.9019C71.712 41.44 72.4697 42.4321 72.9258 43.0857C73.3819 43.7394 73.9855 44.6856 74.2638 45.1712C74.5316 45.655 74.9987 46.5797 75.2957 47.2189C75.5822 47.8565 75.9923 48.8691 76.1999 49.4619C76.4074 50.0547 76.7081 51.1469 76.8714 51.8834C77.0451 52.6217 77.2204 53.7586 77.2765 54.4244C77.3431 55.0918 77.372 56.0656 77.3536 56.5904C77.3352 57.1151 77.2614 57.9219 77.1899 58.3737C77.1201 58.8149 76.9513 59.5421 76.8186 59.9734C76.6841 60.4152 76.3689 61.1838 76.1195 61.672C75.8596 62.1586 75.482 62.7773 75.2676 63.0449C75.0547 63.3021 74.6407 63.7427 74.3389 64.0181C74.0371 64.2934 72.619 65.2322 71.181 66.0924C69.7413 66.9632 68.2751 67.7974 67.9286 67.9472C67.5805 68.1076 67.0019 68.2961 66.6549 68.3812C66.2974 68.4646 65.6498 68.5453 65.2254 68.5751C64.7486 68.5966 63.9287 68.5423 63.1728 68.4228C62.3016 68.285 61.5977 68.109 60.8773 67.8336C60.2989 67.6129 59.5343 67.2766 59.1675 67.0786C58.7919 66.8684 58.4936 66.7135 58.4814 66.7224C58.4693 66.7312 57.8865 67.6944 57.1866 68.8545C56.4866 70.0145 55.7917 71.143 55.6397 71.3559C55.4771 71.5671 55.1725 71.9282 54.9526 72.1626C54.7326 72.397 54.2605 72.7962 53.9201 73.0439C53.5675 73.3005 52.9502 73.6659 52.555 73.8511C52.1494 74.0346 51.4178 74.3066 50.9226 74.4437C50.4259 74.5913 49.571 74.7576 49.0334 74.8233C48.4958 74.8891 47.4879 74.9343 46.8116 74.9243C45.8994 74.9092 45.1176 74.8179 43.8016 74.5667C42.8303 74.3807 41.5872 74.0765 41.0563 73.8956C40.5238 73.7252 39.5509 73.3452 38.9056 73.0708C38.2516 72.7843 37.2113 72.286 36.6092 71.943C35.9949 71.609 34.9305 70.9237 34.2328 70.4365C33.5351 69.9492 32.4658 69.0909 31.8444 68.5295C31.223 67.9682 30.3509 67.0872 29.8942 66.5734C29.4496 66.0508 28.7537 65.1439 28.3523 64.5527C27.9508 63.9615 27.4031 63.0026 27.1276 62.4313C26.8626 61.8618 26.5005 60.9537 26.3371 60.4218C26.1633 59.8881 25.9796 59.0083 25.9036 58.4686C25.8303 57.8432 25.8207 57.0878 25.8833 56.4193C25.961 55.6562 26.0756 55.1359 26.2874 54.5448C26.4738 54.0466 27.1832 52.7588 28.133 51.1752C28.99 49.7708 29.9061 48.3326 30.6756 47.3451L29.8026 45.7209C29.3217 44.8156 28.8271 43.7251 28.7118 43.2977C28.5876 42.858 28.4635 42.2138 28.4239 41.8522C28.3843 41.4905 28.4056 40.6754 28.4754 40.0296C28.5647 39.1929 28.6909 38.5991 28.9282 37.9151C29.1058 37.4047 29.4691 36.536 29.7373 35.9969C30.0143 35.47 30.4483 34.6986 30.7159 34.2994C30.9835 33.9002 31.5175 33.177 31.9138 32.712C32.3013 32.2348 32.963 31.521 33.3825 31.1135C33.802 30.706 34.541 30.0475 35.0235 29.65C35.5165 29.2541 36.4058 28.5979 37.016 28.2098C37.6278 27.8111 38.6015 27.2329 39.179 26.915C39.7654 26.6092 40.8585 26.0929 41.6178 25.7822C42.3771 25.4715 43.4259 25.099 43.9559 24.9459C44.4858 24.7928 45.4362 24.5662 46.0783 24.4523C46.7221 24.328 47.6592 24.1854 48.1725 24.1374C48.6858 24.0893 49.5627 24.0557 50.1219 24.058C50.765 24.0736 51.7059 24.1793 52.6562 24.3619ZM45.9633 26.2002C46.6418 26.0599 47.6033 25.8996 48.1166 25.8516C48.6299 25.8035 49.4543 25.7616 49.961 25.7556C50.5411 25.7612 51.3876 25.852 52.287 26.0158C53.2898 26.2067 53.929 26.3832 54.5008 26.6459C54.9444 26.8345 55.6327 27.2449 56.0282 27.5336C56.4712 27.8621 56.9628 28.3598 57.3074 28.8343C57.6696 29.3332 57.9501 29.8729 58.1046 30.3927C58.2409 30.8235 58.3843 31.4815 58.4135 31.8415C58.4515 32.2137 58.3981 32.9591 58.3018 33.5684C58.2071 34.1673 57.999 35.0067 57.8347 35.433C57.6688 35.8698 57.327 36.6019 57.081 37.0691C56.8349 37.5364 56.2948 38.3663 55.8835 38.9259C55.4722 39.4854 54.773 40.301 54.3363 40.7488C53.8996 41.1967 53.0705 41.9486 52.4891 42.4274C51.9077 42.9062 50.9349 43.6139 50.3143 44.0004C49.7042 44.3885 48.7685 44.9297 48.243 45.1912C47.7262 45.4649 46.821 45.8817 46.2568 46.1155C45.6926 46.3494 44.6907 46.6971 44.037 46.8844C43.3833 47.0718 42.2566 47.3244 41.5272 47.4459C40.7978 47.5675 39.6192 47.6719 38.9081 47.6779C37.8633 47.6849 37.3334 47.6334 36.1539 47.4038C35.2771 47.2328 34.4312 47.0021 34.0385 46.8323C33.6755 46.678 33.054 46.3213 32.6569 46.0431C32.1122 45.6769 31.7599 45.3197 31.2562 44.6262C30.7879 43.9814 30.5234 43.4765 30.3673 42.9672C30.2486 42.5607 30.145 41.8551 30.122 41.3884C30.0973 40.9322 30.1352 40.2167 30.1983 39.8174C30.2631 39.4077 30.4855 38.6137 30.7062 38.0347C30.9147 37.4646 31.3062 36.622 31.5733 36.158C31.8403 35.6941 32.2821 35.0102 32.5551 34.6441C32.8194 34.2659 33.3904 33.5809 33.8078 33.1192C34.2372 32.6487 35.0017 31.8973 35.524 31.4522C36.0375 30.995 36.9439 30.2983 37.5347 29.8964C38.1255 29.4944 39.2175 28.8487 39.9586 28.449C40.6997 28.0493 41.7807 27.5418 42.3432 27.3185C42.9058 27.0951 43.6828 26.8088 44.0574 26.685C44.4304 26.5717 45.2831 26.3511 45.9633 26.2002ZM58.9911 37.102L59.2963 36.3964C59.454 36.0122 59.6874 35.2845 59.8003 34.7746C59.9116 34.2753 60.0393 33.8755 60.0708 33.8805C60.1023 33.8855 60.2139 34.0647 60.3099 34.2737C60.4077 34.4722 60.5616 34.9274 60.6483 35.2641C60.7454 35.6026 60.8303 36.1544 60.8434 36.4796C60.867 36.8064 60.7982 37.5816 60.6897 38.1999C60.59 38.8302 60.4671 39.4031 60.4118 39.4805L59.4894 41.6392L59.1599 42.1578C58.9752 42.4409 58.5833 43.0143 58.2914 43.4312C57.9906 43.836 57.6275 44.2954 57.2234 44.6731L55.9935 45.9862L55.6017 46.355C55.3761 46.5562 54.5045 47.2369 53.6429 47.8544C52.7918 48.4736 52.0236 48.9767 51.9606 48.9668L50.279 49.7347C50.3077 49.8253 49.9634 50.0293 49.2565 50.3483C48.668 50.5999 47.5932 51.0006 46.8682 51.2306C46.1327 51.4589 45.5259 51.6214 45.5083 51.597L43.6715 51.985C43.637 52.0032 43.3816 52.0271 43.0495 52.0582L43.0494 52.0582C42.9288 52.0695 42.7981 52.0817 42.6642 52.0949C42.1525 52.1324 41.3525 52.1567 40.8806 52.1467C40.4071 52.1472 39.9855 52.0913 39.9607 52.0443L37.8706 51.7891L37.4292 51.6547C37.1927 51.585 36.6563 51.3709 36.2425 51.1978C35.8199 51.0125 35.2404 50.6624 34.9327 50.4306C34.6267 50.1884 34.2042 49.7985 33.9943 49.5607C33.7845 49.3229 33.4879 48.9529 33.3498 48.7372C33.203 48.5094 33.1527 48.3507 33.2367 48.364C33.3102 48.3756 33.7201 48.505 34.1477 48.6588C34.5753 48.8126 35.2775 48.999 36.504 49.2038L38.6428 49.4236C38.6914 49.3882 39.149 49.3528 39.6573 49.3363C40.1551 49.3181 40.8745 49.2596 41.2392 49.1988C41.6023 49.1486 41.9741 49.1104 42.0791 49.127L42.0834 49.0996L44.0197 48.8309C43.9772 48.7595 44.4524 48.5439 45.2244 48.2891C45.9284 48.0559 46.9961 47.6324 47.6001 47.351C48.4113 46.9839 48.7285 46.8833 48.7992 46.9807L50.2825 46.1061L52.3253 44.6199C53.4456 43.7956 54.389 43.1371 54.431 43.1438L55.699 41.7936L56.3413 41.0659C56.6962 40.659 57.2064 40.0181 57.495 39.6223L58.0152 38.9184L58.9911 37.102ZM61.8889 40.4141C62.072 39.9369 62.3033 38.9504 62.4335 38.1956L62.6671 36.8542L63.1279 37.0024C63.3837 37.0859 64.0079 37.357 64.4941 37.6169C64.9819 37.8664 65.8442 38.4012 66.4048 38.8022C66.9655 39.2032 67.8062 39.8746 68.2641 40.3131C68.7236 40.7412 69.4212 41.433 69.7967 41.8478C70.1706 42.2731 70.9405 43.2564 71.4938 44.0439C72.0455 44.8419 72.7678 45.9899 73.0908 46.601C73.4243 47.2137 73.8902 48.2136 74.1397 48.813C74.3788 49.4108 74.7221 50.3697 74.8821 50.9227C75.0421 51.4757 75.2666 52.4373 75.3747 53.0467C75.4827 53.6561 75.6028 54.6658 75.6429 55.2968C75.7011 56.2213 75.6739 56.7339 75.4606 58.014C75.2812 59.1487 75.1273 59.7813 74.9166 60.2972C74.7469 60.6903 74.3869 61.3334 74.1088 61.7309C73.7479 62.2446 73.3405 62.6433 72.7325 63.0856C72.1611 63.5013 71.6322 63.7838 71.1459 63.9331C70.7397 64.0519 70.0943 64.1868 69.6998 64.232C69.2197 64.2746 68.6008 64.2413 67.7837 64.1013C67.0699 63.9884 66.2732 63.787 65.8174 63.6073C65.402 63.4446 64.7197 63.1321 64.3126 62.917C63.9055 62.7018 63.168 62.2621 62.6935 61.9286C62.2174 61.6056 61.4595 61.0227 61.0143 60.64C60.5691 60.2573 59.861 59.5638 59.4275 59.1075C58.9956 58.6408 58.2031 57.6647 57.6641 56.9225C57.1234 56.1909 56.4475 55.1578 56.1532 54.6375C55.8589 54.1171 55.4095 53.2168 55.1445 52.6472C54.89 52.0793 54.5263 51.1817 54.0251 49.7241L55.0741 48.9423C55.6472 48.516 56.4614 47.8586 56.8864 47.4843C57.3009 47.1084 57.9924 46.41 58.4203 45.95C58.8376 45.4883 59.4915 44.6872 59.8509 44.184C60.2102 43.6808 60.7553 42.8194 61.0462 42.2731C61.337 41.7268 61.7164 40.8929 61.8889 40.4141ZM49.5642 52.077L50.5755 51.6015C51.1221 51.3433 51.7642 51.0249 52.0007 50.89C52.2268 50.7535 52.4373 50.6468 52.4688 50.6517C52.4898 50.6551 52.6394 51.0018 52.7879 51.4237C52.9364 51.8457 53.2803 52.6647 53.5436 53.2448C53.7981 53.8127 54.1305 54.5006 54.5313 55.2317L55.3944 56.7143L56.2073 57.8336C56.6474 58.4525 57.3659 59.3522 57.7978 59.819C58.2175 60.2946 58.5495 60.7132 58.5235 60.7414L59.9347 61.9554C59.9662 61.9604 60.3302 62.2441 60.7489 62.5903C61.1764 62.9487 61.8128 63.4155 62.1729 63.6555C62.5347 63.885 62.8214 64.1134 62.7954 64.1416L64.7157 64.9945L65.1505 65.171C65.3941 65.2634 66.1438 65.4896 68.0648 65.998L67.3126 66.3314C66.8965 66.5133 66.2621 66.7145 65.8974 66.7753C65.5328 66.836 64.8288 66.8647 64.3271 66.8392C63.8238 66.8242 63.1713 66.7318 62.2973 66.4751L60.0209 65.5797C60.0166 65.5781 60.0123 65.5764 60.0079 65.5746C59.8676 65.5093 59.3357 65.199 58.8263 64.8816C58.317 64.5641 57.7144 64.1565 57.083 63.6582L55.7121 62.4614L55.2537 61.9581C54.9963 61.6805 54.4054 60.9948 53.9448 60.4373C53.4842 59.8798 52.9684 59.1952 52.5322 58.4155L51.6045 56.9334C51.5658 56.9057 51.2677 56.3417 50.953 55.6781C50.64 55.004 50.1978 53.9217 49.5642 52.077ZM30.1686 52.4556C30.1947 52.0182 30.3154 51.3911 30.462 50.9405C30.5948 50.5092 30.8713 49.9175 31.0714 49.6046C31.2699 49.3021 31.4706 49.0539 31.5021 49.0588C31.544 49.0655 31.781 49.4045 32.0499 49.8132C32.31 50.2097 32.7777 50.7898 33.0859 51.0862C33.3925 51.3932 33.936 51.8345 34.2962 52.0745C34.6563 52.3146 35.3303 52.6796 35.7827 52.8804C36.5158 53.2117 36.8467 53.2964 38.7694 53.5897C40.239 53.8221 41.1501 53.9123 41.6496 53.8836C42.0513 53.861 42.3729 53.8688 42.3679 53.9003C42.3646 53.9213 41.6442 55.1428 40.7563 56.6069C39.87 58.0606 39.1164 59.2875 39.0888 59.3262C39.0507 59.3633 38.9247 59.3433 38.807 59.2709C38.7726 59.2497 38.7204 59.2183 38.6449 59.1729C38.4624 59.0631 38.1435 58.8713 37.6094 58.543L37.2008 59.2215C36.9802 59.5958 36.8066 59.9453 36.821 59.9906C36.8353 60.036 37.1253 60.2434 37.4695 60.4486C37.8048 60.6416 38.0948 60.849 38.1091 60.8943C38.1235 60.9397 38.072 61.0608 38.0046 61.147C37.9355 61.2438 37.7475 61.5479 37.2753 62.3563L38.7271 63.1782L39.129 62.5418C39.3463 62.1884 39.5569 61.8771 39.6056 61.8417C39.6437 61.8047 39.9945 61.9679 41.1043 62.6388L40.6592 63.3437C40.4143 63.7358 40.2407 64.0852 40.2777 64.1234C40.3163 64.151 40.6378 64.3634 40.9908 64.5808C41.4808 64.8844 41.6648 64.9458 41.7427 64.8612C41.7963 64.7943 41.8428 64.7048 41.8494 64.6627C41.8561 64.6207 42.0285 64.3464 42.5792 63.5182L43.1377 63.8649C43.5575 64.136 43.8939 64.2538 44.4381 64.3506C44.858 64.417 45.405 64.4281 45.7261 64.3712C46.0924 64.2999 46.498 64.1164 46.9601 63.7803C47.4448 63.4369 47.7306 63.1267 47.9562 62.7209C48.1336 62.4151 48.3217 61.9064 48.3699 61.6017C48.4181 61.297 48.4177 60.8231 48.3736 60.5577C48.3206 60.2801 48.303 60.0512 48.3135 60.0528C48.324 60.0545 48.5749 59.965 48.8606 59.8594C49.1358 59.7521 49.5498 59.5161 49.7719 59.3358C49.9941 59.1556 50.2473 58.9156 50.3319 58.789C50.4822 58.5866 50.5474 58.6508 51.7297 60.2916C52.4206 61.2301 53.27 62.3228 53.6295 62.7028C53.9786 63.0811 54.6673 63.7607 55.1672 64.2059C55.6549 64.66 56.2636 65.1655 56.5133 65.3557C56.7646 65.5355 56.969 65.7401 56.9573 65.8136C56.9457 65.8872 56.7522 66.1581 56.5167 66.4224C56.2934 66.6779 55.8441 67.0699 55.5401 67.291C55.2273 67.5 54.6934 67.814 54.3453 67.9743C53.9971 68.1347 53.3367 68.3641 52.8764 68.4851C52.4056 68.6045 51.5873 68.7443 51.053 68.789C50.5065 68.8426 49.4407 68.8463 48.6854 68.7915C47.6085 68.7289 46.9787 68.6293 45.9019 68.362C45.1246 68.1745 43.9351 67.8033 43.2534 67.5555C42.5733 67.2972 41.4773 66.8115 40.821 66.4708C40.1647 66.1301 39.1306 65.525 38.5263 65.1279C37.9203 64.7413 37.0907 64.1363 36.6703 63.8006C36.25 63.4649 35.5231 62.8222 35.0669 62.3732C34.5985 61.9329 33.8706 61.1609 33.4558 60.6538C33.0306 60.145 32.4137 59.2828 32.0824 58.7243C31.7494 58.1763 31.3326 57.4103 31.146 57.0254C30.9698 56.6422 30.7342 56.0234 30.6105 55.6485C30.4869 55.2736 30.3291 54.5702 30.2658 54.0863C30.1919 53.6008 30.1475 52.8615 30.1686 52.4556ZM44.5859 53.5511L45.275 53.4124C45.6518 53.3428 46.3807 53.1565 46.8774 53.0089C47.3759 52.8508 47.8257 52.7281 47.8903 52.7276C47.9428 52.7359 48.0797 53.0268 48.1945 53.3895C48.3093 53.7523 48.6184 54.5873 48.8895 55.2548C49.3013 56.2568 49.3752 56.5377 49.3225 56.9386C49.2727 57.2538 49.156 57.5154 48.9498 57.7304C48.794 57.8996 48.5231 58.1153 48.3684 58.2092C48.2048 58.2911 47.8506 58.3535 47.5937 58.3452C47.1655 58.3313 46.8865 58.1903 43.1849 55.9464L44.5859 53.5511ZM27.6572 58.606C27.4692 57.6178 27.4709 57.4027 27.6437 56.31C27.7712 55.4363 27.9051 54.9298 28.113 54.4997C28.2744 54.159 28.4265 53.9462 28.469 54.0175C28.5027 54.0767 28.5931 54.4571 28.6593 54.8553C28.7359 55.2551 28.9252 55.9635 29.3833 57.2851L30.2561 59.1139L31.2954 60.5706C31.8576 61.3702 32.3386 62.0709 32.3408 62.1251L34.1143 63.8379C34.3573 64.0701 35.0295 64.6503 35.6029 65.1071C36.1851 65.5761 36.8866 66.107 37.6771 66.6197L39.1978 67.5495C39.2074 67.5544 39.2294 67.5656 39.262 67.582L39.3179 67.6101C39.5196 67.7117 39.9394 67.9231 40.3927 68.1584C41.0015 68.4593 41.9975 68.8968 42.6058 69.133C43.2262 69.3604 43.7311 69.5695 43.7488 69.5938L47.2985 70.349C48.2853 70.5051 49.0902 70.6539 49.0852 70.6855L51.2137 70.4944L51.8701 70.4259C52.2315 70.3861 52.978 70.2242 53.5322 70.0534C54.0865 69.8826 54.5573 69.7632 54.575 69.7876C54.5926 69.8119 54.4495 70.0369 54.2698 70.2885C54.0901 70.5401 53.7109 70.9647 53.4213 71.2312C53.1422 71.4994 52.574 71.8941 52.1756 72.1003C51.7666 72.3049 51.0979 72.5868 50.678 72.725C50.2475 72.8615 49.8795 72.9433 49.8425 72.9052L47.3871 73.2151C47.3388 73.2296 47.2884 73.2338 47.2294 73.235C47.0565 73.2399 46.1962 73.1685 43.7724 72.9144L41.7986 72.3319C41.6157 72.2922 41.0988 72.1182 40.6035 71.9286C40.0759 71.7267 39.1306 71.308 38.5219 71.0071C37.9026 70.7046 37.4005 70.4098 37.4071 70.3677L35.846 69.4209C35.7797 69.4319 35.2632 69.0918 34.6954 68.6681C34.1171 68.2428 33.299 67.5642 32.8676 67.1622C32.4258 66.7584 32.0297 66.405 31.9822 66.3652C31.9813 66.3644 31.9804 66.3633 31.9798 66.362L30.7833 64.8295C30.7435 64.877 30.4579 64.5734 30.1399 64.1354C29.8323 63.6991 29.3634 62.9896 28.6561 61.747L27.9381 59.6196C27.8895 59.655 27.7581 59.1927 27.6572 58.606ZM40.5753 60.3367C40.5366 60.309 40.8413 59.7434 41.2482 59.0754C41.6534 58.418 42.0344 57.7783 42.1085 57.65C42.1809 57.5322 42.271 57.4388 42.3025 57.4438C42.334 57.4487 43.1802 57.9487 44.1917 58.561C45.2136 59.1749 46.1411 59.7739 46.2626 59.89C46.3841 60.0062 46.5437 60.2899 46.6154 60.5166C46.696 60.7555 46.7252 61.1155 46.6936 61.3151C46.662 61.5147 46.5111 61.857 46.359 62.0698C46.207 62.2827 45.9102 62.5265 45.703 62.6122C45.4731 62.7051 45.1465 62.7288 44.83 62.6895C44.452 62.6298 43.9046 62.3493 42.4893 61.5009C41.7525 61.0549 41.0995 60.6564 40.7803 60.4616C40.6613 60.389 40.5886 60.3446 40.5753 60.3367Z"
              fill="#101010"/>
        <path className='dark-line' fillRule="evenodd" clipRule="evenodd"
              d="M65.6465 41.5572C66.0366 41.6081 66.5498 41.7646 66.8271 41.9162C67.1746 42.1004 67.4844 42.3863 67.8644 42.9095C68.2708 43.4691 68.4238 43.7948 68.5009 44.2593C68.5709 44.7012 68.5548 45.0755 68.4214 45.6467C68.2919 46.2616 68.1614 46.5425 67.8501 46.9456C67.634 47.2237 67.2664 47.5748 67.0387 47.7219C66.811 47.8689 66.3513 48.0547 66.0252 48.1431C65.497 48.2857 65.4362 48.3299 65.3863 48.6451C65.3581 48.8237 65.3469 49.1666 65.3557 49.3833C65.3693 49.7732 65.3975 49.7992 65.9886 50.0757C66.3289 50.2372 66.6338 50.3501 66.6598 50.3219C66.6753 50.292 66.8693 50.0858 67.0772 49.8602C67.2955 49.6363 67.7001 49.3233 67.9941 49.1652C68.2881 49.0071 68.797 48.8507 69.1269 48.8059C69.5109 48.759 69.948 48.785 70.3524 48.8813C70.6938 48.9676 71.1672 49.1717 71.4097 49.3393C71.6539 49.4964 72.0041 49.7994 72.1963 50.0129C72.3973 50.2385 72.6281 50.6843 72.7699 51.1482C72.957 51.8024 72.9762 52.0208 72.8682 52.7037C72.7702 53.3236 72.6728 53.599 72.3793 54.0264C72.1825 54.3183 71.8066 54.7219 71.5408 54.9061C71.2838 55.1023 70.7842 55.3356 70.446 55.4329C69.9492 55.5805 69.6575 55.5882 69.0381 55.4902C68.5973 55.4205 68.1033 55.2778 67.9067 55.1605C67.7205 55.0449 67.3847 54.7872 67.1593 54.5793C66.9428 54.3835 66.6369 53.9366 66.4945 53.6126C66.3432 53.2764 66.1959 52.7792 66.1337 52.0156L65.341 51.6533C64.6797 51.3441 64.5046 51.2948 64.3078 51.3822C64.1702 51.4358 64.089 51.5414 64.1055 51.641C64.1342 51.7316 64.1628 52.0269 64.1843 52.2996C64.2057 52.5722 64.1658 53.0289 64.0894 53.3076C64.0114 53.5968 63.7985 54.0585 63.6122 54.3521C63.3999 54.6739 63.0412 55.0372 62.6692 55.2799C62.2956 55.5331 61.8342 55.7293 61.459 55.7885C61.1258 55.8542 60.5876 55.8553 60.2727 55.8055C59.9578 55.7557 59.476 55.6041 59.1971 55.463C58.8987 55.3082 58.5099 54.9775 58.2222 54.6196C57.9239 54.2602 57.6666 53.778 57.5535 53.4047C57.399 52.8849 57.3847 52.6349 57.4944 51.9415C57.6041 51.2481 57.6964 51.0043 58.0021 50.568C58.199 50.2761 58.5942 49.8863 58.8583 49.7127C59.1347 49.5302 59.5679 49.308 59.8398 49.2217C60.2283 49.0786 60.4869 49.0764 61.2742 49.2009C62.072 49.3271 62.2963 49.4056 62.7233 49.6993C63.1696 50.0068 63.2414 50.0289 63.41 49.9156C63.5769 49.8128 63.6228 49.6585 63.6562 49.0392C63.6879 48.635 63.7002 48.2169 63.682 48.1279C63.6743 48.0405 63.4241 47.7856 63.1269 47.5555C62.8192 47.3238 62.458 46.9543 62.3216 46.7281C62.1747 46.5003 61.9804 46.028 61.8938 45.6913C61.7785 45.2638 61.7527 44.8828 61.8225 44.4416C61.8773 44.0948 62.0045 43.6304 62.1041 43.4092C62.2036 43.188 62.4662 42.8203 62.6757 42.5842C62.8852 42.3481 63.2881 42.0457 63.57 41.8964C63.8397 41.756 64.2734 41.5985 64.5193 41.5404C64.7636 41.4929 65.2686 41.4974 65.6465 41.5572ZM64.2274 43.4542C64.1075 43.5322 63.9135 43.7384 63.8029 43.8932C63.6907 44.0586 63.5657 44.3726 63.5292 44.6038C63.4926 44.8349 63.5024 45.1811 63.5703 45.3641C63.626 45.556 63.7839 45.8502 63.9286 46.0239C64.0838 46.1992 64.3843 46.4082 64.6506 46.4934C65.0291 46.6179 65.202 46.6129 65.622 46.4747C65.906 46.3797 66.2641 46.1563 66.4322 45.9783C66.6417 45.7422 66.7462 45.4895 66.8043 45.1218C66.8625 44.754 66.8306 44.4798 66.7041 44.1905C66.5992 43.9693 66.3557 43.6724 66.1607 43.5446C65.9569 43.4047 65.6237 43.2659 65.4016 43.2415C65.1917 43.2083 64.8895 43.2143 64.7342 43.2436C64.5773 43.2834 64.3579 43.3779 64.2274 43.4542ZM68.3962 50.9088C68.242 51.0675 68.0468 51.3489 67.9854 51.5331C67.9257 51.7067 67.8725 52.0429 67.8691 52.2685C67.8674 52.4836 67.9733 52.8342 68.1009 53.0482C68.2406 53.2534 68.4908 53.5083 68.656 53.6206C68.8333 53.724 69.1382 53.8369 69.3167 53.8651C69.5056 53.895 69.8687 53.8447 70.1212 53.7446C70.4174 53.6407 70.6882 53.4251 70.8939 53.1453C71.1133 52.8462 71.2195 52.583 71.2451 52.2855C71.2656 52.0195 71.179 51.6827 71.0299 51.4007C70.888 51.1413 70.634 50.8427 70.4566 50.7393C70.2898 50.6375 69.9849 50.5247 69.7959 50.4948C69.6158 50.4771 69.2909 50.4903 69.0798 50.5323C68.8687 50.5743 68.5626 50.7413 68.3962 50.9088ZM59.5567 51.3523C59.4284 51.4828 59.2543 51.7675 59.1862 51.9937C59.0822 52.3111 59.1015 52.5295 59.2273 52.9586C59.3349 53.2987 59.5226 53.6084 59.732 53.7815C59.9413 53.9546 60.243 54.0885 60.5369 54.135C60.8203 54.1798 61.1695 54.1489 61.4099 54.0577C61.6276 53.9736 61.9454 53.7331 62.1185 53.5236C62.3589 53.2278 62.4308 53.0453 62.4553 52.6184C62.4808 52.3209 62.4202 51.9559 62.328 51.7906C62.2463 51.6269 62.0292 51.3664 61.8514 51.1983C61.6349 51.0025 61.3841 50.8875 61.0481 50.8344C60.7332 50.7845 60.444 50.8214 60.1806 50.9448C59.9717 51.041 59.6849 51.2218 59.5567 51.3523Z"
              fill="#101010"/>
        <path className='dark-line' fillRule="evenodd" clipRule="evenodd"
              d="M54.0041 30.6702C54.3416 30.7128 54.4996 30.8024 54.6675 31.0336C54.7912 31.2039 54.8718 31.4428 54.8502 31.5794C54.8303 31.7055 53.2032 34.2373 51.2373 37.211C49.0436 40.5363 47.5791 42.6523 47.4399 42.7164C47.3111 42.7822 44.3025 42.8233 40.752 42.8218C37.2014 42.8202 34.2272 42.7806 34.1482 42.7358C34.0692 42.691 33.9284 42.561 33.8383 42.4499C33.7395 42.3266 33.7081 42.117 33.7446 41.8859C33.7828 41.6442 34.9488 39.7825 37.2824 36.2532C39.193 33.3569 40.861 30.9069 40.9947 30.8096C41.2014 30.6592 42.1849 30.6317 47.3953 30.6158C50.7851 30.6134 53.7521 30.6304 53.9936 30.6686L54.0041 30.6702ZM42.3301 32.367C42.3042 32.3952 42.2529 33.3993 42.2331 34.6131C42.2133 35.8269 42.2058 36.8272 42.2146 36.8394C42.2339 36.8532 44.1146 35.8476 46.3865 34.6131C49.0221 33.1884 50.4551 32.3597 50.296 32.3453C50.1683 32.3358 48.3422 32.3163 46.2332 32.3166C44.1226 32.3274 42.3666 32.3404 42.3301 32.367ZM43.1135 38.4354C43.14 38.4719 43.9868 39.0365 44.995 39.6698L46.8339 40.8329C47.248 40.1877 48.2387 38.6859 49.3002 37.0769C50.3616 35.4679 51.2224 34.1071 51.2186 34.0635C51.2059 34.0076 49.3667 34.9552 47.1208 36.1615C44.8853 37.3694 43.0782 38.3867 43.1135 38.4354ZM37.279 39.4726C37.295 39.5074 37.9615 39.1713 38.7722 38.7395C39.5846 38.2972 40.2908 37.9136 40.3378 37.8887C40.397 37.855 40.4563 37.2074 40.4815 36.436C40.5066 35.6647 40.5042 34.932 40.4838 34.7887C40.4612 34.5913 40.1361 35.0138 38.8557 36.9866C37.9772 38.323 37.2718 39.4499 37.279 39.4726ZM39.6142 40.2188C38.7096 40.7003 37.9878 41.1139 37.9983 41.1155C38.0071 41.1277 39.3194 41.1306 40.9234 41.1258C42.5169 41.1194 43.8711 41.129 43.9341 41.1389C43.9971 41.1489 44.0037 41.1069 43.9579 41.0565C43.9121 41.0062 43.2884 40.5953 42.5631 40.1467L41.2407 39.3237L39.6142 40.2188Z"
              fill="#101010"/>
        <path className="animation-line"
              d="M92.5341 24.5121C92.151 24.5121 91.7789 24.3112 91.578 23.9545C85.1117 12.5158 72.942 5.41064 59.8162 5.41064C48.6114 5.41064 38.1891 10.4544 31.2223 19.2488C30.8458 19.7241 30.1565 19.802 29.6801 19.4277C29.2048 19.0512 29.1247 18.3608 29.5012 17.8855C36.8873 8.56202 47.9363 3.21533 59.8162 3.21533C73.7323 3.21533 86.6342 10.7485 93.4879 22.8744C93.7865 23.4023 93.601 24.0719 93.073 24.3705C92.9029 24.4671 92.7174 24.5121 92.5341 24.5121Z"
              fill="#BEBEBE"/>
        <path className="animation-line"
              d="M37.2825 97.7478C25.4025 97.7478 14.3535 92.4011 6.96739 83.0787C6.59089 82.6034 6.67102 81.913 7.14631 81.5365C7.6205 81.16 8.31092 81.239 8.68852 81.7154C15.6553 90.5098 26.0776 95.5536 37.2825 95.5536C50.4071 95.5536 62.5769 88.4473 69.0442 77.0087C69.3428 76.4807 70.0135 76.2963 70.5393 76.5937C71.0661 76.8912 71.2527 77.5619 70.9542 78.0888C64.0993 90.2146 51.1975 97.7478 37.2825 97.7478Z"
              fill="#BEBEBE"/>
        <path className="animation-figure"
              d="M97.614 29.4517H96.5658V28.4023C96.5658 27.7964 96.0751 27.3047 95.4681 27.3047C94.8611 27.3047 94.3705 27.7964 94.3705 28.4023V29.4517H93.3211C92.7141 29.4517 92.2234 29.9435 92.2234 30.5494C92.2234 31.1553 92.7141 31.647 93.3211 31.647H94.3705V32.6964C94.3705 33.3023 94.8611 33.794 95.4681 33.794C96.0751 33.794 96.5658 33.3023 96.5658 32.6964V31.647H97.614C98.221 31.647 98.7117 31.1553 98.7117 30.5494C98.7117 29.9435 98.221 29.4517 97.614 29.4517Z"
              fill="#BEBEBE"/>
        <path className="animation-figure"
              d="M29.7899 7.4019C28.9052 7.4019 28.0742 7.05724 27.4486 6.43157C26.8229 5.80701 26.4782 4.97498 26.4782 4.09027C26.4782 3.20556 26.8229 2.37464 27.4486 1.74897C28.7394 0.458127 30.8403 0.459225 32.1312 1.74897C33.422 3.04091 33.422 5.14073 32.1312 6.43157C31.5055 7.05724 30.6746 7.4019 29.7899 7.4019ZM29.7899 2.97615C29.5045 2.97615 29.218 3.08482 29.0007 3.30216C28.7899 3.51181 28.6736 3.79281 28.6736 4.09027C28.6736 4.38774 28.7899 4.66874 29.0007 4.87839C29.4353 5.31306 30.1433 5.31416 30.5791 4.87839C31.0138 4.44372 31.0138 3.73573 30.5791 3.29996C30.3607 3.08482 30.0753 2.97615 29.7899 2.97615Z"
              fill="#BEBEBE"/>
        <path className="animation-line"
              d="M17.7069 70.8401C17.4676 70.8401 17.2272 70.7632 17.0252 70.603C7.70282 63.2169 2.35614 52.1678 2.35614 40.2868C2.35614 26.3718 9.88936 13.4689 22.0152 6.61402C22.5442 6.31546 23.2127 6.50206 23.5113 7.02893C23.8087 7.55691 23.6232 8.22648 23.0964 8.52504C11.6577 14.9913 4.55145 27.1621 4.55145 40.2868C4.55145 51.4928 9.59518 61.915 18.3885 68.8808C18.8638 69.2584 18.9439 69.9488 18.5674 70.423C18.3512 70.6974 18.0307 70.8401 17.7069 70.8401Z"
              fill="#BEBEBE"/>
        <path className="animation-line"
              d="M81.5378 93.3723C81.2139 93.3723 80.8923 93.2296 80.6761 92.9563C80.2996 92.481 80.3797 91.7906 80.855 91.4141C89.6494 84.4473 94.6932 74.0261 94.6932 62.8212C94.6932 49.6955 87.5869 37.5246 76.1483 31.0595C75.6214 30.7609 75.4348 30.0913 75.7333 29.5633C76.0308 29.0354 76.7026 28.8499 77.2284 29.1484C89.3542 36.0033 96.8874 48.9051 96.8874 62.8212C96.8874 74.7001 91.5407 85.7502 82.2183 93.1363C82.0174 93.2955 81.7759 93.3723 81.5378 93.3723Z"
              fill="#BEBEBE"/>
        <path className="animation-figure"
              d="M74.5841 99.571C73.6983 99.571 72.8674 99.2274 72.2417 98.6007C70.952 97.3109 70.952 95.21 72.2417 93.9181C73.5348 92.6272 75.6324 92.6283 76.9254 93.917L76.9265 93.9181C78.2163 95.21 78.2163 97.3109 76.9254 98.6007C76.2998 99.2274 75.4688 99.571 74.5841 99.571ZM74.5841 95.1452C74.2976 95.1452 74.0122 95.2539 73.7949 95.4712C73.3602 95.9059 73.3602 96.6139 73.7949 97.0497C74.2175 97.4723 74.9507 97.4723 75.3733 97.0497C75.808 96.615 75.808 95.9081 75.3733 95.4723C75.156 95.2539 74.8695 95.1452 74.5841 95.1452Z"
              fill="#BEBEBE"/>
        <path className="animation-figure"
              d="M5.89059 74.8902H4.84233V73.8408C4.84233 73.2338 4.35058 72.7432 3.74467 72.7432C3.13877 72.7432 2.64702 73.2338 2.64702 73.8408V74.8902H1.59766C0.99175 74.8902 0.5 75.3808 0.5 75.9878C0.5 76.5948 0.99175 77.0855 1.59766 77.0855H2.64702V78.1338C2.64702 78.7408 3.13877 79.2314 3.74467 79.2314C4.35058 79.2314 4.84233 78.7408 4.84233 78.1338V77.0855H5.89059C6.4965 77.0855 6.98825 76.5948 6.98825 75.9878C6.98825 75.3819 6.4965 74.8902 5.89059 74.8902Z"
              fill="#BEBEBE"/>
      </g>
      <defs>
        <clipPath id="clip0_1027_16627">
          <rect width="100" height="100" fill="white" transform="translate(0.5)"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Crypto;