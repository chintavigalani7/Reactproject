import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
    const [students, setStudents] = useState([]);
    const usernameRef = useRef("");
  const passwordRef = useRef("");
  const studIdRef = useRef("");

  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    getApi();
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`https://dummyjson.com/products/${id}`).then((res) => {
      getApi(); 
    });
  };

//   const getApi = () => {
//     axios.get(`https://dummyjson.com/products`).then((res) => {
//       setStudents(res.data);
//     });
//   };

  const getApi = () => {
    axios.get(`https://dummyjson.com/products`).then((res) => {
      if (Array.isArray(res.data)) {
        setStudents(res.data);
      }
    });
  };

  const addData = () => {
    if (studIdRef.current.value) {
      axios
        .put(`http://localhost:3030/std/${studIdRef.current.value}`, {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        })
        .then(() => {
          getApi();
          showAlert("Form updated successfully!");
          clearFields();
          setIsEditing(false);
        });
    } else {
      axios
        .post("http://localhost:3030/std", {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        })
        .then(() => {
          getApi();
          showAlert("Form submitted successfully");
          clearFields();
        });
    }
  };

  const editStudent = (id) => {
    axios.get(`http://localhost:3030/std/${id}`).then((res) => {
      const { username, password, id: studentId } = res.data;
      usernameRef.current.value = username;
      passwordRef.current.value = password;
      studIdRef.current.value = studentId;
      setIsEditing(true);
    });
  };

  const showAlert = (message) => {
    window.alert(message);
  };

  const clearFields = () => {
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    studIdRef.current.value = "";
  };

  return (
    <div>
      <div className="text-center">
        <a href="#myModal" className="trigger-btn" data-toggle="modal">
          Click to Open Login form
        </a>
      </div>

      <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-login">
          <div className="modal-content">
            <div className="modal-header">
              <div className="avatar">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBc-AEj_9MJQIUQqlgB0a9Nao0kuhi4ydeyQ&usqp=CAU"
                  alt="Avatar"
                />
              </div>
              <h4 className="modal-title">Student Login</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    ref={usernameRef}
                    className="form-control"
                    name="username"
                    placeholder="Username"
                    required="required"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    ref={passwordRef}
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    required="required"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <input type="hidden" ref={studIdRef} />
                </div>
                <div className="form-group">
                  <button
                    type="button"
                    onClick={addData}
                    className="btn btn-primary btn-lg btn-block login-btn"
                    data-dismiss="modal"
                  >
                    {isEditing ? "Update" : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Submitted Form Data:</h2>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Action</th>
            </tr> 
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.username}</td>
                <td>{student.password}</td>
                <td>
                  <button id="red" onClick={() => deleteStudent(student.id)}>
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                  <button id="Blue" onClick={() => editStudent(student.id)}  data-toggle="modal" data-target="#myModal">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
    </div>
  );
};


export default Form;
