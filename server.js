const express = require('express');
const app = express();
const PORT = 2214;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'CI/CD workshop [updated]' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});