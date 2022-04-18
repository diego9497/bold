export const getFormattedCurrency = (value) => {
  const options = { style: 'currency', currency: 'COP', maximumFractionDigits: 0 };
  const numberFormat = new Intl.NumberFormat('es-CO', options);
  return numberFormat.format(value);
};

export const getFormattedDate = (date) => {
  const newDate = new Date(date);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };
  return new Intl.DateTimeFormat('es-CO', options).format(newDate);
};
