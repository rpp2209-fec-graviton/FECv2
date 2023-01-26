const chalk = require('chalk');

module.exports = (req, res, next) => {
  const start = new Date();

  res.on("finish", () => {
    const end = new Date();
    const duration = end - start;
    console.log(
      chalk.green(`${end.toLocaleString()}`) +
        " | " +
        chalk.blue(`${req.method} ${req.url}`) +
        " | " +
        chalk.magenta(`Response sent in ${duration}ms`)
    );
  });

  next();
};