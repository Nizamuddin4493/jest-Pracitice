const stringLength = (string) => {
    if (string.length < 1) {
        throw ('String cannot contain ZERO character')
    } else if (string.length > 10) {
        throw ('String cannot contain more than TEN characters')
    }
    return string.length;
}

const stringReverse = (string) => {
    return string.split('').reverse().join('');
}

module.exports = {
    stringLength: stringLength,
    stringReverse:  stringReverse,
};