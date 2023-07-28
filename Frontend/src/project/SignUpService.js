import axios from "axios";
const Url="https://localhost:8080";
class SignUpService{
    saveSignUp(signup){
        return axios.post(Url+"add",signup);
    }
}
export default new SignUpService();