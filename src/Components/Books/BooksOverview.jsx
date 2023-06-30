import { Overview } from "./Overview";
import { Sidebar } from "./sidebar";
import './BooksOverview.css'
import Footer from "../Footer";
import Header from "../Header";

const BooksOverview = () => {
    return (
        <div className="BooksOverview">
            <Header />
            <Overview />
        </div>
    )
}

export default BooksOverview;