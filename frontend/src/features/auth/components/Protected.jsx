import Loader from '../../../global/component/Loader'
import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const Protected = ({children}) => {

    const user = useSelector(state=>state.auth.user)

    const loading = useSelector(state=> state.auth.loading)

    if(Loader)
    {
        <Loader></Loader>
    }
    if(!user)
    {
        return <Navigate to="/login" replace></Navigate>
    }


    return children
}

export default Protected