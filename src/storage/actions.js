const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
    }
    return response.json()
}

const handleError = (err) => {
    console.error(err)
}

export const getUsers = (setLoading) => (dispatch) => {
    fetch(
        `https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/users`
    )
        .then(checkResponse)
        .then((data) =>
            dispatch({
                type: 'add',
                data,
            })
        )
        .catch(handleError)
        .finally(setLoading(false))
}

export const deleteUser = (id, setLoading) => (dispatch) => {
    setLoading(true)
    return fetch(
        `https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/user/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
        .then(checkResponse)
        .then(() => {
            dispatch(getUsers(setLoading))
        })
        .catch(handleError)
}
export const editUser = (id, userData, setIsVisibleEditWindow, setLoading) => (
    dispatch
) => {
    setIsVisibleEditWindow(false)
    setLoading(true)
    return fetch(
        `https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/user/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
        .then(checkResponse)
        .then(() => {
            dispatch(getUsers(setLoading))
        })
        .catch(handleError)
}
export const createUser = (data, setLoading) => (dispatch) => {
    setLoading(true)
    return fetch(
        `https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/users`,
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
        .then(checkResponse)
        .then(() => {
            dispatch(getUsers(setLoading))
        })
        .catch(handleError)
}
