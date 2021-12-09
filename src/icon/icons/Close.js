const CloseIcon = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <path d="M0.707153 0L12.0209 11.3137L11.3138 12.0208L4.65512e-05 0.707107L0.707153 0Z" />
      <path d="M12.0209 0.707031L0.707165 12.0207L5.80549e-05 11.3136L11.3138 -7.55787e-05L12.0209 0.707031Z" />
    </svg>
  );
};

export default CloseIcon;
