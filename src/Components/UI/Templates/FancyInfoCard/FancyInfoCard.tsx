import React from 'react';

import InfoCard from '../../Molecules/InfoCard/InfoCard';
import FancyContent from '../../Molecules/FancyContent/FancyContent';
import { TypographyList } from '../../Atoms/Typography/Typography';
import { TSizes } from '../../Interface/TComponentSizes';

type TSizeObj = {
  iconSize: TSizes;
  title: keyof typeof TypographyList;
  descriptionSize: keyof typeof TypographyList;
};

type TSizesObject = {
  [key: string]: TSizeObj;
};

const sizes: TSizesObject = {
  sm: {
    iconSize: 'md',
    title: 'h6',
    descriptionSize: 'smText',
  },
  md: {
    iconSize: 'lg',
    title: 'h5',
    descriptionSize: 'content',
  },
  lg: {
    iconSize: 'lg',
    title: 'h4',
    descriptionSize: 'button',
  },
};

type TFancyInfoCardProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
} & React.ComponentProps<typeof InfoCard>;

export default function FancyInfoCard(props: TFancyInfoCardProps) {
  const { title, description, icon, size = 'md', ...infoCardProps } = props;

  return (
    <InfoCard {...infoCardProps} size={size}>
      <FancyContent flexAlign="flex-start" flexJustify="flex-start">
        {icon && <FancyContent.Icon size={sizes[size].iconSize}>{icon}</FancyContent.Icon>}
        {title && <FancyContent.Title fontVariant={sizes[size].title}>{title}</FancyContent.Title>}
        {description && <FancyContent.Description fontVariant={sizes[size].descriptionSize}>{description}</FancyContent.Description>}
      </FancyContent>
    </InfoCard>
  );
}