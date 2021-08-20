import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ThreeCircledFinaMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4402 16.6799C12.4562 16.6799 13.9682 15.5039 13.9682 13.9679C13.9682 13.0079 13.3442 12.2399 12.5282 11.9999V11.6639C13.1762 11.3999 13.6562 10.7279 13.6562 9.91189C13.6562 8.47189 12.2162 7.31989 10.4402 7.31989C8.5442 7.31989 7.0802 8.56789 7.0802 10.1279V10.2959H8.97619C8.97619 9.23989 9.2162 8.99989 10.4162 8.99989C11.5442 8.99989 11.7842 9.21589 11.7842 10.1039C11.7842 11.0159 11.5922 11.1119 10.6322 11.1119H9.60019V12.7919H10.6562C11.7362 12.7919 12.0002 12.9839 12.0002 13.8959C12.0002 14.8079 11.7122 14.9999 10.4162 14.9999C9.12019 14.9999 8.8802 14.7839 8.8802 13.5599H6.9362V13.6799C6.9362 15.4079 8.4002 16.6799 10.4402 16.6799ZM4.2002 21.3599H10.4402C15.6962 21.3599 19.8002 17.0879 19.8002 11.9999C19.8002 6.76789 15.6722 2.63989 10.4402 2.63989H4.2002V4.55989H10.4402C14.6162 4.55989 17.8802 7.82389 17.8802 11.9999C17.8802 16.0559 14.6162 19.4399 10.4402 19.4399H4.2002V21.3599Z"
        fill={color}
      />
    </svg>
  );
}

export default ThreeCircledFinaMedium;