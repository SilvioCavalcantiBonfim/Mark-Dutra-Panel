import './MusicPlayer.css';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { FIREBASE_WRITE } from '../../../System/firebase.api';

const Player = (props) => {
    return <div className='audio__conteiner'>
        <AudioPlayer src={props.url} customProgressBarSection={[
            RHAP_UI.MAIN_CONTROLS,
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.DURATION,
            <button className='bt_excluir' title='Delete' onClick={() => {
                const value = props.auidoList.filter((e) => {return e !== props.url} );
                FIREBASE_WRITE({cookies: props.cookies,local: props.local, value: value});
                props.setAudioList(value);
            }}/>

        ]} customControlsSection={[]} customAdditionalControls={[]} customVolumeControls={[]} />
    </div>
}

export default Player;