import './Notification.css'
import { createContext, useState } from "react"
//▼ setear el mensaje pasándolo por prop con el mensaje. Aquí muestro la prop msg entre llaves! xd
const Notification = ({ msg, severity }) => {

    const notificationStyles = { 
      position: 'absolute', 
      top: 100, 
      right: 10, 
      padding: '1rem 1.5rem 1rem 1.5rem', 
      color: 'white'
//      backgroundColor: severity === 'success' ? '#ff1744' : '#ffff00' 
    }
//▼ modificamos por return temprano
    if (msg === '') return

    return (
      <div className={severity === 'success' ? 'torchredClass' : 'yellowClass'} style={notificationStyles}>
        {msg}
      </div>
    )
  }

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (severity, msg) => {
      setMessage(msg)
      setSeverity(severity)

      setTimeout(() => {
        setMessage('')
      }, 2000)
    }
    
    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification msg={message} severity={severity}/>
            { children }
        </NotificationContext.Provider>
    )
}
export default Notification