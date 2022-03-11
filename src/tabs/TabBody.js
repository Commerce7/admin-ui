import PropTypes from 'prop-types';

import { TabBodyStyles } from './Tabs.styles';

const TabBody = (props) => {
  const { children, dataTestId, className } = props;

  return (
    <TabBodyStyles className={className} data-testid={dataTestId}>
      {children}
    </TabBodyStyles>
  );
};

TabBody.defaultProps = {
  children: null,
  dataTestId: null,
  className: null
};

TabBody.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Add className to the outermost element
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string
};

export default TabBody;
