import { TFancyLineWithHTMLAttributes } from '@/components/atoms/FancyLine/TFancyLine.model';
import { TTitleForComponent } from '@/components/atoms/TitleForComponent';
import { TListBox } from '@/components/molecules/ListBox/ListBox';
import { TListBoxItemProps } from '@/components/molecules/ListBox/ListBoxItem';
import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TFancyListBox = {
  children: React.ReactNode;
  seperator?: TFancyLineWithHTMLAttributes;
  title?: {
    titleAlign?: TTitleForComponent['titleAlign'];
    title: TTitleForComponent['title'];
  };
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  itemSettings?: TListBoxItemProps;
} & TListBox;
