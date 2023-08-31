const AddIcon = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <g stroke="none" fill="none" fillRule="evenodd">
        <path
          d="M9,0 C13.9688454,0 18,4.03115459 18,9 C18,13.9688454 13.9688454,18 9,18 C4.03115459,18 0,13.9688454 0,9 C0,4.03115459 4.03115459,0 9,0 Z M9,0.947368421 C4.55437172,0.947368421 0.947368421,4.55437172 0.947368421,9 C0.947368421,13.4456283 4.55437172,17.0526316 9,17.0526316 C13.4456283,17.0526316 17.0526316,13.4456283 17.0526316,9 C17.0526316,4.55437172 13.4456283,0.947368421 9,0.947368421 Z M9.02516447,4.97368421 C9.28677304,4.97368421 9.49884868,5.18575986 9.49884868,5.44736842 L9.49831579,8.55094737 L12.5526316,8.55148026 C12.7851725,8.55148026 12.9785764,8.7190462 13.0186841,8.94001914 L13.0263158,9.02516447 C13.0263158,9.28677304 12.8142401,9.49884868 12.5526316,9.49884868 L9.49831579,9.49831579 L9.49884868,12.5526316 C9.49884868,12.7851725 9.33128274,12.9785764 9.11030981,13.0186841 L9.02516447,13.0263158 C8.76355591,13.0263158 8.55148026,12.8142401 8.55148026,12.5526316 L8.55094737,9.49831579 L5.44736842,9.49884868 C5.21482747,9.49884868 5.02142365,9.33128274 4.9813159,9.11030981 L4.97368421,9.02516447 C4.97368421,8.76355591 5.18575986,8.55148026 5.44736842,8.55148026 L8.55094737,8.55094737 L8.55148026,5.44736842 C8.55148026,5.21482747 8.7190462,5.02142365 8.94001914,4.9813159 L9.02516447,4.97368421 Z"
          fill="#000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default AddIcon;
