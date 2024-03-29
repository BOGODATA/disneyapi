const express = require('express');
const partenaire = require('./src/routes/partenaires');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 7001;
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', partenaire); // Mount the router under the /api path

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

