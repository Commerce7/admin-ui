import { StyledDisplayIcon } from './DisplayIcon.styles';

const IconWrapper = (props) => {
  const { children, dataTestId, variant } = props;
  return (
    <StyledDisplayIcon data-testid={dataTestId} variant={variant}>
      {children}
    </StyledDisplayIcon>
  );
};

export default IconWrapper;
