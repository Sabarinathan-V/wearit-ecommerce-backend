import jwt from 'jsonwebtoken';
import 'dotenv/config'

const authUser = async(req, res, next) => {

    const {token} = req.headers;

    if(!token){
        return res.json({success: false, message: "Not Authorized Login Again!"})
    }

    try{
        const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // userId decoded from the token and send it with the request body
        req.body.userId = token_decode?.id

        next()

    }catch(error){
        console.log({error})
        res.json({success: false, message: error.message})
    }
}

export default authUser;