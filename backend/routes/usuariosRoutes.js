const router = require('express').Router()
const Usuarios = require('../models/Usuarios')

//cadastrar novo usuário
router.post('/create', async(req, res) =>{
    const{user, email, senha} = req.body

    if ((!user) || (!email) || (!senha)){
        res.status(422).send(JSON.stringify('422'));
        return
    }
    const usuario = {user, email, senha}
    try {
        let response = await Usuarios.create(usuario)
        res.send(response);
        
    } catch (error) {
        res.status(500).json({error: error})
    }

})
// //read - leitura de dados

// router.get('/a', async(req, res) => {
//     try {
//         const usuario = await Usuarios.find()

//         res.status(200).json(usuario)

//     } catch (error) {
//         res.status(500).json({error: error})
//     }
// })

// router.get('/:id', async (req, res) => {
    
//     //extrair dado da requisição, pela url = req.params

//     const id = req.params.id

//     try {

//         const usuario = await Usuarios.findOne({_id: id})

//         if(!usuario){
//             res.status(424).json({message: 'Usuário não encontrado'})
//             return
//         }

//         res.status(200).json(usuario)
        
//     } catch (error) {
//         res.status(500).json({error: error})

//     }
// })

//encontrar usuario para autenticação do login
router.post('/login', async (req, res) => {
    const{user, senha} = req.body

    if ((!user) || (!senha)){
        res.status(422).send(JSON.stringify('422'));
        return
    }
    try {
        let response = await Usuarios.findOne(({user: user}, {senha: senha}));
       
        if(response == null){
            res.status(404).send(JSON.stringify('404'));
            return
        }else{
            res.send(response);
        }
    } catch (error) {
        res.status(500).json({error: error})
    }
})
// //update - atualização de dados(PUT, PATCH)

// router.patch('/:id', async (req, res) => {
    
//     const id = req.params.id
//     const{user, email, senha} = req.body

//     const usuario = {
//         user,
//         email,
//         senha
//     }

//     try {
//         const updateUsuario = await Usuarios.updateOne({_id: id}, usuario)

//         if(updateUsuario.matchedCount === 0){
//             res.status(424).json({message: 'Usuário não encontrado'})
//         }
//         res.status(200).json(usuario)

//     } catch (error) {
//         res.status(500).json({error: error})
//     }
// })

// //delete - apagar dados

// router.delete('/:id', async (req,res) => {
//     const id = req.params.id

//     const usuario = await Usuarios.findOne({_id: id})

//     if(!usuario){
//         res.status(424).json({message: 'Usuário não encontrado'})
//         return
//     }

//     try {

//         await Usuarios.deleteOne({_id: id})
//         res.status(200).json({message: 'Usuario apagado!'})
        
//     } catch (error) {
//         res.status(500).json({error: error})
//     }

// })

// deletar todos usuarios
router.delete('/deletarTudo', async (req,res) => {
    try {
        await Usuarios.deleteMany()
        res.status(200).json({message: 'Todos Usarios apagados!'})
        
    } catch (error) {
        res.status(500).json({error: error})
    }

})
module.exports = router