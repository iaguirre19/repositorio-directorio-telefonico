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
    // const documentos = userAdmin.find();

    // console.log(documentos)

    res.json({ msg: "Showing user profile..." });
};

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

// check if the user is already enrolled into the data base
const authenticator = async (req, res) => {
    const { email, password } = req.body;


    // check if the user exist into the data base
    const user = await AdminProfiles.findOne({email});

    if(!user){
        const error = new Error("The user does not exist")
        return res.status(404).json({msg: error.message})
    }

    if(!user.confirmed){
        const error = new Error("Your account has not been confirmed"); //se usa el new erro para crear una instancia nueva de la clase Error y personalizar el mensjae de error
        return res.status(403).json({msg: error.message})
    }

    //check the user
    if(await user.comparePassword(password)){
        console.log("Correct Password")
    }else{
        const error = new Error("Your password is invalid"); 
        return res.status(403).json({ msg: error.message });
    }


}

export{ register, profile, confirmation, authenticator}