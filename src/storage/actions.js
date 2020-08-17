export const getUsers = (dispatch, setLoading) => {
    return fetch(
        `https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/users`
    )
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: 'add', data: data })
            setLoading(false)
        })
}

export const deleteUser = (id, dispatch, setLoading) => {
    setLoading(true)
    fetch(
        `https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/user/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    ).then(() => {
        getUsers(dispatch, setLoading)
    })
}
export const editUser = (
    id,
    userData,
    setIsVisibleEditWindow,
    dispatch,
    setLoading
) => {
    setIsVisibleEditWindow(false)
    setLoading(true)
    fetch(
        `https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/user/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    ).then(() => {
        getUsers(dispatch, setLoading)
    })
}
export const createUser = (data, dispatch, setLoading) => {
    setLoading(true)
    fetch(
        `https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/users`,
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    ).then(() => {
        getUsers(dispatch, setLoading)
    })
}
