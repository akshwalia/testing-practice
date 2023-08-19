const reverse = require('./reverseString')

test ('string reversed',  () => {
    expect(reverse('Princy')).toBe('ycnirP');
})