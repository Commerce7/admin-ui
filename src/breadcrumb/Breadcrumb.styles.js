import styled from 'styled-components';

import Text from '../text';
import Button from '../button';

const BreadcrumbWrapperStyles = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`;

const BreadcrumbLinkStyles = styled.div``;

const BreadcrumbItemStyles = styled(Text)``;

const BreadcrumbDividerStyles = styled.span`
  margin: 0 5px;
  font-size: 10px;
`;

const BreadcrumbButtonStyles = styled(Button).attrs({
  variant: 'text'
})`
  height: auto;
  padding: 0;
`;

export {
  BreadcrumbWrapperStyles,
  BreadcrumbDividerStyles,
  BreadcrumbItemStyles,
  BreadcrumbButtonStyles,
  BreadcrumbLinkStyles
};
