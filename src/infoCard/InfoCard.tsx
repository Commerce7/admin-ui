import React, { ReactNode } from 'react';
import { useTheme } from 'styled-components';

import { Theme } from 'ui';

import Icon from '../icon';
import { backgroundColors } from '../icon/theme';

import {
  StyledContentWrapper,
  StyledIcon,
  StyledImage,
  StyledInfoCard,
  StyledLabel,
  StyledSubtitle,
  StyledTitle
} from './InfoCard.styles';
import { colors } from './theme';

type InfoCardVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface InfoCardProps {
  /**
   * The content of the component. If specified, will render below subtitle.
   */
  children?: ReactNode;

  /**
   * Add className to the outermost element
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * Set the icon to use.
   */
  icon?: string;

  /**
   * The label for the component.
   */
  label?: ReactNode;

  /**
   * The title for the component.
   */
  title?: ReactNode | string;

  /**
   * The subtitle for the component.
   */
  subtitle?: ReactNode;

  /**
   * Set the visual property of the component.
   */
  variant?: InfoCardVariant;

  /**
   * Allows overriding the icon color and icon background color.
   */
  iconVariant?: InfoCardVariant;

  /**
   * Use an image in place of icon, generally you wouldn't want both an img prop and an icon prop.
   */
  img?: string;
}

const InfoCard = ({
  icon,
  label = null,
  title,
  variant = 'default',
  subtitle = null,
  img,
  children = null,
  className,
  dataTestId,
  iconVariant
}: InfoCardProps) => {
  const theme = useTheme() as Theme;

  let iconVariantVar: string = variant;
  if (['warning', 'default'].includes(variant)) {
    iconVariantVar = 'text';
  }
  if (['error', 'success', 'info'].includes(variant)) {
    iconVariantVar = 'white';
  }
  if (iconVariant) {
    iconVariantVar = iconVariant;
  }

  // Match the original implementation exactly
  let iconBackgroundVariant =
    colors[theme.c7__ui.mode].iconBackgroundColor[variant];
  if (iconVariant) {
    iconBackgroundVariant = backgroundColors[theme.c7__ui.mode][iconVariant];
  }

  return (
    <StyledInfoCard
      variant={variant}
      className={className}
      data-testid={dataTestId}
    >
      <div>
        {icon && (
          <StyledIcon variant={iconBackgroundVariant}>
            <Icon size={24} icon={icon} variant={iconVariantVar} />
          </StyledIcon>
        )}
        {img && (
          <StyledImage
            src={img}
            alt={typeof title === 'string' ? title : 'Image'}
          />
        )}
      </div>
      <StyledContentWrapper>
        {label && <StyledLabel variant={variant}>{label}</StyledLabel>}
        {title && <StyledTitle variant={variant}>{title}</StyledTitle>}
        {subtitle && (
          <StyledSubtitle block small variant={variant}>
            {subtitle}
          </StyledSubtitle>
        )}
        {children}
      </StyledContentWrapper>
    </StyledInfoCard>
  );
};

export default InfoCard;
