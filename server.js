import app from "./app";

const port = 3001;
app.listen(port, () => {
	console.log();
	console.log(`Rodando na porta ${port}`);
	console.log(`CTRL + Clique em http://localhost${port}`);
});
