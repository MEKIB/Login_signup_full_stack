function SignupValidation(values){
let errors={}
if(values.name===''){
    errors.name="the name should not be empty"
}
else{
    errors.name=''
}
if(values.email===''){
    errors.email='the email should not be empty'
}
else{
    errors.email=''
}
if(values.password===''){
    errors.password='the password is should not be empty '
}
else{
    errors.password=''
}
return errors
}
export default SignupValidation