const Seedling = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={className}
      data-testid={dataTestId}
    >
      <path
        fill="#000"
        d="M3.316 1A6.16 6.16 0 0 1 9.47 6.932l.004.226v.506a6.15 6.15 0 0 1 5.21-2.875h2.842c.262 0 .474.213.474.474v.948c0 3.4-2.757 6.157-6.158 6.157H9.473v4.264a.474.474 0 1 1-.947 0V9.526H6.158A6.16 6.16 0 0 1 0 3.368V1.474C0 1.212.212 1 .474 1zm13.737 4.737h-2.369a5.21 5.21 0 0 0-5.21 5.21l-.001.474h2.37a5.21 5.21 0 0 0 5.21-5.21zM3.316 1.947H.947v1.421a5.21 5.21 0 0 0 5.21 5.21h2.369v-1.42a5.21 5.21 0 0 0-5.21-5.21"
      />
    </svg>
  );
};

export default Seedling;
