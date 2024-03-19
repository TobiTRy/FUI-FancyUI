import { TLabeledInput } from '@/components/molecules/LabeledInput/TLabledInput.model';
import { clampLayer } from '@/utils/functions/clampLayer';

import { InputWrapper, Wrapper } from './LabeledInput.style';
import { InputLabel } from '@/components/atoms/InputLabel';
import { FancyLine } from '@/components/atoms/FancyLine';
import { flipThemeColor } from 'lib';

export default function LabeledInput(props: TLabeledInput) {
  const {
    id,
    inputElement,
    systemMessageType,
    label,
    hasValue,
    hasPlaceholder,
    themeType = 'primary',
    layer = 3,
    underline,
    labelVariant,
    isActive,
    align,
  } = props;

  // Check if the label should move up
  const labelShouldMoveUp = hasValue || !!hasPlaceholder;

  return (
    <Wrapper>
      {/* The Labled thats animated and adjusts the padding with the type of the Input */}
      {label && (
        <InputLabel
          lableVariant={labelVariant}
          align={align}
          themeType={themeType === 'primary' ? 'secondary' : 'primary'}
          id={id}
          isActive={labelShouldMoveUp}
          systemMessageType={systemMessageType}
        >
          {label}
        </InputLabel>
      )}
      {/* The wrapper for the input field to style and align the input*/}
      <InputWrapper $isActive={labelVariant !== 'static' && labelShouldMoveUp} $isLabelProvided={!!label}>
        {inputElement}
      </InputWrapper>
      {underline && (
        <FancyLine
          systemMessageType={systemMessageType}
          themeType={themeType}
          thickness="2px"
          layer={layer ? clampLayer(layer + 2) : 3}
          isActive={isActive}
          externalStyle={{ position: 'absolute', bottom: '-2px', left: 0, width: '100%' }}
        />
      )}
    </Wrapper>
  );
}
