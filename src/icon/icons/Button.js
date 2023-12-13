const Button = (props) => {
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
      <rect rx="3" height="6.84932" width="18.40735" y="6.83647" x="0.82493" />
    </svg>
  );
};

export default Button;
