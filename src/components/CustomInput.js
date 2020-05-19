import { useField } from 'formik';

// hooks into redux and formik
const CustomInput = ({
  reduxAction,
  render,
  ...props
}) => {
  const [field] = useField(props);

  const handleChange = event => {
    reduxAction(event.target.value);
    field.onChange(event);
  };

  return render({
    ...props,
    ...field,
    onChange: handleChange,
  });
};

export default CustomInput;
