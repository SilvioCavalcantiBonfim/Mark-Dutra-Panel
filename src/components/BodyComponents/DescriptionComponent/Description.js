import './Description.css';

const Description = (props) => {
    return <div className='description'>
        <div className='description__contiener'>
            <h1>Whats is <span>Mark Dutra</span>?</h1>
            <p>The mark dutra project is a bot with objective make your discord server more funny. Inspired in job <strong>Marcos Dutra</strong>, sound engineer the program <strong>vai dar namoro</strong>, the bot execute sounds in voice channels not empty in random times.</p>
            <h1>How to function bot?</h1>
            <p>the bot execute one select audio random in random voice channel not empty. Without need command or interaction with bot.</p>
        </div>
        <div className='description__contiener'>
            <h1 style={{marginTop: "75px"}}>How to use <span>Mark Dutra</span> in my discord server?</h1>
            <p>Just use below button and to enjoy the bot <span>Mark Dutra</span>.</p>
            <div className='bt__conteiner'>
                <div className='bt__add__bot'>
                    <span title='Invite Mark Dutra' onClick={() => { window.open('https://discord.com/oauth2/authorize?client_id=994431009934278686&permissions=8&scope=bot')}}>invite mark dutra</span>
                </div>
            </div>
        </div>
        <div className='description__contiener'>
        <h1 style={{marginTop: "50px"}}>Which resources of <span>Mark Dutra</span>?</h1>
        <lu>
            <li><b>Up to 10 sounds</b>: You can set ten audios to run random.</li>
            <li><b>Not commands</b>: Don't need commands to bot setting.</li>
            <li><b>Easy use</b>: The bot work alone.</li>
        </lu>
        </div>
    </div>
}

export default Description;