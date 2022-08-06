import { createContext, useContext, useEffect, useMemo, useState } from 'react'

interface UserProps {
    children: React.ReactNode
}

interface User {
    name: string
    email: string
    birthdate: string
    gender: string
    id: string
    candidate: Boolean
}

interface ContextDataProps {
    user: User
    setUser: (user: User) => void
}

const defaultContextValues = {
    user: {
        name: '',
        email: '',
        birthdate: '',
        gender: '',
        id: '',
        candidate: false,
    },
    setUser: () => undefined
}

export const UserContext = createContext<ContextDataProps>(defaultContextValues)

export const UserProvider = ({ children }: UserProps) => {
    const [user, setUser] = useState<User>(defaultContextValues.user)

    useEffect(() => {
        if (user.id) {
            localStorage.setItem('books-user', JSON.stringify(user))
        }
    }, [user])

    useEffect(() => {
        if (window !== undefined) {
            const userData = localStorage.getItem('books-user')

            if (userData) {
                setUser(JSON.parse(userData))
            }
        }
    }, [])

    const value = useMemo(() => {
        return {
            user,
            setUser
        }
    }, [user])

    return <UserContext.Provider value={value}> {children} </ UserContext.Provider>
}

export const useUser = () => {
    const provider = useContext(UserContext)

    if (!provider) throw new Error('User provider must be provided')

    return provider
}