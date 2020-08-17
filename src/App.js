import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Pagination } from './Pagination'
import { CreateUser } from './CreateUser'
import { EditUser } from './EditUser'
import { getUsers } from './storage/actions'
import { useSelector, useDispatch } from 'react-redux'

const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    min-height: 100vh;
`
export const Modal = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        font-size: 32px;
        color: #fff;
    }
`
const UsersWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const UserWrapper = styled.div`
    border: 1px solid black;
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
    button,
    p,
    span {
        margin: 10px;
        padding: 5px 10px;
        border-radius: 10px;
        outline: none;
    }
`

const App = () => {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getUsers(dispatch, setLoading)
    }, [dispatch])

    const usersData = useSelector((users) => users.users)

    const [currentPage, setCurrentPage] = useState(1)
    const usersPerPage = 5

    const currentUsers = usersData.slice(
        (currentPage - 1) * usersPerPage,
        currentPage * usersPerPage
    )
    const PageCount = Math.ceil(usersData.length / usersPerPage)
    if (PageCount < currentPage) {
        setCurrentPage(PageCount)
    }
    return (
        <Wrapper>
            {loading && (
                <Modal>
                    <span>Loading...</span>
                </Modal>
            )}
            <CreateUser setLoading={setLoading} />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                usersPerPage={usersPerPage}
                PageCount={PageCount}
            />
            <UsersWrapper>
                {currentUsers.map((user, index) => {
                    return (
                        <UserWrapper key={index}>
                            <p>Name: {user.name}</p>
                            <p>Surname: {user.surname}</p>

                            <p>Description: {user.desc}</p>

                            <EditUser setLoading={setLoading} user={user} />
                        </UserWrapper>
                    )
                })}
            </UsersWrapper>
        </Wrapper>
    )
}

export default App
