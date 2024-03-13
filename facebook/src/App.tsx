
import { Header } from './Header'
import { Comment } from './CommentUser'
import { Content } from './Content'
import './App.css'
import { Buttons } from './Buttons'
import data from './data.json'


const datos = data;

interface Data {
  name: string,
  id?: number,
  avatar: string,
  time: string,
  comment: string,
  hashtag?: string,
  post?: string
  children?: React.ReactNode
}


const App: React.FC<Data> = ({ name, avatar, time, comment, hashtag, post }) => {

  return (
    <>


      <Header
        name={name}
        time={time}
        avatar={avatar}>
      </Header>
      <Comment
        comment={comment}
        hashtag={hashtag}
      ></Comment>
      <Content post={post}></Content>
      <Buttons></Buttons>



    </>
  )
}

export default App








