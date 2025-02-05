export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");
  let trimmed = cleaned.slice(0, 10);
  if (!trimmed.startsWith("0")) {
    trimmed = "0" + trimmed;
  }
  trimmed = trimmed.slice(0, 10);
  if (trimmed.length <= 4) return trimmed;
  if (trimmed.length <= 7) return `${trimmed.slice(0, 4)} ${trimmed.slice(4)}`;
  return `${trimmed.slice(0, 4)} ${trimmed.slice(4, 7)} ${trimmed.slice(7)}`;
};
