const UnitIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      stroke="#5F5F5F"
      strokeWidth={1.5}
      d="M5 15c0-4.714 0-7.071 1.464-8.536C7.93 5 10.286 5 15 5c4.714 0 7.071 0 8.535 1.464C25 7.93 25 10.286 25 15"
    />
    <path
      stroke="#5F5F5F"
      strokeWidth={1.5}
      d="M5 17c0-2.8 0-4.2.545-5.27A5 5 0 0 1 7.73 9.545C8.8 9 10.2 9 13 9h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C25 12.8 25 14.2 25 17c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C21.2 25 19.8 25 17 25h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C5 21.2 5 19.8 5 17Z"
    />
    <path
      stroke="#5F5F5F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.5 17.4 1.429 1.6 3.571-4"
    />
  </svg>
);
export default UnitIcon;
