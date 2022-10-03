import './AddChannel.css';
import MiniChannel from './MiniChannelComponent/MiniChannel';

const AddChannel = (props) => {
    return <div className='channel__list'>
        <div className='List__MiniChannel'>
            <MiniChannel name='teste0' style={{transform: 'scale('+0.9+')'}}/>
            <MiniChannel name='teste1'/>
            <MiniChannel name='teste2'/>
            <MiniChannel name='teste3'/>
            <MiniChannel name='teste4'/>
        </div>
        <div>
            <select>
                <option>channel 1</option>
                <option>channel 2</option>
                <option>channel 3</option>
            </select>
        </div>
    </div>
}

export default AddChannel;