const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

mongoose.connect(
  'mongodb://127.0.0.1:27017/Demo',
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
  },
  () => {
    logger.info('Connected to MongoDB');
    app.listen(config.port, () => {
      logger.info(`Listening to port ${config.port}`);
    });
  }
);
