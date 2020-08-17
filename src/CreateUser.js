import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { createUser } from './storage/actions'

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 0;
    justify-content: center;
    border: 1px solid black;
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
    background-color: lightgray;
    input,
    button {
        margin: 10px;
        padding: 5px 10px;
        font-weight: bold;
        border-radius: 10px;
        outline: none;
    }
    @media (min-width: 860px) {
        flex-direction: row;
    }
`
export const CreateUser = ({ setLoading }) => {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [userSurname, setUserSurname] = useState('')
    const [userDescription, setUserDescription] = useState('')

    const handleUserNameChange = (e) => {
        setUserName(e.currentTarget.value)
    }
    const handleUserSurname = (e) => {
        setUserSurname(e.currentTarget.value)
    }
    const handleUserDescription = (e) => {
        setUserDescription(e.currentTarget.value)
    }
    const userData = {
        name: userName,
        surname: userSurname,
        desc: userDescription,
    }
    const clearInputs = () => {
        setUserName('')
        setUserSurname('')
        setUserDescription('')
    }
    const handleCreateUser = (e) => {
        e.preventDefault()
        clearInputs()
        dispatch(createUser(userData, setLoading))
    }

    return (
        <FormStyled onSubmit={handleCreateUser}>
            <h3>Create user</h3>
            <input
                type="text"
                name="name"
                placeholder="input name"
                value={userName}
                onChange={handleUserNameChange}
                required
            />
            <input
                type="text"
                name="surname"
                placeholder="input surname"
                value={userSurname}
                onChange={handleUserSurname}
                required
            />
            <input
                type="text"
                name="desc"
                placeholder="input description"
                value={userDescription}
                onChange={handleUserDescription}
                required
            />
            <button type="submit">Create user</button>
        </FormStyled>
    )
}
