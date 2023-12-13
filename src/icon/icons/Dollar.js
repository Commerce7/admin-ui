const Dollar = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <path
        d="M256,0c-5.888,0-10.667,4.779-10.667,10.667v490.667c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667
			V10.667C266.667,4.779,261.888,0,256,0z"
      />
      <path
        d="M256,42.667c-76.459,0-138.667,47.851-138.667,106.667c0,40.597,29.184,77.12,76.181,95.317
			c1.28,0.491,2.56,0.725,3.861,0.725c4.267,0,8.32-2.581,9.941-6.827c2.155-5.483-0.576-11.648-6.08-13.781
			c-38.592-14.955-62.571-43.861-62.571-75.435C138.667,102.272,191.317,64,256,64s117.333,38.272,117.333,85.333
			c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667C394.667,90.517,332.459,42.667,256,42.667z"
      />
      <path
        d="M318.464,267.371c-5.483-2.155-11.648,0.576-13.781,6.08c-2.155,5.483,0.576,11.648,6.08,13.781
			c38.592,14.955,62.571,43.861,62.571,75.435C373.333,409.728,320.683,448,256,448s-117.333-38.272-117.333-85.333
			c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667c0,58.816,62.208,106.667,138.667,106.667
			s138.667-47.851,138.667-106.667C394.667,322.069,365.483,285.547,318.464,267.371z"
      />
      <path
        d="M318.592,267.435c-31.211-12.587-46.016-17.472-61.653-22.635c-13.888-4.587-28.245-9.344-55.701-20.011
			c-5.461-2.197-11.648,0.576-13.803,6.059s0.576,11.669,6.059,13.803c27.989,10.88,42.624,15.701,56.768,20.373
			c15.317,5.056,29.781,9.835,60.373,22.165c1.301,0.512,2.645,0.768,3.989,0.768c4.224,0,8.213-2.517,9.877-6.656
			C326.72,275.861,324.075,269.653,318.592,267.435z"
      />
    </svg>
  );
};

export default Dollar;
