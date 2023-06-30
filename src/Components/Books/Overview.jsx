import { MainContent } from "./books"
import { Sidebar } from "./sidebar"
import './Overview.css'
export const Overview = () => {
    return (
        <>
        <div className="overview">
            <Sidebar />
            <MainContent />
        </div>
        </>
        
    )
}