import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatPage = (props) => {
    const chatProps = useMultiChatLogic('a087f6f1-b5a8-40e8-b500-4649aa187407', props.user.username, props.user.secret);
    
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    );
};

export default ChatPage;
