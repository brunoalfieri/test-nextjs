export function formatToCurrency(value?: number | string): string {
  if (!value) return '0,00';
  const number = value.toString().replace(/\D/, '');

  const integerPart = number.toString().padStart(3, '0').slice(0, -2);
  const cents = number.toString().padStart(2, '0').slice(-2);

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${formattedInteger},${cents}`;
}
