import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TachometerFasterLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.15208 19.8359H19.7761C20.5681 18.8519 21.2641 17.4119 21.5521 16.0199H20.3281C20.1121 16.9559 19.7041 17.8679 19.2001 18.6359H4.77608C3.88808 17.2919 3.38408 15.6839 3.38408 13.9799C3.38408 9.22794 7.22408 5.36394 11.9761 5.36394C16.0321 5.36394 19.4161 8.17194 20.3281 11.9399H21.5521C20.6401 7.49994 16.7041 4.16394 11.9761 4.16394C6.57608 4.16394 2.18408 8.57994 2.18408 13.9799C2.18408 16.1639 2.92808 18.2279 4.15208 19.8359ZM11.3761 13.9799C11.3761 14.3159 11.6401 14.5799 11.9761 14.5799H21.8161V13.3799H11.9761C11.6401 13.3799 11.3761 13.6439 11.3761 13.9799Z"
        fill={color}
      />
    </svg>
  );
}

export default TachometerFasterLight;