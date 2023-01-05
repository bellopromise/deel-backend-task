const app = require('./app');

init();

async function init() {
  try {
    app.listen(3003, () => {
      console.log('Express App Listening on Port 3003');
    });
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}
