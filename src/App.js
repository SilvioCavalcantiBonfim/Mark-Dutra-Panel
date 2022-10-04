import './App.css';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import NavBar from './components/NavComponents/NavBar';
import NavMenu from './components/NavComponents/NavMenu';
import { LOAD_DISCORD_PROFILE, LOAD_GUILDS, redrect, SET_COOKIES } from './System/discord.api';
import Player from './components/BodyComponents/MusicComponent/MusicPlayer';
import Body from './components/BodyComponents/Body';
import FootBar from './components/FooterComponents/FootBar';
import { FIREBASE_READ } from './System/firebase.api';
import Description from './components/BodyComponents/DescriptionComponent/Description';

function App() {


  const [THEME, SET_THEME] = useState(0);

  const [USER_OBJECT, SET_USER_OBJECT] = useState({ PROFILE: {}, STATUS: false });

  const [GUILD_OPTION, SET_GUILD_OPTION] = useState({ SELECT: 0, LIST: [] });

  const [cookies, setCookies, removeCookies] = useCookies();

  const [controlRequestDiscord, setTimecontrolRequestDiscord] = useState(0);

  const [flag, setFlag] = useState(1);

  const [auidoList, setAudioList] = useState(null);

  useEffect(() => {
    LOAD_DISCORD_PROFILE({
      cookies: cookies,
      setUserInfo: SET_USER_OBJECT,
      removeCookies: removeCookies
    });
    if (flag === 1) {
      LOAD_GUILDS({
        setGuildsInfo: (v) => SET_GUILD_OPTION(e => { return { SELECT: e.SELECT, LIST: v } }),
        cookies: cookies,
        controlRequestDiscord: controlRequestDiscord,
        setTimecontrolRequestDiscord: setTimecontrolRequestDiscord
      });
      setFlag(0);
    }
    if (USER_OBJECT.STATUS && (GUILD_OPTION.LIST.length > 0))
      FIREBASE_READ({
        set: setAudioList,
        cookies: cookies,
        local: GUILD_OPTION.LIST[GUILD_OPTION.SELECT].id
      });
  }, [cookies, removeCookies, controlRequestDiscord, flag, GUILD_OPTION, USER_OBJECT]);


  SET_COOKIES({
    cookies: cookies,
    setCookies: setCookies
  });
  let renderAuido = <Description/>;

  if(auidoList !== null){
    renderAuido = auidoList.map((e, i) => {
      return <Player {...{ url: e, theme: THEME, key: i, auidoList: auidoList, local: GUILD_OPTION.LIST[GUILD_OPTION.SELECT].id, cookies: cookies, setAudioList:setAudioList}} />
    });
  }

  return (
    <div className="App">
      {/* Nav */}
      <NavBar
        {...{
          theme: THEME,
          userInfo: USER_OBJECT.PROFILE,
          logoutHandle: () => {
            removeCookies('token_type', { path: '/Mark-Dutra-Panel' });
            removeCookies('access_token', { path: '/Mark-Dutra-Panel' });
            SET_USER_OBJECT({ PROFILE: {}, STATUS: false });
            SET_GUILD_OPTION({ SELECT: 0, LIST: [] });
            redrect();
          }
        }} />
      <NavMenu
        {...{
          setGuildsInfo: (v) => SET_GUILD_OPTION(e => { return { SELECT: e.SELECT, LIST: v } }),
          cookies: cookies,
          controlRequestDiscord: controlRequestDiscord,
          setTimecontrolRequestDiscord: setTimecontrolRequestDiscord,
          theme: THEME,
          user: USER_OBJECT,
          local: (GUILD_OPTION.LIST.length > 0)?GUILD_OPTION.LIST[GUILD_OPTION.SELECT].id: '0',
          auidoList: auidoList,
          setAudioList: setAudioList,
          onclick: () => SET_THEME(e => 1 - e),
          setguildselet: (v) => SET_GUILD_OPTION((e) => {
            return { SELECT: v, LIST: e.LIST }
          }),
          guildselect: GUILD_OPTION.SELECT,
          guilds: GUILD_OPTION.LIST
        }} />
      {/* Body */}
      <Body
        {...{
          theme: THEME
        }}>
        {renderAuido}
      </Body>
      {/* Footer */}
      <FootBar />
    </div>
  );
}

export default App;
