import { useField } from "formik";

const SelectInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} >
                {
                    props.options.map((option) => {
                        return <option key={option} value={option}>{option}</option>
                    })
                }
            </select>
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </>
    );
};

export default SelectInput;