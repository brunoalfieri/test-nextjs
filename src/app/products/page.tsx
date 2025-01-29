'use client';
import { Card } from '@/components/card';
import { CardCategory } from '@/components/card/Category';
import { CardDescription } from '@/components/card/Description';
import { CardPrice } from '@/components/card/Price';
import { CardTitle } from '@/components/card/Title';
import { useServiceProduct } from '@/service/actions/product';

export default function Products() {
  const { isLoading, data, error } = useServiceProduct.table({
    params: { page: 1, pageSize: 10 },
  });

  if (isLoading) return <div>Loading</div>;

  return (
    <ul className="grid grid-cols-3 lg:grid-cols-4 gap-10">
      {data?.result.map((product) => {
        return (
          <Card.Root
            key={product.id}
            as="li"
            className="max-h-[500px]"
            href={`/products/${product.id}`}
          >
            <Card.Image src={product.image} alt="Imagem ilustrativa" />
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
            <CardPrice value={product.price.toString()} oldValue="200000" />
            <CardCategory>{product.category.name}</CardCategory>
          </Card.Root>
        );
      })}
    </ul>
  );
}
