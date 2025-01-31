import { Input } from '@/components/inputs/Input';
import { Typography } from '@/components/typography/Typography';
import { FilterSchema } from '@/service/actions/products/schema';
import { SearchRounded } from '@mui/icons-material';
import { useFormContext } from 'react-hook-form';

export function SearchField() {
  const formContext = useFormContext<FilterSchema>();
  const searchRegister = formContext.register('search');
  return (
    <div>
      <Typography.Label as="label" htmlFor="search">
        Search
      </Typography.Label>
      <Input.Root formNoValidate>
        <Input.Text.Root
          {...searchRegister}
          size="sm"
          type="search"
          placeholder="Search a product with text"
        >
          <Input.Text.IconRight
            type="button"
            buttonProps={{
              type: 'submit',
            }}
            icon={SearchRounded}
          />
        </Input.Text.Root>
      </Input.Root>
    </div>
  );
}
