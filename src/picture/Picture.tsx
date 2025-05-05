import React from 'react';

import { StyledPicture, StyledPictureWrapper } from './Picture.styles';

interface PictureSource {
  src: string;
  webp?: string;
  avif?: string;
}

export interface PictureProps {
  /**
   * Add className to the outermost element.
   */
  className?: string;

  /**
   * Add test attribute to the element. Used internally for testing.
   */
  dataTestId?: string;

  /**
   * If supplied image wrapper will have this height (width stretches to 100% of container).
   */
  height?: number;

  /**
   * Image src path OR object for modern image formats
   */
  src?: string | PictureSource;

  /**
   * Alt text for the image
   */
  alt: string;
}

const Picture = (props: PictureProps) => {
  const {
    src = '',
    alt,
    height = null,
    className = '',
    dataTestId = null
  } = props;

  let avifSrc: string | undefined;
  let webpSrc: string | undefined;
  let origSrc: string = typeof src === 'string' ? src : src?.src || '';

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

export default Picture;
