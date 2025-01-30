import { Input } from '@/components/inputs/Input';
import { Typography } from '@/components/typography/Typography';
import { ProductCreateSchema } from '@/service/actions/products/schema';
import { useFormContext } from 'react-hook-form';

export function NameField() {
  const formContext = useFormContext<ProductCreateSchema>();
  return (
    <div>
      <Typography.Label as="label" htmlFor="name">
        Title
      </Typography.Label>
      <Input.Root>
        <Input.Textarea
          size="sm"
          rows={4}
          placeholder={`Ex: Notebook Acer Nitro V15 Core I5-13420h 8gb 512gb Rtx 3050 Cor Preto`}
          {...formContext.register('name', { required: true })}
          defaultValue={formContext.getValues('name')}
        />
        <Input.Addons.Helper as="small" />
      </Input.Root>
    </div>
  );
}
