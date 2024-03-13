import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import data from './data.json'
import './App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    {
      data.map(item => {
        return(
          <div className='card'>

            <App
            name = {item.name}
            avatar = {item.avatar}
            time = {item.time}
            comment= {item.comment}
            hashtag= {item.hashtag}
            post = {item.post}
            ></App>

          </div>
        )
      })


    }
    
  </React.StrictMode>,
)
