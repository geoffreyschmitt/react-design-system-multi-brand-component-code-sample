import React from 'react';

import { StyledBreadcrumb } from './Breadcrumb.styles';

import { BreadcrumbItemProps, BreadcrumbProps } from './Breadcrumb.types';

const Breadcrumb = ({
  breadcrumbItemList,
  breadcrumbItemSeparator = '>',
  activeIndexBreadcrumbIndex = 0,
  renderLink,
  componentClassname = 'breadcrumb',
  customClassnames = '',
  customStyle = '',
}: BreadcrumbProps) => {
  const getBreadcrumbItemHtml = (item: BreadcrumbItemProps, index: number) => {
    const breadcrumbItemClasses = `${componentClassname}__item${
      index === activeIndexBreadcrumbIndex
        ? ` ${componentClassname}__item--is-active`
        : ''
    }`;
    if (item.href) {
      return renderLink ? (
        renderLink({
          href: item.href,
          children: item.name,
          additionalParams: {
            className: breadcrumbItemClasses,
          },
        })
      ) : (
        <a href={item.href} className={breadcrumbItemClasses}>
          {item.name}
        </a>
      );
    }
    return <span className={breadcrumbItemClasses}>{item.name}</span>;
  };

  return (
    <StyledBreadcrumb
      className={`${componentClassname} ${customClassnames}`}
      customStyle={customStyle}
    >
      {breadcrumbItemList.map((item, index) => (
        <div key={item.name} className={`${componentClassname}__item-wrapper`}>
          {index > 0 && index < breadcrumbItemList.length && (
            <div className={`${componentClassname}__separator`}>
              {breadcrumbItemSeparator}
            </div>
          )}
          {getBreadcrumbItemHtml(item, index)}
        </div>
      ))}
    </StyledBreadcrumb>
  );
};
Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
