import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectActiveUser, selectIsAuthenticated } from "../store/auth/selectors"
import { getActiveUser } from "../store/auth";



export const RootApp = ({ children }) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuthenticated);
  
    useEffect(() => {
      isAuthenticated && dispatch(getActiveUser());
    }, []);

    return <>{children}</>
}
