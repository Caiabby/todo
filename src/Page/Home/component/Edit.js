import {useState} from "react"
import { v4 } from "uuid"

const Edit = ({ add }) => {

    const [note,dataNote] = useState("")
    const [date,dataDate] = useState("")
    const [time,dataTime] = useState("")
    function changeNote(e){
        dataNote(e.target.value)
    }
    function changeDate(e){
        dataDate(e.target.value)
    }
    function changeTime(e){
        dataTime(e.target.value)
    }

    function addlist(){
        add(function(prev_data){
            return [
                {
                    id: v4(),
                    note,
                    date,
                    time
                },...prev_data,
            ]
        })
        console.log(note,date,time)
    }
    
    return <div>
        
        <h2>備忘錄</h2>
        <p>記事</p>
        <input type="text" value={note} onChange={changeNote}/>
        <p>日期</p>
        <input type="date" value={date} onChange={changeDate}/>
        <p>時間</p>
        <input type="time" value={time} onChange={changeTime}/>
        <button className="add" onClick={addlist}>新增</button>
    

    </div>
}

export default Edit