const Bounce = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={className}
      data-testid={dataTestId}
    >
      <path
        fill="#000"
        d="M6.241 7.68c1.442 2.404 2.407 4.73 2.98 7.304 2.336-4.02 4.89-4.984 8.437-3.802a.5.5 0 1 1-.316.949c-3.394-1.132-5.586-.088-7.895 4.53a.5.5 0 0 1-.94-.141c-.501-3.006-1.492-5.606-3.123-8.325a.5.5 0 0 1 .857-.515M5.25 2.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0m-4.25 0a1.625 1.625 0 1 0 3.25 0 1.625 1.625 0 0 0-3.25 0"
      />
    </svg>
  );
};

export default Bounce;
