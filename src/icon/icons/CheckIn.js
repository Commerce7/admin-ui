const CheckInIcon = (props) => {
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
      <path d="M18.5,2H16V1.5a.5.5,0,0,0-1,0V2H5V1.5a.5.5,0,0,0-1,0V2H1.5A1.5,1.5,0,0,0,0,3.5v14A1.5,1.5,0,0,0,1.5,19h17A1.5,1.5,0,0,0,20,17.5V3.5A1.5,1.5,0,0,0,18.5,2ZM1.5,3H4V4.5a.5.5,0,0,0,1,0V3H15V4.5a.5.5,0,0,0,1,0V3h2.5a.5.5,0,0,1,.5.5V6H1V3.5A.5.5,0,0,1,1.5,3Zm17,15H1.5a.5.5,0,0,1-.5-.5V7H19V17.5A.5.5,0,0,1,18.5,18Z" />
      <path d="M8.5,15.5a.47.47,0,0,1-.35-.15l-2-2a.49.49,0,0,1,.7-.7L8.5,14.29l4.64-4.64a.5.5,0,0,1,.71,0,.48.48,0,0,1,0,.7l-5,5a.49.49,0,0,1-.35.15Z" />
    </svg>
  );
};

export default CheckInIcon;
