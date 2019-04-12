import React from 'react';

const Error = () => {
    return (
        <div>
            <div className="card bg-warning pt-5 pb-5 mt-5">
                <div className="card-content text-center">
                <h1>OOPS!! ESSE CONTEUDO NÃO EXISTE.</h1>
                <a href="/" className="btn btn-danger mt-5 pl-5 pr-5 pt-3 pb-3">VOLTAR</a>
                </div>
            </div>
        </div>
    )
}
export default Error;