import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    if (currentUser) {
        return children;
    }
    return <Navigate to="/login" replace />
}

export default PrivateRoutes
