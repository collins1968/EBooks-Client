import AddBookForm from "./AddBooks";
import { useContext } from "react";
import { AdminContext } from "../../../context/adminContext/context"
import ComingSoon from "./ComingSoon";

const MainNav = () => {
    const { ui } = useContext(AdminContext);
    return(
        <div className="mainNavAdmin">
            {
                 ui == 'addbooks' ? (
                    <div className="mainnav_wrapper">
                        <h2>add Books</h2>
                        <AddBookForm />
                    </div>
                ) : ui == 'books' ? (
                    <div className="mainnav_wrapper" >
                        <h2>View All Books</h2>
                       <ComingSoon />
                    </div>
                ): ui == 'addusers' ? (
                    <div className="mainnav_wrapper" >
                        <h2>Add Users</h2>
                       <ComingSoon />
                    </div>
                ): ui == 'viewusers' ? (
                    <div className="mainnav_wrapper" >
                        <h2>View All users</h2>
                       <ComingSoon />
                    </div>
                ): ui == 'addauthors' ? (
                    <div className="mainnav_wrapper" >
                        <h2>add Authors</h2>
                       <ComingSoon />
                    </div>
                ): ui == 'purchases' ? (
                    <div className="mainnav_wrapper" >
                        <h2>View purchases</h2>
                       <ComingSoon />
                    </div>
                ): ui == 'viewauthors' ? (
                    <div className="mainnav_wrapper" >
                        <h2>View All authors</h2>
                       <ComingSoon />
                    </div>
                ): null
            }   
        </div>
    )
}

export default MainNav;