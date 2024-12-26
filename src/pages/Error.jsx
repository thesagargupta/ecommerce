import './Error.css'
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
     <div className="corner">
        <p className='Home'><NavLink to="/">Home </NavLink>/ Error</p>
     </div>
     <div className="main-cont">
        <div className="error-msg">
            <h1 className='head'>404 Not Found</h1>
        </div>
        <div className="message">
        <p className='message'>Your visited page not found. You may go home page.</p>
        </div>
        <div className="home-back">
        <NavLink to="/">
            <button className='back-btn'>Back to home page</button>
          </NavLink>
        </div>
     </div>
    </div>
  )
}

export default Error
