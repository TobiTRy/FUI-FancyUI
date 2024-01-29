import { ButtonStyle } from './Button.style';
import { IButton } from './Button.model';
import { RawButton } from '@/components/atoms/RawButton';

// --------------------------------------------------------------------------- //
// --------------- A normal Button with Style from the Theme ----------------- //
// --------------------------------------------------------------------------- //
export default function Button(props: IButton) {
  const {
    children,
    wide,
    sizeC = 'md',
    themeType,
    layer,
    textColor,
    borderRadius,
    hoverColor,
    outlined,
    externalStyle,
    textHover,
    notAButton,
    ...htmlProps
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <>
      {notAButton ? (
        <ButtonStyle
          $sizeC={sizeC}
          $borderRadius={borderRadius}
          $wide={wide}
          $themeType={themeType}
          $layer={layer}
          $textColor={textColor}
          $hoverColor={hoverColor}
          $outlined={outlined}
          $externalStyle={externalStyle}
          $textHover={textHover}
          {...htmlProps}
        >
          {children}
        </ButtonStyle>
      ) : (
        <RawButton {...htmlProps}>
          <ButtonStyle
            $sizeC={sizeC}
            $wide={wide}
            $themeType={themeType}
            $layer={layer}
            $textColor={textColor}
            $hoverColor={hoverColor}
            $outlined={outlined}
            $externalStyle={externalStyle}
            $textHover={textHover}
          >
            {children}
          </ButtonStyle>
        </RawButton>
      )}
    </>
  );
}

const defaultProps = {
  themeType: 'accent' as const,
  size: 'md',
  layer: 0 as const,
};
