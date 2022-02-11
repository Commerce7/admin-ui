import { LinkStyles, LinkIconStyles } from './Menu.styles';

const MenuLink = (props) => {
  const {
    children,
    component,
    icon,
    onClick,
    href,
    isActive,
    hideSidebarOnClick,
    ...rest
  } = props;

  let as = '';

  if (href) {
    as = 'a';
  } else if (!href && onClick) {
    as = 'button';
  }

  let customComponentProps = {};
  if (as === 'button') {
    customComponentProps.type = 'button';
  }
  if (as === 'a') {
    customComponentProps = { ...rest };
  }
  if (component) {
    as = component;
    customComponentProps = { ...rest };
  }

  return (
    <LinkStyles
      as={as}
      onClick={onClick}
      href={href}
      isActive={isActive}
      {...customComponentProps} // eslint-disable-line
    >
      {icon && <LinkIconStyles icon={icon} size={20} />}
      {children}
    </LinkStyles>
  );
};

export default MenuLink;
