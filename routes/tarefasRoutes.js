const express = require('express')
const router = express.Router()
const TarefaController = require('../controllers/tarefaController')

router.post('/adicionar',TarefaController.criarInstrumentoPost)
router.get('/consultar',TarefaController.obterinstrumentos)
router.post('/excluir', TarefaController.excluirInstrumentoPost)
router.post('/editar', TarefaController.editarInstrumentosPost)


module.exports = router
