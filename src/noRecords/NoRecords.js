import PropTypes from 'prop-types';

import DisplayIcon from '../displayIcon';
import Text from '../text';

import { StyledEmptyMessage, StyledHeading } from './NoRecords.styles';

const NoRecords = (props) => {
  const { className, dataTestId, title, description, icon, iconVariant } =
    props;
  return (
    <StyledEmptyMessage data-testid={dataTestId} className={className}>
      <DisplayIcon icon={icon} variant={iconVariant} />
      <StyledHeading level={3}>{title}</StyledHeading>
      {description && <Text secondary>{description}</Text>}
    </StyledEmptyMessage>
  );
};

NoRecords.defaultProps = {
  title: 'No records found',
  description: null,
  className: null,
  dataTestId: 'grid-no-records',
  icon: 'search',
  iconVariant: 'default'
};

NoRecords.propTypes = {
  /**
   * The title for the component.
   */
  title: PropTypes.string,

  /**
   * The description for below the title.
   */
  description: PropTypes.string,

  /**
   * The icon displayed.
   */
  icon: PropTypes.string,

  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string,

  /**
   * Set the visual property of the component.
   */
  iconVariant: PropTypes.oneOf([
    'default',
    'success',
    'warning',
    'error',
    'info'
  ])
};

export default NoRecords;
