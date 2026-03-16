/** Convert number to words for Indian Rupees (integer part). e.g. 15000 -> "Fifteen Thousand Rupees Only" */
export function amountInWords(amount: number): string {
  const n = Math.floor(amount);
  if (n === 0) return "Zero Rupees Only";
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  function toWords(num: number): string {
    if (num >= 10000000) {
      const cr = Math.floor(num / 10000000);
      const rest = num % 10000000;
      return toWords(cr) + " Crore " + (rest > 0 ? toWords(rest) : "");
    }
    if (num >= 100000) {
      const lk = Math.floor(num / 100000);
      const rest = num % 100000;
      return toWords(lk) + " Lakh " + (rest > 0 ? toWords(rest) : "");
    }
    if (num >= 1000) {
      const th = Math.floor(num / 1000);
      const rest = num % 1000;
      return (th >= 100 ? toWords(th) : (th >= 20 ? tens[Math.floor(th / 10)] + " " + ones[th % 10] : th >= 10 ? teens[th - 10] : ones[th]).trim()) + " Thousand " + (rest > 0 ? toWords(rest) : "");
    }
    if (num >= 100) {
      const h = Math.floor(num / 100);
      const rest = num % 100;
      return ones[h] + " Hundred " + (rest > 0 ? toWords(rest) : "");
    }
    if (num >= 20) return (tens[Math.floor(num / 10)] + " " + ones[num % 10]).trim();
    if (num >= 10) return teens[num - 10];
    return ones[num];
  }
  return toWords(n).replace(/\s+/g, " ").trim() + " Rupees Only";
}
