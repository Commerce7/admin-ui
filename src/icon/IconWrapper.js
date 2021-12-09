import { StyledLargeIcon } from './IconWrapper.styles';

const IconWrapper = (props) => {
  const { size, children, dataTestId } = props;

  if (size === 'large') {
    return (
      <StyledLargeIcon data-testid={dataTestId}>{children}</StyledLargeIcon>
    );
  }

  return children;
};

export default IconWrapper;
