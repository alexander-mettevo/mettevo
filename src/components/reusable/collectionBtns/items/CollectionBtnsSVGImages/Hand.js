import React, {useEffect, useRef} from 'react';
import servicesAnimationScript
    from "@/components/pages/homePage/items/services/items/ServicesSVGImages/animationScript";
import {showLineAnimationWithCircle} from "@/components/reusable/animations/showLineAnimation";

const Hand = () => {
    const ref = useRef(null)

    useEffect(() => {
        const tl = servicesAnimationScript(ref)
        showLineAnimationWithCircle(ref, tl, 'top right')
    }, [])

  return (
    <svg ref={ref} width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="animation-circle"
            d="M67.8067 56.0753C81.7061 56.0753 92.9738 44.8077 92.9738 30.9083C92.9738 17.0089 81.7061 5.74121 67.8067 5.74121C53.9073 5.74121 42.6396 17.0089 42.6396 30.9083C42.6396 44.8077 53.9073 56.0753 67.8067 56.0753Z"
            fill="#DCDCDC"/>
      <path
        d="M77.1335 13.7673C76.8525 13.7673 76.5715 13.6598 76.3574 13.4457C75.9282 13.0165 75.9282 12.3228 76.3574 11.8936L80.6416 7.60949C81.0707 7.1803 81.7645 7.1803 82.1936 7.60949C82.6228 8.03867 82.6228 8.73349 82.1936 9.16157L77.9095 13.4457C77.6955 13.6609 77.4145 13.7673 77.1335 13.7673Z"
        fill="#101010"/>
      <path
        d="M82.8084 19.4424C82.5274 19.4424 82.2464 19.3348 82.0323 19.1207C81.6032 18.6916 81.6032 17.9978 82.0323 17.5687L86.6238 12.9772C87.053 12.548 87.7467 12.548 88.1759 12.9772C88.6051 13.4063 88.6051 14.1001 88.1759 14.5292L83.5844 19.1207C83.3704 19.3359 83.0894 19.4424 82.8084 19.4424Z"
        fill="#101010"/>
      <path
        d="M88.4832 25.117C88.2022 25.117 87.9212 25.0094 87.7071 24.7954C87.278 24.3662 87.278 23.6714 87.7071 23.2433L90.28 20.6715C90.7092 20.2423 91.403 20.2423 91.8321 20.6715C92.2613 21.1007 92.2613 21.7955 91.8321 22.2236L89.2592 24.7954C89.0452 25.0105 88.7642 25.117 88.4832 25.117Z"
        fill="#101010"/>
      <path
        d="M60.2405 64.1179C59.4743 64.1179 58.7257 63.8391 58.1615 63.2749L37.9142 43.0286C36.7298 41.8442 36.8044 39.8421 38.0788 38.5666L48.883 27.7635C49.4824 27.1642 50.265 26.8074 51.086 26.7613C51.9323 26.7054 52.7633 27.0171 53.345 27.5989L53.4372 27.69C55.3515 23.239 51.3056 12.8277 46.1817 7.19014L45.6241 6.57545L46.0632 5.87075C47.5834 3.42957 49.3408 2.18043 51.4373 2.04981C54.9783 1.82699 59.2976 4.96189 65.0537 11.8826L74.9677 1.93675C75.8612 1.04107 77.0533 0.549316 78.3233 0.549316C79.5933 0.549316 80.7853 1.04107 81.6799 1.93566L82.1947 2.45046C83.0882 3.34395 83.581 4.536 83.581 5.80709C83.581 5.86197 83.5799 5.91795 83.5777 5.97284C85.0541 5.74782 86.5963 6.23847 87.6621 7.30429L88.1769 7.81909C89.1879 8.82894 89.6467 10.1856 89.5534 11.5094C90.9408 11.3492 92.3875 11.8047 93.4501 12.8672L93.9649 13.382C95.5905 15.0076 95.7881 17.5312 94.5565 19.3741C95.45 19.5486 96.3029 19.9822 96.9944 20.6726L97.5092 21.1874C98.4027 22.0809 98.8955 23.273 98.8955 24.5441C98.8955 25.8152 98.4038 27.0072 97.5092 27.9007L82.962 42.4436C80.2365 45.3106 76.7953 47.4533 73.8942 48.2019C74.7515 49.4016 74.5814 51.1513 73.4266 52.306L62.6224 63.1102C61.9539 63.7787 61.0857 64.1179 60.2405 64.1179ZM51.2639 28.9512C51.2441 28.9512 51.2265 28.9512 51.2101 28.9523C50.9335 28.9676 50.6503 29.1005 50.4362 29.3156L39.632 40.1187C39.2204 40.5314 39.1446 41.1527 39.4673 41.4765L59.7147 61.7239C59.9046 61.9149 60.1626 61.9248 60.2965 61.9226C60.5742 61.9061 60.8563 61.7733 61.0714 61.5592L71.8756 50.755C72.2884 50.3423 72.363 49.721 72.0403 49.3983L68.7989 46.158L71.6363 46.293C74.1939 46.3995 78.309 44.1526 81.3912 40.9123L95.956 26.3475C96.4357 25.8679 96.6991 25.2279 96.6991 24.543C96.6991 23.8591 96.4357 23.2181 95.956 22.7384L95.4412 22.2236C94.4467 21.2303 92.8299 21.2292 91.8376 22.2203L91.8332 22.2236L90.2811 20.6716L92.4117 18.541C92.8914 18.0613 93.1548 17.4214 93.1548 16.7365C93.1548 16.0515 92.8914 15.4116 92.4117 14.9319L91.8969 14.4171C90.9024 13.4226 89.2834 13.4226 88.2889 14.4171L88.1747 14.5313L86.6248 12.977C87.1045 12.4973 87.368 11.8574 87.368 11.1724C87.368 10.4875 87.1045 9.84756 86.6248 9.36789L86.11 8.85309C85.1518 7.89483 83.4603 7.89373 82.5021 8.85309L82.2013 9.15494C82.2002 9.15604 82.198 9.15714 82.1969 9.15823H82.1958L80.6426 7.60615L80.647 7.60176C81.1245 7.12318 81.3868 6.48325 81.3868 5.8016C81.3868 5.11666 81.1234 4.47673 80.6437 3.99705L80.1289 3.48225C79.1707 2.524 77.4792 2.524 76.5209 3.48225L64.8891 15.1558L64.1218 14.2075C58.6181 7.41955 54.3735 4.04316 51.5712 4.24073C50.3945 4.31318 49.366 4.99263 48.3737 6.36141C53.9246 12.921 58.7707 25.3026 54.4449 30.1608L53.671 31.0301L51.7918 29.1509C51.625 28.983 51.4055 28.9512 51.2639 28.9512Z"
        fill="#101010"/>
      <path
        d="M63.6642 40.5678C63.3832 40.5678 63.1022 40.4602 62.8882 40.2461L52.849 30.207C52.4198 29.7778 52.4198 29.0841 52.849 28.6549C53.2782 28.2257 53.9719 28.2257 54.4011 28.6549L64.4402 38.6941C64.8694 39.1232 64.8694 39.817 64.4402 40.2461C64.2262 40.4602 63.9452 40.5678 63.6642 40.5678Z"
        fill="#101010"/>
      <path
        d="M61.2274 54.9855C60.099 54.9855 58.9695 54.5553 58.11 53.6958C56.3922 51.978 56.3922 49.1811 58.11 47.4622C59.8279 45.7455 62.6225 45.7433 64.3436 47.4622C66.0614 49.1811 66.0614 51.978 64.3436 53.6958C63.4842 54.5553 62.3558 54.9855 61.2274 54.9855ZM61.2263 48.3667C60.6599 48.3667 60.0935 48.5818 59.6621 49.0132C58.7994 49.876 58.7994 51.2799 59.6621 52.1426C60.5249 53.0054 61.9299 53.0043 62.7915 52.1426C63.6543 51.2799 63.6543 49.876 62.7915 49.0132C62.3602 48.5829 61.7938 48.3667 61.2263 48.3667Z"
        fill="#101010"/>
      <path className="animation-line"
            d="M14.432 87.9983C14.151 87.9983 13.87 87.8907 13.656 87.6766C13.2268 87.2475 13.2268 86.5537 13.656 86.1246L41.8592 57.9225C42.2884 57.4933 42.9821 57.4933 43.4113 57.9225C43.8404 58.3517 43.8404 59.0454 43.4113 59.4746L15.2081 87.6766C14.994 87.8907 14.713 87.9983 14.432 87.9983Z"
            fill="#BEBEBE"/>
      <path className="animation-line"
            d="M36.0186 84.5935C35.7376 84.5935 35.4566 84.4859 35.2425 84.2719C34.8134 83.8427 34.8134 83.149 35.2425 82.7198L51.0488 66.9147C51.478 66.4855 52.1717 66.4855 52.6009 66.9147C53.0301 67.3438 53.0301 68.0376 52.6009 68.4667L36.7946 84.2719C36.5806 84.487 36.2996 84.5935 36.0186 84.5935Z"
            fill="#BEBEBE"/>
      <path className="animation-figure"
            d="M6.49158 99.3383C5.88567 99.3383 5.39392 98.8477 5.39392 98.2407V91.4429C5.39392 90.8359 5.88567 90.3452 6.49158 90.3452C7.09748 90.3452 7.58923 90.8359 7.58923 91.4429V98.2407C7.58923 98.8477 7.09748 99.3383 6.49158 99.3383Z"
            fill="#BEBEBE"/>
      <path className="animation-figure"
            d="M9.89105 95.939H3.09216C2.48626 95.939 1.99451 95.4483 1.99451 94.8413C1.99451 94.2343 2.48626 93.7437 3.09216 93.7437H9.88995C10.4959 93.7437 10.9876 94.2343 10.9876 94.8413C10.9876 95.4483 10.497 95.939 9.89105 95.939Z"
            fill="#BEBEBE"/>
      <path className="animation-figure"
            d="M28.0363 96.0816C26.807 96.0816 25.6511 95.6019 24.7818 94.7325C22.9871 92.9379 22.9871 90.0181 24.7818 88.2234C26.5765 86.4288 29.4951 86.4288 31.2898 88.2234C33.0845 90.0181 33.0845 92.9379 31.2898 94.7325C30.4215 95.603 29.2657 96.0816 28.0363 96.0816ZM28.0363 89.073C27.4195 89.073 26.8037 89.3079 26.3339 89.7766C25.3954 90.7151 25.3954 92.242 26.3339 93.1816C27.2427 94.0893 28.8278 94.0915 29.7377 93.1816C30.6762 92.2431 30.6762 90.7162 29.7377 89.7766C29.269 89.3079 28.6521 89.073 28.0363 89.073Z"
            fill="#BEBEBE"/>
      <path className="animation-line"
            d="M24.5315 60.399C24.2505 60.399 23.9695 60.2914 23.7555 60.0774C23.3263 59.6482 23.3263 58.9545 23.7555 58.5253L33.1679 49.1129C33.5971 48.6837 34.2908 48.6837 34.72 49.1129C35.1492 49.5421 35.1492 50.2358 34.72 50.665L25.3076 60.0774C25.0924 60.2925 24.8114 60.399 24.5315 60.399Z"
            fill="#BEBEBE"/>
      <path className="animation-figure"
            d="M16.1422 72.2931C14.9128 72.2931 13.757 71.8134 12.8887 70.9441C11.0941 69.1494 11.0941 66.2296 12.8887 64.435C13.7581 63.5656 14.9128 63.0859 16.1422 63.0859C17.3716 63.0859 18.5274 63.5656 19.3967 64.435C21.1914 66.2296 21.1914 69.1494 19.3967 70.9441C18.5263 71.8145 17.3716 72.2931 16.1422 72.2931ZM16.1422 65.2834C15.5 65.2834 14.8952 65.5348 14.4408 65.9892C13.5023 66.9277 13.5023 68.4546 14.4408 69.3942C15.3497 70.303 16.9347 70.303 17.8446 69.3942C18.7831 68.4557 18.7831 66.9288 17.8446 65.9892C17.3891 65.5337 16.7843 65.2834 16.1422 65.2834Z"
            fill="#BEBEBE"/>
    </svg>
  );
};

export default Hand;