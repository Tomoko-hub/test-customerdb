const chai = require('chai');
const chaihttp = require('chai-http');
const app = require('../index');
const query = 

chai.use(chaihttp);
const should = chai.should();

const testCustomer = {
    firstname:'Tomoko',
    lastname:'Uehara',
    email:'mail.dayo@mail.com',
    phone:'1234567890'
}

describe('/POST customers', ()=>{

    it('Add new customer', (done)=>{
        chai.request(app)
          .post('/api/customers')
          .set('Content-Type', 'application/json')
          .send(testCustomer)
          .end((err, res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('firstname');
            res.body.should.have.property('lastname');
            res.body.should.have.property('email');
            res.body.should.have.property('phone');
            done();
          });
    });
});

describe('/GET customers', ()=>{
    it('Fetch all customers', (done)=>{
        chai.request(app)
          .get('/api/customers')
          .end((err,res)=>{
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(1);
              done();
          });
    });
}); 