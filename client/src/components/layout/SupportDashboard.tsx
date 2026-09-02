import {
  mockConversations,
  mockMessages,
} from "../../data/mockChatData";
import ChatWindow from "../chat/ChatWindow";
import ConversationList from "../conversations/ConversationList";
import "./SupportDashboard.css";

function SupportDashboard() {
    const previewConversation = mockConversations[0];

  const previewMessages = previewConversation
    ? mockMessages.filter(
        (message) =>
          message.conversationId === previewConversation.id,
      )
    : [];
  return (
    <main className="support-dashboard">
      <header className="dashboard-header">
        <div>
          <h1>QuickCart Support</h1>
          <p>Manage customer conversations from WhatsApp</p>
        </div>

        <div className="agent-profile">
          <div className="agent-avatar">S</div>

          <div>
            <strong>Sandhya</strong>
            <span>Support Agent</span>
          </div>
        </div>
      </header>

      <section className="inbox-layout">
        <aside className="conversation-panel">
          <div className="panel-header">
            <div>
              <h2>Conversations</h2>
              <p>Customer messages</p>
            </div>

            <span className="conversation-count">
              {mockConversations.length}
             </span>          
          </div>

          <ConversationList conversation={mockConversations} />
        </aside>

<section className="chat-panel">
  {previewConversation ? (
    <ChatWindow
      conversation={previewConversation}
      messages={previewMessages}
    />
  ) : (
    <div className="chat-placeholder">
      <p>No conversation available.</p>
    </div>
  )}
</section>
      </section>
    </main>
  );
}

export default SupportDashboard;