import logo from '../../image/logo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from "./landing.module.css";

const LandingPage = () =>{
    const navigate = useNavigate();
    
    const navigateHandler = () =>{
        navigate('/home')
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Proyecto individual: Pokemon</h1>
            <div className={styles.imgContainer}>
                <img src={logo} className={styles.logo} alt="Logo" />
            </div>
            <div>
                <Link to='/home'>
                    <button className={styles.button} onClick={navigateHandler}>Inicio</button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;

