import './App.css'
import data from './data.json'

interface Data {
    name?: string,
    id?: number,
    avatar?: string,
    time?: string,
    comment?: string,
    hashtag?: string,
    post?: string
} 

export const Content:React.FC<Data> = ({post}) => {

    return (
        <>
            <div className='content'>

                <div className='post-image'>
                    <img src={post} className='image'/>
                </div>

            </div>
        </>
    )


}