import Image, { ImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

export function CardImage(props: ImageProps) {
  return (
    <Image
      {...props}
      alt="Image ilustration"
      width={300}
      height={200}
      className={twMerge(
        'w-full h-[200px] object-cover object-center',
        props.className
      )}
    />
  );
}
