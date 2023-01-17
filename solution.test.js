const solution = require('./solution')

test('Testing the first example', () => {
    expect(solution.iterative("23")).toStrictEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
})

test('Test empty input', () => {
    expect(solution.iterative("")).toStrictEqual([])
})

test('Test short input', () => {
    expect(solution.iterative("2")).toStrictEqual(["a","b","c"])
})
