import { formatCentsToReais } from '@/utils/formatToReais';
import { Typography } from '../typography/Typography';

interface CardPriceProps {
  oldValue: number;
  value: number;
}
export function CardPrice(props: CardPriceProps) {
  const oldValueInt = props.oldValue;
  const oldValueReais = formatCentsToReais(oldValueInt);
  const currentValueInt = props.value;
  const discount = Math.round((oldValueInt * 100) / currentValueInt);
  const hasDiscount = discount > 0;
  const integerPart = props.value
    .toString()
    .substring(0, props.value.toString().length - 2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    .padStart(1, '0');
  const decimalPart = props.value.toString().slice(-2).padStart(2, '0');

  return (
    <div className="flex flex-col h-14 justify-end">
      {hasDiscount && (
        <Typography.Label
          as="span"
          size="sm"
          weight="light"
          className="mt-2 line-through text-gray-500"
        >
          {oldValueReais}
        </Typography.Label>
      )}
      <div className="flex gap-4">
        <span className="flex gap-1">
          <Typography.Title as="span" size="lg" weight="medium">
            R$ {integerPart}
          </Typography.Title>
          <Typography.Label as="span" size="sm" className="mb-auto mt-1">
            {decimalPart}
          </Typography.Label>
        </span>
        {hasDiscount && (
          <Typography.Label
            as="span"
            size="sm"
            className="my-auto text-green-500"
            weight="medium"
          >
            {discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}% OFF
          </Typography.Label>
        )}
      </div>
    </div>
  );
}
