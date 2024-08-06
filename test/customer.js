const chai = require('chai');
const chaihttp = require('chai-http');
const app = require('../index');

chai.use(chaihttp);
const should = chai.should();

const testCustomers = [
    {
        firstname:'Tomoko',
        lastname:'Uehara',
        email:'mail.dayo@mail.com',
        phone:'1234567890'
    },
    {
        firstname:'John',
        lastname:'Doe',
        email:'john.dayo@mail.com',
        phone:'2234567890'
    }
]

/* describe('/POST customers', ()=>{

    it('Add new customer', (done)=>{
        chai.request(app)
          .post('/api/customers')
          .set('Content-Type', 'application/json')
          .send(testCustomers)
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
 */
describe('/GET customers', ()=>{
    // task 6-3:fetch all customers, and count the customers 
    it('Fetch all customers, and count the customers', (done)=>{
        chai.request(app)
          .get('/api/customers')
          .end((err,res)=>{
              if(err) done(err);
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(testCustomers.length);
              done();
          });
    });
}); 