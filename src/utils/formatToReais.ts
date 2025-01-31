export function formatCentsToReais(cents: string | number): string {
  const centsString = cents.toString();
  if (!/^\d+$/.test(centsString)) {
    throw new Error('The string should only contain numbers: ' + cents);
  }

  const centsNumber = parseInt(centsString, 10);

  const reais = centsNumber / 100;

  return reais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
