const ProcessIcon = (props) => {
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
      <path d="M16.218 3.782c-1.794-1.794-4.18-2.782-6.718-2.782s-4.923 0.988-6.718 2.782-2.782 4.18-2.782 6.717 0.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-0.988 6.718-2.782 2.782-4.18 2.782-6.718-0.988-4.923-2.782-6.717zM9.5 19c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5z" />
      <path d="M15.353 10.147l-4-4c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l3.147 3.146h-10.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h10.293l-3.146 3.147c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.353 0.146s0.256-0.049 0.353-0.147l4-4c0.195-0.195 0.195-0.512 0-0.707z" />
    </svg>
  );
};

export default ProcessIcon;