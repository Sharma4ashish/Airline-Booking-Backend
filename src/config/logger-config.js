
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;




const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});


const logger = createLogger({
    format:combine(
        timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
        myFormat,
    ),
    transports:[
        new transports.Console(myFormat),
        new transports.File({
            filename:"combine.log"
        })
    ]
});

module.exports = logger;