const ExclamationIcon = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="3px"
      height="12px"
      viewBox="0 0 3 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <title>!</title>
      <g
        id="Clubs"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Club-Packages---List"
          transform="translate(-1222.000000, -310.000000)"
          fill="#FFFFFF"
          fillRule="nonzero"
        >
          <g id="Error" transform="translate(1214.000000, 305.000000)">
            <g id="!" transform="translate(8.720000, 5.350000)">
              <path
                d="M1.14,7.59 C0.99,7.59 0.8625,7.54 0.7575,7.44 C0.6525,7.34 0.59,7.195 0.57,7.005 L0.015,1.17 L0,1.02 C0,0.71 0.1075,0.4625 0.3225,0.2775 C0.5375,0.0925 0.81,0 1.14,0 C1.49,0 1.775,0.1075 1.995,0.3225 C2.215,0.5375 2.305,0.825 2.265,1.185 L1.71,7.005 C1.69,7.195 1.6275,7.34 1.5225,7.44 C1.4175,7.54 1.29,7.59 1.14,7.59 Z M1.14,10.74 C0.82,10.74 0.555,10.6325 0.345,10.4175 C0.135,10.2025 0.03,9.935 0.03,9.615 C0.03,9.295 0.135,9.0275 0.345,8.8125 C0.555,8.5975 0.82,8.49 1.14,8.49 C1.46,8.49 1.725,8.5975 1.935,8.8125 C2.145,9.0275 2.25,9.295 2.25,9.615 C2.25,9.935 2.145,10.2025 1.935,10.4175 C1.725,10.6325 1.46,10.74 1.14,10.74 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ExclamationIcon;
