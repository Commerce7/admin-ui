const Menu = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="16"
      height="11"
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <path d="M0 0H16V1H0V0Z" />
      <path d="M0 5H16V6H0V5Z" />
      <path d="M0 10H16V11H0V10Z" />
    </svg>
  );
};

export default Menu;
