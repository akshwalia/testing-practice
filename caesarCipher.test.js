const caesarCipher = require('./caesarCipher');
const cipher = require('./caesarCipher');

test ('Passed', () => {
    expect(caesarCipher('defend')).toBe('efgfoe')
})

test ('Passed Capital', () => {
    expect(caesarCipher('dEfend')).toBe('eFgfoe');
})

test ('Passed symbols', () => {
    expect(caesarCipher('dE?fend!')).toBe('eF?gfoe!');
})

test ('Passed long', () => {
    expect(caesarCipher('defend the east wall of the castle')).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
})
