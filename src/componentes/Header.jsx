import Style from './header.module.css'

export function Header(){
    return(
        <div className={Style.header}>   

            
            <img
                src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt='Imagem de logo de musica' 
                className={Style.img}
            />

            <a className={Style.link} >
                    Baixar
            </a>

            <a className={Style.link} >
                    Planos
            </a>


            <button className={Style.button}>
                Login
            </button>

            <button className={Style.cadastra_se}>
                    Cadastre-se
            </button>
        </div>
    )
}
