function LoginValidation(values){
    let errors={}
    if(values.email===''){
        errors.email="email should not be empty"
    }
    else{
        errors.email=""
    }
    if(values.password===''){
        errors.password="the password should not be empty"
    }
    else{
        errors.password=""
    }
    return errors
}
export default LoginValidation