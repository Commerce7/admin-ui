const Write = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={className}
      data-testid={dataTestId}
    >
      <path
        fill="#000"
        d="M1.515 15.943a.515.515 0 0 1-.495-.655l1.028-3.6a.5.5 0 0 1 .131-.223L13.494.15c.2-.2.526-.2.727 0l2.572 2.572c.2.2.2.527 0 .727L5.478 14.764a.5.5 0 0 1-.222.13l-3.6 1.03a.5.5 0 0 1-.141.019M3 12.098l-.738 2.582 2.582-.738L15.702 3.085l-1.844-1.844zM16.944 18H1.514a.514.514 0 0 1 0-1.029h15.43a.514.514 0 0 1 0 1.029"
      />
    </svg>
  );
};

export default Write;
