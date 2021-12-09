const CheckIcon = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <path d="M3.50001 8.5C3.37201 8.5 3.24401 8.451 3.14601 8.354L0.146006 5.354C-0.0489941 5.159 -0.0489941 4.842 0.146006 4.647C0.341006 4.452 0.658006 4.452 0.853006 4.647L3.49901 7.293L10.145 0.646998C10.34 0.451998 10.657 0.451998 10.852 0.646998C11.047 0.841998 11.047 1.159 10.852 1.354L3.85201 8.354C3.75401 8.452 3.62601 8.5 3.49801 8.5H3.50001Z" />
    </svg>
  );
};

export default CheckIcon;
