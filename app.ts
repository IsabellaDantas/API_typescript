import express from 'express'
import routes from './src/routes'
const app = express();

const port = 300

app.use(routes);
app.listen(port, () => {
  console.log("Server rodando na porta 3000");
});