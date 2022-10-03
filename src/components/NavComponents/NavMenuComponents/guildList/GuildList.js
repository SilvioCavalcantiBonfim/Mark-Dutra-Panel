import './GuildList.css';


const GuildList = (props) => {
    return <div className='guild__select' style={{background: (props.guilds[props.guildselect].icon === null)?  'url(https://assets-global.website-files.com/6257adef93867e50d84d30e2/62595384f934b806f37f4956_145dc557845548a36a82337912ca3ac5.svg) no-repeat scroll 2px 2px /41px 41px padding-box border-box' : ' url(https://cdn.discordapp.com/icons/'+props.guilds[props.guildselect].id+'/'+props.guilds[props.guildselect].icon+') no-repeat scroll 0px 0px /46px 46px padding-box border-box'}}>
    <select onClick={(event) => {props.setguildselet(event.target.value)}} className="guildselect">
        {props.guilds.map((e,i) => {
            return <option value={i} style={{background: 'var(--color-2)'}} key={i}>{e.name}</option>
        })}
    </select>
</div>
}

export default GuildList;