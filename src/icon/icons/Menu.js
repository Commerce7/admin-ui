const Menu = (props) => {
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
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M17,14 C17.5522847,14 18,14.4477153 18,15 C18,15.5522847 17.5522847,16 17,16 L1,16 C0.44771525,16 0,15.5522847 0,15 C0,14.4477153 0.44771525,14 1,14 L17,14 Z M17,8 C17.5522847,8 18,8.44771525 18,9 C18,9.55228475 17.5522847,10 17,10 L1,10 C0.44771525,10 0,9.55228475 0,9 C0,8.44771525 0.44771525,8 1,8 L17,8 Z M17,2 C17.5522847,2 18,2.44771525 18,3 C18,3.55228475 17.5522847,4 17,4 L1,4 C0.44771525,4 0,3.55228475 0,3 C0,2.44771525 0.44771525,2 1,2 L17,2 Z"
        id="menu"
        fill="#000000"
      />
    </svg>
  );
};

export default Menu;
