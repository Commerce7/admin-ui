const EllipsisIcon = (props) => {
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
        d="M2.5 13c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM2.5 9c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5c0-0.827-0.673-1.5-1.5-1.5z"
        fill="#000000"
      />
      <path
        d="M9.5 13c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM9.5 9c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5z"
        fill="#000000"
      />
      <path
        d="M16.5 13c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM16.5 9c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5c0-0.827-0.673-1.5-1.5-1.5z"
        fill="#000000"
      />
    </svg>
  );
};

export default EllipsisIcon;