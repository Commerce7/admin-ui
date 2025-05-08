// @ts-nocheck
import styled from 'styled-components';

interface StyledPictureWrapperProps {
  height?: number | null;
}

const StyledPictureWrapper = styled.div<StyledPictureWrapperProps>`
  width: 100%;
  ${({ height }) => (height ? `height: ${height}px;` : '')}

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface StyledPictureProps {
  height?: number | null;
}

const StyledPicture = styled.picture<StyledPictureProps>`
  margin: 0 auto;
  ${({ height }) => (height ? `max-height: ${height}px;` : '')}

  img,
  source {
    margin: 0 auto;
    ${({ height }) => (height ? `max-height: ${height}px;` : '')}
  }
`;

export { StyledPicture, StyledPictureWrapper };
