
export const getUserTest=async(req,res)=>{
    try {
        res.status(200).json({message:'user test is successful'})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


export const userPostTest=async(req,res)=>{
    try {
        const userName=req.body.userName
        res.status(200).json({userName:`The user name is ${userName}`})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}