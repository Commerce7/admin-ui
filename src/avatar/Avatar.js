import PropTypes from 'prop-types';
import { useState } from 'react';

import { StyledAvatar, StyledAvatarIcon } from './Avatar.styles';

const Avatar = (props) => {
  const [isImageValid, setImageValid] = useState(true);
  const {
    className = null,
    imageSrc = null,
    imageAlt = '',
    label = '',
    size = 'default',
    dataTestId = null
  } = props;

  const handleImageError = () => {
    setImageValid(false);
  };

  let content = label;

  if (imageSrc && isImageValid) {
    content = <img src={imageSrc} alt={imageAlt} onError={handleImageError} />;
  }

  if (!content) {
    content = <StyledAvatarIcon avatarSize={size} icon="user" />;
  }

  return (
    <StyledAvatar className={className} size={size} data-testid={dataTestId}>
      {content}
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large', 'tiny']),
  dataTestId: PropTypes.string
};

export default Avatar;
