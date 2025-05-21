import React, { ReactNode, MouseEvent } from 'react';

import {
  StyledTag,
  StyledTagLabel,
  StyledDeleteButton,
  StyledStartIcon,
  StyledEndIcon
} from './Tag.styles';

export type TagVariant = 'default' | 'info' | 'warning' | 'error' | 'success';

export interface TagProps {
  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Callback fired when the component is clicked.
   */
  onClick?: (event: MouseEvent<HTMLElement>) => void;

  /**
   * Callback fired when the component delete button is clicked.
   * Adds an 'x' button on the end of the tag.
   */
  onDelete?: (event: MouseEvent<HTMLButtonElement>) => void;

  /**
   * Set the visual property of the component.
   */
  variant?: TagVariant;

  /**
   * Set the icon at the front of the tag.
   */
  startIcon?: string;

  /**
   * Set the icon at the rear of the tag.
   */
  endIcon?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;
}

const Tag = ({
  children = null,
  className = '',
  onClick,
  onDelete,
  variant = 'default',
  dataTestId = '',
  startIcon = '',
  endIcon = ''
}: TagProps) => {
  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDelete?.(e);
  };

  if (onDelete) {
    return (
      <StyledTag
        className={className}
        variant={variant}
        data-testid={dataTestId}
      >
        <StyledTagLabel>{children}</StyledTagLabel>
        <StyledDeleteButton
          onClick={handleDelete}
          type="button"
          variant={variant}
        >
          ✕
        </StyledDeleteButton>
      </StyledTag>
    );
  }

  const as = onClick ? 'button' : 'span';

  return (
    <StyledTag
      className={className}
      as={as}
      variant={variant}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {startIcon && (
        <StyledStartIcon
          className={className}
          icon={startIcon}
          size={12}
          variant={variant}
        />
      )}
      <StyledTagLabel>{children}</StyledTagLabel>
      {endIcon && (
        <StyledEndIcon
          className={className}
          icon={endIcon}
          size={12}
          variant={variant}
        />
      )}
    </StyledTag>
  );
};

export default Tag;
