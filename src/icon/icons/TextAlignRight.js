const TextAlignRight = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
      data-testid={dataTestId}
    >
      <path
        d="M17.5 5h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
        fill="#000000"
      />
      <path
        d="M17.5 8h-11c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
        fill="#000000"
      />
      <path
        d="M17.5 11h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
        fill="#000000"
      />
      <path
        d="M17.5 14h-11c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
        fill="#000000"
      />
      <path
        d="M17.5 17h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
        fill="#000000"
      />
    </svg>
  );
};

export default TextAlignRight;
