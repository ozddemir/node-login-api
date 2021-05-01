const { jwtoptions } = require("../env/config");
var jwt = require('jsonwebtoken');

const gettokencommand = (req, res, jwt) => {

    // Örneği amacının dışına çıkmaması için email ve şifre hardcode olarak yazıldı.
    //Olması gereken bu iki değeri sql ya da mongoDB gibi bir database de saklanması ve bu DB'lere bağlanılarak
    // değerlerin çekilip kontrollerin yapılması gerekir
    const email = "admin@mail.com"
    const password = "123"
    if (email===req.body.email && password === req.body.password) {
        const token = jwt.sign({ email }, jwtoptions.jwtkey, {
            algorithm: "HS256",
            expiresIn: jwtoptions.jwtExpirySeconds,
        });
        return res.json({ token: token, tokenstamp: Date.now() });
    } else {
        res.status(403).json({ msg: "failed" });
    }
};

const tokencontrolcommand = (req, res, jwt) => {
    let token = req.query.token;
    try {
        let decoded = jwt.verify(token, jwtoptions.jwtkey);
        return true;
    } catch (err) {
        return false;
    }
};

module.exports = {
    gettokencommand,
    tokencontrolcommand,
};
