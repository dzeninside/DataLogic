const array = [1,4,5,8,5,1,2,7,5,2,11]

const lineSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i
        }
    }
    return null
}


lineSearch(array, 11)

