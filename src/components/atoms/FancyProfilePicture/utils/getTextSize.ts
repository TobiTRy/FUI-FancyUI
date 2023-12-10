import { TSize } from '@/components/molecules/TextAvatar/utils/getSize';
import { TTypography } from '@/interface/TTypography';

// generate the text size based on the size prop
export const getTextSize = (size: TSize | string): TTypography => {
  switch (size) {
    case 'xxs':
    case 'xs':
      return 'smText';
    case 'sm':
      return 'h6';
    case 'md':
      return 'h3';
    case 'lg':
      return 'h2';
    case 'xl':
    case 'xxl':
      return 'h1';
    default:
      return 'h4';
  }
};