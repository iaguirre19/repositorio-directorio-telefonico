import AdminProfiles from "../models/AdminProfiles.js"


const register = async (req, res) => {
    // console.log(req.body); cuando se hace un POST en la la base de datos normal mente se almacena en req.body
    // const {name, email, password} = req.body

    try {
        const adminUser = new AdminProfiles(req.body);
        const adminUserSave = await adminUser.save()
        res.json(adminUserSave)
    } catch (error) {
        console.log("error")
    }
}
const profile = (req, res) => {
    res.json({ msg: "Showing user profile..." });
}

export{ register, profile}