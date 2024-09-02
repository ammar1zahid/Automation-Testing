const{test,expect} = require("@playwright/test")

test("My first Test",async function({page}){

    expect(12).toBe(12)
})

test("My second Test",async function({page}){

    expect(100).toBe(102)
})

test("My third Test",async function({page}){

    expect(1.2).toBe(1.2)
})

//test.only() for running a specific test only

test("My fourth Test",async function({page}){

    expect("Ammar Zahid").toContain("Ammar")
})

//for skip a test
test.skip("My fifth Test",async function({page}){

    expect("Ammar Zahid").toContain("Ammar")
})