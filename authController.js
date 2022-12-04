class authController {
    async registration(req, res){
        try{

        }catch(e){
            console.log(e)
        }
    }
    async login(req, res){
        try{

        }catch(e){
            console.log(e)
        }
    }
    async getUsers(req, res){
        try{
            res.json("Vse rabotaet")
        }catch(e){
            console.log(e)
        }
    }
}

module.exports = new authController()