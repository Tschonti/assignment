const iterative = (digits) => {
    const keyboard = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }
    let results = []

    for (let i = 0; i < digits.length; i++) {
        const newResults = []
        const digit = digits[i]
        if (isNaN(parseInt(digit)) || parseInt(digit) < 2 || parseInt(digit) > 9) {
            console.error("Invalid digit!")
            process.exit()
        }
        if (results.length === 0) {
            results.push("")
        }
        for (let j = 0; j < results.length; j++) {
            for (let k = 0; k < keyboard[digit].length; k++) {
                newResults.push(results[j] + keyboard[digit][k])
            }
        }
        results = newResults
    }
    return results
}

exports.iterative = iterative
