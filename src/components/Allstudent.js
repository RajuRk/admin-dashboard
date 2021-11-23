import React from "react";

function AllStudent() {
  const data = [
    {
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
    },
  ];
  return (
    <div>
      <table class="table table-striped">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Grade</th>
            <th scope="col">Department</th>
            <th scope="col">Options</th> 
          </tr>
        </thead>
        <tbody>
          {
            data.map((e,i) => {
              return <tr key={i}>
                <th scopr="row">{i+1}</th>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.grad}</td>
                <td>{e.dept}</td>
                <td><button className="btn btn-primary">Edit</button>&nbsp;&nbsp;<button className="btn btn-danger">Delete</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default AllStudent;
