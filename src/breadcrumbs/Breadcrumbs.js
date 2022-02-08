import PropTypes from 'prop-types';
import { BreadcrumbWrapperStyles } from './Breadcrumbs.styles';

const Breadcrumbs = (props) => {
  const { className, dataTestId, children } = props;

  return (
    <BreadcrumbWrapperStyles className={className} data-testid={dataTestId}>
      {children}
    </BreadcrumbWrapperStyles>
  );
};

Breadcrumbs.defaultProps = {
  className: '',
  dataTestId: null
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
