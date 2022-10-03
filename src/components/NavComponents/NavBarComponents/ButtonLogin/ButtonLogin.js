import './ButtonLogin.css';

const Btlogin = (props) => {
    return <div className='bt__login__body'>
        <span title='Connect with Discord' onClick={() => { window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=994431009934278686&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=token&scope=identify%20guilds' }} className={"bt__login_" + props.theme}>Connect with Discord</span>
    </div>;
}

export default Btlogin;