import React, { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = ({changeState}) =>{

    // const { register, handleSubmit, watch, formState: { errors } } = useForm({
    //     defaultValues: {
    //         email: "",
    //         password: ""
    //     }
    // });

    const [state, setState] = useState({
        email: "carlosjose2111@gmail.com",
        password: "test3x7",
        errorText: ""
    })

    const [stateGeneral, setStateGeneral] = useState({
        email: "carlosjose2111@gmail.com",
        password: "test3x7",
    })

    const [ passwordView, setPasswordView ] = useState("password");
    const navigate = useNavigate();

    const onSubmit = () => {
        
        event.preventDefault();
        if(state.email == stateGeneral.email && state.password == stateGeneral.password){
            navigate('/');
            changeState(true);
        }else{
            console.log('no')
            return;
        }

        // axios.post("https://api.devcamp.space/sessions",
        //     {
        //         client: {
        //             email: state.email,
        //             password: state.password
        //         }
        //     },
        //     { withCredentials: true }
        // )
        // .then(response => {
        //     // hacemos el cambio de estado
        //     // changeState(true);
        //     navigate('/')
        //     console.log(response)
        //     console.log(response.data)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }

    function handleChange(e) {
        setState({...state,
            [e.target.name]: e.target.value,
            errorText: ""
        });
    }

    return(
        <div>
            <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

            {/* <div>{this.state.errorText}</div> */}

            {/* <form  onSubmit={handleSubmit(onSubmit)} className="auth-form-wrapper"> */}
            <form  onSubmit={onSubmit} className="auth-form-wrapper">
                <div className="form-group">
                    {/* <FontAwesomeIcon icon="envelope" /> */}
                    <EmailIcon/>
                    <input 
                        type="email" //este es el tipo de dato que contendar el imput
                        name="email" // este es el nombre hace referencia al mail de this.state
                        placeholder="Your email"
                        value={state.email}
                        onChange={(e) => handleChange(e)}
                    />

                    {/* <input type="email" placeholder="email" {...register("email", {required: true})}
                        aria-invalid={errors.email ? "true" : "false"}
                    /> */}
                    {/* {errors.email?.type == 'required' && <p role="alert">First name is required</p>} */}
                    {/* {errors.mail && <p role="alert">{errors.mail?.message}</p>} */}
                </div>

                <div className="form-group">
                    {/* <FontAwesomeIcon icon="lock" /> */}
                    <KeyIcon/>
                    <input 
                        type="password"
                        name="password" // este es el nombre hace referencia al password de this.state
                        placeholder="Your password"
                        value={state.password}
                        onChange={(e) => handleChange(e)}
                    />

                    {/* <input type={passwordView} placeholder="Your password" {...register("password", {required: true})}/> */}

                </div>
                
                <button className="btn" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;