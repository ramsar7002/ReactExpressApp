import axios from 'axios';



export const CreateApiClient = async(page=1)=>{
    console.log(page);
    let res = await axios.get(`http://localhost:3232/api/?page=${page}`);
return(
    res.data
)
}