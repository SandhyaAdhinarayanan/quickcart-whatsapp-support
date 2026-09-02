import type {
  Conversation,
  Message,
} from "../../types/chat";
import MessageBubble from "./MessageBubble";
import "./ChatWindow.css";

interface ChatWindowProps {
  conversation: Conversation;
  messages: Message[];
}

function ChatWindow({
  conversation,
  messages,
}: ChatWindowProps) {
  const { contact, status } = conversation;

  const contactInitial = contact.name.charAt(0).toUpperCase();

  return (
    <section className="chat-window">
      <header className="chat-header">
        <div className="chat-contact">
          <div className="chat-contact-avatar">
            {contactInitial}
          </div>

          <div>
            <h2>{contact.name}</h2>
            <p>{contact.phoneNumber}</p>
          </div>
        </div>

        <span
          className={`chat-conversation-status chat-conversation-status--${status}`}
        >
          {status}
        </span>
      </header>

      <div className="message-list">
        {messages.length > 0 ? (
          messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
            />
          ))
        ) : (
          <div className="empty-messages">
            <p>No messages in this conversation.</p>
          </div>
        )}
      </div>

      <div className="message-composer">
        <input
          type="text"
          placeholder="Message sending will be added in Step 6"
          aria-label="Message"
          disabled
        />

        <button
          type="button"
          aria-label="Send message"
          disabled
        >
          ➤
        </button>
      </div>
    </section>
  );
}

export default ChatWindow;