"use client"
//import {signIn} from "next-auth/react"

import React from "react";
import Style from "./page.module.css";
import Link from "next/link";
import Eventos from './components/eventos/eventos';


export default function Home() {
 

return (
  <>
    <main className={Style.main}>
      <div className={Style.container } id="login-container">
        <div className={Style.formcontainer}>
         
         
          <form action={""} method="post" autoComplete="off" className={Style.formlogin}>
            <h2 className={Style.formtitle}>Entrar</h2>

            <div className={Style.inputcontainer}>
              <input
                type="email"
                className={Style.forminput}
                placeholder="Email"
                /*required*/
              />
              <input
                type="password"
                className={Style.forminput}
                placeholder="Senha"
                /*required*/
              />
            </div>
            <a href="#" className={Style.formlink}>
              Esqueceu a senha?
            </a>
            <button type="button" className={Style.formbutton}>
              Logar
            </button>
            <p className="mobile-text">
              Não tem conta?
            <Link href={"./components/cadastro"} >Registre-se</Link>
            </p>

            
          </form>

          <hr />
          
        </div>
        <div className={Style.overlaycontainer}>
          <div className={Style.overlay}>
            <h2 className={Style.formtitlelight}>Não tem conta?</h2>
            <p className={Style.formtext}>
              Para entrar na nossa plataforma faça login com suas informações
            </p>
            <button className={Style.formbuttonlight} onClick={Eventos } id="entar"  ><Link href={"./components/cadastro"} className={Style.link} >Cadastra</Link>
              
            </button>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}