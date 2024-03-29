const Bundle = (props) => {
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
      <path d="M7.5,8.05V3a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1V2a1,1,0,0,0,1,1V8.05a2.5,2.5,0,0,0-2,2.45v8A1.5,1.5,0,0,0,4,20H8a1.5,1.5,0,0,0,1.5-1.5v-8A2.5,2.5,0,0,0,7.5,8.05Zm-3-7h3V2h-3Zm4,17.5A.5.5,0,0,1,8,19H4a.5.5,0,0,1-.5-.5v-8A1.5,1.5,0,0,1,5,9a.5.5,0,0,0,.5-.5V3h1V8.5A.5.5,0,0,0,7,9a1.5,1.5,0,0,1,1.5,1.5Z" />
      <path d="M15.5,8.05V3a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1V2a1,1,0,0,0,1,1V8.05a2.5,2.5,0,0,0-2,2.45v8A1.5,1.5,0,0,0,12,20h4a1.5,1.5,0,0,0,1.5-1.5v-8A2.5,2.5,0,0,0,15.5,8.05Zm-3-7h3V2h-3Zm4,17.5a.5.5,0,0,1-.5.5H12a.5.5,0,0,1-.5-.5v-8A1.5,1.5,0,0,1,13,9a.5.5,0,0,0,.5-.5V3h1V8.5A.5.5,0,0,0,15,9a1.5,1.5,0,0,1,1.5,1.5Z" />
    </svg>
  );
};

export default Bundle;
