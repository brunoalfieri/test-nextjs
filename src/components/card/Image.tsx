import { ImgHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> {}
export function CardImage(props: CardImageProps) {
  return (
    <img
      {...props}
      className={twMerge(
        'w-full h-[200px] object-cover object-center',
        props.className
      )}
    ></img>
  );
}
