export interface Message {
  id: string;
  text: string;
  sender: string;
  time: string;
  status: 'sent' | 'delivered' | 'read';
  isOwn: boolean;
}

export interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  typing?: boolean;
  messages: Message[];
}

export const chats: Chat[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://storage.googleapis.com/fenado-ai-farm-public/generated/5f661325-3fa3-4e8d-ba1d-36cdabe2be36.webp',
    lastMessage: "Sure, I'll send you the files tomorrow",
    time: '10:42 AM',
    unread: 2,
    online: true,
    typing: true,
    messages: [
      {
        id: '101',
        text: 'Hey, do you have those project files ready?',
        sender: 'me',
        time: '10:30 AM',
        status: 'read',
        isOwn: true
      },
      {
        id: '102',
        text: 'I need them for the meeting this afternoon',
        sender: 'me',
        time: '10:31 AM',
        status: 'read',
        isOwn: true
      },
      {
        id: '103',
        text: 'Still working on them, almost done!',
        sender: 'Sarah Johnson',
        time: '10:35 AM',
        status: 'read',
        isOwn: false
      },
      {
        id: '104',
        text: "Sure, I'll send you the files tomorrow",
        sender: 'Sarah Johnson',
        time: '10:42 AM',
        status: 'delivered',
        isOwn: false
      }
    ]
  },
  {
    id: '2',
    name: 'David Chen',
    avatar: 'https://storage.googleapis.com/fenado-ai-farm-public/generated/dc0e7501-681a-4b97-8ddd-1d9c92e227ea.webp',
    lastMessage: 'Are we still on for lunch?',
    time: '9:15 AM',
    unread: 0,
    online: true,
    messages: [
      {
        id: '201',
        text: "Hey David, how's it going?",
        sender: 'me',
        time: '9:10 AM',
        status: 'read',
        isOwn: true
      },
      {
        id: '202',
        text: 'Pretty good, just finishing up some work',
        sender: 'David Chen',
        time: '9:12 AM',
        status: 'read',
        isOwn: false
      },
      {
        id: '203',
        text: 'Are we still on for lunch?',
        sender: 'David Chen',
        time: '9:15 AM',
        status: 'read',
        isOwn: false
      }
    ]
  },
  {
    id: '3',
    name: 'Robert Williams',
    avatar: 'https://storage.googleapis.com/fenado-ai-farm-public/generated/d8bb61c5-79ae-4418-bff5-3ae5d9b64e69.webp',
    lastMessage: 'I sent you the invoice for this month',
    time: 'Yesterday',
    unread: 0,
    online: false,
    messages: [
      {
        id: '301',
        text: 'Hi Robert, can you send me the invoice?',
        sender: 'me',
        time: 'Yesterday',
        status: 'read',
        isOwn: true
      },
      {
        id: '302',
        text: 'I sent you the invoice for this month',
        sender: 'Robert Williams',
        time: 'Yesterday',
        status: 'read',
        isOwn: false
      }
    ]
  },
  {
    id: '4',
    name: 'Emma Taylor',
    avatar: 'https://storage.googleapis.com/fenado-ai-farm-public/generated/f7318854-ada5-4cc9-b9af-aca83a073ef2.webp',
    lastMessage: 'The meeting has been rescheduled to 3 PM',
    time: 'Yesterday',
    unread: 3,
    online: false,
    messages: [
      {
        id: '401',
        text: 'When is our next team meeting?',
        sender: 'me',
        time: 'Yesterday',
        status: 'read',
        isOwn: true
      },
      {
        id: '402',
        text: 'It was supposed to be at 1 PM today',
        sender: 'Emma Taylor',
        time: 'Yesterday',
        status: 'read',
        isOwn: false
      },
      {
        id: '403',
        text: "But there's been a change",
        sender: 'Emma Taylor',
        time: 'Yesterday',
        status: 'delivered',
        isOwn: false
      },
      {
        id: '404',
        text: 'The meeting has been rescheduled to 3 PM',
        sender: 'Emma Taylor',
        time: 'Yesterday',
        status: 'delivered',
        isOwn: false
      }
    ]
  },
  {
    id: '5',
    name: 'Patricia Moore',
    avatar: 'https://storage.googleapis.com/fenado-ai-farm-public/generated/e13ede03-e0f0-4770-8856-29bc72dc0c85.webp',
    lastMessage: 'Thanks for your help yesterday!',
    time: 'Monday',
    unread: 0,
    online: true,
    messages: [
      {
        id: '501',
        text: 'Did you get the problem solved?',
        sender: 'me',
        time: 'Monday',
        status: 'read',
        isOwn: true
      },
      {
        id: '502',
        text: 'Yes, finally! Your suggestion worked',
        sender: 'Patricia Moore',
        time: 'Monday',
        status: 'read',
        isOwn: false
      },
      {
        id: '503',
        text: 'Thanks for your help yesterday!',
        sender: 'Patricia Moore',
        time: 'Monday',
        status: 'read',
        isOwn: false
      }
    ]
  }
];