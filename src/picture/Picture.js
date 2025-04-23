import PropTypes from 'prop-types';

import { StyledPicture, StyledPictureWrapper } from './Picture.styles';

const Picture = (props) => {
  const {
    src = null,
    alt,
    height = null,
    className = null,
    dataTestId = null
  } = props;

  let avifSrc;
  let webpSrc;
  let origSrc = src;
  if (typeof src === 'object') {
    avifSrc = src.avif;
    webpSrc = src.webp;
    origSrc = src.src;
  }

  return (
    <StyledPictureWrapper
      className={className}
      data-testid={dataTestId}
      height={height}
    >
      <StyledPicture height={height}>
        {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img src={origSrc} alt={alt} />
      </StyledPicture>
    </StyledPictureWrapper>
  );
};

Picture.propTypes = {
  /**
   * Add className to the outermost element.
   */
  className: PropTypes.string,

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId: PropTypes.string,

  /**
   * If supplied image wrapper will have this height (width stretches to 100% of container).
   */
  height: PropTypes.number,

  /**
   * Image src path OR object for modern image formats
   */
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      src: PropTypes.string,
      webp: PropTypes.string,
      avif: PropTypes.string
    })
  ])
};

export default Picture;
