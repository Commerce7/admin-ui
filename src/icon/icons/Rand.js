const RandIcon = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 440 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <path
        d="M262.687,221.742c30.891-21.789,51.246-58.722,51.246-100.535C313.933,54.373,261.952,0,198.045,0l-91.978,0.097V440h30
		V242.387h81.993c47.35,0,85.872,40.915,85.872,91.207V440h30V333.594C333.933,283.296,304.489,240.059,262.687,221.742z
		 M198.061,212.387h-61.993V30.065L198.061,30c47.35,0,85.872,40.915,85.872,91.207C283.933,171.484,245.41,212.387,198.061,212.387
		z"
      />
    </svg>
  );
};

export default RandIcon;
