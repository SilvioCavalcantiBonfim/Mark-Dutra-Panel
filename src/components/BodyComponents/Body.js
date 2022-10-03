import './Body.css';

const Body = (props) => {
    return <div className='body__conteiner' style={{background: (props.theme)? 'white': 'var(--color-1)'}}>{props.children}</div>
}

export default Body;