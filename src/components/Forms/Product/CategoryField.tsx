'use client';
import {
  categoriesService,
  ECategoryAction,
} from '@/service/actions/categories';
import { ProductCreateSchema } from '@/service/actions/products/schema';
import { Autocomplete, createFilterOptions, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Controller, useFormContext } from 'react-hook-form';

const filter = createFilterOptions<ProductCreateSchema['category']>();

export function CategoryField() {
  const formContext = useFormContext<ProductCreateSchema>();

  const categories = useQuery({
    queryKey: [ECategoryAction.CATEGORY_LIST],
    initialData: [],
    queryFn: categoriesService.list,
  });

  const hasError = !!formContext.formState.errors['category'];

  return (
    <div className="mt-6">
      <Controller
        name="category"
        control={formContext.control}
        render={({ field }) => {
          return (
            <Autocomplete
              loadingText="Loading.."
              loading={categories.isFetching}
              options={categories.data}
              slotProps={{
                listbox: {},
              }}
              {...field}
              freeSolo
              clearOnBlur
              defaultValue={formContext.getValues('category')}
              onChange={(event, newValue) => {
                if (typeof newValue === 'object' && newValue !== null) {
                  field.onChange({
                    id: newValue?.id ?? null,
                    label: newValue?.label,
                  });
                } else {
                  formContext.resetField('category', {
                    defaultValue: { id: null, label: '' },
                  });
                }
              }}
              getOptionLabel={(option) => {
                if (typeof option === 'string') return option;
                else return option.labelOption ?? option.label;
              }}
              size="small"
              getOptionKey={(option) => {
                if (typeof option === 'string') return option;
                else return option.id ?? 'NEW';
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some(
                  (option) => inputValue === option.label
                );
                if (inputValue !== '' && !isExisting) {
                  filtered.push({
                    id: null,
                    label: inputValue,
                    labelOption: `Add "${inputValue}"`,
                  });
                }

                return filtered;
              }}
              renderInput={(params) => (
                <TextField
                  error={hasError}
                  helperText={hasError && 'Required field'}
                  variant="outlined"
                  {...params}
                  placeholder="Choose or Create a category"
                  label="Category"
                  slotProps={{
                    formHelperText: {
                      className: 'text-right absolute right-2 -bottom-5 m-0',
                    },
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
              )}
            />
          );
        }}
      />
    </div>
  );
}
