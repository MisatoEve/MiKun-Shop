import { createContext, useState } from "react"
//▼ setear el mensaje pasándolo por prop con el mensaje. Aquí muestro la prop msg 
const Notification = ( msg ) => {

    const notificationStyles = { 
      position: 'absolute', 
      top: 100, 
      right: 10, 
      padding: '1rem 1.5rem 1rem 1.5rem', 
      color: 'white',
      backgroundColor: '#ff1744'
    }

    return (
      <div style={notificationStyles}>
        {msg}
      </div>
    )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('Mensaje de notificación (o.0)')
    
    return (
        <NotificationContext.Provider>
            <Notification msg={message}/>
            { children }
        </NotificationContext.Provider>
    )
}
export default Notification