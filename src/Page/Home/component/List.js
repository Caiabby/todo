import Item from "./Item";


const List = ({ListData,deleteData}) => {
    return <div className="list">
        {
            ListData.map(obj => {
                const {note,date,time,id} = obj
                return <Item 
                            Note={note} 
                            Date={date} 
                            Time={time} 
                            key={id}
                            id={id} 
                            DeleteData = {deleteData}
                        />
                // return <Item Note={obj.note} Date={obj.date} Time={obj.time}/>
            })
        }
    </div>
}

export default List