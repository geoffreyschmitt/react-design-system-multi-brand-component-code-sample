import React, { useEffect, useRef, useState } from 'react';

import { StyledReadMore } from './ReadMore.styles';

import { ReadMoreProps } from './ReadMore.types';

const ReadMore = ({
  defaultIsTruncated = true,
  seeMoreButtonContent,
  seeLessButtonContent,
  content,
  truncatedContent,
  truncateContentMaxLines = 3,
  truncateContentLength = null,
  truncateEndContent = '...',
  contentLineHeight = 1,
  componentClassname = 'read-more',
  customClassnames = '',
  customStyle = '',
  ...props
}: ReadMoreProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isTruncated, setIsTruncated] = useState<boolean>(defaultIsTruncated);
  const [contentWillBeClamped, setContentWillBeClamped] = useState(false);

  const handleClick = () => setIsTruncated((prev) => !prev);
  const getTruncatedContent = () => {
    if (truncatedContent) {
      return truncatedContent;
    }

    if (truncateContentLength === null) {
      return content;
    }

    const indexOfSpaceAfterMaxLength = content.indexOf(
      ' ',
      truncateContentLength,
    );
    return indexOfSpaceAfterMaxLength === -1
      ? content
      : `${content.substring(
          0,
          indexOfSpaceAfterMaxLength,
        )}${truncateEndContent}`;
  };

  const contentWillBeTruncated = content !== getTruncatedContent();

  useEffect(() => {
    if (!!truncateContentMaxLines && contentRef?.current) {
      const style = window.getComputedStyle(contentRef?.current);
      const fontSize = parseInt(style.getPropertyValue('font-size'), 10);
      //1.1 multiplier is just a secure way to be sure that scrollHeight is > than what we want (browser approximation)
      setContentWillBeClamped(
        contentRef.current.scrollHeight >
          contentLineHeight * fontSize * truncateContentMaxLines * 1.1,
      );
    }
  }, []);

  return (
    <StyledReadMore
      className={`${componentClassname} ${customClassnames}`}
      customStyle={customStyle}
      isTruncated={isTruncated}
      maxLines={truncateContentMaxLines}
      contentLineHeight={contentLineHeight}
      {...props}
    >
      <div className={`${componentClassname}__content`} ref={contentRef}>
        {isTruncated ? getTruncatedContent() : content}
      </div>
      {(contentWillBeTruncated || contentWillBeClamped) && (
        <button
          type={'button'}
          onClick={handleClick}
          className={`${componentClassname}__button`}
        >
          {isTruncated ? seeMoreButtonContent : seeLessButtonContent}
        </button>
      )}
    </StyledReadMore>
  );
};
ReadMore.displayName = 'ReadMore';

export default ReadMore;
