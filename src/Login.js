import { auth } from './firebase'
import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")

    const dispatch = useDispatch()

    const register = () => {
        if (!name) {
            alert("Please enter your full name")
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }))
            })
        }).catch((error) => {
            alert(error)
        })
    }

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL
            }))
        }).catch(error => alert(error))
    }

    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="" />
            <form>
                <input type="text" placeholder="Full name (required if registering)" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Profile pic url (optional)" value={profilePic} onChange={e => setProfilePic(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?
                <span className="login__register" onClick={register}>Register now</span>
            </p>
        </div>
    )
}

export default Login
