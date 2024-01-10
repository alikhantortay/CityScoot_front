import React from 'react'
import bgImg from '../images/login/back.jpg';
import { useForm } from 'react-hook-form';
import "../styles/RegisterStyles/index.css"

export default function Login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));

    return (
        <section className="section">
            <div className="register">
                <div className="col-1">
                    <h1 className="text_register">Login</h1>
                    <span className="text_under_register">register and enjoy the service</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("username")} placeholder='username' />
                        <input type="text" {...register("password")} placeholder='password' />
                        <button className='btn'>Log In</button>
                    </form>

                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </section>
    )
}
