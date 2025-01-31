import { Input } from '@/components/inputs/Input';
import { Typography } from '@/components/typography/Typography';
import { ProductsFilterSchema } from '@/service/actions/products/schema';
import { formatToCurrency } from '@/utils/formatToCurrency';
import { AttachMoney } from '@mui/icons-material';
import { useFormContext } from 'react-hook-form';

export function MaxPriceField() {
  const formContext = useFormContext<ProductsFilterSchema>();
  const maxPriceRegister = formContext.register('maxPrice', { required: true });
  const price = formContext.watch('maxPrice');

  return (
    <div>
      <Typography.Label as="label" htmlFor="maxPrice">
        Maximum Price
      </Typography.Label>
      <Input.Root formNoValidate>
        <Input.Text.Root
          size="lg"
          placeholder={`Ex: Notebook Acer Nitro V15 Core I5-13420h 8gb 512gb Rtx 3050 Cor Preto`}
          {...maxPriceRegister}
          ref={undefined}
          value={formatToCurrency(price)}
          onBlur={(e) => {
            formContext.setValue(
              'maxPrice',
              Number(e.target.value.replace(/\D/g, ''))
            );
          }}
          onChange={(e) => {
            formContext.setValue(
              'maxPrice',
              Number(e.target.value.replace(/\D/g, ''))
            );
          }}
        >
          <Input.Text.IconLeft icon={AttachMoney} />
        </Input.Text.Root>
        <Input.Addons.Helper as="small" />
      </Input.Root>
    </div>
  );
}
