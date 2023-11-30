import React from 'react';

import FancyProfilePicture, { IFancyProfilePicture } from '../../atoms/FancyProfilePicture/FancyProfilePicture';
import Typography from '../../atoms/Typography/Typography';
import { TextWrapper, Wrapper } from './FancyMiniProfile.style';
import { TTypography } from '@/Components/Interface/TTypography';
import { TThemeTypes } from '@/Components/Interface/TUiColors';
import { TLayer } from '@/Components/Interface/TLayer';
import { TSpacings } from '../../Interface/TSpacings';

// the interface for the different sizes
interface IPillSettings {
  [key: string]: {
    imageSize: IFancyProfilePicture['size'];
    padding: TSpacings | undefined;
    textSize: TTypography;
    paddingToEdge: TSpacings;
    gapPictureAndText: TSpacings;
  };
}

// the stettings for the different sizes
const pillSettings: IPillSettings = {
  sm: {
    imageSize: 'xs',
    padding: undefined,
    textSize: 'verysmText',
    paddingToEdge: 'lg',
    gapPictureAndText: 'sm',
  },
  md: {
    imageSize: 'xs',
    padding: 'xs',
    textSize: 'smText',
    paddingToEdge: 'lg',
    gapPictureAndText: 'sm',
  },
  lg: {
    imageSize: 'sm',
    padding: 'xs',
    textSize: 'h5',
    paddingToEdge: 'xl',
    gapPictureAndText: 'sm',
  },
};

export type TTextAlign = 'left' | 'right';
interface IFancyMiniprofile {
  alignText?: TTextAlign;
  headingText?: string;
  subHeadingText?: string;
  imageURL?: string;
  size?: keyof typeof pillSettings;
  themeType?: TThemeTypes;
  layer?: TLayer;
  shadow?: boolean;
}
// --------------------------------------------------------------------------- //
// ------ The MiniProfile rendes a image with a heading and description ------ //
// --------------------------------------------------------------------------- //
export default function FancyMiniProfile(props: IFancyMiniprofile) {
  const { alignText, size, imageURL, headingText, subHeadingText, themeType, layer, shadow } = { ...defaultProps, ...props };

  //get the settings from the picked size
  const getSizeProps = pillSettings[size || 'sm'];

  return (
    <Wrapper
      $size={getSizeProps.padding}
      $gapSpacing={getSizeProps.gapPictureAndText}
      $themeType={themeType}
      $layer={layer}
      $shadow={shadow}
    >
      {/* The Profile Picture */}
      <FancyProfilePicture rounded="complete" size={getSizeProps.imageSize} src={imageURL || ''} />
      {/* The wraper with the heading and subheading text  */}
      <TextWrapper $alignText={alignText} $paddingToedge={getSizeProps.paddingToEdge}>
        {headingText && (
          <Typography type="inlineElement" variant={getSizeProps.textSize} weight="bold">
            {headingText}
          </Typography>
        )}
        {subHeadingText && (
          <Typography type="inlineElement" variant={getSizeProps.textSize}>
            {subHeadingText}
          </Typography>
        )}
      </TextWrapper>
    </Wrapper>
  );
}

const defaultProps: IFancyMiniprofile = {
  size: 'sm',
};