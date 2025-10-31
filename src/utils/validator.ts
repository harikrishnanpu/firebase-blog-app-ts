

export const passwordValidator = (password: string, confirmPassword: string): boolean => {
    if(password === confirmPassword){
        return true;
    }
    return false;
}