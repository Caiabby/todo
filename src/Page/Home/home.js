import {useState,useEffect} from "react"

import "./home.css"
import Edit from "./component/Edit"
import List from "./component/List"

const Home = () =>{
    const [data,setData] = useState([])

    useEffect( () => {
        fetch("http://localhost:3000/posts/1")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        },[])
    } )

    return <div className="app">
        <Edit add = {setData} />
        <List ListData = {data} deleteData = {setData} />
    </div>
}

export default Home