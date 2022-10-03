import './NavMenu.css';
import Toggle from './NavMenuComponents/ToggleTheme/Toggle';
import GuildList from './NavMenuComponents/guildList/GuildList';
import AddButton from './NavMenuComponents/AddButton/AddButton';


const NavMenu = (props) => {
    return <div className='guild__bar'>
        {props.guilds.length > 0 ? <GuildList {...props} />: <div />}
        <div className='bts'>{(props.user.STATUS)?<AddButton {...props}/>:<div/>}<Toggle {...props} /></div> 
    </div>
}

export default NavMenu;