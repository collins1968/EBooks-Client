import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import { apiDomain } from '../../utils/utils'
import { Context } from '../../context/userContext/context';


const Categories = () => {
    const {user} = useContext(Context)
    const [categories, setcategories] = useState([])
    const FetchCategories = async () => {
        try {
            const response = await axios.get(`${apiDomain}/categories`, { headers: { "Authorization": `${user.token}` } } );
            setcategories(response.data) ;
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        FetchCategories() 
    }, [])
    

    return (
        <>
        <h2>Categories</h2>
    <ul class="sidebar-menu">
        {
            categories && categories.map((category, index) => {
                return(
                    <li key={index}>{category.category_name}</li>
                )
            })
        }
        </ul>
        </>
    )
}

export default Categories;