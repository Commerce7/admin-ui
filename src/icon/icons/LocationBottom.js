const LocationBottom = (props) => {
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
        <rect id="path-1-bottom" x="0" y="15" width="30" height="10" rx="2" />
        <mask
          id="mask-2-location-bottom"
          maskContentUnits="userSpaceOnUse"
          maskUnits="objectBoundingBox"
          x="0"
          y="0"
          width="30"
          height="10"
          fill="white"
        >
          <use xlinkHref="#path-1-bottom" />
        </mask>
      </defs>
      <g
        id="Carrots-Bottom"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Carrot-Add-Bottom"
          transform="translate(-681.000000, -378.000000)"
          stroke="#AFAFAF"
        >
          <g id="Group-Bottom" transform="translate(654.000000, 200.000000)">
            <g id="Bottom" transform="translate(20.000000, 157.000000)">
              <g
                id="location-bottom"
                transform="translate(7.000000, 21.000000)"
              >
                <rect
                  id="Rectangle-bottom"
                  x="4.5"
                  y="0.5"
                  width="21"
                  height="29"
                  rx="2"
                />
                <use
                  id="Rectangle-bottom"
                  mask="url(#mask-2-location-bottom)"
                  strokeWidth="2"
                  strokeDasharray="3,2"
                  xlinkHref="#path-1-bottom"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LocationBottom;
