const User = require("../../model/user");
const brcypt = require("bcrypt");

const signUp=(req,res)=>{
    brcypt.hash(req.body.password,10)
    .then((hash)=>{
        const user = new User({
            email : req.body.email,
            password : hash
        });

        user.save()
        .then((result)=>{
            res.status(202).json({
                message : "user created"
            });
        })
        .catch((err)=>{
            res.status(501).jsom({
                 message : "internal server error"
            })
}
        );
    });
};