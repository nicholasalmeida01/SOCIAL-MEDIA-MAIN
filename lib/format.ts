export function formatBRL(value: number): string {
  return `R$${value.toLocaleString("pt-BR")}`;
}

export function formatDateBR(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR");
}
