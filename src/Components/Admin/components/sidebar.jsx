import { AdminContext } from "../../../context/adminContext/context"
import { useContext } from "react";


const Sidebar = () => {
    const { dispatch } = useContext(AdminContext);
    const handleAddUsers = () => {
        dispatch({ type: "ADD-USERS", payload: 'addusers' })
    }
    const handleViewUsers = () => {
        dispatch({ type: "VIEW-USERS", payload: 'viewusers' })
    }
    const handleViewBooks = () => {
        dispatch({ type: "VIEW-BOOKS", payload: 'books' })
    }
    const handleAddBooks = () => {
        dispatch({ type: "ADD-BOOKS", payload: 'addbooks' })
    }
    const handleViewAuthors = () => {
        dispatch({ type: "VIEW-AUTHORS", payload: 'viewauthors' })
    }
    const handleAddAuthors = () => {
        dispatch({ type: "ADD-AUTHORS", payload: 'addauthors' })
    }
    const handleViewPurchases = () => {
        dispatch({ type: "VIEW-PURCHASES", payload: 'purchases' })
    }
    return(
        <div className="sidebarAdmin">
            <ul>
                <li>dashboard</li>
                <li onClick={handleAddUsers}>add users</li>
                <li onClick={handleAddBooks}>add books</li>
                <li onClick={handleViewPurchases}>view purchases</li>
                <li onClick={handleViewBooks}>view books</li>
                <li onClick={handleViewAuthors}>View authors</li>
                <li onClick={handleAddAuthors}>add authors</li>     
            </ul>
        </div>
        
    )
}

export default Sidebar