const userModel = require('./userModel');
const bcrypt = require('bcrypt');
module.exports.register = async function register(req, res) {
    try {
        let { username, code, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        const user = await userModel.create({ username, code, password })
        if (user) {
            res.status(200).json({
                msg: "userCreated",
                user: user
            })
        }
    }
    catch (err) {
        return res.json(err);
    }

}


module.exports.login = async function login(req, res) {
    try {
        let { username, password } = req.body;
        const user = await userModel.findOne({ username })
        if (user) {
            let confirm = await bcrypt.compare(password, user.password);
            if (confirm) {
                res.json({
                    msg: "login successfull",
                    user: user
                })
            }
            else {
                res.status(401).json("invalid password")
            }
        }
        else {
            res.status(404).json({ msg: "user Not fount" })
        }
    }
    catch (err) {
        return res.json(err);
    }
}

