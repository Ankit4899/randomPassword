import React from "react";
import {useState} from "react";
function App() {
const[length,setLength] = useState("");
const[pass,setPass] = useState("");

let generatePswd =()=>{
  const chars = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq1234567890*&^%$#@!"
  let password = "";
  for(let i = 1;i<=Number(length);i++){
      const idx = Math.floor(Math.random()*chars.length);
      password+=chars[idx];
  }
  return password;
}
let handleClick=(e)=>{
  e.preventDefault();
return setPass(generatePswd());
}
  return (
   <div className="bg-blue-800 h-screen w-screen flex items-center justify-center">
    <div className="w-[500px] h-60 bg-green-200 rounded-md flex items-center justify-center flex-col">
      <h3>Random password generator</h3>
       <div className="flex items-center justify-center gap-x-3">
        <input type="number" className="h-7 rounded-md outline-none text-center" onChange={(e)=>{setLength(e.target.value)}}/>
       </div>
        <button className="bg-black text-white rounded-md px-2 my-2" onClick={handleClick}>Click</button>
       <input type="text" className="h-7 rounded-md outline-none text-center" value={pass} readOnly/>
    </div>
   </div>
  )
}

export default App
