const Application = (props) => {
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
      <path d="M17.534 15.745L13 7.374V2.601C13.603 2.355 14 1.992 14 1.5C14 0.464 12.242 0 10.5 0C8.75804 0 7.00004 0.464 7.00004 1.5C7.00004 1.992 7.39704 2.355 8.00004 2.601V7.374L3.46604 15.745C2.87204 16.842 2.81504 17.899 3.30604 18.723C3.79704 19.547 4.75404 20 6.00104 20H15.001C16.248 20 17.205 19.546 17.696 18.723C18.187 17.9 18.13 16.842 17.536 15.745H17.534ZM10.5 1C11.882 1 12.72 1.315 12.955 1.5C12.72 1.685 11.882 2 10.5 2C9.11804 2 8.28004 1.685 8.04504 1.5C8.28004 1.315 9.11804 1 10.5 1ZM10.5 3C11.014 3 11.529 2.96 12 2.876V7.498C12 7.516 12.001 7.533 12.003 7.551C12.003 7.554 12.004 7.556 12.004 7.559C12.006 7.572 12.007 7.586 12.01 7.599C12.012 7.607 12.014 7.615 12.016 7.623C12.018 7.631 12.02 7.638 12.022 7.646C12.024 7.654 12.031 7.673 12.037 7.687C12.038 7.689 12.038 7.691 12.039 7.693C12.046 7.709 12.054 7.725 12.062 7.741L15.452 14C14.726 13.987 14.23 13.679 13.579 13.121C13.161 12.763 12.617 12.317 11.999 11.935C11.964 10.862 11.082 10 10.001 10C9.24304 10 8.58204 10.424 8.24304 11.048C7.81304 11.102 7.39204 11.203 6.98604 11.348L8.94004 7.74C8.94804 7.725 8.95604 7.709 8.96304 7.693C8.96404 7.69 8.96504 7.688 8.96604 7.685C8.97104 7.672 8.97604 7.66 8.98004 7.647C8.98204 7.639 8.98404 7.631 8.98604 7.623C8.98804 7.615 8.99004 7.608 8.99204 7.6C8.99404 7.592 8.99704 7.572 8.99804 7.558C8.99804 7.556 8.99904 7.554 8.99904 7.551C9.00104 7.533 9.00204 7.516 9.00204 7.498V2.876C9.47304 2.959 9.98804 3 10.502 3H10.5ZM10 11C10.551 11 11 11.449 11 12C11 12.551 10.551 13 10 13C9.44904 13 9.00004 12.551 9.00004 12C9.00004 11.449 9.44904 11 10 11ZM16.836 18.211C16.533 18.72 15.881 19 15 19H6.00004C5.11904 19 4.46704 18.72 4.16404 18.211C3.86104 17.702 3.92504 16.995 4.34504 16.221L6.14704 12.894C6.70704 12.504 7.33804 12.235 8.00304 12.1C8.05504 13.156 8.93104 14 10 14C10.753 14 11.41 13.582 11.751 12.966C12.2 13.269 12.604 13.602 12.928 13.88C13.735 14.572 14.447 15 15.5 15C15.66 15 15.819 14.989 15.976 14.967L16.655 16.221C17.074 16.995 17.139 17.702 16.836 18.211Z" />
      <path d="M6.5 15C5.673 15 5 15.673 5 16.5C5 17.327 5.673 18 6.5 18C7.327 18 8 17.327 8 16.5C8 15.673 7.327 15 6.5 15ZM6.5 17C6.224 17 6 16.776 6 16.5C6 16.224 6.224 16 6.5 16C6.776 16 7 16.224 7 16.5C7 16.776 6.776 17 6.5 17Z" />
      <path d="M9.5 15C9.368 15 9.24 15.053 9.147 15.147C9.054 15.241 9 15.369 9 15.5C9 15.631 9.053 15.761 9.147 15.853C9.24 15.946 9.369 16 9.5 16C9.631 16 9.761 15.947 9.853 15.853C9.946 15.76 10 15.631 10 15.5C10 15.369 9.947 15.239 9.853 15.147C9.76 15.054 9.631 15 9.5 15Z" />
      <path d="M17.534 15.745L13 7.374V2.601C13.603 2.355 14 1.992 14 1.5C14 0.464 12.242 0 10.5 0C8.75804 0 7.00004 0.464 7.00004 1.5C7.00004 1.992 7.39704 2.355 8.00004 2.601V7.374L3.46604 15.745C2.87204 16.842 2.81504 17.899 3.30604 18.723C3.79704 19.547 4.75404 20 6.00104 20H15.001C16.248 20 17.205 19.546 17.696 18.723C18.187 17.9 18.13 16.842 17.536 15.745H17.534ZM10.5 1C11.882 1 12.72 1.315 12.955 1.5C12.72 1.685 11.882 2 10.5 2C9.11804 2 8.28004 1.685 8.04504 1.5C8.28004 1.315 9.11804 1 10.5 1ZM10.5 3C11.014 3 11.529 2.96 12 2.876V7.498C12 7.516 12.001 7.533 12.003 7.551C12.003 7.554 12.004 7.556 12.004 7.559C12.006 7.572 12.007 7.586 12.01 7.599C12.012 7.607 12.014 7.615 12.016 7.623C12.018 7.631 12.02 7.638 12.022 7.646C12.024 7.654 12.031 7.673 12.037 7.687C12.038 7.689 12.038 7.691 12.039 7.693C12.046 7.709 12.054 7.725 12.062 7.741L15.452 14C14.726 13.987 14.23 13.679 13.579 13.121C13.161 12.763 12.617 12.317 11.999 11.935C11.964 10.862 11.082 10 10.001 10C9.24304 10 8.58204 10.424 8.24304 11.048C7.81304 11.102 7.39204 11.203 6.98604 11.348L8.94004 7.74C8.94804 7.725 8.95604 7.709 8.96304 7.693C8.96404 7.69 8.96504 7.688 8.96604 7.685C8.97104 7.672 8.97604 7.66 8.98004 7.647C8.98204 7.639 8.98404 7.631 8.98604 7.623C8.98804 7.615 8.99004 7.608 8.99204 7.6C8.99404 7.592 8.99704 7.572 8.99804 7.558C8.99804 7.556 8.99904 7.554 8.99904 7.551C9.00104 7.533 9.00204 7.516 9.00204 7.498V2.876C9.47304 2.959 9.98804 3 10.502 3H10.5ZM10 11C10.551 11 11 11.449 11 12C11 12.551 10.551 13 10 13C9.44904 13 9.00004 12.551 9.00004 12C9.00004 11.449 9.44904 11 10 11ZM16.836 18.211C16.533 18.72 15.881 19 15 19H6.00004C5.11904 19 4.46704 18.72 4.16404 18.211C3.86104 17.702 3.92504 16.995 4.34504 16.221L6.14704 12.894C6.70704 12.504 7.33804 12.235 8.00304 12.1C8.05504 13.156 8.93104 14 10 14C10.753 14 11.41 13.582 11.751 12.966C12.2 13.269 12.604 13.602 12.928 13.88C13.735 14.572 14.447 15 15.5 15C15.66 15 15.819 14.989 15.976 14.967L16.655 16.221C17.074 16.995 17.139 17.702 16.836 18.211Z" />
      <path d="M6.5 15C5.673 15 5 15.673 5 16.5C5 17.327 5.673 18 6.5 18C7.327 18 8 17.327 8 16.5C8 15.673 7.327 15 6.5 15ZM6.5 17C6.224 17 6 16.776 6 16.5C6 16.224 6.224 16 6.5 16C6.776 16 7 16.224 7 16.5C7 16.776 6.776 17 6.5 17Z" />
      <path d="M9.5 15C9.368 15 9.24 15.053 9.147 15.147C9.054 15.241 9 15.369 9 15.5C9 15.631 9.053 15.761 9.147 15.853C9.24 15.946 9.369 16 9.5 16C9.631 16 9.761 15.947 9.853 15.853C9.946 15.76 10 15.631 10 15.5C10 15.369 9.947 15.239 9.853 15.147C9.76 15.054 9.631 15 9.5 15Z" />
    </svg>
  );
};

export default Application;
