const Time = (props) => {
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
        d="M16.218 3.782c-1.794-1.794-4.18-2.782-6.718-2.782s-4.923 0.988-6.718 2.782c-1.794 1.794-2.782 4.18-2.782 6.717s0.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-0.988 6.718-2.782 2.782-4.18 2.782-6.718-0.988-4.923-2.782-6.717zM9.5 19c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"
        fill="#000000"
      />
      <path
        d="M15.129 7.25c-0.138-0.239-0.444-0.321-0.683-0.183l-4.92 2.841-3.835-2.685c-0.226-0.158-0.538-0.103-0.696 0.123s-0.103 0.538 0.123 0.696l4.096 2.868c0.001 0.001 0.002 0.001 0.003 0.002 0.008 0.006 0.017 0.011 0.026 0.016 0.002 0.001 0.005 0.003 0.007 0.004 0.009 0.005 0.018 0.010 0.027 0.014 0.002 0.001 0.004 0.002 0.006 0.003 0.010 0.005 0.020 0.009 0.031 0.014 0.006 0.002 0.012 0.005 0.019 0.007 0.005 0.002 0.009 0.003 0.014 0.005 0.007 0.002 0.013 0.004 0.020 0.006 0.004 0.001 0.009 0.002 0.013 0.003 0.007 0.002 0.014 0.003 0.020 0.005 0.005 0.001 0.009 0.002 0.014 0.003 0.006 0.001 0.013 0.002 0.019 0.003s0.012 0.001 0.018 0.002c0.005 0.001 0.011 0.001 0.016 0.002 0.012 0.001 0.023 0.001 0.035 0.001 0.019 0 0.038-0.001 0.057-0.003 0-0 0.001-0 0.001-0 0.018-0.002 0.037-0.006 0.055-0.010 0.001-0 0.003-0.001 0.004-0.001 0.017-0.004 0.034-0.009 0.051-0.016 0.003-0.001 0.005-0.002 0.007-0.003 0.016-0.006 0.032-0.013 0.047-0.021 0.003-0.002 0.006-0.003 0.009-0.005 0.006-0.003 0.011-0.006 0.017-0.009l5.196-3c0.239-0.138 0.321-0.444 0.183-0.683z"
        fill="#000000"
      />
    </svg>
  );
};

export default Time;