import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function AdminLogin() {
  const [dataTable, setdatatable] = useState();
const {navigate} = useNavigate();

  const getData = async () => {
    await fetch(`https://dynamic-sundae-608ccc.netlify.app/.netlify/functions/index/admin`)
      .then((response) => response.json())
      .then((data) => {
        setdatatable(data);
        console.log(data);
      });
  };

  console.log("result", dataTable);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <table align="center" style={{ border: "1px solid black" }}>
        <tr>
          <th>Item/Customer</th>
          <th>Customer 1</th>
          <th>Customer 2</th>
          <th>Total</th>
        </tr>

        <tr>
          <th>Quantity</th>
          <td>{dataTable && dataTable.quantity1}</td>
          <td>{dataTable && dataTable.quantity2}</td>
          <td>{dataTable && dataTable.quantity1 + dataTable.quantity2}</td>
        </tr>

        <tr>
          <th>Weight</th>
          <td>{dataTable && dataTable.weight1}</td>
          <td>{dataTable && dataTable.weight2}</td>
          <td>{dataTable && dataTable.weight1 + dataTable.weight2}</td>
        </tr>
        <tr>
          <th>Box Count</th>
          <td>{dataTable && dataTable.boxC1}</td>
          <td>{dataTable && dataTable.boxC2}</td>
          <td>{dataTable && dataTable.boxC1 + dataTable.boxC2}</td>
        </tr>
      </table>

      <button onClick={() => navigate('/')}>
        Logout
      </button>
    </>
  );
}
