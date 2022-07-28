import styled from 'styled-components';

const StyledPictureWrapper = styled.div`
  width: 100%;
  ${({ height }) => (height ? `height: ${height}px;` : '')}

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPicture = styled.picture`
  margin: 0 auto;
  ${({ height }) => (height ? `max-height: ${height}px;` : '')}

  img,
  source {
    margin: 0 auto;
    ${({ height }) => (height ? `max-height: ${height}px;` : '')}
  }
`;

export { StyledPicture, StyledPictureWrapper };
