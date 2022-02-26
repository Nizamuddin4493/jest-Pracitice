const toUpperCase = (str) => {
    if (typeof(str) !== 'string') {
        throw ('Input is not a string');
    } else if (str.length < 1) {
        throw ('String must not be empty');
    }
    let strArr = str.split('');
    strArr[0] = strArr[0].toUpperCase();
    for (let i = 1; i < strArr.length; i++) {
        strArr[i] = strArr[i].toLowerCase();
    }
    result = strArr.join('')
    return result;
}

module.exports = toUpperCase;