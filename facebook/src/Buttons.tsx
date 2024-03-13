import './App.css'
import { useState } from 'react';
import { FooterComponent } from './Footer';





export const Buttons = () => {



    const [likes, setLikes] = useState(0);
    const [comentario, setComentarios] = useState(0);

    const handleClickLikes = () => {
        setLikes(likes => likes + 1)

    }
    const handleClickComments = () => {
        setComentarios(comentario => comentario + 1);
    }
    return (
        <>
            <FooterComponent
                like={likes}
                comentarios={comentario}>
            </FooterComponent>

            <div className='div-buttons'>
                <div className='like-button-span'>

                    <button onClick={handleClickLikes} className='like-button'>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 10C8.28283 8.32595 11.3995 5.54014 13.8271 1.64258C14.1784 1.07865 14.9676 0.967672 15.4374 1.43746L16.0265 2.02648C16.313 2.31302 16.3983 2.74415 16.2424 3.1182L14 8.50003H21.1257C22.3661 8.50003 23.3073 9.61747 23.0966 10.8398L21.2862 21.3398C21.1208 22.2991 20.2888 23 19.3153 23H10L6 20.5" stroke="#bdbdbd" className='svg-like' />
                            <path d="M6 8H1V22H6V8Z" stroke="#bdbdbd" />
                        </svg>
                    </button>
                    <span>Me gusta</span>

                </div>

                <div className='comments-button-span'>

                    <button onClick={handleClickComments} className='comments-button'>
                        <svg width="20x" height="20px" viewBox="0 0 24 24" id="Layer_1" fill="none" stroke="#bdbdbd" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M1.5,5.3v9.54a3.82,3.82,0,0,0,3.82,3.82H7.23v2.86L13,18.66h5.73a3.82,3.82,0,0,0,3.82-3.82V5.3a3.82,3.82,0,0,0-3.82-3.82H5.32A3.82,3.82,0,0,0,1.5,5.3Z" /></svg>
                    </button>
                    <span>Comentar</span>

                </div>



            </div>
        </>
    )



}