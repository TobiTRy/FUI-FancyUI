// FancyGrid.tsx
import React from 'react';
import { styled } from 'styled-components';
import FancyGridItem from './FancyGridItem/FancyGridItem';

interface FancyGridProps {
  grid?: number;
  space?: string;
  children?: React.ReactNode;
}

const GridContainer = styled.div<FancyGridProps>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(${(props) => props.grid}, 1fr);
  grid-gap: ${(props) => props.space};
`;

// --------------------------------------------------------------------------- //
// ------- The FancyGrid to allocate the grid and give the items space ------- //
// --------------------------------------------------------------------------- //
function FancyGrid(props: FancyGridProps) {
  const { children, grid = 12, space } = props;
  return (
    <GridContainer grid={grid} space={space}>
      {children}
    </GridContainer>
  );
}

FancyGrid.Item = FancyGridItem;

export default FancyGrid;