const ChartBars = (props) => {
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
        className="activator"
        d="M17.5 20h-16c-0.827 0-1.5-0.673-1.5-1.5v-16c0-0.827 0.673-1.5 1.5-1.5h16c0.827 0 1.5 0.673 1.5 1.5v16c0 0.827-0.673 1.5-1.5 1.5zM1.5 2c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-16z"
        fill="#000000"
      />
      <path
        className="activator"
        d="M6.5 17h-2c-0.276 0-0.5-0.224-0.5-0.5v-9c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v9c0 0.276-0.224 0.5-0.5 0.5zM5 16h1v-8h-1v8z"
        fill="#000000"
      />
      <path
        className="activator"
        d="M10.5 17h-2c-0.276 0-0.5-0.224-0.5-0.5v-12c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v12c0 0.276-0.224 0.5-0.5 0.5zM9 16h1v-11h-1v11z"
        fill="#000000"
      />
      <path
        className="activator"
        d="M14.5 17h-2c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5zM13 16h1v-4h-1v4z"
        fill="#000000"
      />
    </svg>
  );
};

export default ChartBars;
