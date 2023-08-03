export default function convertMoney(money, rounding = true) {
  let data = money;
  let result = rounding
    ? parseFloat(data)
        .toFixed()
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    : new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 20,
      })
        .format(data)
        .replace('Rp', '')
        .replace('-', '')
        .trim();
  return `Rp${result}`;
}
