const userController = {
    signup :async(req,res)=>{
        try{        
            const {email, name, password} = req.body;
            
            const checkEmail = await userModel.findOne({email});
            if(checkEmail){               
                return res.status(400).json({error : "Given mail id was already exists"})
            };

            //const passwordHash = await bcrypt.hash(password, 10)    
            
            const newUser =new userModel ( {
                email,
                name,
                password : passwordHash
            });

          const savedUser = await newUser.save()

          res.status(200).json({message : "user created successfully", user : savedUser})

        }catch{
            res.status(500).json({error : "Error while creating user"})
        }

    },
}

module.exports = userController;