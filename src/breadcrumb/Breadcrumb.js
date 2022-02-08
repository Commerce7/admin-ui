import { Fragment } from 'react';
import PropTypes from 'prop-types';
import BreadcrumbItem from './BreadcrumbItem';
import {
  BreadcrumbWrapperStyles,
  BreadcrumbDividerStyles
} from './Breadcrumb.styles';

const Breadcrumb = (props) => {
  const { breadcrumbs, component, className, target, rel, dataTestId } = props;
  return (
    <BreadcrumbWrapperStyles className={className} data-testid={dataTestId}>
      {breadcrumbs.map((breadcrumb, index) => {
        const isActive =
          breadcrumbs.length > 1 && index === breadcrumbs.length - 1;
        return (
          <Fragment key={breadcrumb.label}>
            {index > 0 && (
              <BreadcrumbDividerStyles>&gt;</BreadcrumbDividerStyles>
            )}
            <BreadcrumbItem
              breadcrumb={breadcrumb}
              isActive={isActive}
              component={component}
              target={target}
              rel={rel}
            />
          </Fragment>
        );
      })}
    </BreadcrumbWrapperStyles>
  );
};

Breadcrumb.defaultProps = {
  className: '',
  component: null,
  target: null,
  rel: null,
  dataTestId: null
};

Breadcrumb.propTypes = {
  /**
   * Add className to the outermost element
   */
  className: PropTypes.string,

  /**
   * The component to render as a replacement for `<a/>`.
   * This can be used to pass in components from client-side routing libraries like react-router.
   * If this property is set, all other props will be passed to the component.
   */
  component: PropTypes.any, // eslint-disable-line

  /**
   * Object defining the breadcrumb properties.
   */
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string
    })
  ).isRequired,

  /**
   * Set the window to open the link in.
   * If this field is set to '_blank', the rel prop should be set to 'noopener noreferrer' for security reasons.
   */
  target: PropTypes.string,

  /**
   * Set the rel property of the link
   */
  rel: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Breadcrumb;
