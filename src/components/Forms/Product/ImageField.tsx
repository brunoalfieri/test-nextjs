import { Input } from '@/components/inputs/Input';
import { Typography } from '@/components/typography/Typography';
import { ProductCreateSchema } from '@/service/actions/products/schema';
import { ImageOutlined } from '@mui/icons-material';
import { useFormContext } from 'react-hook-form';

export function ImageField() {
  const formContext = useFormContext<ProductCreateSchema>();
  return (
    <div>
      <Typography.Label as="label" htmlFor="image">
        Image URL
      </Typography.Label>
      <Input.Root>
        <Input.Text.Root
          size="sm"
          placeholder="Ex: https://picsum.photos/200"
          {...formContext.register('image', { required: true })}
          defaultValue={formContext.getValues('image')}
        >
          <Input.Text.IconLeft icon={ImageOutlined} />
        </Input.Text.Root>
        <Input.Addons.Helper as="small" />
      </Input.Root>
    </div>
  );
}
