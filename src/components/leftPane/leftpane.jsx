import './leftpane.css'
import { NavLink } from 'react-router-dom';

const Leftpane  = () => {
    return (
        <div className='left-pane'>
            <div className='container'>
                <header>Twitter Icon Here</header>
            </div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/explore'>Explore</NavLink>
                <NavLink to='/notifications'>Notification</NavLink>
                <NavLink to='/messages'>Try me</NavLink>
            </nav>
            <button className='tweet'> Tweet </button>
            <footer className='account'>
                <div className='photo'>
                    <img src="" alt="" />
                </div>
            </footer>
            <div>
                <div className='name'>Simon Xia</div>
                <div className="username">@simon</div>
            </div>
        </div>
    )
} 

export default Leftpane;