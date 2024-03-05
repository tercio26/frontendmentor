export default {
    formatCardNumber(value) {

        return value.length === 0 ? '0000 0000 0000 0000' : value.replace(/.{4}/g, '$& ');
    }
}