// Declarar una función con el nombre esPar, esta función acepta un número como parámetro. Retorna un valor booleano true en caso de que el valor sea par y false en caso de que no lo sea. Exportar la función index.js.
const Logger = require('logplease');
const logger = Logger.create('utils');
exports.esPar = (num) => num % 2 == 0 ? logger.info(true) : logger.warn(false);