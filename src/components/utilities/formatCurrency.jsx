import { PropTypes } from "prop-types";

const currency_formatter = new Intl.NumberFormat(undefined, {
    currency: "Kes",
    style: "currency",
});

function formatCurrency(number) {
    return currency_formatter.format(number);
}

formatCurrency.PropTypes = {
    number: PropTypes.number,
};
export default formatCurrency;