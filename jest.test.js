test('test common matcher',()=>{
    expect(2+2).toBe(4)
    expect(2+2).not.toBe(1)
})


test('test to be true or false',()=>{
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
})
test('test number',()=>{
    expect(2+2).toBeGreaterThan(1)
    expect(2+2).toBeLessThan(1000000000)
})
test('test object',()=>{
    expect({name:'nexo'}).toEqual({name:'nexo'})
    // expect({}).toBe({})
})