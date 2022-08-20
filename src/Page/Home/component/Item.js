const Item = ({Note,Date,Time,DeleteData,id}) =>{

    function delObj(){
        DeleteData(function(prevData){
            return prevData.filter(obj => obj.id !== id)
        })
    }

    return <div className="item">
        <div>
            <p>{Note}</p>
            <p>{`${Date} ${Time}`}</p>
        </div>
        <button className="remove" onClick={delObj}>刪除</button>
    </div>
}

export default Item