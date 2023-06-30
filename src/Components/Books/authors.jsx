import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import { apiDomain } from '../../utils/utils'
import { Context } from '../../context/userContext/context';

const Authors = () => {
    const {user} = useContext(Context)
    const [Authors, setAuthors] = useState([])
    const FetchAuthors = async () => {
        try {
            const response = await axios.get(`${apiDomain}/authors`, { headers: { Authorization: `${user.token}` } });
            setAuthors(response.data) ;
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        FetchAuthors() 
    }, [])
    

    return (
        <>
        <h2>Authors</h2>
    <ul class="sidebar-menu">
        {
            Authors && Authors.map((Author, index) => {
                return(
                    <li key={index}>{Author.author_name}</li>
                )
            })
        }
        </ul>
        </>
    )
}

export default Authors
