import { useState } from 'react';
import FilterBtns from './FilterBtns';
import mocksData from '../../mocks';
import './conversationRow.css';


const ConversationItemRow = ({item, active, setSelectedId}) => {
    const { name, message, state, type, id } = item;
    const [selected, setSelected] = useState(false);

    return (
        <div className={`conversation-box${selected? ' active' : ''}`} onClick={() => setSelected(state => !state)}>
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

const ConversationRow = () => {
    const [openState, setOpenState] = useState(true);
    const [selectedId, setSelectedId] = useState(null);
    
    // check item state
    const selectedData = mocksData.filter((item) => item.open === openState);
    const selectedMessage = mocksData.find(item => item.id === selectedId);

    return (
        <div>
            <FilterBtns open={openState} setOpenState={setOpenState} />
            {selectedData.map((mockItem) => {
                return (
                    <ConversationItemRow item={mockItem} key={mockItem.id} active={mockItem.id === selectedId} setSelectedId={setSelectedId} />
                )
            })
            }
        </div>
    )
};

export default ConversationRow;