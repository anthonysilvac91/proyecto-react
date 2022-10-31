import { createContext, useState } from "react"



const Notification = ({msg}) =>{

    const NotificationStyles = {
      position: 'absolute',
      top: 60,
      right: 10,
      padding: '10px 20px 10px 20px',
      background: 'green',
      color: 'white',
  
    }

    if(msg === '') return

  
    return(
  
      <div style={NotificationStyles}>
        {msg}
      </div>
  
    )
  }

  export const NotificationContext = createContext()

  export const NotificationProvider = ({children}) =>{

    const [message, setMessage] = useState('')
    

    const setNotification = ( msg) => {
        setMessage(msg)
        

        setTimeout(() =>{
            setMessage('')
        }, 2000)
    }

    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification msg={message}/>
            {children}
        </NotificationContext.Provider>
    )

  }


  