import axios from "axios";

type ApiResponse = {
    data: {userName: string};
    userName: string;
    status: number;
}

async function isValidToken() {
    if (!localStorage.getItem('loginToken')) {
        return {isValidToken: false, userName: ''}
    }
    const res: ApiResponse = await axios.get("http://localhost:5000/auth-token", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("loginToken")}`
        }
    });
    const userName = res.data.userName
    const isValidToken = res.status === 200;
    return {isValidToken, userName};
}

export default isValidToken;