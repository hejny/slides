export function format(value) {
    if (value instanceof Date) {
        return formatDate(value);
    }
    return value;
}

function formatDate(date) {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}
