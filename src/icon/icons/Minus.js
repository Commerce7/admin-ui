const Minus = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="19px"
      height="1px"
      viewBox="0 0 19 1"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <title>minus</title>
      <g
        id="Settings"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Support---Chat-2"
          transform="translate(-621.000000, -567.000000)"
          fill="#000000"
          fillRule="nonzero"
        >
          <g id="Modal---Active" transform="translate(621.000000, 326.000000)">
            <g id="minus" transform="translate(0.000000, 241.000000)">
              <path
                d="M18.5,1 L0.5,1 C0.224,1 0,0.776 0,0.5 C0,0.224 0.224,0 0.5,0 L18.5,0 C18.776,0 19,0.224 19,0.5 C19,0.776 18.776,1 18.5,1 Z"
                id="Path"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Minus;
