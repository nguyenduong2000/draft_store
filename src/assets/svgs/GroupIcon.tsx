const GroupIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <circle className="group-icon-ellipse" cx={15} cy={9} r={4} stroke="#5F5F5F" strokeWidth={1.5} />
    <path
      stroke="#5F5F5F"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21 12c1.657 0 3-1.12 3-2.5S22.657 7 21 7M9 12c-1.657 0-3-1.12-3-2.5S7.343 7 9 7"
    />
    <ellipse  className="group-icon-ellipse"  cx={15} cy={20} stroke="#5F5F5F" strokeWidth={1.5} rx={6} ry={4} />
    <path
      stroke="#5F5F5F"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M23 22c1.754-.385 3-1.359 3-2.5s-1.246-2.115-3-2.5M7 22c-1.754-.385-3-1.359-3-2.5s1.246-2.115 3-2.5"
    />
  </svg>
);
export default GroupIcon;
