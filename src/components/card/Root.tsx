import { findChildrenByType } from '@/utils/findChildrenByType';
import Link from 'next/link';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { Typography } from '../typography/Typography';
import { CardCategory } from './Category';
import { CardDescription } from './Description';
import { CardImage } from './Image';
import { CardPrice } from './Price';
import { CardTitle } from './Title';

type CardRootProps<T extends keyof React.JSX.IntrinsicElements> = {
  as: T;
  href?: string;
} & React.JSX.IntrinsicElements[T];
export function CardRoot<T extends keyof React.JSX.IntrinsicElements>({
  as: CustomComponent,
  ...props
}: CardRootProps<T>) {
  if (props.href) {
    return (
      <Link href={props.href}>
        <CardRoot as={CustomComponent} {...props} href={undefined} />
      </Link>
    );
  }
  const Element = CustomComponent as ElementType;
  const CImage = findChildrenByType({
    componentType: [CardImage],
    children: props.children,
  });
  const CTitle = findChildrenByType({
    componentType: [CardTitle],
    children: props.children,
  });
  const CDescription = findChildrenByType({
    componentType: [CardDescription],
    children: props.children,
  });
  const CPrice = findChildrenByType({
    componentType: [CardPrice],
    children: props.children,
  });
  const CCategory = findChildrenByType({
    componentType: [CardCategory],
    children: props.children,
  });
  return (
    <Element
      {...props}
      className={twMerge(
        'w-full shadow-lg rounded-md grid grid-cols-1 grid-rows-[max-content,1fr] overflow-hidden hover:shadow-zinc-300 transition-all h-full',
        props.className
      )}
    >
      {CImage}
      <div className="p-4 flex flex-col relative pb-10 h-full">
        {CTitle}
        {CDescription}
        {CPrice}
        {CCategory}
        <Typography.Label
          as="small"
          size="sm"
          weight="semibold"
          className="text-blue-600 bg-blue-100 px-2 text-center py-1 mt-2 rounded-md"
        >
          R$ 50 OFF with Mastercard
        </Typography.Label>
        <Typography.Label as="span" size="sm" className="text-green-600 mt-2">
          Free Shipping
        </Typography.Label>
      </div>
    </Element>
  );
}
