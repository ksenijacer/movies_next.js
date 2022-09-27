import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectActiveUser, selectIsAuthenticated } from "../store/auth/selectors"


export const RootApp = ({ children }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const user = useSelector(selectActiveUser)

    useEffect(() => {
        if(isAuthenticated && user) {

        }
    }, [isAuthenticated, user])

    return <>{children}</>
}
