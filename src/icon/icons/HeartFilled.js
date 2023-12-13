const HeartFilled = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="19px"
      height="17px"
      viewBox="0 0 19 17"
      fill="none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <title>Shape</title>
      <g
        id="Reservations"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Reservations-Dashboard"
          transform="translate(-539.000000, -585.000000)"
          fill="#000000"
          fillRule="nonzero"
        >
          <g id="heart" transform="translate(539.000000, 585.000000)">
            <path
              d="M9.257,16.937 C9.163,16.885 6.931,15.636 4.665,13.59 C3.324,12.38 2.254,11.142 1.482,9.91 C0.498,8.339 2.22044605e-16,6.771 2.22044605e-16,5.25 C2.22044605e-16,2.355 2.355,0 5.25,0 C6.23,0 7.271,0.367 8.181,1.034 C8.713,1.424 9.166,1.894 9.5,2.393 C9.834,1.894 10.287,1.424 10.819,1.034 C11.729,0.367 12.77,0 13.75,0 C16.645,0 19,2.355 19,5.25 C19,6.771 18.501,8.339 17.518,9.91 C16.747,11.142 15.676,12.38 14.336,13.59 C12.07,15.636 9.838,16.885 9.744,16.937 C9.668,16.979 9.585,17 9.501,17 C9.416,17 9.333,16.979 9.257,16.937 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default HeartFilled;
