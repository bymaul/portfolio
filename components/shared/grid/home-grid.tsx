import GridItem from '@/components/shared/grid/item';
import GridLayout from '@/components/shared/grid/layout';
import { gridItems as homeGridItems, layouts as homeLayouts } from '@/config/grid';

export default function HomeGrid() {
  return (
    <GridLayout layouts={homeLayouts}>
      {homeGridItems.map((item) => (
        <GridItem key={item.i} id={item.i} component={item.component} />
      ))}
    </GridLayout>
  );
}
