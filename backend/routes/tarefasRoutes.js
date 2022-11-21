const router = require('express').Router()
const Tarefas = require('../models/tarefas')

//criar tarefa
router.post('/create', async(req, res) =>{
    const{user, nomeTarefa, prioridade} = req.body

    if ((!user) || (!nomeTarefa) || (!prioridade)){
        res.status(422).json({error: 'Preenchimento obrigatório'})
        return
    }
    const tarefa = {
        user,
        nomeTarefa,
        prioridade
    }
    try {
        
        await Tarefas.create(tarefa)

        res.status(201).json({message: 'Usuario inserido com sucesso'})
        
    } catch (error) {
        res.status(500).json({error: error})
    }

})

// deletar todas as tarefas

router.delete('/deletarTudo', async (req,res) => {
    
    const{user} = req.body

    try {
        await Tarefas.deleteMany({user: user})
        res.status(200).json({message: 'Tarefas apagadas!'})
        
    } catch (error) {
        res.status(500).json({error: error})
    }

})
// deletar todas as tarefas por prioridade especifica

router.delete('/deletarTudoPrioridade', async (req,res) => {
    
    const{user, prioridade} = req.body

    try {
        await Tarefas.deleteMany({user: user}, {prioridade: prioridade})
        res.status(200).json({message: 'Tarefas apagadas!'})
        
    } catch (error) {
        res.status(500).json({error: error})
    }

})
 
module.exports = router