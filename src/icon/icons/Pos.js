const Pos = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <path d="M17.5 0H1.5C0.673 0 0 0.673 0 1.5V11.5C0 12.327 0.673 13 1.5 13H9V15H5.5C5.224 15 5 15.224 5 15.5C5 15.776 5.224 16 5.5 16H13.5C13.776 16 14 15.776 14 15.5C14 15.224 13.776 15 13.5 15H10V13H17.5C18.327 13 19 12.327 19 11.5V1.5C19 0.673 18.327 0 17.5 0ZM18 11.5C18 11.776 17.776 12 17.5 12H1.5C1.224 12 1 11.776 1 11.5V1.5C1 1.224 1.224 1 1.5 1H17.5C17.776 1 18 1.224 18 1.5V11.5Z" />
    </svg>
  );
};

export default Pos;
