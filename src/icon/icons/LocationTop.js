const LocationTop = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
      fill="none"
    >
      <defs>
        <rect id="path-1-top" x="0" y="5" width="30" height="10" rx="2" />
        <mask
          id="mask-2-location-top"
          maskContentUnits="userSpaceOnUse"
          maskUnits="objectBoundingBox"
          x="0"
          y="0"
          width="30"
          height="10"
          fill="white"
        >
          <use xlinkHref="#path-1-top" />
        </mask>
      </defs>
      <g
        id="Carrots-Top"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Carrot-Add-Top"
          transform="translate(-682.000000, -300.000000)"
          stroke="#AFAFAF"
        >
          <g id="Group-Top" transform="translate(654.000000, 200.000000)">
            <g id="Cart-Page" transform="translate(20.000000, 79.000000)">
              <g id="location-top" transform="translate(8.000000, 21.000000)">
                <rect
                  id="Rectangle-top"
                  x="4.5"
                  y="0.5"
                  width="21"
                  height="29"
                  rx="2"
                />
                <use
                  id="Rectangle-top"
                  mask="url(#mask-2-location-top)"
                  strokeWidth="2"
                  strokeDasharray="3,2"
                  xlinkHref="#path-1-top"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LocationTop;
