import type { Message } from "../../types/chat";

interface MessageBubbleProps {
  message: Message;
}

function MessageBubble({ message }: MessageBubbleProps) {
  const formattedTime = new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(message.createdAt));

  const getStatusSymbol = () => {
    switch (message.status) {
      case "sent":
        return "✓";

      case "delivered":
      case "read":
        return "✓✓";

      case "failed":
        return "!";

      default:
        return "";
    }
  };

  return (
    <div
      className={`message-row message-row--${message.direction}`}
    >
      <article
        className={`message-bubble message-bubble--${message.direction}`}
      >
        <p>{message.content}</p>

        <footer className="message-metadata">
          <time dateTime={message.createdAt}>
            {formattedTime}
          </time>

          {message.direction === "outgoing" && (
            <span
              className={`message-status message-status--${message.status}`}
              aria-label={`Message ${message.status}`}
            >
              {getStatusSymbol()}
            </span>
          )}
        </footer>
      </article>
    </div>
  );
}

export default MessageBubble;