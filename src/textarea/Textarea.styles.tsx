// @ts-nocheck
import styled from 'styled-components';

import { StyledFormItem } from '../common/form/styles';

interface StyledTextareaProps {
  height: number;
  hasErrorMessage?: boolean;
}

const StyledTextarea = styled(StyledFormItem).attrs({
  as: 'textarea'
})<StyledTextareaProps>`
  cursor: text;
  height: ${({ height }) => `${height}px`};
  padding-top: 14px;
  padding-bottom: 14px;
`;

export { StyledTextarea };
