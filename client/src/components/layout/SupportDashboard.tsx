
import { mockConversations } from "../../data/mockChatData";
import ConversationList from "../conversations/ConversationList";
import "./SupportDashboard.css";

function SupportDashboard() {
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
          <div className="chat-placeholder">
            <div className="chat-placeholder-icon">💬</div>

            <h2>QuickCart WhatsApp Support</h2>

            <p>
              Select a customer conversation to view and respond to
              messages.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default SupportDashboard;