import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { deleteUser, editUser } from './storage/actions'
import { FormStyled } from './CreateUser'
import { Modal } from './App'
export const EditUser = ({ user, setLoading }) => {
    const dispatch = useDispatch()
    const [editedUserName, setEditedUserName] = useState('')
    const [editedUserSurname, setEditedUserSurname] = useState('')
    const [editedUserDescription, setEditedUserDescription] = useState('')
    const [isVisibleEditWindow, setIsVisibleEditWindow] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const handleEditUserNameChange = (e) => {
        setEditedUserName(e.currentTarget.value)
    }
    const handleEditUserSurname = (e) => {
        setEditedUserSurname(e.currentTarget.value)
    }
    const handleEditUserDescription = (e) => {
        setEditedUserDescription(e.currentTarget.value)
    }
    const userData = {
        name: editedUserName,
        surname: editedUserSurname,
        desc: editedUserDescription,
    }
    const handlerDeleteUser = () => deleteUser(user.id, dispatch, setLoading)

    const handlerEditUser = (e) => {
        e.preventDefault()
        editUser(
            user.id,
            userData,
            setIsVisibleEditWindow,
            dispatch,
            setLoading
        )
    }

    return (
        <>
            {confirmDelete && (
                <Modal>
                    <span>Delete?</span>
                    <button
                        onClick={() => {
                            handlerDeleteUser()
                            setConfirmDelete(false)
                        }}
                    >
                        Ok
                    </button>
                    <button
                        onClick={() => {
                            setConfirmDelete(false)
                        }}
                    >
                        No
                    </button>
                </Modal>
            )}
            {!isVisibleEditWindow && (
                <>
                    <button onClick={() => setConfirmDelete(true)}>
                        Delete user
                    </button>
                    <button
                        onClick={() => {
                            setEditedUserName(user.name)
                            setEditedUserSurname(user.surname)
                            setEditedUserDescription(user.desc)
                            setIsVisibleEditWindow(true)
                        }}
                    >
                        Edit user
                    </button>
                </>
            )}

            {isVisibleEditWindow && (
                <Modal>
                    <FormStyled onSubmit={handlerEditUser}>
                        <h3>Edit user</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="input name"
                            defaultValue={editedUserName}
                            onChange={handleEditUserNameChange}
                            required
                        />
                        <input
                            type="text"
                            name="surname"
                            placeholder="input surname"
                            defaultValue={editedUserSurname}
                            onChange={handleEditUserSurname}
                            required
                        />
                        <input
                            type="text"
                            name="desc"
                            placeholder="input desc"
                            defaultValue={editedUserDescription}
                            onChange={handleEditUserDescription}
                            required
                        />
                        <button type="submit">Edit user</button>
                        {isVisibleEditWindow && (
                            <button
                                onClick={() => setIsVisibleEditWindow(false)}
                            >
                                Cancel edit
                            </button>
                        )}
                    </FormStyled>
                </Modal>
            )}
        </>
    )
}
