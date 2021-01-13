import Link from 'next/link'
import Router from 'next/router'
import { GiCrumblingBall } from 'react-icons/gi'

import { useStore } from '../store'
import axios from '../utils/axios'

const Navbar = () => {
    const stateToken = useStore(state => state.token)
    const { setToken, setUsername, setCurrentUserId } = useStore()
    const handleSignOut = async (e) => {
        e.preventDefault()
        await axios.patch('auth/sign-out', {}, {
            headers: {
                authorization: `Bearer ${stateToken}`
            }
        })
            .then(({ data }) => {
                if (data.success === true) {
                    setToken('')
                    setUsername('')
                    setCurrentUserId('')
                    Router.push('/login')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="hero-head">
            <nav className="navbar px-4" role="navigation" aria-label="main navigation">
                <Link href="/threads">
                    <div className="navbar-brand">
                        <div className="navbar-item" href style={{ color: 'white', fontSize: 34 }}>
                            <GiCrumblingBall />
                        </div>
                    </div>
                </Link>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <button className="button is-danger" onClick={handleSignOut}>
                                <strong>Log Out</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
