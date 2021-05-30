import React, { useEffect } from 'react'

const Pay = () => {

    // useEffect(() => {
    //     const script = document.createElement('script');

    //     script.src = "https://checkout.epayco.co/checkout.js";
    //     script.setAttribute('data-epayco-key', '9d5270346a9e1fbe97affaed23164f10')
    //     script.setAttribute('class', 'epayco-button')
    //     script.setAttribute('data-epayco-amount', '30000')
    //     script.setAttribute('data-epayco-tax', '0')
    //     script.setAttribute('data-epayco-tax-base', '30000')
    //     script.setAttribute('data-epayco-name', 'Subscripción Forestando Ando 3 meses')
    //     script.setAttribute('data-epayco-description'='Subscripción Forestando Ando 3 meses')
    //     script.setAttribute('data-epayco-currency'='cop')
    //     script.setAttribute('data-epayco-country'='CO')
    //     script.setAttribute('data-epayco-test'='false')
    //     script.setAttribute('data-epayco-external'='false')
    //     script.setAttribute('data-epayco-response'='')
    //     script.setAttribute('data-epayco-confirmation'='')
    //     script.setAttribute('data-epayco-button','https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/btn1.png')
    // })


    return (
        <div className="container mx-auto flex items-center justify-center">
            <p>Pago exitoso</p>
            <p>Envianos tu correo para validar la información</p>
            <input type="text" placeholder="email" />
            <button>Validar</button>
        </div>
    )
}

export default Pay
