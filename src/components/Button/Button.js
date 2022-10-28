import './Button.css'

const Button = ({ label, background, action }) => {
    return  <button
                className='Button'
                style={{ 
                        background: background,
                        }}
                onClick={action}
            >
                {label}
        
            </button>
}

export default Button