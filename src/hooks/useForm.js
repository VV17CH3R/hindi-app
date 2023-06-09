import { useState } from 'react';

const useForm = (intialValues) => {

    const [form, setForm] = useState(intialValues);

    const handleChange = (e) => 
    setForm((el) => ({
        ...el,
        [e.target.name]: e.target.value,
    }));

    const resetForm = () => {
        setForm(intialValues);
    }

  return {
    form,
    handleChange,
    resetForm,
  }
}

export default useForm
