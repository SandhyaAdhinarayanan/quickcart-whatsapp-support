export type ConversationStatus = "open" | "resolved";

export type MessageDirection = "incoming" | "outgoing";

export type MessageStatus =
  | "received"
  | "sent"
  | "delivered"
  | "read"
  | "failed";

export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  avatarUrl?: string;
}

export interface Conversation {
  id: string;
  contact: Contact;
  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;
  status: ConversationStatus;
}

export interface Message {
  id: string;
  conversationId: string;
  direction: MessageDirection;
  content: string;
  status: MessageStatus;
  createdAt: string;
}