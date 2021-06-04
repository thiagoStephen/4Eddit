import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const useForm = (initialValues) => {
    const [form, setform] = useState(initialValues)

    const onChange = (name, value) => {
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }
    return { form, onchange }
}