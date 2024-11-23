import jwt from 'jsonwebtoken';
import "dotenv/config";

const adminAuth = async(req, res, next) => {
    try{

        const {token} = req.headers;

        if(!token){
            return res.json({success: false, message: "Not Authorized Login Again"})
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if(decodedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success: false, message: "Not Authorized Login Again"})
        }

        next();

    }catch(error){
        console.log({error});

    }
}

export default adminAuth;