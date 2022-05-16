const Logger = require('logplease');
const logger = Logger.create('utils');

logger.log(`Hola Mundo de Node`); // alias for debug()
logger.info(`Noticias de última hora, Node.js me encanta!!`);
logger.warn(`Tirando warnings como campeones `);
logger.error(`Algo no está bien!!!`);