class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){//you cann't access it now
        return `${Math.floor(Math.random()*100)+1}`
    }
}

const gourav = new User('gourav')
class teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher('iphone','i@phone.com','123')
iphone.logMe()
// iphone.createId()// thiss will also show error