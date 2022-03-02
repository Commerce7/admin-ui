import PropTypes from 'prop-types';
import { TabsStyles } from './Tabs.styles';

const Tabs = (props) => {
  const { children, dataTestId, className } = props;
  return (
    <TabsStyles
      aria-label="Secondary navigation"
      className={className}
      data-testid={dataTestId}
    >
      {children}
    </TabsStyles>
  );
};

Tabs.defaultProps = {
  children: null,
  dataTestId: null,
  className: null
};

Tabs.propTypes = {
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

export default Tabs;
