import './App.css'




interface Props  {
    like: number,
    comentarios: number,
    children?: React.ReactNode
   
}



export const FooterComponent:React.FunctionComponent<Props> = ({like, comentarios}) => {


   return (
        <>


            <div className='footer'>
                <div className='div-counts'>

                    <div className='div-like-count'>
                        <img src="/public\facebook-like-logo-svgrepo-com.png" alt="count-image" className='image-like-count' />
                        <span> {like} mil </span>
                    </div>

                    <div className='div-comments-count'>
                        <span className='comments-count'> {comentarios} Comentarios </span>
                    </div>

                </div>

            </div>
        </>
    )


}