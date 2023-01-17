const prompt = require('prompt-sync')()
const solution = require('./solution')

const input = prompt('Input: ')

// My algorithm returns the array sorted even without running merge sort,
// but to solve the bonus task I implemented a merge sort
const mergeSort = (array) => {
    if (array.length < 2) {
        return array
    }
    let left = []
    let right = []

    for (let i = 0; i < array.length; i++) {
        if (i < array.length / 2) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    left = mergeSort(left)
    right = mergeSort(right)
    array = []
    while (left.length > 0 || right.length > 0) {
        if (left.length === 0) {
            array = array.concat(right)
            break
        }
        else if (right.length === 0) {
            array = array.concat(left)
            break
        } else {
            if (left[0].localeCompare(right[0]) < 0) {
                array.push(left.splice(0, 1)[0])
            } else {
                array.push(right.splice(0, 1)[0])
            }
        }
    }
    return array
}

console.log(mergeSort(solution.iterative(input)))
