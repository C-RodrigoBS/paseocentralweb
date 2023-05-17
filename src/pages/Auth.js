import { Login } from "../components/Autentificador/Login";

import styles from "../components/Autentificador/Login.module.css"



function Auth() {
   
    return (
        <>
            <div className={styles.contenedor}>
                <div className={styles.container} id="container">
                    <Login />
                    
                </div>
            </div>
        </>
    );
}

export default Auth;