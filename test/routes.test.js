let chai=require("chai")
let expect =require("chai").expect;
let chaiHttp=require("chai-http")
let server=require("../index")
let should=require("chai").should();
chai.use(chaiHttp)

describe('all drivers',()=>{

    it('it should get all the drivers',(done)=>{
        chai.request(server)
        .get('/api/alldrivers')
        .end((req,res)=>{

            res.should.have.status(200);
            res.body.should.be.a('array')
            res.body.length.should.be.eql(0);
            done();
        });
        
    });
});