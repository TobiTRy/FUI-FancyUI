import { TFancyImage } from '@/components/atoms/FancyImage/FancyImage.model';
import { StyledImage } from './FancyImage.style';
import { isAspectRatioValid } from '@/utils/validations/isAspectRatioValid';

// --------------------------------------------------------------------------- //
// -------------- The Definition for the FancyImage Component ---------------- //
// --------------------------------------------------------------------------- //
export default function FancyImage(props: TFancyImage) {
  const { aspectRatio, darken, externalStyle, ...imgProps } = props;

  // Validate the aspect ratio if it is provided
  if (aspectRatio && !isAspectRatioValid(aspectRatio)) {
    throw new Error('The aspect ratio is not valid. Please use the format "16/9"');
  }

  // Render the image with the provided props
  return <StyledImage $darken={darken} $aspectRatio={aspectRatio} $externalStyle={externalStyle} {...imgProps} />;
}
