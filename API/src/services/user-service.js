const User = require("../models/user-model");
const user = new User();

module.exports = class UserService {
    constructor(){

    }

    setImageUrl(userId, url){
        return new Promise((resolve, reject) => {
            this.user.updateByImage(userId, url).then(res=>{
                resolve(res);
                }
            ).catch(err => {
                reject(err);
            })

        })
    }
}