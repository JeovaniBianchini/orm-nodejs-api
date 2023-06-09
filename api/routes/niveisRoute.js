const { Router } = require('express')

const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', NivelController.pegaTodasOsNiveis)
router.get('/niveis/:id', NivelController.pegaUmNivel)
router.post('/niveis', NivelController.criarUmNivel)
router.put('/niveis/:id', NivelController.atualizaNivel)
router.delete('/niveis/:id', NivelController.deleteUmNivel)

module.exports = router