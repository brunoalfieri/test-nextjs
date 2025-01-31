import { Button } from '@/components/button/default/ButtonDefault';
import { Typography } from '@/components/typography/Typography';
import { ProductsFilterSchema } from '@/service/actions/products/schema';
import { ORDER_BY } from '@/types/global';
import {
  AttachMoney,
  CalendarMonth,
  ManageSearch,
  Sell,
  ShoppingCart,
  TextRotationNone,
} from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export function SortField() {
  const formContext = useFormContext<ProductsFilterSchema>();
  const currentOrderBy = formContext.watch('orderBy');

  function toggleOrderBy() {
    if (currentOrderBy === ORDER_BY.ASC) {
      formContext.setValue('orderBy', ORDER_BY.DESC);
    } else {
      formContext.setValue('orderBy', ORDER_BY.ASC);
    }
  }
  return (
    <div className="mt-2">
      <div className="flex justify-between items-end">
        <Typography.Label as="label" htmlFor="sortBy">
          Sort By
        </Typography.Label>

        <Button
          type="button"
          variant="text"
          size="sm"
          onClick={toggleOrderBy}
          className="w-max"
        >
          {currentOrderBy == ORDER_BY.ASC ? (
            <>
              Ascending
              <TextRotationNone />
            </>
          ) : (
            <>
              Descending
              <TextRotationNone className="-scale-x-100" />
            </>
          )}
        </Button>
      </div>

      <Controller
        name="sortBy"
        control={formContext.control}
        render={({ field }) => {
          return (
            <ToggleButtonGroup
              {...field}
              orientation="vertical"
              exclusive
              fullWidth
              size="small"
              onChange={(e, newValue) => {
                field.onChange(newValue);
              }}
              className="mt-1"
              color="info"
            >
              <ToggleButton value="name" fullWidth>
                <div className="w-full grid grid-cols-[max-content,1fr] items-center text-left gap-2 px-4">
                  <ShoppingCart /> Product Name
                </div>
              </ToggleButton>
              <ToggleButton value="category" fullWidth>
                <div className="w-full grid grid-cols-[max-content,1fr] items-center text-left gap-2 px-4">
                  <Sell /> Category
                </div>
              </ToggleButton>
              <ToggleButton value="description" fullWidth>
                <div className="w-full grid grid-cols-[max-content,1fr] items-center text-left gap-2 px-4">
                  <ManageSearch /> Description
                </div>
              </ToggleButton>
              <ToggleButton value="price" fullWidth>
                <div className="w-full grid grid-cols-[max-content,1fr] items-center text-left gap-2 px-4">
                  <AttachMoney /> Price
                </div>
              </ToggleButton>
              <ToggleButton value="createdAt" fullWidth>
                <div className="w-full grid grid-cols-[max-content,1fr] items-center text-left gap-2 px-4">
                  <CalendarMonth /> Date Created
                </div>
              </ToggleButton>
            </ToggleButtonGroup>
          );
        }}
      />
    </div>
  );
}
