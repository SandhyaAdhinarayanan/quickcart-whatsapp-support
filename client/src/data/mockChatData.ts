import type {
  Contact,
  Conversation,
  Message,
} from "../types/chat";

export const mockContacts: Contact[] = [
  {
    id: "contact-1",
    name: "Priya",
    phoneNumber: "+91 95000 00001",
  },
  {
    id: "contact-2",
    name: "Arun",
    phoneNumber: "+91 95000 00002",
  },
  {
    id: "contact-3",
    name: "Divya",
    phoneNumber: "+91 95000 00003",
  },
];

export const mockConversations: Conversation[] = [
  {
    id: "conversation-1",
    contact: mockContacts[0],
    lastMessage: "Where is my order QC1025?",
    lastMessageAt: "2026-08-31T10:30:00.000Z",
    unreadCount: 2,
    status: "open",
  },
  {
    id: "conversation-2",
    contact: mockContacts[1],
    lastMessage: "Thank you for the update.",
    lastMessageAt: "2026-08-31T09:45:00.000Z",
    unreadCount: 0,
    status: "resolved",
  },
  {
    id: "conversation-3",
    contact: mockContacts[2],
    lastMessage: "Can I change my delivery address?",
    lastMessageAt: "2026-08-30T16:15:00.000Z",
    unreadCount: 1,
    status: "open",
  },
];

export const mockMessages: Message[] = [
  {
    id: "message-1",
    conversationId: "conversation-1",
    direction: "incoming",
    content: "Hi, I placed an order two days ago.",
    status: "received",
    createdAt: "2026-08-31T10:28:00.000Z",
  },
  {
    id: "message-2",
    conversationId: "conversation-1",
    direction: "incoming",
    content: "Where is my order QC1025?",
    status: "received",
    createdAt: "2026-08-31T10:30:00.000Z",
  },
  {
    id: "message-3",
    conversationId: "conversation-2",
    direction: "outgoing",
    content: "Your order has been shipped.",
    status: "read",
    createdAt: "2026-08-31T09:40:00.000Z",
  },
  {
    id: "message-4",
    conversationId: "conversation-2",
    direction: "incoming",
    content: "Thank you for the update.",
    status: "received",
    createdAt: "2026-08-31T09:45:00.000Z",
  },
  {
    id: "message-5",
    conversationId: "conversation-3",
    direction: "incoming",
    content: "Can I change my delivery address?",
    status: "received",
    createdAt: "2026-08-30T16:15:00.000Z",
  },
];