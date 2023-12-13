const CalenderCross = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Icons/calendar-cross" fill="#000000" fillRule="nonzero">
          <g id="calendar-cross">
            <path
              d="M16.65,0.9 L14.4,0.9 L14.4,0.45 C14.4,0.2016 14.1984,0 13.95,0 C13.7016,0 13.5,0.2016 13.5,0.45 L13.5,0.9 L4.5,0.9 L4.5,0.45 C4.5,0.2016 4.2984,0 4.05,0 C3.8016,0 3.6,0.2016 3.6,0.45 L3.6,0.9 L1.35,0.9 C0.6057,0.9 0,1.5057 0,2.25 L0,14.85 C0,15.5943 0.6057,16.2 1.35,16.2 L16.65,16.2 C17.3943,16.2 18,15.5943 18,14.85 L18,2.25 C18,1.5057 17.3943,0.9 16.65,0.9 Z M1.35,1.8 L3.6,1.8 L3.6,3.15 C3.6,3.3984 3.8016,3.6 4.05,3.6 C4.2984,3.6 4.5,3.3984 4.5,3.15 L4.5,1.8 L13.5,1.8 L13.5,3.15 C13.5,3.3984 13.7016,3.6 13.95,3.6 C14.1984,3.6 14.4,3.3984 14.4,3.15 L14.4,1.8 L16.65,1.8 C16.8984,1.8 17.1,2.0016 17.1,2.25 L17.1,4.5 L0.9,4.5 L0.9,2.25 C0.9,2.0016 1.1016,1.8 1.35,1.8 Z M16.65,15.3 L1.35,15.3 C1.1016,15.3 0.9,15.0984 0.9,14.85 L0.9,5.4 L17.1,5.4 L17.1,14.85 C17.1,15.0984 16.8984,15.3 16.65,15.3 Z"
              id="Shape"
            />
            <path
              d="M9.6363,10.35 L12.0177,7.9686 C12.1932,7.7931 12.1932,7.5078 12.0177,7.3323 C11.8422,7.1568 11.5569,7.1568 11.3814,7.3323 L9,9.7137 L6.6186,7.3323 C6.4431,7.1568 6.1578,7.1568 5.9823,7.3323 C5.8068,7.5078 5.8068,7.7931 5.9823,7.9686 L8.3637,10.35 L5.9823,12.7314 C5.8068,12.9069 5.8068,13.1922 5.9823,13.3677 C6.0705,13.4559 6.1857,13.4991 6.3009,13.4991 C6.4161,13.4991 6.5313,13.455 6.6195,13.3677 L9.0009,10.9863 L11.3823,13.3677 C11.4705,13.4559 11.5857,13.4991 11.7009,13.4991 C11.8161,13.4991 11.9313,13.455 12.0195,13.3677 C12.195,13.1922 12.195,12.9069 12.0195,12.7314 L9.6381,10.35 L9.6363,10.35 Z"
              id="Path"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CalenderCross;
