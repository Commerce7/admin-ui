const Upload = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <path d="M17.5 19h-16c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.827-0.673 1.5-1.5 1.5z" />
      <path d="M14.854 8.646l-5-5c-0.195-0.195-0.512-0.195-0.707 0l-5 5c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l4.146-4.146v10.293c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10.293l4.146 4.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707z" />
    </svg>
  );
};

export default Upload;
