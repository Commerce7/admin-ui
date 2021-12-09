const AddIcon = (props) => {
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
      <path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,19a9,9,0,1,1,9-9A9,9,0,0,1,10,19Z" />
      <polygon points="16.58 9.5 10.4 9.5 10.4 3.31 9.4 3.31 9.4 9.5 3.2 9.5 3.2 10.5 9.4 10.5 9.4 16.69 10.4 16.69 10.4 10.5 16.58 10.5 16.58 9.5" />
    </svg>
  );
};

export default AddIcon;
