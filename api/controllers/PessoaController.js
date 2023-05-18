const database = require('../models')  //importando a parte de modelos

class PessoaCcontroller {
    static async pegaTodasAsPessoas(req, res){
        try{
            const todsAsPesoas = await database.Pessoas.findAll()
            return res.status(200).json(todsAsPesoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try{
            const umaPessoa = await database.Pessoas.findOne( { 
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).json(umaPessoa)
        }   catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarUmaPessoa(req, res){
        const novaPessoaCriada = req.body
        try{
            const pessoaCriada = await database.Pessoas.create(novaPessoaCriada)
            return res.status(201).json(pessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try{
            await database.Pessoas.update(novasInfos, { where: { id: Number(id)}})
            const pessoaAtualizada = await database.Pessoas.findOne( { where: { id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)
        } catch(error){
            return res.status(500).json(error.message) 
        }
    }

    static async deleteUmaPessoa(req, res) {
        const { id } = req.params
        try{
            await database.Pessoas.destroy( { 
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).json(`Pessoa com o id: ${id} foi deletada`)
        }   catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaCcontroller