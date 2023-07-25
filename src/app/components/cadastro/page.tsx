import React from "react";

import Style from "./cadastro.module.css";
import Link from "next/link";


export default function Cadastro(){

  //const [nome, setNome] = useState("");
  //const [email, setEmail] = useState("");
  //const [senha, setSenha] = useState("");
  //const [confirmarSenha, setConfirmarSenha] = useState("");
    return(
        <>
        <main className={Style.main}>
          <div className={Style.container } id="login-container">
          <div className={Style.formcontainer}>
       
       
        <form className={Style.formregister}>
            <h2 className={Style.formtitle}>Criar Conta</h2>

            <div className={Style.inputcontainer}>
              <input
                type="text"
                className={Style.forminput}
                placeholder="Nome"
                required
              />
              <input
                type="email"
                className={Style.forminput}
                placeholder="Email"
                required
              />
              <input
                type="password"
                className={Style.forminput}
                placeholder="Senha"
                required
              />
            </div>
            <button type="button" className={Style.formbutton}>
              Cadastrar
            </button>
            <p className="mobile-text">
              Já tem conta?
              <a href="/" id="open-login-mobile">
                Login
              </a>
            </p>
            <hr />
          </form>
           </div>
          <div className={Style.overlaycontainer}>
            <div className={Style.overlay}>
            <h2 className={Style.formtitlelight}>Já tem conta?</h2>
            <p className={Style.formtext}>
              Para entrar na nossa plataforma faça login com suas informações
            </p>
            <button className={Style.formbuttonlight}  id="entar"  ><Link href={"/"} className={Style.link} >Entrar</Link>
              
            </button>
          </div>
        </div>
          </div>
        </main>
        
        
        </>
    )
}