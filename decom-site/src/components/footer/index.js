import React from 'react'
import "./style.css"

export default function Footer(){
    return(
        <div className="footer">

            <div className="top">
                <div>
                    <h1>Contato:</h1>
                    <hr/>
                    <br></br>  
                </div>
               
                <div>
                    <h2>Decom:</h2>
                    
                </div>
               
                <div>
                    <h4>Telefone: +55 31 3559-1692</h4>
                    <h4>
                        Email: 
                        <a nameClass="link-contact" href="mailto:decom@ufop.edu.br">
                            decom@ufop.edu.br
                        </a>
                    </h4>
                   <br></br>  
                </div>

                  
                <div>
                    <h2>UFOP:</h2>
                    
                </div>
               
                <div>
                    <h4>
                        Link: 
                        <a nameClass="link-contact" href="https://ufop.br/telefones-e-enderecos">
                            https://ufop.br/telefones-e-enderecos
                        </a>
                    </h4>

                    <br></br>                  
                </div>

                                  
                <div>
                    <h2>ICEB:</h2>
                    
                </div>
               
                              
                <div>
                    <h4>
                        Link: 
                        <a nameClass="link-contact" href="https://iceb.ufop.br/contatos">
                            https://iceb.ufop.br/contatos
                        </a>
                    </h4>
                    
                    <br></br>                  
                </div>

            

            </div>

            <div className="bottom">
                <div>
                    <hr></hr>
                   <h4>Campus Universitário Morro do Cruzeiro | CEP 35400-00 | Ouro Preto - MG, Brasil</h4>
                </div>              
            </div>

        </div>

    )
}
