const bookmodel = require("../model/book")

exports.addbook=async(req,res)=>{
    try {
        const {title,author,genre,publication}=req.body
        const adddata=await bookmodel.create({
            title,author,genre,publication
        })
        res.status(200).send({
            status:true,
            msg:"created",
            data:adddata
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}

exports.deletebook=async(req,res)=>{
    try {
        const {id}=req.body
        const adddata=await bookmodel.deleteOne({_id:id})
        res.status(200).send({
            status:true,
            msg:"deleted"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}

exports.getsinglebook=async(req,res)=>{
    try {
        const {id}=req.body
        const data=await bookmodel.findOne({
            _id:id
        })
        res.status(200).send({
            status:true,
            data
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}

exports.getallbook=async(req,res)=>{
    try {
        const {search,key}=req.query

        if(key=="search"){
            const data=await bookmodel.find({
                $or:[
                    {title:{$regex:search,$options:"i"}},
                    {author:{$regex:search,$options:"i"}}
                ]
            })
            return(res.status(200).send({
                status:true,
                data
            }))
        }
        if(key=="filter"){
            const data=await bookmodel.find({
                $or:[
                    {genre:{$regex:search,$options:"i"}},
                ]
            })
            return(res.status(200).send({
                status:true,
                data
            }))
        }
        const data=await bookmodel.find()
        res.status(200).send({
            status:true,
            data:data
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}

exports.updatebook=async(req,res)=>{
    try {
        const {id,title,author,genre,publication}=req.body
        const adddata=await bookmodel.updateOne({_id:id},{
            title,author,genre,publication
        })
        res.status(200).send({
            status:true,
            msg:"updated"
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}

exports.searchbook=async(req,res)=>{
    try {
        const {search}=req.body
        const data=await bookmodel.find({
            $or:[
                {title:{$regex:search,$options:"i"}},
                {author:{$regex:search,$options:"i"}}
            ]
        })
        res.status(200).send({
            status:true,
            data
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}

exports.searchbygenre=async(req,res)=>{
    try {
        const {search}=req.body
        const data=await bookmodel.find({
            $or:[
                {genre:{$regex:search,$options:"i"}},
            ]
        })
        res.status(200).send({
            status:true,
            data
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            error:error.message
        })
    }
}
