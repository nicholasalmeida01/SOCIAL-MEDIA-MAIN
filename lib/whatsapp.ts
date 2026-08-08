export const WHATSAPP_NUMBER = "5534991396892";
export const WHATSAPP_DISPLAY = "(34) 99139-6892";

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
