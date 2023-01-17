const solution = require('./solution')

test('Testing the first example', () => {
    expect(solution.solution("23")).toStrictEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
})

test('Test empty input', () => {
    expect(solution.solution("")).toStrictEqual([])
})

test('Test short input', () => {
    expect(solution.solution("2")).toStrictEqual(["a","b","c"])
})
