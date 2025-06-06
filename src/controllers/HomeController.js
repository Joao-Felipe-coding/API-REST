import Aluno from "../models/Aluno";

class HomeController {
	async index(req, res) {
		const novoAluno = await Aluno.create({
			nome: "Nicoli",
			sobrenome: "da Silva Batista",
			email: "nicolibatista77@gmail.com",
			idade: 19,
			peso: 53,
			altura: 1.61,
		});
		res.json(novoAluno);
	}
}

export default new HomeController();
