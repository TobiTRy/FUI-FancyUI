import { FancyListBox } from '@/Components/UI/Molecules/FancyListBox';
import { Fieldset } from '@/Components/UI/Molecules/Fieldset';

export interface FancyRadioListItem {
  title: string;
  description?: string;
  itemKey: string;
}

export type FancyRadioListProps = {
  items: FancyRadioListItem[];
  name: string;
  handler?: (itemKey: string) => void;
} & Omit<React.ComponentProps<typeof Fieldset>, 'children'> &
  Omit<React.ComponentProps<typeof FancyListBox>, 'children'>;