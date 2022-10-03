import axios from 'axios';
import CryptoJS from 'crypto-js';

const redrect = () => { window.location.hash = '' }

export const LOAD_DISCORD_PROFILE = (props) => {
    if (JSON.stringify(Object.keys(props.cookies)) === JSON.stringify(['token_type', 'access_token'])) {
        INTERNAL_REQUEST_PROFILE(props);    
    }
}

const INTERNAL_REQUEST_PROFILE = async (props) => {
    await axios({ method: 'get', url: 'https://discord.com/api/users/@me', headers: { 'Authorization': props.cookies.token_type + " " + CryptoJS.AES.decrypt(props.cookies.access_token, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8) } }).then((r) => {
        props.setUserInfo({PROFILE:r.data, STATUS: true});
    }).catch((e) => {
        props.setUserInfo({PROFILE: {}, STATUS: true});
        props.removeCookies('token_type', { path: '/' });
        props.removeCookies('access_token', { path: '/' });
        redrect();
    });
}

export const LOAD_GUILDS = (props) => {
    if((Date.now() - props.controlRequestDiscord) > 1 && JSON.stringify(Object.keys(props.cookies)) === JSON.stringify(['token_type', 'access_token'])){
        INTERNAL_REQUEST_LIST_GUILDS(props);
    }
}

const INTERNAL_REQUEST_LIST_GUILDS = async (props) => {
    await axios({ method: 'get', url: 'https://discord.com/api/users/@me/guilds', headers: { 'Authorization': props.cookies.token_type + " " + CryptoJS.AES.decrypt(props.cookies.access_token, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8) } }).then((r) => {
        props.setTimecontrolRequestDiscord(parseInt(r.headers['x-ratelimit-reset']));
        props.setGuildsInfo(r.data.filter((e) => {return e["owner"] === true}));
    }).catch((e) => {
        props.setTimecontrolRequestDiscord(e.response.data.retry_after+Date.now());
    });
}

export const SET_COOKIES = (props) => {
    if (JSON.stringify(Object.keys(props.cookies)) !== JSON.stringify(['token_type', 'access_token'])) {
        if (window.location.hash.length > 0) {
            const result = {};
            window.location.hash.substring(1).split('&').forEach((e) => {
                result[e.split('=')[0]] = decodeURIComponent(e.split('=')[1]);
            });
            props.setCookies('token_type', result.token_type, { maxAge: result.expires_in });
            props.setCookies('access_token', CryptoJS.AES.encrypt(result.access_token, process.env.REACT_APP_SECRET_KEY).toString(), { maxAge: result.expires_in });
            redrect();
        }
    }
}