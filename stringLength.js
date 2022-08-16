function stringLength(string) {
    if(string.length === 0) {
        return new Error ('String Should be at least 1 character long')
    } else if (string.length >= 10) {
        return new Error ('String Should not be longer than 10 characters')
    }
    return string.length;
}



module.exports = stringLength;