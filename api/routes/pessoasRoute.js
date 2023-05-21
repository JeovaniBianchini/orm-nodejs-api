const { Router } = require('express')

const PessoaCcontroller = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaCcontroller.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaCcontroller.pegaUmaPessoa)
router.post('/pessoas', PessoaCcontroller.criarUmaPessoa)
router.put('/pessoas/:id', PessoaCcontroller.atualizaPessoa)
router.delete('/pessoas/:id', PessoaCcontroller.deleteUmaPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaCcontroller.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaCcontroller.criarUmaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaCcontroller.atualizaUmaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaCcontroller.deleteUmaMatricula)

module.exports = router