import PropTypes from 'prop-types';
import {
  BreadcrumbItemStyles,
  BreadcrumbButtonStyles,
  BreadcrumbLinkStyles
} from './Breadcrumb.styles';

const BreadcrumbItem = (props) => {
  const { breadcrumb, isActive, component, target, rel } = props;

  let as = 'a';
  if (component) {
    as = component;
  }

  if (breadcrumb.to) {
    return (
      <BreadcrumbLinkStyles
        as={as}
        to={breadcrumb.to}
        href={breadcrumb.to}
        target={target}
        rel={rel}
        isActive={() => isActive}
      >
        <BreadcrumbItemStyles secondary={!isActive} strong={isActive}>
          {breadcrumb.label}
        </BreadcrumbItemStyles>
      </BreadcrumbLinkStyles>
    );
  }

  if (breadcrumb.onClick) {
    return (
      <BreadcrumbButtonStyles onClick={breadcrumb.onClick} type="button">
        <BreadcrumbItemStyles secondary={!isActive}>
          {breadcrumb.label}
        </BreadcrumbItemStyles>
      </BreadcrumbButtonStyles>
    );
  }

  return (
    <BreadcrumbItemStyles secondary={!isActive}>
      {breadcrumb.label}
    </BreadcrumbItemStyles>
  );
};

BreadcrumbItem.propTypes = {
  breadcrumb: PropTypes.shape({
    label: PropTypes.string.isRequired,
    to: PropTypes.string,
    onClick: PropTypes.func
  }).isRequired
};

export default BreadcrumbItem;
