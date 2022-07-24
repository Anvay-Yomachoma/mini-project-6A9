import React from 'react'
import Heading from '../Heading'
import Form from './Form'
import Header from '../Header'

function Upload() {
    return (
        <div>
            <Header links={[{ name: "HOME", href: "/" }, { name: "LOGIN", href: "/facultylogin" }]}></Header>
            <div>
                <Heading intro={["Welcome to DSCE Project Portal", "Upload your Project"]}></Heading>
                <Form></Form>
            </div>
        </div>
    )
}

export default Upload