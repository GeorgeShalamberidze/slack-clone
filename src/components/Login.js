import React from 'react'
import styled from "styled-components"
import { Button } from "@material-ui/core"
import { auth, provider } from "../firebase"

function Login() {

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider).catch(error => {
            alert(error.message)
        })
    }

    return (
        <LoginContainer>
            <LogginInnerContainer>
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" />
                <h1>Sign in to Slack clone</h1>


                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </LogginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
`

const LogginInnerContainer = styled.div`
    text-align: center;

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`