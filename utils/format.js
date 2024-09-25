import currency from "currency-formatter";

export const currencyFormatter = (value) => {
  return currency.format(value, {
    thousand: ".",
    precision: 0,
    locale: "id_ID",
  });
};
