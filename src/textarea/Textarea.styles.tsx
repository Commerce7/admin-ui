// @ts-nocheck
import styled from 'styled-components';

import { StyledFormItem } from '../common/form/styles';

const StyledTextarea = styled(StyledFormItem).attrs({
  as: 'textarea'
})`
  cursor: text;
  height: ${({ height }) => `${height}px`};
  padding-top: 14px;
  padding-bottom: 14px;
`;

export { StyledTextarea };
