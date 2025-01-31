import { Typography } from '@/components/typography/Typography';
import { ProductsFilterSchema } from '@/service/actions/products/schema';
import { formatCentsToReais } from '@/utils/formatToReais';
import { Slider } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export function SlidePriceField(props: {
  cheaper: number;
  mostExpensive: number;
}) {
  const formContext = useFormContext<ProductsFilterSchema>();
  return (
    <div>
      <Typography.Label as="div" size="sm">
        <strong>Cheaper: </strong>
        {formatCentsToReais(props.cheaper)}
      </Typography.Label>
      <Slider
        value={[formContext.watch('minPrice'), formContext.watch('maxPrice')]}
        onChange={(event, value) => {
          if (typeof value === 'object') {
            formContext.setValue('minPrice', value[0]);
            formContext.setValue('maxPrice', value[1]);
          }
        }}
        getAriaValueText={formatCentsToReais}
        valueLabelDisplay="auto"
        valueLabelFormat={formatCentsToReais}
        step={1}
        min={props.cheaper}
        max={props.mostExpensive}
        className="flex col-span-3 mt-2"
      />
      <Typography.Label as="div" size="sm" className="text-right w-full mt-2">
        <strong>Most Expensive: </strong>
        {formatCentsToReais(props.mostExpensive)}
      </Typography.Label>
    </div>
  );
}
