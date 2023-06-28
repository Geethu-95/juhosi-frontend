import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const initialValues = {
    id: "",
    password: "",
  };

  const schema = Yup.object().shape({
    id: Yup.string().required("Please enter user ID"),
    password: Yup.string().required("Please enter password"),
  });

  const submitForm = (values) => {
    // console.log(values);
    authenticationMech(values);
    //   if (values.id === "admin" && values.password === "admin")
    //     navigate("/admin");
    //   else if (
    //     (values.id === "customer1" && values.password === "customer1") ||
    //     (values.id === "customer2" && values.password === "customer2")
    //   )
    //     navigate("/customer");
    //   else alert("Invalid credentials!");
  };

  const renderError = (message) => <p className="help is-danger">{message}</p>;

  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");

  const requestOptions = {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  };

  const authenticationMech = (values) => {
    fetch(`https://dynamic-sundae-608ccc.netlify.app/.netlify/functions/index/login/${values.id}`,requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // setUname(data[0].customerId);
        // setPwd(data[0].password);
        // console.log(data)
        if (
          data[0].customerId === values.id &&
          data[0].password === values.password &&
          values.id === "admin"
        ) {
          navigate("/admin");
        } else if (
          (data[0].customerId === values.id &&
            data[0].password === values.password) ||
          (data[0].customerId === values.id &&
            data[0].password === values.password)
        ) {
          navigate("/customer");
        } else return alert("Invalid credentials!");

        // console.log(data);
      })
      .catch((error) => console.error(error));

    // console.log("uname ",uname)

    // if (uname && uname === "admin" && pwd && pwd === "admin")
    //   navigate("/admin");
    // else if (
    //   (uname && uname === "customer1" && pwd && pwd === "customer1") ||
    //   (uname && uname === "customer2" && pwd && pwd === "customer2")
    // ) {
    //   navigate("/customer");
    // } else return -1;
  };

  return (
    <div style={{ marginLeft: "40%" }}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={schema}
      >
        {(formik) => {
          return (
            <Form>
              <div className="field">
                <label className="label" htmlFor="id">
                  ID
                </label>
                <div className="control">
                  <Field
                    name="id"
                    type="text"
                    className="input"
                    placeholder="ID"
                  />
                  <ErrorMessage name="id" render={renderError} />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="name">
                  Password
                </label>
                <div className="control">
                  <Field
                    name="password"
                    type="text"
                    className="input"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" render={renderError} />
                </div>
              </div>
              <button type="submit" className="button is-primary">
                Sign In
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
