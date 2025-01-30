import { Input } from '@/components/inputs/Input';
import { Typography } from '@/components/typography/Typography';
import { ProductCreateSchema } from '@/service/actions/products/schema';
import { useFormContext } from 'react-hook-form';

export function DescriptionField() {
  const formContext = useFormContext<ProductCreateSchema>();
  const placeholder = `Ex: O que você precisa saber sobre este produto:

Placa gráfica: NVIDIA GeForce RTX 3050
Com tela tátil: Não
Processador: Intel Core i5 13420H
Sistema operacional: Windows 11 Home
Capacidade de disco SSD: 512 GB
Memória RAM: 8 GB
Conexão Wi-Fi e bluetooth.
Possui porta USB e porta HDMI.
Inclui leitor de cartão de memória.
Possui pad numérico.
Com teclado retroiluminado.
Possui entrada extra para M2.
`;
  return (
    <div>
      <Typography.Label as="label" htmlFor="description">
        Description
      </Typography.Label>
      <Input.Root>
        <Input.Textarea
          size="sm"
          resize="axisY"
          rows={15}
          placeholder={placeholder}
          {...formContext.register('description', { required: true })}
          defaultValue={formContext.getValues('description')}
        ></Input.Textarea>
        <Input.Addons.Helper as="small" />
        <Input.Addons.MaxChars maxChars={3000} />
      </Input.Root>
    </div>
  );
}
