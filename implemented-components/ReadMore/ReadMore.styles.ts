import { convertPxToRem } from 'link-to-core-component';
//colors out of code sample
import { colors } from '../../../';

export const implementationCustomStyle = `
    .read-more__button {
        font-size: ${convertPxToRem(16)};
        font-weight: bold;
        line-height: 2;
        color: ${colors.fontColorBlack};
    }
`;
