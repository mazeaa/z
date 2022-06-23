const app = require('./app');
const settings = require('./config/settings');

app.listen(settings.port, () => {
	console.log('Test Server Is Ready')
	console.log(`Application running in port : ${settings.port}`);
	
	
});
 

