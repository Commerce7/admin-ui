import PropTypes from 'prop-types';

import { StyledModalBody } from './ModalBody.styles';

const ModalBody = (props) => {
  const { children, className = '' } = props;
  return <StyledModalBody className={className}>{children}</StyledModalBody>;
};

ModalBody.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string
};

export default ModalBody;
