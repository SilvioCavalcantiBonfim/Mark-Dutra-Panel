import { useState } from 'react';
import { useEffect } from 'react';
import './Logo.css';

const Logo = (props) => {
    const [height, setHeight] = useState([...Array(9).keys()].map(e => {return Math.floor(Math.random() * 50) + 1}));
    useEffect(() => {
        const update = setInterval(() => {
            setHeight([...Array(9).keys()].map(e => {return Math.floor(Math.random() * 50) + 1}));
        },1000); 
        return () => clearInterval(update);
    }, []);
    return <div className='logo'>
        <div className='logoimg'>
            {[...Array(9).keys()].map((e) => {
                return <div style={{background: "hsl(" + (360 * e / 9) + ",80%,50%)", height: height[e], top: (50 - height[e])/2, left: (1+e)*6+'px'}} key={e}/>
            })}
        </div>
        <span style={{color: (props.theme)? 'var(--color-1)': 'white'}}>Mark Dutra</span>
    </div>
}

export default Logo;