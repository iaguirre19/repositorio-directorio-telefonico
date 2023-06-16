
const register = (req, res) => {
    // console.log(req.body);
    const {name, email, password} = req.body

    console.log(name)
    console.log(email)
    console.log(password)

    res.json({msg: "Registering user..."})
}
const profile = (req, res) => {
    res.json({ msg: "Showing user profile..." });
}



export{ register, profile}