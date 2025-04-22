import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './Home.css'

const Home = () => {
    return (
        <main className="home">
            <nav className='navbar'>
            <Navbar />
            </nav>
            <div className='home-content'>
                <div className='texts'>
                    <h1 className="text-[28px]">SO, YOU WANT TO TRAVEL TO</h1>
                    <h2 className="text-[144px]">SPACE</h2>
                    <p className="text-[18px]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <NavLink to="/destination" className="explore">EXPLORE</NavLink>
            </div>
        </main>
    )
}

export default Home;