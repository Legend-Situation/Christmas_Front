import React from 'react';

const Snowflake = () => {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_df_105_654)">
        <rect x="4" y="4" width="16" height="16" rx="8" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_df_105_654"
          x="0"
          y="0"
          width="24"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.435294 0 0 0 0 0.552941 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_105_654"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_105_654"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2"
            result="effect2_foregroundBlur_105_654"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Snowflake;
