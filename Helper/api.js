import { useSelector } from "react-redux"


const BASE_URL = "https://akhp.onrender.com"


const userLogin = async (mobile) => {
    const URL = BASE_URL + "/api/auth/login"
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ mobile: mobile })
        });
        const user = await response.json();
        return user;
    } catch (error) {
        console.log(error)
    }
}

const getRoutine = async () => {
    const URL = BASE_URL + "/api/auth/login"
    const { token } = useSelector((state) => state.user.data)

    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        const user = await response.json();
        console.log(user)
        return user;
    } catch (error) {
        console.log(error)
    }
}

export { userLogin, getRoutine }