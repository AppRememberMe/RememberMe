const router = require('express').Router()
const Usuarios = require('../models/Usuarios')

//create
router.post('/', async(req, res) =>{

    const{user, email, senha} = req.body

    if ((!user) || (!email) || (!senha)){
        res.status(422).json({error: 'Preenchimento obrigatório'})
        return
    }

    const usuario = {
        user,
        email,
        senha
    }

    try {
        
        await Usuarios.create(usuario)

        res.status(201).json({message: 'Usuario inserido com sucesso'})
        
    } catch (error) {
        res.status(500).json({error: error})
    }

})
//read - leitura de dados

router.get('/', async(req, res) => {
    try {
        const usuario = await Usuarios.find()

        res.status(200).json(usuario)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/:id', async (req, res) => {
    
    //extrair dado da requisição, pela url = req.params

    const id = req.params.id

    try {

        const usuario = await Usuarios.findOne({_id: id})

        if(!usuario){
            res.status(424).json({message: 'Usuário não encontrado'})
            return
        }

        res.status(200).json(usuario)
        
    } catch (error) {
        res.status(500).json({error: error})

    }
})

//update - atualização de dados(PUT, PATCH)

router.patch('/:id', async (req, res) => {
    
    const id = req.params.id
    const{user, email, senha} = req.body

    const usuario = {
        user,
        email,
        senha
    }

    try {
        const updateUsuario = await Usuarios.updateOne({_id: id}, usuario)

        if(updateUsuario.matchedCount === 0){
            res.status(424).json({message: 'Usuário não encontrado'})
        }
        res.status(200).json(usuario)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

//delete - apagar dados

router.delete('/:id', async (req,res) => {
    const id = req.params.id

    const usuario = await Usuarios.findOne({_id: id})

    if(!usuario){
        res.status(424).json({message: 'Usuário não encontrado'})
        return
    }

    try {

        await Usuarios.deleteOne({_id: id})
        res.status(200).json({message: 'Usuario apagado!'})
        
    } catch (error) {
        res.status(500).json({error: error})
    }

})
module.exports = router