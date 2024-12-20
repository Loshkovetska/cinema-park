import { CustomIconType } from "@/types";

export function UploadPhotoIcon(props: CustomIconType) {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="37.5"
        cy="37.5"
        r="37"
        stroke="white"
        strokeOpacity="0.8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 32.5L33.7396 31.3906C34.1105 30.8342 34.735 30.5 35.4037 30.5H38.5963C39.265 30.5 39.8895 30.8342 40.2604 31.3906L41 32.5H46V43.5H28V32.5H33Z"
        stroke="white"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37 40.5C38.6569 40.5 40 39.1569 40 37.5C40 35.8431 38.6569 34.5 37 34.5C35.3431 34.5 34 35.8431 34 37.5C34 39.1569 35.3431 40.5 37 40.5Z"
        stroke="white"
        strokeOpacity="0.8"
      />
    </svg>
  );
}
