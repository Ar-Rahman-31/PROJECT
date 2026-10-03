const jwt = require('jsonwebtoken')

async function checkAuth(req ,res,next){
     console.log(req.body,req.file)

    const token = req.cookies.token //here we are getting the token from the cookie instead of the request body, 
         //as it is more secure to store the token in a cookie rather than sending it in the request body.
    if(!token) {
        return res.status(401).json({ message: 'Unauthorized access' })
    }
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.jwt_token) 
    }
    catch (err) {
        return res.status(401).json({ message: 'Invalid token' })
    } 
    //here we are verifying the token using the jwt.verify method,
     // which will decode the token and return the payload if the token is valid,
     //  otherwise it will throw an error.} {
    

     req.decoded = decoded //here we are attaching the decoded payload to the request object,
     next() //here we are calling the next() method to pass the control to the next middleware function in the stack,
      // which is the controller function that will handle the request and send the response back to the client.

    }
    module.exports = { checkAuth }  