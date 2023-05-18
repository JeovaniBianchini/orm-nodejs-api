const { Router } = require('express')

const PessoaCcontroller = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaCcontroller.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaCcontroller.pegaUmaPessoa)
router.post('/pessoas', PessoaCcontroller.criarUmaPessoa)
router.put('/pessoas/:id', PessoaCcontroller.atualizaPessoa)
router.delete('/pessoas/:id', PessoaCcontroller.deleteUmaPessoa)

module.exports = router