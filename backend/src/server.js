const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

// configurando express
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(morgan('short'));
// configurando swagger
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Voz do Povo',
    version: '1.0.0',
    description:
        'Voz do Povo',
    contact: {
      name: 'Voz do Povo',
    },
  },
  servers: [
  ],
};
const options = {
  swaggerDefinition,
  apis: ['./src/routes/**/*.js', './src/schema/**/*.js', './src/schema/enum/**/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);
const swaggerUi = require('swagger-ui-express');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// rotas

const userRoute = require('./routes/user-route');

app.use('/user', userRoute);

const postRoute = require('./routes/post-route');

app.use('/post', postRoute);

const newsRoute = require('./routes/news-route');

app.use('/news', newsRoute);

const communityRouter = require('./routes/community-route');

app.use('/community', communityRouter);

const commentRouter = require('./routes/comment-route');

app.use('/comment', commentRouter);

app.get('/', (req, res) => {
  res.send('Hackaton Proj');
});

app.listen(8080);

// eslint-disable-next-line no-console
console.log('Listening on port 8080');

// Adiciona tratamento de erros
app.use(errors());

// catch all
app.use((error, req, res) => {
  res.status(error.status || 500);
  if (res.statusCode === 500) {
    res.json({ error: 'Server Error' });
  } else {
    res.json({ error: error.message });
  }
});

module.exports = app;
