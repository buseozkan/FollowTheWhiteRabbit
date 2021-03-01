const express = require('express');
const app = express();
app.use(express.json());

app.get('/secret', (req, res) => {
   const secret = "8025d929a8a9a69940cf430bafb1649a53fec6d30d78f1660b246fa562d37cb538de390337d37420cd00f77cc7ecc601c3d";

   res.send({ secret });
});

app.post('/success', (req, res) => {
   const success  = req.body;
   console.log(req.body);
   res.send({ success });

});


app.listen(3001);

//module.exports = ;