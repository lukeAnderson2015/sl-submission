let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function formatCurrency(value: number): string {
    return USDollar.format(value);
}

function convertFromCamelCaseToReadable(value: string): string {
    const split = value.replace(/([a-z](?=[A-Z]))/g, '$1 ').split('');
    split[0] = split[0] && split[0].toUpperCase();
    return split.join('');
}

export {
    formatCurrency,
    convertFromCamelCaseToReadable
}