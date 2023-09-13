const Instrumentos = require('../models/Instrumentos')

module.exports = new class TarefaController {

    //Método que mostra o formulário de criação da tarefa
    
    //Método que recebe os dados do form e salva no bd
    criarInstrumentoPost = async(req, res)=>{
        const instrumento = req.body
        console.log(req)
        return res.status(200).json(await Instrumentos.create(instrumento))
    }

    obterinstrumentos = async(req, res)=>{
        return res.status(200).json(await Instrumentos.findAll())
    }

    excluirInstrumentoPost = async(req, res)=>{
        const id = req.body.id
        console.log(req)
        return res.status(200).json(await Instrumentos.destroy({ where: { id } }))
    }
    editarInstrumentosPost = async (req, res) => {
      const id = req.body.id;
      const { nome, codigo, ultima_calibracao, frequencia_calibracao_dias } = req.body;
    
      try {
        const instrumento = await Instrumentos.findByPk(id);
        if (!instrumento) {
          return res.status(404).json({ error: 'Instrumento não encontrado.' });
        }
        await instrumento.update({ nome, codigo, ultima_calibracao, frequencia_calibracao_dias });
        return res.status(200).json({ message: 'Instrumento atualizado com sucesso.' });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Ocorreu um erro ao atualizar o instrumento.' });
      }
    };
    
}