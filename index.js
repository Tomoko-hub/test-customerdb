const express = require('express');
const db = require('./db/dbconfig');
const query = require('./db/customers');

const app = express();
app.use(express.json());

const port = 3000;

app.get('/api/customers', query.getAllCustomers);
app.get('/api/customers/:id', query.getCustomerById);
app.post('/api/customers', query.addCustomer);
app.delete('/api/customers/:id', query.deleteCustomer);
app.delete('/api/customers', query.deleteAllCustomers);
app.put('/api/customers/:id', query.updateCustomer);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});