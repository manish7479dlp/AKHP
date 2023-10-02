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

const createUser = async ({ name, year, advance, mobile, token }) => {
    const URL = BASE_URL + "/api/auth/signup"

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                fullName: name,
                year,
                advance,
                mobile
            })

        });
        const user = await response.json();
        console.log(user)
        return user;
    } catch (error) {
        console.log(error)
    }
}

const editUser = async (name, year, advance, mobile) => {
    const URL = BASE_URL + "/api/v1/user/"
    const { token } = useSelector((state) => state.user.data)

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                year,
                advance,
                mobile,
                fullName: name
            })

        });
        const user = await response.json();
        console.log(user)
        return user;
    } catch (error) {
        console.log(error)
    }
}

// get all routine
const getAlltRoutine = async (token) => {
    const URL = BASE_URL + "/api/v1/routine"

    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        const routine = await response.json();
        return routine;
    } catch (error) {
        console.log(error)
    }
}

// get routine on the basis of day
const getRoutineDayWise = async () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const toDay = days[new Date().getDay()]
    const URL = BASE_URL + "/api/v1/routine/" + toDay
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

// edit routine on the basis of id
const editRoutineById = async (id) => {
    const URL = BASE_URL + "/api/v1/routine/" + id
    const { token } = useSelector((state) => state.user.data)

    try {
        const response = await fetch(URL, {
            method: 'PUT',
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

export { userLogin, createUser, editUser, getAlltRoutine, getRoutineDayWise, editRoutineById }