import express from 'express';

const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
	res.send('API is running...');
});

app.listen(8800, () => {
	console.log('Backend is running.');
});
