import { Input } from '@/components/inputs/Input';
import { Typography } from '@/components/typography/Typography';
import { ProductCreateSchema } from '@/service/actions/products/schema';
import { formatToCurrency } from '@/utils/formatToCurrency';
import { AttachMoney } from '@mui/icons-material';
import { useFormContext } from 'react-hook-form';

export function PriceField() {
  const formContext = useFormContext<ProductCreateSchema>();
  const register = formContext.register('price', { required: true });
  const price = formContext.watch('price');

  return (
    <div>
      <Typography.Label as="label" htmlFor="price">
        Price
      </Typography.Label>
      <Input.Root>
        <Input.Text.Root
          size="lg"
          placeholder={`Ex: Notebook Acer Nitro V15 Core I5-13420h 8gb 512gb Rtx 3050 Cor Preto`}
          {...register}
          ref={undefined}
          value={formatToCurrency(price)}
          onBlur={(e) => {
            formContext.setValue(
              'price',
              Number(e.target.value.replace(/\D/g, ''))
            );
          }}
          onChange={(e) => {
            formContext.setValue(
              'price',
              Number(e.target.value.replace(/\D/g, ''))
            );
          }}
        >
          <Input.Text.IconLeft icon={AttachMoney} />
        </Input.Text.Root>
        <Input.Addons.Helper />
      </Input.Root>
    </div>
  );
}
