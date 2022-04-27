import {useState} from 'react';
import ConversationItemRow from '../Components/ConversationRow/ConversationRow';
import FilterBtns from '../Components/ConversationRow/FilterBtns';
import mocksData from '../Assets/demoData';

const IndexPage = () => {
  const [openState, setOpenState] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const selectedData = mocksData.filter((item) => item.open === openState);

  const selectedMessage = mocksData.find(item => item.id === selectedId);

  return (
    <div>
      <FilterBtns open={openState} setOpenState={setOpenState}/>
      {selectedData.map((mockItem) => {
        return (
          <ConversationItemRow item={mockItem} key={mockItem.id} active={mockItem.id === selectedId} setSelectedId={setSelectedId}/>
        )
      })}

      {/* <div>
        Selected is {selectedMessage.name}
      </div> */}
    </div>
  )
};

export default IndexPage;