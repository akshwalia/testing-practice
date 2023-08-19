const capitalize =  require('./capitalize')

test ('passed', () => {
    expect(capitalize('princy')).toBe('Princy');
})