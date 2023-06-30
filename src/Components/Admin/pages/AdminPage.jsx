import "./AdminPage.css"
import MainNav from "../components/MainNav";
import Sidebar from "../components/sidebar";
import Header from "../..//Header"


const AdminPage = () => {
    return (
        <div>
            <Header />
            <div className="adminContent">
            <Sidebar />
            <MainNav />
            </div>
        </div>
    )
}

export default AdminPage;