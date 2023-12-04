import { Placeholder, StyledImage } from './FancyProfilePicture.style';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import { Typography } from '../Typography';
import { TTypography } from '@/interface/TTypography';
import { TSize } from './sizeSettings';

// generate the text size based on the size prop
const getTextSize = (size: TSize | string): TTypography => {
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

export interface IFancyProfilePicture {
  src?: string;
  rounded?: 'sm' | 'md' | 'lg' | 'complete';
  size?: TSize | string;
  alt?: string;
  layer?: TLayer;
  themeType?: TThemeTypes;
  letterLength?: number;
  className?: string;
}
// --------------------------------------------------------------------------- //
//  ProfilePicture component to render with  different sizes and border radius //
// --------------------------------------------------------------------------- //
export default function FancyProfilePicture(props: IFancyProfilePicture) {
  const { src, rounded, size, alt, letterLength, className, ...placeholderProps } = { ...defaultProps, ...props };

  return src ? (
    <StyledImage className={className} src={src} alt={alt} $rounded={rounded} $size={size} />
  ) : (
    <Placeholder className={className} $rounded={rounded} $size={size} {...placeholderProps}>
      <Typography type="smText" variant={getTextSize(size)}>
        {alt.substring(0, letterLength ?? 2).toUpperCase()}
      </Typography>
    </Placeholder>
  );
}

const defaultProps = {
  size: 'md',
  alt: 'Profile',
};
