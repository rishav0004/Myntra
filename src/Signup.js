import { Password } from '@mui/icons-material'
import React, { useState } from 'react'
import {Form,Button,Card,Alert } from 'react-bootstrap'
import { useRef } from 'react'
import {useAuth} from './context/AuthContext'

function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()

    const signup = useAuth()

    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== confirmpasswordRef.current.value){
            return setError("password not mach")
        }

        try {
            setError("")
            setLoading(true)
            signup(emailRef.current.value , passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)

        signup(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h1 className ="rext-center mb-4">Sign Up</h1>
                {error && <Alert variant = "danger">{error}</Alert>}
                <Form onSubmit = {handleSubmit}> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                                ref = {emailRef} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                                    ref = {passwordRef} required
                                     placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" 
                                    ref = {confirmpasswordRef} required
                                     placeholder="Password" />
                </Form.Group>
                
                <Button disabled = {loading} variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? Log in
        </div>

       
        </>
    )
}

export default Signup
