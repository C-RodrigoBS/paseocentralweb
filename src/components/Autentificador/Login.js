import styles from "./Login.module.css"
import classNames from "classnames";
import LineIcon from "react-lineicons";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    useEffect(() => {
        window.addEventListener("load", () => {
            const registerButton = document.getElementById("register");
            const loginButton = document.getElementById("login");
            const container = document.getElementById("container");

            registerButton.addEventListener("click", () => {
                container.classList.add(styles.right__panel__active);
            });
            loginButton.addEventListener("click", () => {
                container.classList.remove(styles.right__panel__active);
            });
            return () => {
                registerButton.removeEventListener("click", () => {
                    container.classList.add(styles.right__panel__active);
                });

                loginButton.removeEventListener("click", () => {
                    container.classList.remove(styles.right__panel__active);
                });
            };
        });
    }, []);

    const { signup } = useAuth();

    const [user, setUser] = useState({
        email: "",
        nombre:"",
        password: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signup(user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <div className={classNames(styles.form__container, styles.register__container)}>
                <form onSubmit={handleSubmit}>
                    <h1>Registrate Aqui</h1>

                    <input type="text" placeholder="Nombre" />
                    <input type="Correo Electronico" placeholder="Email" />
                    <input type="password" placeholder="Contraseña" />
                    <input type="password" placeholder="Confirmar Contraseña" />
                    <button>Registrate</button>
                    <span>Tambien te puedes registrar con...</span>
                    <div className={styles.social__container}>
                        <a className="lni lni-facebook-original"></a>
                        <a className="lni lni-google"></a>
                    </div>
                </form>
            </div>

            <div className={classNames(styles.form__container, styles.login__container)}>
                <form>
                    <h1>Ingresa Aqui</h1>
                    <input type="Correo Electronico" placeholder="Email" />
                    <input type="password" placeholder="Contraseña" />
                    <div className={styles.content}>
                        <div className={styles.checkbox}>
                            <input type="checkbox" name="checkbox" id="checkBox" />
                            <label> Recordar cuenta </label>
                        </div>
                        <div className="">
                            <a href="#"> ¿Olvidaste tu Contraseña? </a>
                        </div>

                    </div>
                    <button>Ingresar</button>
                    <span>puedes usar</span>

                    <div className={styles.social__container}>
                        <a className="lni lni-facebook-original"></a>
                        <a className="lni lni-google"></a>
                    </div>
                </form>
            </div>

            <div className={styles.overlay__container}>
                <div className={styles.overlay}>
                    <div className={classNames(styles.overlay__panel, styles.overlay__left)}>
                        <h1>Bienvenidos a <br /> Paseo Central</h1>
                        <p>si tienes una cuenta, inicia sesión aquí</p>
                        <button className={styles.ghost} id="login">Ingresa
                            <i className={classNames(styles.login)}></i>
                        </button>
                    </div>
                    <div className={classNames(styles.overlay__panel, styles.overlay__right)}>
                        <h1>Se parte de <br /> nuestra familia</h1>
                        <p>Si no tienes cuenta ¡¡Registrate!! y se parte de nuestra familia</p>
                        <button className={styles.ghost} id="register">Registrate
                            <i className={classNames(styles.register, "lni lni-arrow-right")}></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};