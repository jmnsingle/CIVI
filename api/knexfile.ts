// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(
      __dirname,
      'src',
      'shared',
      'database',
      'database.sqlite',
    ),
  },
  migrations: {
    directory: path.resolve(
      __dirname,
      'src',
      'shared',
      'database',
      'migrations',
    ),
  },
  useNullAsDefault: true,
};
