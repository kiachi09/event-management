import { Formik, Form } from "formik";
import TextInput from './form-components/TextInput';
import * as Yup from 'yup';
import SelectInput from "./form-components/SelectInput";
import "../../styles/form.css"

const EditProfile = () => {

  const handleSubmit = async (values) => {
    const response = await fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/user/edit-profile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })

    const json = await response.json();

    alert(json.message);
  }

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            name: '',
            gender: 'Male',
            mobile: '',
            email: '',
            location: 'Guwahati',
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(5, 'Must be 5 characters or more')
              .required('Required'),
            gender: Yup.string()
              .required('Required'),
            mobile: Yup.number()
              .positive("Mobile number can't start with a minus")
              .min(6000000000, 'Must be 10 digits')
              .max(10000000000, 'Must be 10 digits')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email')
              .required('Required'),
            location: Yup.string()
              .required('Required')
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values)
              .then(() => {
                setSubmitting(false);
                resetForm({ values: '' })
              });
          }}
        >
          <Form className="form">
            <h2>REGISTER USER</h2>

            <div>
              <div>
                <div>
                  <TextInput
                    className="input"
                    label="Name"
                    id="name"
                    name="name"
                    type="text"
                  />
                </div>

                <div>
                  <SelectInput
                    className="input"

                    label="Gender"
                    id="gender"
                    name="gender"
                    type="text"
                    options={["Others", "Male", "Female"]}
                  />
                </div>
              </div>

              <div>
                <div>
                  <TextInput
                    className="input"

                    label="Mobile"
                    id="mobile"
                    name="mobile"
                    type="number"
                  />
                </div>

                <div>
                  <TextInput
                    className="input"

                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
              </div>

              <div>
                <SelectInput
                  className="input"

                  label="Branch"
                  id="branch"
                  name="branch"
                  type="text"
                  options={["Guwahati", "Delhi", "Chennai", "Mumbai"]}
                />
              </div>
            </div>

            <button className="submit-btn" type="submit">Submit</button>

          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default EditProfile;