const EmailValidate=(email)=>{
    if(!email.includes("gmail.com")){
        return  false
    }
    return true
}
export default EmailValidate