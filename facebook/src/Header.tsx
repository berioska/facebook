import './App.css'



interface Data {
    name?: string,
    id?: number,
    avatar?: string,
    time?: string,
    comment?: string,
    hashtag?: string,
    post?: string
    children?: React.ReactNode
}

export const Header: React.FC<Data> = ({ name, time, avatar }) => {


    const alerta = () => {
        alert(`has presionado salir ${name}`)

    }

    return (
        <>
            <div className='header'>

                <div className='user-image-user-post'>

                    <div className='div-image-user'>
                        <img src={avatar} alt="user-post" className='avatar' />
                    </div>


                    <div className='content-header'>
                        <span>{name}</span>

                        <div className='time-world'>
                            <div><span className='time'><small>{time} ·</small></span></div>
                            <div className='div-world'><svg fill="#bdbdbd" height="15px" width="15px" version="1.2" baseProfile="tiny" id="earth" xmlns="http://www.w3.org/2000/svg" viewBox="-63 65 128 128" stroke="#bdbdbd"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path id="Layer_1_1_" d="M4.8,189.6c33.5-2,59-30.9,56.8-64.4c-2-33.5-30.9-59-64.4-56.8c-33.5,2-59,30.9-56.8,64.4 C-57.6,166.2-28.7,191.6,4.8,189.6z M-12.6,116.5c-1.7-3.3,3.1-5.1,5.6-7.6c3.1-3.3,9.8-8.7,9-10.7C1.2,96-5.6,90-9.3,91.4 c-0.8,0-5.1,4.8-6.1,5.6c0-1.7-0.3-2.6-0.3-4.2c0-1.1-2.2-2-2-2.8c0.2-1.9,4.8-5.4,5.9-6.8c-0.9-0.6-4-2.8-4.8-2.5 c-2,1.1-4.5,1.9-6.7,2.8c0-0.8-0.2-1.6-0.3-2c4.2-2.2,8.7-3.7,13.4-4.8l4.2,1.6l3.1,3.3l3.1,2.9c0,0,1.9,0.8,2.6,0.8 c0.9-0.2,3.9-4,3.9-4l-1.2-2.9l-0.2-2.6c8.4,0.8,16.1,3.3,23.1,7.6c-1.1,0.2-2.6,0.3-4,0.8c-0.6-0.3-3.9,0.3-3.7,1.7 c0.2,1.1,5.9,5.7,8.4,9.8c2.5,4.2,9.5,6.8,10.7,11.5c1.2,5.4-0.8,12.4,0.2,18.9c0.9,6.4,7.9,13,7.9,13s3.1,0.9,5.6,0.3 c-1.9,9.5-6.1,18.2-12.6,25.6c-7.3,8.2-16.5,14-26.9,16.5c1.2-3.7,3.7-7.3,6.1-9.3c2-1.9,4.5-5.1,5.4-7.6c0.9-2.6,2.2-4.8,3.7-7.3 c1.9-3.3-5.7-7.9-8.2-8.7c-5.6-2-9.8-4.8-14.6-7.9c-3.6-2.2-14.3,2.8-18.3,1.2c-5.4-2-7.3-3.7-12.1-6.8c-5-3.3-3.6-10.2-3.9-15.4 c3.7,0,8.8-1.6,11.5,1.2c0.8,0.9,3.7,4.8,5.4,3.3C-9.2,122.3-12,117.6-12.6,116.5z M-42.4,97.4c0.3,2.6,1.7,4.7,1.7,6.5 c0,7.3-0.6,11.6,4,17.4c1.9,2.2,2.5,5.6,3.3,8.4c0.9,2.6,4,3.9,6.4,5.4c4.5,2.9,8.8,6.7,13.7,9.3c3.1,1.7,5,2.6,4.5,6.4 c-0.6,2.9-0.6,4.8-2,7.6c-0.3,0.9,2.2,5.9,2.9,6.5c2.5,2,4.8,4,7.5,5.9c4,2.9,0,7.3-1.6,11.8c-11.8-0.8-23.1-5.4-32.3-13.4 c-10.7-9.5-17.1-22.7-18-36.8C-53.3,119.5-50.2,107.5-42.4,97.4z" className='world'></path> </g></svg></div>
                        </div>
                    </div>




                </div>


                <div className='close'>
                    <button onClick={alerta} className="close-button">
                        <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"  ></g><g id="SVGRepo_iconCarrier"><path d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path></g></svg>
                    </button>
                </div>


            </div>

        </>
    )





}