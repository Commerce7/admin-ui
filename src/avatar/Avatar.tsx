import React, { useState } from 'react';

import { StyledAvatar, StyledAvatarIcon } from './Avatar.styles';

type AvatarSize = 'tiny' | 'small' | 'default' | 'large';

export interface AvatarProps {
  /**
   * Add className to the outermost element
   */
  className?: string;

  /**
   * The URL of the image
   */
  imageSrc?: string;

  /**
   * The alt text for the image
   */
  imageAlt?: string;

  /**
   * The label text to display
   */
  label?: string;

  /**
   * The size of the avatar
   */
  size?: AvatarSize;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Avatar = ({
  className = '',
  imageSrc = '',
  imageAlt = '',
  label = '',
  size = 'default',
  dataTestId = ''
}: AvatarProps) => {
  const [isImageValid, setImageValid] = useState(true);

  const handleImageError = () => {
    setImageValid(false);
  };

  let content: React.ReactNode = label;

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

export default Avatar;
