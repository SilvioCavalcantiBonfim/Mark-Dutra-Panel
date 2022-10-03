import './NavBar.css';
import Btlogin from './NavBarComponents/ButtonLogin/ButtonLogin';
import Miniature from './NavBarComponents/MiniProfile/MiniProfile';
import Logo from './NavBarComponents/Logo/Logo';

const NavBar = (props) => {
    let render_component = null;
    if (Object.keys(props.userInfo).length === 0)
        render_component = <Btlogin Cookies={props.Cookies} theme={props.theme} />
    else
        render_component = <Miniature userInfo={props.userInfo} logoutHandle={props.logoutHandle}/>
        
    return <div className={(props.theme)? 'Header__body' : 'Header__body dark'}>
        <Logo theme={props.theme}/>
        {render_component}
    </div>
}

export default NavBar;