import PropTypes from 'prop-types';

import { BreadcrumbsWrapperStyles } from './Breadcrumbs.styles';

const Breadcrumbs = (props) => {
  const { className = '', dataTestId = null, children } = props;

  return (
    <BreadcrumbsWrapperStyles className={className} data-testid={dataTestId}>
      {children}
    </BreadcrumbsWrapperStyles>
  );
};

Breadcrumbs.propTypes = {
  /**
   * Add className to the outermost element
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default Breadcrumbs;
