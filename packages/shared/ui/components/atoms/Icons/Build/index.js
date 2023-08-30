import React from 'react';

const Build = ({ size = '24', fill = '#231F20' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask id="mask0_1874_2792" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
        <rect width={size} height={size} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1874_2792)">
        <path
          d="M17.8035 20.5077L11.2535 13.9462C10.8817 14.118 10.5025 14.2532 10.116 14.3519C9.72947 14.4506 9.31889 14.5 8.88428 14.5C7.35863 14.5 6.06054 13.9647 4.99003 12.8942C3.91953 11.8237 3.38428 10.5257 3.38428 9C3.38428 8.56667 3.43235 8.14967 3.5285 7.74902C3.62465 7.34839 3.76504 6.9641 3.94965 6.59615L7.48428 10.0923L9.97658 7.6L6.51888 4.10385C6.88683 3.91923 7.26471 3.77243 7.65253 3.66345C8.04036 3.55448 8.45094 3.5 8.88428 3.5C10.4099 3.5 11.708 4.03526 12.7785 5.10578C13.849 6.17628 14.3843 7.47435 14.3843 9C14.3843 9.46025 14.3381 9.88365 14.2458 10.2702C14.1535 10.6567 14.015 11.0231 13.8304 11.3692L20.392 17.9192C20.5407 18.0679 20.615 18.2519 20.615 18.4712C20.615 18.6904 20.5407 18.8744 20.392 19.0231L18.8689 20.5462C18.7202 20.6949 18.5426 20.7628 18.3362 20.75C18.1298 20.7372 17.9522 20.6564 17.8035 20.5077ZM18.3554 19.6327L19.5112 18.4769L12.592 11.5577C12.8535 11.1987 13.0509 10.7984 13.1843 10.3567C13.3176 9.91506 13.3843 9.46282 13.3843 9C13.3843 7.78205 12.9128 6.69007 11.9699 5.72405C11.0269 4.75802 9.81761 4.36667 8.34198 4.55L10.8458 7.05385C10.9945 7.20257 11.0753 7.37821 11.0881 7.58078C11.1009 7.78334 11.033 7.95898 10.8843 8.1077L8.03043 10.9615C7.88171 11.1103 7.69966 11.1846 7.48428 11.1846C7.26889 11.1846 7.08684 11.1103 6.9381 10.9615L4.43428 8.4577C4.28941 10.0744 4.70639 11.3189 5.68523 12.1913C6.66408 13.0638 7.73043 13.5 8.88428 13.5C9.33043 13.5 9.77337 13.4365 10.2131 13.3096C10.6529 13.1827 11.0606 12.984 11.4362 12.7135L18.3554 19.6327Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default Build;