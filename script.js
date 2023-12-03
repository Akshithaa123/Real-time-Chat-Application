// Dummy data
const dummyMessages = [
    { name: 'User 123', content: 'Happy December' },
    { name: 'User 456', content: 'How are you?' },
    { name: 'User 123', content: 'I am fine and great' },
];

// Display dummy messages
const messagesDiv = document.getElementById('messages');
dummyMessages.forEach(message => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${message.name}: ${message.content}`;
    messagesDiv.appendChild(messageDiv);
});

// Listen for send message button click
const sendMessageForm = document.getElementById('send-message-form');
sendMessageForm.addEventListener('submit', e => {
    e.preventDefault();

    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = `You: ${message}`;
        messagesDiv.appendChild(messageDiv);

        messageInput.value = '';
    }
});