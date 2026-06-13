// import { useEffect, useState } from 'react'
// import axios from 'axios';
// import './App.css'

// function App() {

//   const [name,setname]=useState("");
//   const [phone,setphone]=useState("");
//   const [email,setemail]=useState("");
//   const [age,setage]=useState("");

//   function add(){
//                                                               // alert(name);
//     axios.post("http://localhost:5000/add",{
//       name,phone,email,age
//     });
//   }
//   function update(){
//     axios.put("http://localhost:3000/update",{
//       id:id , name:newname 
//     })
//   }

//   useEffect(()=>{
//     axios.get("http://localhost:3000/read").then((d)=>{
//       setData (d.data);
//     })
//   })

//   return( 
//     <div>
//               <h1> Welcome To My First Own Try CODING  </h1>
//       <label htmlFor="">Enter Your Name </label>
//       <input type="text" onChange={(e)=>setname(e.target.value)} value={name} placeholder='Name' /> 
//       <br /><br />
//       <label htmlFor="">Enter Your Phone Num</label>
//       <input type="text" onChange={(e)=>setphone(e.target.value)} value={phone} placeholder='Phone Number ' /> 
//       <br /><br />
//       <label htmlFor="">Enter your Email</label>
//       <input type="text" onChange={(e)=>setemail(e.target.value)} value={email} placeholder='You@anymail.com'/>
//       <br /><br />
//       <label htmlFor=""> Enter Your Age </label>
//       <input type="text" onChange={(e)=>setage(e.target.value)} value={age} placeholder='Age' />
//       <br /><br />
//       <button onClick={add}> submit </button>
//     </div>
//   )

  
// }

// export default App
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");

  const [data, setData] = useState([]);

  function add() {
<<<<<<< HEAD
    axios.post("http://localhost:5000/add", {
      name, phone, email, age, })
=======
    axios.post("https://crud-react-js-mffg.onrender.com/add", {
      name,
      phone,
      email,
      age,
    })
>>>>>>> 0de95870dacc90949a5aef0ab78162c4bfd3a237
    .then((res) => {
      console.log(res.data);
      alert("Data Saved Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    axios.get("https://crud-react-js-mffg.onrender.com/read")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1>My First Project</h1>

      <label>Enter Your Name</label>
      <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Name" />
                    <br /><br />
      <label>Enter Your Phone Number</label>
      <input type="text" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="Phone Number" />
                    <br /><br />
      <label>Enter Your Email</label>
      <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="you@example.com" />
                    <br /><br />
      <label>Enter Your Age</label>
      <input type="text" value={age} onChange={(e) => setage(e.target.value)} placeholder="Age" />
      <br /><br />
      <button onClick={add}>Submit</button>
      <hr />

      <h2>Stored Data</h2>

      {data.map((item) => (
        <div key={item._id}>
          <p>Name: {item.name}</p>
          <p>Phone: {item.phone}</p>
          <p>Email: {item.email}</p>
          <p>Age: {item.Age}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
