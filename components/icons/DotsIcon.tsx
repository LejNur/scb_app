interface IconProps {
  handleVisibility: () => void;
}

export default function DotsIcon({ handleVisibility }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      onClick={handleVisibility}
    >
      <path
        fill="#CBD2B9"
        stroke="#CBD2B9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="cursor-pointer opacity-60"
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
      ></path>
    </svg>
  );
}
