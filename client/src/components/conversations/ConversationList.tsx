import type { Conversation } from "../../types/chat";
import "./ConversationList.css";
interface ConversationItemProps {
  conversation: Conversation;
}

function ConversationItem({
  conversation,
}: ConversationItemProps) {
  const {
    contact,
    lastMessage,
    lastMessageAt,
    unreadCount,
    status,
  } = conversation;

  const contactInitial = contact.name.charAt(0).toUpperCase();

  const formattedTime = new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(lastMessageAt));

  return (
    <button className="conversation-item" type="button">
      <div className="contact-avatar">{contactInitial}</div>

      <div className="conversation-content">
        <div className="conversation-top-row">
          <h3>{contact.name}</h3>
          <time dateTime={lastMessageAt}>{formattedTime}</time>
        </div>

        <div className="conversation-bottom-row">
          <p>{lastMessage}</p>

          {unreadCount > 0 && (
            <span
              className="unread-count"
              aria-label={`${unreadCount} unread messages`}
            >
              {unreadCount}
            </span>
          )}
        </div>

        <span
          className={`conversation-status conversation-status--${status}`}
        >
          {status}
        </span>
      </div>
    </button>
  );
}

interface ConversationListProps {
  conversation: Conversation[];
}

function ConversationList({ conversation }: ConversationListProps) {
  return (
    <div className="conversation-list">
      {conversation.map((conv) => (
        <ConversationItem key={conv.id} conversation={conv} />
      ))}
    </div>
  );
}

export default ConversationList;