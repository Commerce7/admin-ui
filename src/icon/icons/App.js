const App = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-0.5, -0.5)" fill="#000000" fillRule="nonzero">
          <path d="M6.83333333,0.5 C7.75380792,0.5 8.5,1.24619208 8.5,2.16666667 L8.5,6.83333333 C8.5,7.75380792 7.75380792,8.5 6.83333333,8.5 L2.16666667,8.5 C1.24619208,8.5 0.5,7.75380792 0.5,6.83333333 L0.5,2.16666667 C0.5,1.24619208 1.24619208,0.5 2.16666667,0.5 L6.83333333,0.5 Z M6.83333333,1.5 L2.16666667,1.5 C1.79847683,1.5 1.5,1.79847683 1.5,2.16666667 L1.5,6.83333333 C1.5,7.20152317 1.79847683,7.5 2.16666667,7.5 L6.83333333,7.5 C7.20152317,7.5 7.5,7.20152317 7.5,6.83333333 L7.5,2.16666667 C7.5,1.79847683 7.20152317,1.5 6.83333333,1.5 Z M6.83333333,9.5 C7.75380792,9.5 8.5,10.2461921 8.5,11.1666667 L8.5,15.8333333 C8.5,16.7538079 7.75380792,17.5 6.83333333,17.5 L2.16666667,17.5 C1.24619208,17.5 0.5,16.7538079 0.5,15.8333333 L0.5,11.1666667 C0.5,10.2461921 1.24619208,9.5 2.16666667,9.5 L6.83333333,9.5 Z M6.83333333,10.5 L2.16666667,10.5 C1.79847683,10.5 1.5,10.7984768 1.5,11.1666667 L1.5,15.8333333 C1.5,16.2015232 1.79847683,16.5 2.16666667,16.5 L6.83333333,16.5 C7.20152317,16.5 7.5,16.2015232 7.5,15.8333333 L7.5,11.1666667 C7.5,10.7984768 7.20152317,10.5 6.83333333,10.5 Z M15.8333333,9.5 C16.7538079,9.5 17.5,10.2461921 17.5,11.1666667 L17.5,15.8333333 C17.5,16.7538079 16.7538079,17.5 15.8333333,17.5 L11.1666667,17.5 C10.2461921,17.5 9.5,16.7538079 9.5,15.8333333 L9.5,11.1666667 C9.5,10.2461921 10.2461921,9.5 11.1666667,9.5 L15.8333333,9.5 Z M15.8333333,10.5 L11.1666667,10.5 C10.7984768,10.5 10.5,10.7984768 10.5,11.1666667 L10.5,15.8333333 C10.5,16.2015232 10.7984768,16.5 11.1666667,16.5 L15.8333333,16.5 C16.2015232,16.5 16.5,16.2015232 16.5,15.8333333 L16.5,11.1666667 C16.5,10.7984768 16.2015232,10.5 15.8333333,10.5 Z M13.5,0.5 C13.7761424,0.5 14,0.723857625 14,1 L14,4 L17,4 C17.2761424,4 17.5,4.22385763 17.5,4.5 C17.5,4.77614237 17.2761424,5 17,5 L14,5 L14,8 C14,8.27614237 13.7761424,8.5 13.5,8.5 C13.2238576,8.5 13,8.27614237 13,8 L13,5 L10,5 C9.72385763,5 9.5,4.77614237 9.5,4.5 C9.5,4.22385763 9.72385763,4 10,4 L13,4 L13,1 C13,0.723857625 13.2238576,0.5 13.5,0.5 Z" />
        </g>
      </g>
    </svg>
  );
};

export default App;
