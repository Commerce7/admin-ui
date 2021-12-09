const LocationPage = (props) => {
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
        <rect id="path-1-page" x="4" y="6" width="22" height="10" rx="2" />
        <mask
          id="mask-2-location-page"
          maskContentUnits="userSpaceOnUse"
          maskUnits="objectBoundingBox"
          x="0"
          y="0"
          width="22"
          height="10"
          fill="white"
        >
          <use xlinkHref="#path-1-page" />
        </mask>
      </defs>
      <g
        id="Carrots-Page"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Carrot-Add-Page"
          transform="translate(-681.000000, -456.000000)"
          stroke="#AFAFAF"
        >
          <g id="Group-Page" transform="translate(654.000000, 200.000000)">
            <g id="Cart-Page" transform="translate(20.000000, 235.000000)">
              <g id="location-page" transform="translate(7.000000, 21.000000)">
                <rect
                  id="LocationPager"
                  x="0.5"
                  y="0.5"
                  width="29"
                  height="29"
                  rx="2"
                />
                <use
                  id="LocationPager"
                  mask="url(#mask-2-location-page)"
                  strokeWidth="2"
                  strokeDasharray="3,2"
                  xlinkHref="#path-1-page"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LocationPage;
