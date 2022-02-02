import { StyledDisplayIcon } from './DisplayIcon.styles';

const IconWrapper = (props) => {
  const { children, dataTestId } = props;
  return (
    <StyledDisplayIcon data-testid={dataTestId}>{children}</StyledDisplayIcon>
  );
};

export default IconWrapper;
