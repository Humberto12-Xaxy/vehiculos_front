import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';
import { login } from '../api/login';
import { useFormik } from "formik";
import * as yup from 'yup'
import {
    Button,
    TextField
} from "@mui/material";

const validationSchema = yup.object({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .min(4, 'Password should be of minimum 4 characters length')
        .required('Password is required'),
});
type loginType = {
    username: string,
    lastname: string,
    password: string
};

export const Login = ({ setToken, setID }) => {

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const token = await login({
    //         username,
    //         password
    //     });
    //     console.log(token.data.user.id);
    //     setToken(token.data.token);
    //     setID(token.data.user.id);
    // }

    const formik = useFormik<loginType>({
        initialValues: {
            username: '',
            lastname: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values: loginType) => {
            const token = await login(
                {
                    username : values.username,
                    password : values.password
                }
            );
            setToken(token.data.token)
            setID(token.data.user.id)
        },
    });

    return (
        <div>
            <form method="post" onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id='username'
                    name='username'
                    label='Username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                <TextField
                    fullWidth
                    id='lastname'
                    name='lastname'
                    label='Apellido'
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                    helperText={formik.touched.lastname && formik.errors.lastname}
                />
                <TextField
                    fullWidth
                    id='password'
                    name='password'
                    label='Contraseña'
                    type='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Iniciar Sesión
                </Button>
            </form>
        </div>
    )
    // return (
    //     <div className="login-wrapper">
    //         <h1>Please Log In</h1>
    //         <form onSubmit={handleSubmit}>
    //             <label>
    //                 <p>Username</p>
    //                 <input type="text" onChange={e => setUserName(e.target.value)} />
    //             </label>
    //             <label>
    //                 <p>apellido</p>
    //                 <input type="text" onChange={e => setLastName(e.target.value)} />
    //             </label>
    //             <label>
    //                 <p>Password</p>
    //                 <input type="password" onChange={e => setPassword(e.target.value)} />
    //             </label>
    //             <div>
    //                 <button type="submit">Submit</button>
    //             </div>
    //         </form>
    //     </div>
    // )
}

Login.prototype = {
    setToken: PropTypes.func.isRequired
}