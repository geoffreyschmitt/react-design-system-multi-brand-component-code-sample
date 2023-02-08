import { convertPxToRem } from 'link-to-core-component';
//colors out of code sample
import { colors } from '../../../';

export const implementationCustomStyle = `
    .breadcrumb__item {
      font-size: ${convertPxToRem(12)};
      line-height: 2.67;
      margin-right: 0.58em;
      color: ${colors.fontColorBlack};
      &:not(:first-child) {
        margin-left: 1em;
      }
    }

    a.breadcrumb__item {
      text-decoration: none;
    }
    
    .breadcrumb__separator {
      position: relative;
      width: 3px;
      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 4.5px;
        height: 4.5px;
        border-right: solid 1px ${colors.fontColorBlack};
        border-bottom: solid 1px ${colors.fontColorBlack};
        transform: translate3d(-50%, -50%, 0) rotate(-45deg);
      }
    }
`;
