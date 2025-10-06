
export const getprofile = (req,res)=>{
    res.send({message:"This is your profile!",Userdata:req.user})
}