
import React ,{useEffect, useState}from "react";
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import "./App.css";

  function Todo(){
 const[inputTxt,setInput]=useState('');
 const localStore=()=>{
     let storage=localStorage.getItem('todo');
     if(storage){
        return JSON.parse(localStorage.getItem('todo'));
     }
 }
const [listData,setList]=useState(localStore());
 function addActivity(){
   setList([...listData,inputTxt]); //asynchronous method
    console.log(listData)
    setInput('');
 }
 
  function deleteData(){
      setList('');
  }
  
  function deletSing(index){
      const newList=  [...listData];// here we are making the copy we should not directly modify the main array because splice changes the original array
      newList.splice(index,1);
      setList(newList);

  }
  
  useEffect(()=>{
    localStorage.setItem('todo',JSON.stringify(listData));
   },[listData]);
     return(
          <div className="input_cont">
            <h1>MY TODO</h1><br></br>
         <input    type="text" className="input_todo" placeholder="enter your todo" value={inputTxt} onChange={e=>{
           setInput(e.target.value);
         }} required></input>
                 {inputTxt.length>=1&&<button className="btn" onClick={addActivity}><AddToPhotosOutlinedIcon/></button>}
                 <p className="list">List heading</p>
                 {listData!=[]&&listData.map((data,j)=>{
                  return(<>
                 <div className="main" index={j}>
                    <div className="data"  >
                      {data}
                    </div>
                    <button  className="delete" onClick={deletSing} ><AutoDeleteIcon></AutoDeleteIcon></button>
                    
                    </div>
                     
                    
                    

                  </>)
                 })}
               

                 <br></br>
             {listData.length>=1&&<button onClick={deleteData} className="hello" >Delete ALL</button>}
          </div>
     )

  }
export default Todo;
