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

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('Mensaje de notificación (o.0)')

    const setNotification = (msg) => {
      setMessage(msg)
    }
    
    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification msg={message}/>
            { children }
        </NotificationContext.Provider>
    )
}
//export default Notification