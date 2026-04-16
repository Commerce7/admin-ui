const Power = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
      data-testid={dataTestId}
    >
      <title>Icons/power</title>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M5.368 18a.474.474 0 0 1-.433-.666l3.073-6.913H3.474a.474.474 0 0 1-.336-.809L12.612.14a.475.475 0 0 1 .768.526l-3.072 6.913h4.534a.474.474 0 0 1 .335.81L5.704 17.86a.47.47 0 0 1-.336.138zm-.75-8.526h4.118a.474.474 0 0 1 .433.667l-2.332 5.248 6.86-6.861H9.58a.474.474 0 0 1-.433-.667l2.332-5.248z"
      />
    </svg>
  );
};

export default Power;
