import React, { ChangeEvent, FormEvent, useState } from "react";
import "../styles/pages/login.css";
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram, FaAt } from 'react-icons/fa';
const Login = () => {
    const [tipoForm, setTipoForm] = useState("Início");
    const [matricula, setMatricula] = useState("");
    const [senha, setSenha] = useState("");

    function handlerMatricula(event: ChangeEvent<HTMLInputElement>) {
        setMatricula(event.target.value);
    }
    function handlerSenha(event: ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value);
    }
    function hendlerSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(matricula, senha);
        switch (tipoForm) {
            case "Início":
                console.log(tipoForm);
                break;
            case "Professor":
                console.log(tipoForm);
                break;
            case "Aluno":
                console.log(tipoForm);
                break;
            case "Pais":
                console.log(tipoForm);
                break;
            case "Diretor":
                console.log(tipoForm);
                break;
            default:
                break;
        }
    }
    function hendlerTab() {

        setMatricula("");
        setSenha("");
    }
    return (
        <div id="todo">
            <div id="content">
                <main>
                    <img src={logo} alt="" />
                    <br></br>
                    <h2>Bem Vindo!</h2>
                    <div>
                        <Link to="/" className="iconeLi" style={{ color: "#4CED69" }}><FaWhatsapp className="icone" /></Link>
                        <Link to="/" className="iconeLi" style={{ color: "#0572E6" }}><FaFacebook className="icone" /></Link>
                        <Link to="/" className="iconeLi" style={{ color: "#E74959" }}><FaInstagram className="icone" /></Link>
                        <Link to="/" className="iconeLi" style={{ color: "#28A5DA" }}><FaAt className="icone" /></Link>
                    </div>
                    <ul>
                        <li className="g1">15/10/2020</li>
                        <li className="g2">Desenvolvido por Nikollas Beltrão</li>
                        <li className="g3">V3.0.0</li>
                    </ul>
                </main>
                <main>
                    <div>
                        <h3>Login</h3>
                        <ul className="nav nav-tabs " id="myTab" role="tablist" style={{ borderRadius: "4px" }}>
                            <li className="">
                                <a className="active " data-toggle="tab" onClick={() => { setTipoForm("Início"); hendlerTab() }} href="#inicio" role="tab" aria-controls="inicio" aria-selected="true">Início</a>
                            </li>
                            <li className="">
                                <a className="" data-toggle="tab" onClick={() => { setTipoForm("Professor"); hendlerTab() }} href="#prof" role="tab" aria-controls="prof" aria-selected="false">Professor</a>
                            </li>
                            <li className="">
                                <a className="" data-toggle="tab" onClick={() => { setTipoForm("Aluno"); hendlerTab() }} href="#prof" role="tab" aria-controls="aluno" aria-selected="false">Aluno</a>
                            </li>
                            <li className="">
                                <a className="" data-toggle="tab" onClick={() => { setTipoForm("Pais"); hendlerTab() }} href="#prof" role="tab" aria-controls="contact" aria-selected="false">Pais</a>
                            </li>
                            <li className="">
                                <a className="" data-toggle="tab" onClick={() => { setTipoForm("Diretor"); hendlerTab() }} href="#prof" role="tab" aria-controls="contact" aria-selected="false">Diretor</a>
                            </li>
                        </ul>
                        { /* Content do tabs :) */}
                        <div className="tab-content" id="myTabContent" >
                            { /* tab inicio :) */}
                            <div className="tab-pane fade show active" id="inicio" role="tabpanel" aria-labelledby="home-tab">
                                <h5 className="">{tipoForm}</h5>
                                <p>
                                    Será necessário informar seu tipo de usuário, matrícula e senha para efetuar o login.
                                </p>
                            </div>
                            { /* tab professor :) */}
                            <div className="tab-pane fade" id="prof" role="tabpanel" aria-labelledby="profile-tab">
                                <h5 className="">{tipoForm}</h5>
                                <form onSubmit={hendlerSubmit}>
                                    <div className="form-group">
                                        <input type="text" onChange={handlerMatricula} value={matricula} className="form-control" id="matricula" placeholder="Digite sua matricula" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" onChange={handlerSenha} value={senha} className="form-control" id="senha" placeholder="Digite sua senha" />
                                    </div>
                                    <button type="submit">Entrar</button>

                                </form>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>

    );
}
export default Login;