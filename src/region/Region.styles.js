import styled, { keyframes, css } from 'styled-components';

const revealAnimationDelay = () => {
  let styles = '';

  for (let i = 1; i <= 20; i += 1) {
    styles += `
        &:nth-child(${i}) {
          animation-delay: ${i * 0.15}s;
        }
       `;
  }

  return css`
    ${styles}
  `;
};

const reveal = keyframes`
    0% {
        transform: translateY(-10px);
        opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
`;

const StyledRegion = styled.div`
  transform: translateY(-10px);
  opacity: 0;
  margin-bottom: 30px;

  transition: border 0.3s ease-in-out;
  animation: ${reveal} 0.3s ease-in forwards;
  ${revealAnimationDelay()}

  ${({ borderBottom, theme, isAnimated }) => `
    border-bottom: ${
      borderBottom ? `1px solid ${theme.c7__ui.borderColor}` : ''
    };
    padding-bottom: ${borderBottom ? '30px' : ''};

    ${
      isAnimated &&
      `
    opacity: 1;
    animation: none;
    transform: none;
    transform-style: flat; 
    `
    }
  `}
`;

export { StyledRegion };
