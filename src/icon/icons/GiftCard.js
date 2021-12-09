const GiftCardIcon = (props) => {
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
      <path d="M18.5 3h-17c-0.827 0-1.5 0.673-1.5 1.5v11c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-11c0-0.827-0.673-1.5-1.5-1.5zM1.5 4h17c0.276 0 0.5 0.224 0.5 0.5v0.5h-18v-0.5c0-0.276 0.224-0.5 0.5-0.5zM19 6v3h-18v-3h18zM18.5 16h-17c-0.276 0-0.5-0.224-0.5-0.5v-5.5h18v5.5c0 0.276-0.224 0.5-0.5 0.5z" />
    </svg>
  );
};

export default GiftCardIcon;
