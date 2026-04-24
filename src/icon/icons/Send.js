const Send = (props) => {
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
        d="M17.85 1.115a.45.45 0 0 0-.474-.08l-17.1 7.2a.45.45 0 0 0 .032.842L5.4 10.774v5.076a.45.45 0 0 0 .8.284l2.486-3.061 4.048 3.997a.45.45 0 0 0 .428.115.45.45 0 0 0 .32-.309l4.5-15.3a.45.45 0 0 0-.133-.462zm-3.333 2.1L5.766 9.947l-4.04-1.346zM6.3 10.672l8.474-6.518-6.475 7.968v.001L6.3 14.583zm6.53 5.23-3.574-3.53 7.23-8.899-3.655 12.428"
      />
    </svg>
  );
};

export default Send;
