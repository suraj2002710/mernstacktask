const { addbook, getsinglebook, getallbook, updatebook, deletebook, searchbook, searchbygenre } = require('../controller/book')

const router=require('express').Router()

router.post('/addbook',addbook)
router.post('/getsinglebook',getsinglebook)
router.get('/getallbook',getallbook)
router.put('/updatebook',updatebook)
router.delete('/deletebook',deletebook)
router.post('/searchbook',searchbook)
router.post('/searchbygenre',searchbygenre)
module.exports=router