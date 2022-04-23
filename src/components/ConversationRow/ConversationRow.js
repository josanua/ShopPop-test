import './conversationRow.css';

function ConversationItemRow({item, active, setSelectedId}) {
    // const [selected, setSelected] = useState(false);
    const {name, message, state, type, id} = item;

    return (
        // <div className={`conversation-box${selected? ' active' : ''}`} onClick={() => setSelected(state => !state)}>
        <div className='conversation-box' onClick={() => setSelectedId(id)}>
            <div className='header-data'>
                <span className='user-name'>{name}</span>
                <span className={`user-messenger-type ${type}-message`}>{type}</span> 
                <span className='user-messenger-state-text'>{state}</span>
            </div>
                {active && <div>Is selected</div>}
            <p className='user-message' dangerouslySetInnerHTML={{__html: message || ''}}/>
        </div>
    );
}

export default ConversationItemRow;