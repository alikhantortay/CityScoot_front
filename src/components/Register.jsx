import React from 'react'
import { useForm } from 'react-hook-form';
import "../styles/RegisterStyles/index.css"
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function Register() {
    const [openModal, setOpenModal] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    return (
        <>
        <Button onClick={() => setOpenModal(true)}>Log In</Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <section className="section">
            <div className="register">
                <div className="col-1">
                    <Modal.Header>Log In</Modal.Header>
                    <span className="text_under_register">register and enjoy the service</span>

                    <form id='form' className='flex flex-col' >
                        <input type="text" {...register("username")} placeholder='username' />
                        <input type="text" {...register("password")} placeholder='password' />
                        <button className='btn'>Log In</button>
                    </form>

                </div>
            </div>
        </section>
        </Modal>
        </>
    )
}
