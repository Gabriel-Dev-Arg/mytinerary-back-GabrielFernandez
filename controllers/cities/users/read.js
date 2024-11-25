import User from "../../../models/User.js"

const allUser = async (req, res,next) => {
    try {
        let {name} = req.query
        let query = {}
        if (name){
            query.name = {$regex:'^'+name, $options: 'i'}
        }
        let all = await User.find(query)
        return res.status(200).json({
            success: true,
            response: all
        })
    } catch (error) {
        next(error)
    }    
}

const userById = async (req,res,next) => {
    try {
        console.log(req.params);
        let roleQuery = req.params.id
        let all = await User.findById(roleQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

export { allUser,userById}