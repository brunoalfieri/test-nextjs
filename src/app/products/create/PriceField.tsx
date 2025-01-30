import { Input } from '@/components/inputs/Input';
import { Typography } from '@/components/typography/Typography';
import { ProductCreateSchema } from '@/service/actions/products/schema';
import { AttachMoney } from '@mui/icons-material';
import { useFormContext } from 'react-hook-form';

export function PriceField() {
  const formContext = useFormContext<ProductCreateSchema>();
  console.log(formContext.watch('price'));
  const formatMoney = (value: number) => {
    if (!value) return '0,00';

    const integerPart = value.toString().padStart(3, '0').slice(0, -2);
    const cents = value.toString().padStart(2, '0').slice(-2);

    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${formattedInteger},${cents}`;
  };
  const register = formContext.register('price', { required: true });
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
          value={formatMoney(formContext.watch('price'))}
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
        <Input.Addons.Helper as="small" />
      </Input.Root>
    </div>
  );
}
