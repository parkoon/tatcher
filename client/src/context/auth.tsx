import React, { createContext, useReducer, useContext } from 'react'
import jwtDecode from 'jwt-decode'

const initialState = {
    user: null,
}

if (localStorage.getItem('tuid')) {
    const jwt = localStorage.getItem('tuid')

    const decodedToken = jwt ? jwtDecode<any>(jwt) : null

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('tuid')
    } else {
        initialState.user = decodedToken
    }
}

type AuthContextType = {
    login(user: User): void
    logout(): void
    user: User | null
}
export const AuthContext = createContext({} as AuthContextType)

export type User = { token: string }

type State = {
    user: User | null
}
type Action = { type: 'LOGIN'; payload: User } | { type: 'LOGOUT' }

function authReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
            }
        default:
            return state
    }
}

type AuthProviderProps = {
    children: React.ReactNode
}
export function AuthProvider({ children }: AuthProviderProps) {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const login = (user: User) => {
        localStorage.setItem('tuid', user.token)
        dispatch({
            type: 'LOGIN',
            payload: user,
        })
    }

    const logout = () => {
        localStorage.removeItem('tuid')
        dispatch({
            type: 'LOGOUT',
        })
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
                user: state.user,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}
