import UsersProfile from "../models/UsersProfiles.js"

const createUser = async (req, res) => {
    const { email, name } = req.body
    
    const userValidation = await UsersProfile.findOne({email});

    if(userValidation){
        const error = new Error(`Would you like to add ${name} again?` );
        console.log(error)
        return res.json({msg: error.message});
    }

    try {
        const user = new UsersProfile(req.body);
        const userSave = await user.save();
        res.json(userSave);
    } catch (error) {
        console.log(error)
    }
}


const getUser = (req, res) => {};



export { createUser, getUser};