import { formatCentsToReais } from '@/utils/formatToReais';
import { Typography } from '../typography/Typography';

interface CardPriceProps {
  oldValue: string;
  value: string;
}
export function CardPrice(props: CardPriceProps) {
  const oldValueInt = parseInt(props.oldValue, 10);
  const oldValueReais = formatCentsToReais(oldValueInt);
  const currentValueInt = parseInt(props.value, 10);
  const discount = Math.round((oldValueInt * 100) / currentValueInt);
  const hasDiscount = discount > 0;
  const integerPart = props.value
    .substring(0, props.value.length - 2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const decimalPart = props.value.slice(-2);

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
          <Typography.Body as="span" size="lg">
            R$ {integerPart}
          </Typography.Body>
          <Typography.Label as="span" size="sm" className="mb-auto mt-1">
            {decimalPart}
          </Typography.Label>
        </span>
        {hasDiscount && (
          <Typography.Label
            as="span"
            size="sm"
            className="my-auto text-green-500"
          >
            {discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}% OFF
          </Typography.Label>
        )}
      </div>
    </div>
  );
}
