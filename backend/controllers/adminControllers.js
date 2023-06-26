import generateJWT from "../helpers/generateJWT.js";
import idGenerator from "../helpers/idgenerator.js";
import AdminProfiles from "../models/AdminProfiles.js"


const register = async (req, res) => {
    const {email} = req.body

    const thereIsUser = await AdminProfiles.findOne({email});

    if(thereIsUser){
        const error = new Error("User already have account");
        return res.status(400).json({msg: error.message})
    }

    try {
        const adminUser = new AdminProfiles(req.body);
        const adminUserSave = await adminUser.save()
        res.json(adminUserSave)
    } catch (error) {
        console.log("error")
    }
}

const profile = (req, res) => {
    const {userProfile} = req ;
    res.json({profile: userProfile})
};

const forgottenPassword = async (req, res) => {
    const {email} = req.body;
    const existeUser = await AdminProfiles.findOne({email});
    if(!existeUser){
        const error = new Error("The user does not exist");
        return res.json({msg: error.message});
    }

    try {
        existeUser.token = idGenerator();
        await existeUser.save();
        res.json({ msg: `We have sent an email with instructions in the following token: ${existeUser.token}` });
    } catch (error) {
        console.log(error)
    }

    console.log(existeUser);


}
const verifyToken = async (req, res) => {
    const { token } = req.params;

    const tokenValid = await AdminProfiles.findOne({token});

    if(tokenValid){
        res.json({ msg: "Token valid and user exists" });
    }else{
        const error = new Error("invalid token");
        return res.status(400).json({msg: error.message});
    }
};


const newPassword = async (req, res) => {
    const {token} = req.params;
    const { password } = req.body;

    const user = await AdminProfiles.findOne({token});

    if(!user){
        const error = new Error("Sorry your token is invalid")
        return res.json({msg: error.message});
    }

    try {
        user.token = null;
        user.password = password;
        await user.save();
        res.json({ msg: "Password correctly modified" });
    } catch (error) {
        console.log(error);
    };
};


// check if the user is already enrolled into the data base and then provides a unique user token
const authenticator = async (req, res) => {
    const { email, password } = req.body;
    
    
    // check if the user exist into the data base
    const user = await AdminProfiles.findOne({email});

    if(!user){
        const error = new Error("The user does not exist")
        return res.status(404).json({msg: error.message})
    }
    // check if the user already confirmed his account
    if(!user.confirmed){
        const error = new Error("Your account has not been confirmed"); 
        return res.status(403).json({msg: error.message})
    }
    
    //check the user passwoer is correct
    if(await user.comparePassword(password)){
        res.json({token: generateJWT(user.id)})
    }else{
        const error = new Error("Your password is invalid"); 
        return res.status(403).json({ msg: error.message });
    }
}

// when the token is obtained, it is checked for correctness and the confirmed property is set to null
const confirmation = async (req, res) => {
    const { token } = req.params;
    
    const userConfirmated = await AdminProfiles.findOne({token});

    if(!userConfirmated){
        const error = new Error("This token is not valid");
        return res.status(404).json({msg: error.message});
    }

    try {
        userConfirmated.token = null;
        userConfirmated.confirmed = true
        await userConfirmated.save()
        res.json({msg: "The user was confirmated correctly"})
    } catch (error) {
        console.log(error)
    }
}

export{ register, profile, confirmation, authenticator, forgottenPassword, verifyToken, newPassword}