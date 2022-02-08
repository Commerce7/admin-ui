import PropTypes from 'prop-types';
import {
  BreadcrumbItemStyles,
  BreadcrumbButtonStyles,
  BreadcrumbLinkStyles,
  BreadcrumbWrapper
} from './Breadcrumb.styles';

const Breadcrumb = (props) => {
  const { className, component, href, children, dataTestId, onClick, ...rest } =
    props;

  let as = 'a';
  let customComponentProps = {};
  if (component) {
    as = component;
    customComponentProps = { ...rest };
  }

  if (href) {
    return (
      <BreadcrumbWrapper className={className} data-testid={dataTestId}>
        <BreadcrumbLinkStyles
          as={as}
          href={href}
          {...customComponentProps} // eslint-disable-line
        >
          <BreadcrumbItemStyles>{children}</BreadcrumbItemStyles>
        </BreadcrumbLinkStyles>
      </BreadcrumbWrapper>
    );
  }

  if (onClick) {
    return (
      <BreadcrumbWrapper className={className} data-testid={dataTestId}>
        <BreadcrumbButtonStyles onClick={onClick} type="button">
          <BreadcrumbItemStyles>{children}</BreadcrumbItemStyles>
        </BreadcrumbButtonStyles>
      </BreadcrumbWrapper>
    );
  }

  return (
    <BreadcrumbWrapper className={className} data-testid={dataTestId}>
      <BreadcrumbItemStyles>{children}</BreadcrumbItemStyles>
    </BreadcrumbWrapper>
  );
};

Breadcrumb.defaultProps = {
  className: '',
  component: null,
  href: null,
  dataTestId: null,
  onClick: null
};

Breadcrumb.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Add className to the outermost element
   */
  className: PropTypes.string,

  /**
   * Callback fired when the component is clicked.
   */
  onClick: PropTypes.func,

  /**
   * The component to render as a replacement for `<a/>`.
   * This can be used to pass in components from client-side routing libraries like react-router.
   * If this property is set, all other props will be passed to the component.
   */
  component: PropTypes.any, // eslint-disable-line

  /**
   * The url to link to.
   */
  href: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Breadcrumb;
