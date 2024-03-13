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


export const Comment:React.FC<Data> = ({comment, hashtag}) => {

    return(
        <>
          <div className='user-comment-post'>
          <span>{comment}</span>
          <span className='hashtack'><small>{hashtag}</small></span>
        </div>
        
        </>
    )

}

