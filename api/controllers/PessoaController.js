const database = require('../models')  //importando a parte de modelos
const Sequelize = require('sequelize')

class PessoaCcontroller {
    static async pegaPessoasAtivas(req, res){
        try{
            const todsAsPesoasAtivas = await database.Pessoas.findAll()
            return res.status(200).json(todsAsPesoasAtivas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        
    }

    static async pegaTodasAsPessoas(req, res){
        try{
            const todsAsPesoas = await database.Pessoas.scope('todos').findAll()
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

    static async atualizaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body
        try{
            await database.Matriculas.update(novasInfos, { 
                where: {
                    id: parseInt(matriculaId),
                    estudante_Id: parseInt(estudanteId)
                }
            })
            const matriculaAtualizada = await database.Matriculas.findOne(
                { where: { id: parseInt(matriculaId)}}
            )
            return res.status(200).json(matriculaAtualizada)
        }   catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarUmaMatricula(req, res){
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: parseInt(estudanteId)}
        try{
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(201).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try{
            const umaMatricula = await database.Matriculas.findOne( { 
                where: {
                    id: parseInt(matriculaId),
                    estudante_Id: parseInt(estudanteId)
                }
            })
            return res.status(200).json(umaMatricula)
        }   catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try{
            await database.Matriculas.destroy( { 
                where: {
                    id: parseInt(matriculaId)
                }
            })
            return res.status(200).json(`Matricula com o id: ${matriculaId} foi deletada`)
        }   catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restauraPesoa(req, res){
        const { id } = req.params
        try {
            await database.Pessoas.restore( {where: { id: Number(id) } } )
            return res.status(200).json({ mensagem: `id ${id} restaurado`})
        }catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaMatriculas(req, res) {
        const { estudanteId } = req.params
        try{
            const pessoa = await database.Pessoas.findOne( { 
                where: {
                    id: parseInt(estudanteId)
                }
            })
            const matriculas = await pessoa.getAulasMatriculadas()
            return res.status(200).json(matriculas)
        }   catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaMatriculasPorTurma(req, res) {
        const { turmaId } = req.params
        try{

            const todasAsMatriculas = await database.Matriculas.findAndCountAll( { 
                where: {
                    turma_id: parseInt(turmaId),
                    status: 'confirmado'
                }
            })
            return res.status(200).json(todasAsMatriculas)
        }   catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaTurmasLotadas(req, res) {
        const lotacaoTurma = 1
        try{

            const turmasLotadas = await database.Matriculas.findAndCountAll( { 
                where: {
                    status: 'confirmado'
                },
                attributes: ['turma_id'],
                group: ['turma_id'],
                having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
            })
            return res.status(200).json(turmasLotadas)
        }   catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PessoaCcontroller