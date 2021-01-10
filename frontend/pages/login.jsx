import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'

const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    })
    const handleOnChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        Router.push('/threads')
    }
    return (
        <>
            <Head>
                <title>Sign In | VENU</title>
            </Head>
            <section className="hero is-fullheight" style={{
                backgroundImage: 'url("https://bit.ly/3hTOdkA")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover'
            }}>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-12-mobile is-6-tablet is-5-desktop is-4-widescreen">
                                <div className="card p-6">
                                    <h1 className="mb-6 is-size-4 has-text-weight-bold has-text-centered">Welcome Back</h1>
                                    <div className="field mt-4">
                                        <label className="label">Email</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                value={state.email}
                                                onChange={handleOnChange}
                                                id="email"
                                                type="email"
                                                placeholder="Type your email"
                                            />
                                        </div>
                                    </div>
                                    <div className="field mt-4">
                                        <label className="label">Password</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                value={state.password}
                                                onChange={handleOnChange}
                                                id="password"
                                                type="password"
                                                placeholder="Type your password"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="button is-info mt-5 is-medium is-fullwidth has-text-weight-semibold"
                                        onClick={handleOnSubmit}
                                    >
                                        Sign In
                                    </button>
                                    <p className="is-size-6 mt-6 has-text-centered">Don't have an account yet? <Link href="/">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
