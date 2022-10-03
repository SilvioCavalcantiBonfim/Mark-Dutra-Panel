import './MiniChannel.css';

const MiniChannel = (props) => {
    return <div className='miniChannel' style={props.style}>
        <label>{props.name}</label>
        <button className='bt_excluir' />
    </div>
} 

export default MiniChannel;