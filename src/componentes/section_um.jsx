import Style from './section_um.module.css'

export function Section_um(){
    return(
        <section className={Style.section_um}>   

            <div>
                <h3>Deezer Premium</h3>
                <h1>1 mês grátis</h1>
                <p>
                    A partir daí, R$ 22,90/mês
                    Cancele a qualquer momento.*
                </p>
                <input type='textArea' />
                <p></p>
                <ul>
                    <li>Baixe sua música</li>
                    <li>Ilimitado e on demand</li>
                    <li> Sem anúncios</li>
                </ul>


            </div>

        </section>
    )
}