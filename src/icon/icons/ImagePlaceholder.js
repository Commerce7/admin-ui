const ImagePlaceholder = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="60px"
      height="60px"
      viewBox="0 0 60 60"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <title>Icons/picture</title>
      <g
        id="Dev-Center-&amp;-Apps"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="App---Listing"
          transform="translate(-435.000000, -681.000000)"
          fillRule="nonzero"
        >
          <g id="picture2" transform="translate(435.000000, 681.000000)">
            <path
              d="M55.5,60 L4.5,60 C2.019,60 0,57.981 0,55.5 L0,4.5 C0,2.019 2.019,0 4.5,0 L55.5,0 C57.981,0 60,2.019 60,4.5 L60,55.5 C60,57.981 57.981,60 55.5,60 Z M4.5,3 C3.672,3 3,3.672 3,4.5 L3,55.5 C3,56.328 3.672,57 4.5,57 L55.5,57 C56.328,57 57,56.328 57,55.5 L57,4.5 C57,3.672 56.328,3 55.5,3 L4.5,3 Z"
              id="Shape"
            />
            <path
              d="M39,27 C35.691,27 33,24.309 33,21 C33,17.691 35.691,15 39,15 C42.309,15 45,17.691 45,21 C45,24.309 42.309,27 39,27 Z M39,18 C37.347,18 36,19.347 36,21 C36,22.653 37.347,24 39,24 C40.653,24 42,22.653 42,21 C42,19.347 40.653,18 39,18 Z"
              id="Shape"
            />
            <path
              d="M52.5,6 L7.5,6 C6.672,6 6,6.672 6,7.5 L6,43.5 C6,44.328 6.672,45 7.5,45 L52.5,45 C53.328,45 54,44.328 54,43.5 L54,7.5 C54,6.672 53.328,6 52.5,6 Z M9,35.07 L18.627,24.237 C18.873,23.961 19.194,23.805 19.533,23.801955 C19.872,23.799 20.196,23.946 20.448,24.216 L37.047,42 L9,42 L9,35.07 Z M51,42 L41.151,42 L22.644,22.17 C21.807,21.273 20.691,20.787 19.497,20.802 C18.303,20.817 17.199,21.33 16.386,22.245 L9,30.555 L9,9 L51,9 L51,42 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ImagePlaceholder;
