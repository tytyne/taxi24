process.env.NODE_ENV = 'test'

let chai=require("chai")
let expect =require("chai").expect;
let chaiHttp=require("chai-http")
let server=require("../index")
let should = chai.should();
chai.use(chaiHttp)

describe('all drivers',()=>{

    it('it should get a list of all the drivers',(done)=>{
        chai.request(server)
        .get('/api/alldrivers')
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object')
            done();
        });
        
    });
});

describe('available drivers',()=>{

    it('it should get a list of all available drivers 3km',(done)=>{
        chai.request(server)
        .get('/api/available/drivers')
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object')
            done();
        });
        
    });
});

describe('available drivers with 3km',()=>{

    it('it should get a list of all available drivers with in 3km',(done)=>{
        chai.request(server)
        .get('/api/available/drivers')
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object')
            done();
        });
        
    });
});




describe('all riders',()=>{
    it('it should get a list of  all riders',(done)=>{
        chai.request(server)
        .get('/api/allriders')
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object')
            done();
        });
        
    });
});