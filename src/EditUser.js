import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { deleteUser, editUser } from './storage/actions'
import { FormStyled } from './CreateUser'
import { Modal } from './Modal'

const ModalStyled = styled(Modal)`
    span {
        font-size: 32px;
        color: white;
    }
`

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
    const clearInputs = () => {
        setEditedUserName('')
        setEditedUserSurname('')
        setEditedUserDescription('')
    }
    const userData = {
        name: editedUserName,
        surname: editedUserSurname,
        desc: editedUserDescription,
    }
    const handlerDeleteUser = () => dispatch(deleteUser(user.id, setLoading))

    const handlerEditUser = (e) => {
        e.preventDefault()
        dispatch(
            editUser(user.id, userData, setIsVisibleEditWindow, setLoading)
        )
    }

    return (
        <>
            {confirmDelete && (
                <ModalStyled>
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
                </ModalStyled>
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

                        <button
                            type="button"
                            onClick={() => {
                                clearInputs()
                                setIsVisibleEditWindow(false)
                            }}
                        >
                            Cancel edit
                        </button>
                    </FormStyled>
                </Modal>
            )}
        </>
    )
}
