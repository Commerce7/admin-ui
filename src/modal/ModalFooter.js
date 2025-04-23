import PropTypes from 'prop-types';

import { StyledModalFooter } from './ModalFooter.styles';

const ModalFooter = (props) => {
  const { children, className = '' } = props;
  return (
    <StyledModalFooter className={className}>{children}</StyledModalFooter>
  );
};

ModalFooter.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string
};

export default ModalFooter;
