import { StyledIconContainer, StyledIcon } from './VividIcon.styles';

const IconVivid = (props) => {
  const { icon, color } = props;

  return (
    <StyledIconContainer color={color}>
      <StyledIcon icon={icon} size={20} color={color} />
    </StyledIconContainer>
  );
};

export default IconVivid;
