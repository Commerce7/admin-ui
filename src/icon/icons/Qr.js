const Qr = (props) => {
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
      <g stroke="none" fill="none" fillRule="evenodd">
        <path
          d="M1.5 1.5h4.5v4.5H1.5V1.5zm1.5 1.5v1.5h1.5V3H3zm9-1.5H16.5v4.5H12V1.5zm1.5 1.5v1.5H15V3h-1.5zM1.5 12H6v4.5H1.5V12zm1.5 1.5v1.5h1.5v-1.5H3zM7.5 3h1.5v1.5H7.5V3zm3 0h1.5v1.5h-1.5V3zm-6 3h1.5v1.5H4.5V6zM6 7.5h1.5V9H6V7.5zm1.5 1.5H9v1.5H7.5V9zM9 6h1.5v1.5H9V6zm1.5 1.5H12V9h-1.5V7.5zm1.5 0V6h1.5v1.5H12zm-1.5 3H12v1.5h-1.5V12zm0 3h1.5v1.5h-1.5V15zm3-3h1.5v1.5H13.5V12zm0 1.5H15v1.5h-1.5v-1.5zm1.5 1.5V16.5h1.5V15H15zm0-3h1.5v1.5H15V12z"
          fill="#000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default Qr;
