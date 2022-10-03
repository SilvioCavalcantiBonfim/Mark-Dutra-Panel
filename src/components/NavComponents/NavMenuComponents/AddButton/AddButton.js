import { FIREBASE_WRITE } from '../../../../System/firebase.api';
import './AddButton.css';

const AddButton = (props) => {
    return <div className='add__button__continer'>
        <input type='file' accept='audio/mp3' className='add__button' onInput={(event) => {
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            event.target.value = null;
            console.log("load")
            reader.onload = () => {
                const value = (props.auidoList !== null)? props.auidoList.concat([reader.result]): [reader.result];
                if(value.length < 12){
                    FIREBASE_WRITE({local: props.local, cookies: props.cookies, value: value});
                    props.setAudioList(value);
                }
            };
            reader.onerror = (e) => console.error;
        }} />
    </div>
}

export default AddButton;