import { useSelector } from "react-redux"


const BASE_URL = "https://akhp.onrender.com"
// const BASE_URL = "http://192.168.0.154:4000"



const userLogin = async (mobile, password) => {
    const URL = BASE_URL + "/api/auth/login"
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ mobile: mobile, password: password })
        });
        const user = await response.json();
        return user;
    } catch (error) {
        console.log(error)
    }
}

const getAllUser = async (token) => {
    const URL = BASE_URL + "/api/v1/user"
    try {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const user = await response.json()
        for (let i = 0; i < user.data.length; i++) {
            user.data[i].idx = i
            // console.log(user.data[i])
        }
        return user

    } catch (error) {
        console.log(error)
    }

}

// get user details on the basis of mobile numer
const getUserByMobile = async (mobile, token) => {
    const URL = BASE_URL + "/api/v1/user/" + mobile
    try {
        const response = await fetch(URL, {
            method: 'Get',
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

// create user 
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

// edit user by mobile number
const editUser = async ({ name, year, advance, mobile, token }) => {
    const URL = BASE_URL + "/api/v1/user/" + mobile

    try {
        const response = await fetch(URL, {
            method: 'PUT',
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

// delete user by mobile number
const deleteUser = async ({ mobile, token }) => {
    const URL = BASE_URL + "/api/v1/user/" + mobile

    try {
        const response = await fetch(URL, {
            method: 'DELETE',
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
const getRoutineDayWise = async (token) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const toDay = days[new Date().getDay()]
    const URL = BASE_URL + "/api/v1/routine/" + toDay

    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        const user = await response.json();
        // console.log(user)
        return user;
    } catch (error) {
        console.log(error)
    }
}

// edit routine on the basis of id
const editRoutineById = async ({ id, token, lunch, dinner, day }) => {
    const URL = BASE_URL + "/api/v1/routine/" + id

    try {
        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                day,
                lunch,
                dinner
            })
        });
        const user = await response.json();
        console.log(user)
        return user;
    } catch (error) {
        console.log(error)
    }
}


// give Attendance
const giveAttendance = async ({ token, url }) => {
    const URL = url
    try {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const user = await response.json()
        return user

    } catch (error) {
        console.log(error)
    }

}

// get Attendance
const getAttendance = async ({ token, mobile }) => {
    const URL = BASE_URL + "/api/v1/attendance/" + mobile
    console.log(mobile)
    try {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const user = await response.json()
        console.log(user)
        return user

    } catch (error) {
        console.log(error)
    }

}

export { userLogin, createUser, editUser, deleteUser, getAlltRoutine, getRoutineDayWise, editRoutineById, getUserByMobile, getAllUser, giveAttendance, getAttendance }