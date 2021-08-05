import jwt from 'jsonwebtoken'

const auth = async(req,res,next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        decodedData = jwt.verify(token, secret);
        req.userId = decodedData?.id;
        next();
    }
    catch(error){
        res.status(400).json(error);
    }

}

export default auth;

