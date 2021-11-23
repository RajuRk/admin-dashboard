import React, {useState} from "react";

function Addstudent() {
  
  const data = [{
      name: "Raju",
      grad: "B.E",
      dept: "Electronics",
      mobile: "1236548978",
      email: "rajkumar@gmail.com",
    },
    {
      name: "Kumaran",
      grad: "B.E",
      dept: "Computer Science",
      mobile: "9876548587",
      email: "kumaran@gmail.com",
    }];

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [grad, setGrad] = useState("");
  let [dept, setDept] = useState("");
  
  let hanldeSave = () =>{
    data.push({
      name,
      email,
      mobile,
      grad,
      dept
    })

    console.log(data)
  }
 
  return (
    <div>
      <h3>Add Student</h3>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Grade" 
            onChange={(e) => setGrad(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Department"
            onChange={(e) => setDept(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Addstudent;
