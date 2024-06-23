Array.prototype.isEqual = function(array) {
    // check if the lengths are different
    if (this.length !== array.length) {
        return false;
    }

    // compare each element
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== array[i]) {
            return false;
        }
    }

    return true;
}
