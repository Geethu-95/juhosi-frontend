import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function CustomerLogin() {

  const {navigate} = useNavigate();

  const initialValues = {
    orderDate: new Date(),
    company: "",
    owner: "",
    item: "",
    quantity: 0,
    weight: 0,
    shipmentReq: "",
    trackingId: "",
    shipmentSize: "",
    boxCount: 0,
    specification: "",
    checklistQuant: "",
  };

  const schema = Yup.object().shape({
    orderDate: Yup.date()
      .default(() => new Date())
      .required("Please select date"),
    company: Yup.string().required("Please enter value"),
    owner: Yup.string().required("Please enter value"),
    item: Yup.string().required("Please enter value"),
    quantity: Yup.number().required("Please enter value"),
    weight: Yup.number().required("Please enter value"),
    shipmentReq: Yup.string().required("Please enter value"),
    trackingId: Yup.string().required("Please enter value"),
    shipmentSize: Yup.string().required("Please enter value"),
    boxCount: Yup.number().required("Please enter value"),
    specification: Yup.string().required("Please enter value"),
    checklistQuant: Yup.string().required("Please enter value"),
  });

  const submitForm = async (values) => {
    // console.log(values);

    var postValues = {
      orderDate: values.orderDate,
      company: values.company,
      owner: values.owner,
      item: values.item,
      quantity: values.quantity,
      weight: values.weight,
      shipmentReq: values.shipmentReq,
      trackingId: values.trackingId,
      shipmentSize: values.shipmentSize,
      boxCount: values.boxCount,
      specification: values.specification,
      checklistQuant: values.checklistQuant,
    };
    var formBody = [];
    for (var property in postValues) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(postValues[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
      body: formBody,
    };

    await fetch("https://dynamic-sundae-608ccc.netlify.app/.netlify/functions/index/storeData", requestOptions).then(
      (response) => {
        console.log(response);
        alert("Successfully submitted data!");
      }
    );
  };

  const renderError = (message) => <p className="help is-danger">{message}</p>;

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
                <label className="label" htmlFor="orderDate">
                  orderDate
                </label>
                <div className="control">
                  <Field
                    name="orderDate"
                    type="date"
                    className="input"
                    placeholder="Order date"
                  />
                  <ErrorMessage name="orderDate" render={renderError} />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="company">
                  Company
                </label>
                <div className="control">
                  <Field
                    name="company"
                    type="text"
                    className="input"
                    placeholder="Company"
                  />
                  <ErrorMessage name="company" render={renderError} />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="owner">
                  Owner
                </label>
                <div className="control">
                  <Field
                    name="owner"
                    type="text"
                    className="input"
                    placeholder="Owner"
                  />
                  <ErrorMessage name="owner" render={renderError} />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="item">
                  Item
                </label>
                <div className="control">
                  <Field
                    name="item"
                    type="text"
                    className="input"
                    placeholder="Item"
                  />
                  <ErrorMessage name="item" render={renderError} />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="quantity">
                  Quantity
                </label>
                <div className="control">
                  <Field
                    name="quantity"
                    type="number"
                    className="input"
                    placeholder="Quantity"
                  />
                  <ErrorMessage name="quantity" render={renderError} />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="weight">
                  Weight
                </label>
                <div className="control">
                  <Field
                    name="weight"
                    type="text"
                    className="input"
                    placeholder="Weight"
                  />
                  <ErrorMessage name="weight" render={renderError} />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="shipmentReq">
                  Shipment requirement
                </label>
                <div className="control">
                  <Field
                    name="shipmentReq"
                    type="text"
                    className="input"
                    placeholder="Shipment requirement"
                  />
                  <ErrorMessage name="shipmentReq" render={renderError} />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="trackingId">
                  Tracking ID
                </label>
                <div className="control">
                  <Field
                    name="trackingId"
                    type="text"
                    className="input"
                    placeholder="Tracking ID"
                  />
                  <ErrorMessage name="trackingId" render={renderError} />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="shipmentSize">
                  Shipment size
                </label>
                <div className="control">
                  <Field
                    name="shipmentSize"
                    type="text"
                    className="input"
                    placeholder="Shipment size"
                  />
                  <ErrorMessage name="shipmentSize" render={renderError} />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="boxCount">
                  Box count
                </label>
                <div className="control">
                  <Field
                    name="boxCount"
                    type="number"
                    className="input"
                    placeholder="Box count"
                  />
                  <ErrorMessage name="boxCount" render={renderError} />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="specification">
                  Specification
                </label>
                <div className="control">
                  <Field
                    name="specification"
                    type="text"
                    className="input"
                    placeholder="Specification"
                  />
                  <ErrorMessage name="Specification" render={renderError} />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="checklistQuant">
                  Checklist quantity
                </label>
                <div className="control">
                  <Field
                    name="checklistQuant"
                    type="text"
                    className="input"
                    placeholder="Checklist quantity"
                  />
                  <ErrorMessage name="checklistQuant" render={renderError} />
                </div>
              </div>

              <button type="submit" className="button is-primary">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>

    
      <button onClick={() => navigate('/')}>
        Logout
      </button>
    </div>
  );
}
