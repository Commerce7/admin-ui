const Search = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <path
        d="M18.9 19.2L13 12.7C14.3 11.3 15.1 9.5 15.1 7.5C15.1 5.5 14.3 3.6 12.9 2.2C11.5 0.8 9.5 0 7.5 0C5.5 0 3.6 0.8 2.2 2.2C0.8 3.6 0 5.5 0 7.5C0 9.5 0.8 11.4 2.2 12.8C3.6 14.2 5.5 15 7.5 15C9.2 15 10.9 14.4 12.2 13.4L18.1 19.9C18.2 20 18.3 20.1 18.5 20.1C18.6 20.1 18.7 20.1 18.8 20C19 19.7 19.1 19.4 18.9 19.2ZM1 7.5C1 3.9 3.9 1 7.5 1C11.1 1 14 3.9 14 7.5C14 11.1 11.1 14 7.5 14C3.9 14 1 11.1 1 7.5Z"
        fill="black"
      />
    </svg>
  );
};

export default Search;
