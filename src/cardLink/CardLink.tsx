/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentType, ReactNode } from 'react';

import {
  StyledCardDescription,
  StyledCardIcon,
  StyledCardLabel,
  StyledCardLink
} from './CardLink.styles';

export interface CardLinkProps {
  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * The content of the component.
   */
  children: ReactNode;

  /**
   * The component to render as a replacement for `<a/>`.
   * This can be used to pass in components from client-side routing libraries like react-router.
   * If this property is set, all other props will be passed to the component.
   */
  component?: ComponentType<any> | string;

  /**
   * The url to link to.
   */
  href?: string;

  /**
   * Add an icon to the start of the element.
   * Valid icons include all options from the `<Icon/>` component.
   */
  icon?: string;

  /**
   * Help text to describe the card
   */
  description?: string;

  /**
   * The label for the component.
   */
  label?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  [key: string]: any;
}

const CardLink = (props: CardLinkProps) => {
  const {
    children,
    className = null,
    component = null,
    icon = null,
    href = null,
    label = null,
    dataTestId = null,
    ...rest
  } = props;

  let as: any = 'a';
  let customComponentProps = {};

  if (component) {
    as = component;
    customComponentProps = { ...rest };
  }

  return (
    <StyledCardLink
      className={className}
      as={as}
      href={href}
      data-testid={dataTestId}
      {...customComponentProps}
    >
      {icon && <StyledCardIcon icon={icon} />}
      <StyledCardLabel>
        {label}
        <StyledCardDescription>{children}</StyledCardDescription>
      </StyledCardLabel>
    </StyledCardLink>
  );
};

export default CardLink;
