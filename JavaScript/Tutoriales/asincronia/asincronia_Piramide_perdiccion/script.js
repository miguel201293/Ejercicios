function get_nombre(userId,callback){
    isUserLoggedIn(userId,(err,isLoggedIn)=>{
        if (err){
            callback(err);
        }else{
            if(isLoggedIn){
                getUserDetails(userId, (err,userDetails) =>{
                    if (err){
                        callback(err);
                    }else{
                        callback(userDetails.userName)
                    }
                })
            }else{
                console.error("El usuario no esta conectado");
            }
        }
    })
}