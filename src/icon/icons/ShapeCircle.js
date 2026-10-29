const ShapeCircle = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <path d="M9,17 C6.8632,17 4.8544,16.168 3.3432,14.6568 C1.832,13.1456 1,11.1368 1,9 C1,6.8632 1.832,4.8544 3.3432,3.3432 C4.8544,1.832 6.8632,1 9,1 C11.1368,1 13.1456,1.832 14.6568,3.3432 C16.168,4.8544 17,6.8632 17,9 C17,11.1368 16.168,13.1456 14.6568,14.6568 C13.1456,16.168 11.1368,17 9,17 Z M9,1.8 C5.0296,1.8 1.8,5.0296 1.8,9 C1.8,12.9704 5.0296,16.2 9,16.2 C12.9704,16.2 16.2,12.9704 16.2,9 C16.2,5.0296 12.9704,1.8 9,1.8 Z" />
    </svg>
  );
};

export default ShapeCircle;
