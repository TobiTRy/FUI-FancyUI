import { TLayer } from '@/types/TLayer';

import { TComponentSizes } from '@/types/TComponentSizes';
import { FancyProfilePicture } from '@/components/atoms/FancyProfilePicture';
import { sizeSettings } from '@/components/molecules/FancyMiniProfile/sizeSettings';
import { Chip } from '@/components/molecules/Chip';
import { generateChipStyle } from '@/components/molecules/FancyMiniProfile/FancyMiniProfile.style';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

type TFancyMiniprofile = {
  title?: string;
  subTitle?: string;
  src?: string;
  sizeC?: TComponentSizes;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  shadow?: boolean;
  alignImage?: 'left' | 'right';
} & React.HTMLAttributes<HTMLDivElement>;
// --------------------------------------------------------------------------- //
// ------ The MiniProfile rendes a image with a heading and description ------ //
// --------------------------------------------------------------------------- //
export default function FancyMiniProfile(props: TFancyMiniprofile) {
  const { sizeC = 'sm', src, title, subTitle, themeType, layer = 3, alignImage = 'right', ...htmlProps } = props;

  // Define a function to calculate the spacing position for the chip
  const chipStyle = generateChipStyle({ sizeC, themeType, layer, $alignImage: alignImage });

  return (
    <Chip sizeC={sizeC} themeType={themeType} layer={layer} externalStyle={chipStyle} {...htmlProps}>
      <FancyProfilePicture className="miniprofile_content-image" sizeC="complete" src={src || ''}></FancyProfilePicture>
      <Chip.Content className="miniprofile_content" alignIcon={alignImage} gapBetweenText="0">
        {title && <Chip.Content.Title fontVariant={sizeSettings[sizeC].titleSize}> {title}</Chip.Content.Title>}
        {subTitle && (
          <Chip.Content.Description fontVariant={sizeSettings[sizeC].subtitleSize}>{subTitle}</Chip.Content.Description>
        )}
      </Chip.Content>
    </Chip>
  );
}
