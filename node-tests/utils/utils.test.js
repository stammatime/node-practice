const utils = require('./utils');
const chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;


it('should add two numbers',() =>{
    var res = utils.add(33, 11);
    // if (res != 44){
    //     throw new Error(`Expected 44, but got ${res}`);
    // }
    expect(res).to.equal(44).and.to.be.a('number');
    expect(res).to.be.a('number');
    
});

it('should square two numbers',() =>{
    var res = utils.square(3);
    expect(res).to.equal(9);
    expect(res).to.be.a('number');
    
});

it('should expect some values',()=>{
    expect({name:"Cody", last:"Stammer"}).to.include({name:"Cody"})
})

//verify that first/last name is set