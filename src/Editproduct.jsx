import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import UserContaxt from './useContaxt';
import { env } from './Config';

function Edituser() {
  let context = useContext(UserContaxt)
  let changeUser = () => {
    context.setUsername(name)
  }
  const [name, setNama] = useState("")
  const { id } = useParams()
  const navigate = useNavigate
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: ""
    },
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "*Please enter name"
      }
      if (values.name.length <= 3) {
        errors.name = "*Please enter greter then 3"
      }
      if (values.position === "") {
        errors.position = "*Please enter position"
      }
      if (values.office === "") {
        errors.office = "*Please enter office name"
      }
      if (values.age === "") {
        errors.age = "*Please enter age"
      }
      if (values.age.length <= 1) {
        errors.age = "Please enter the valied age"
      }
      if (values.startDate === "") {
        errors.startDate = "*Please enter startDate"
      }
      if (values.salary === "") {
        errors.salary = "*Please enter salary"
      }
      return errors
    },
    onSubmit: async (values) => {
      await axios.put(`${env.api}/product/${id}`, values, {
        headers: {
          'authorization': window.localStorage.getItem("app-token")
        }
      })
      alert("Saccessful Edit For User")
      navigate("/portal/products")

    },
  });

  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {
    try {
      let user = await axios.get(`${env.api}/product/${id}`, {
        headers: {
          'authorization': window.localStorage.getItem("app-token")
        }
      })
      formik.setValues({
        name: user.data.name,
        position: user.data.position,
        office: user.data.office,
        age: user.data.age,
        startDate: user.data.startDate,
        salary: user.data.salary
      })
    } catch (error) {

    }
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-lg-6'>
              <label>Name</label>
              <input className={`form-control ${formik.errors.name ? `input-errors` : ``}`} type={"text"} value={formik.values.name} onChange={formik.handleChange} name="name" />
              <span style={{ color: 'red' }}>{formik.errors.name}</span>
            </div>
            <div className='col-lg-6'>
              <label>Discription</label>
              <input className='form-control' type={"text"} value={formik.values.position} onChange={formik.handleChange} name="position" />
              <span style={{ color: 'red' }}>{formik.errors.position}</span>
            </div>
            <div className='col-lg-6'>
              <label>Review</label>
              <input className='form-control' type={"text"} value={formik.values.office} onChange={formik.handleChange} name="office" />
              <span style={{ color: 'red' }}>{formik.errors.office}</span>
            </div>
            <div className='col-lg-6'>
              <label>Rating</label>
              <input className='form-control' type={"text"} value={formik.values.age} onChange={formik.handleChange} name="age" />
              <span style={{ color: 'red' }}>{formik.errors.age}</span>
            </div>
            <div className='col-lg-6'>
              <label>Start Date</label>
              <input className='form-control' type={"text"} value={formik.values.startDate} onChange={formik.handleChange} name="startDate" />
              <span style={{ color: 'red' }}>{formik.errors.startDate}</span>
            </div>
            <div className='col-lg-6'>
              <label>Price</label>
              <input className='form-control' type={"text"} value={formik.values.salary} onChange={formik.handleChange} name="salary" />
              <span style={{ color: 'red' }}>{formik.errors.salary}</span>
            </div>
            <div className='col-lg-6'>
              <input className='btn btn-primary mt-4' onClick={changeUser} value={name} onChange={(e) => setNama(e.target.value)} type="submit" value="submit" disabled={!formik.isValid} />
              {name}
            </div>
          </div>
        </form>


      </div>
    </>
  )
}

export default Edituser

