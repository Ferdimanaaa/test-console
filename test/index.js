const { expect } = require("chai")
const { stripTags } = require("../index")

describe("strip tags",  function(){
  it("normal use", function() { 
    const result = stripTags("<div><p>console log test</p></div>")
    expect(result).to.deep.equal("console log test")
   })

   it("using number", function() { 
    const result = stripTags(1500000)
    expect(result).to.deep.equal(1500000)
   })
})