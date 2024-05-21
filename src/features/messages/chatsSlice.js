import { createSlice } from '@reduxjs/toolkit';
import { signedInUser } from '../../store/users-details';

const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
        chats: [
            {
                id: 1,
                name: 'Janice Griffith',
                icon: 'https://wpkixx.com/html/winku/images/resources/friend-avatar6.jpg',
                status: 'online',
                messages: [
                    {
                        id: 1,
                        message: "Hey Cristiano, how's it going?",
                    },
                    {
                        id: signedInUser.id,
                        message:
                            "Hey Leo, I'm good, thanks. Just finished up a training session. How about you?",
                    },
                    {
                        id: 1,
                        message:
                            'Same here, always putting in the work. So, any big plans for the upcoming break?',
                    },
                    {
                        id: 1,
                        message:
                            ' Not really, just looking forward to spending some quality time with the family. Maybe hit the beach for a bit of relaxation. How about you?',
                    },
                    {
                        id: signedInUser.id,
                        message:
                            "Sounds nice! I'm thinking of taking a short vacation too, somewhere quiet where I can recharge. Maybe the mountains or a secluded beach.",
                    },
                    {
                        id: 1,
                        message:
                            'Definitely. So, have you been keeping up with the latest games in the league?',
                    },
                ],
            },
            {
                id: 2,
                name: 'Andrew',
                icon: 'https://wpkixx.com/html/winku/images/resources/friend-avatar5.jpg',
                status: 'away',
                messages: [
                    {
                        id: 2,
                        message: "Hey Cristiano, how's it going?",
                    },
                    {
                        id: 2,
                        message: 'Hey sweetie, how was your day at school?',
                    },
                    {
                        id: signedInUser.id,
                        message:
                            'Hi Mom, it was okay, I guess. Math was a bit challenging today, but I think I got the hang of it',
                    },
                    {
                        id: 2,
                        message:
                            "That's great to hear! Math can be tricky sometimes, but I'm proud of you for working hard. Anything else interesting happen?",
                    },
                    {
                        id: signedInUser.id,
                        message:
                            'Oh, a science project about plants sounds fascinating! Do you have any ideas yet?',
                    },
                    {
                        id: 2,
                        message: 'Yay! Thanks, Mom, youre the best!',
                    },
                ],
            },
            {
                id: 3,
                name: 'Jason Bourne',
                icon: 'https://wpkixx.com/html/winku/images/resources/friend-avatar4.jpg',
                status: 'away',
                messages: [
                    {
                        id: signedInUser.id,
                        message:
                            "Hey Leo, I'm good, thanks. Just finished up a training session. How about you?",
                    },
                    {
                        id: 3,
                        message:
                            'Same here, always putting in the work. So, any big plans for the upcoming break?',
                    },
                    {
                        id: 3,
                        message:
                            ' Not really, just looking forward to spending some quality time with the family. Maybe hit the beach for a bit of relaxation. How about you?',
                    },
                ],
            },
            {
                id: 4,
                name: 'Sarah Grey',
                icon: 'https://wpkixx.com/html/winku/images/resources/friend-avatar3.jpg',
                status: 'online',
                messages: [
                    {
                        id: signedInUser.id,
                        message:
                            'Hi Mom, it was okay, I guess. Math was a bit challenging today, but I think I got the hang of it',
                    },
                    {
                        id: 4,
                        message:
                            "That's great to hear! Math can be tricky sometimes, but I'm proud of you for working hard. Anything else interesting happen?",
                    },
                    {
                        id: signedInUser.id,
                        message:
                            'Oh, a science project about plants sounds fascinating! Do you have any ideas yet?',
                    },
                    {
                        id: 4,
                        message: 'Yay! Thanks, Mom, youre the best!',
                    },
                ],
            },
            {
                id: 5,
                name: 'Bill Doe',
                icon: 'https://wpkixx.com/html/winku/images/resources/friend-avatar2.jpg',
                status: 'offline',
                messages: [
                    {
                        id: 5,
                        message: "Hey Cristiano, how's it going?",
                    },
                    {
                        id: signedInUser.id,
                        message:
                            "Hey Leo, I'm good, thanks. Just finished up a training session. How about you?",
                    },
                    {
                        id: 5,
                        message:
                            'Same here, always putting in the work. So, any big plans for the upcoming break?',
                    },
                ],
            },
            {
                id: 6,
                name: 'Shen Cornery',
                icon: 'https://wpkixx.com/html/winku/images/resources/friend-avatar7.jpg',
                status: 'online',
                messages: [
                    {
                        id: signedInUser.id,
                        message:
                            'Hi Mom, it was okay, I guess. Math was a bit challenging today, but I think I got the hang of it',
                    },
                    {
                        id: 6,
                        message:
                            "That's great to hear! Math can be tricky sometimes, but I'm proud of you for working hard. Anything else interesting happen?",
                    },
                ],
            },
            {
                id: 7,
                name: 'Kill Bill',
                icon: 'https://wpkixx.com/html/winku/images/resources/friend-avatar8.jpg',
                status: 'away',
                messages: [
                    {
                        id: signedInUser.id,
                        message:
                            "Hey Leo, I'm good, thanks. Just finished up a training session. How about you?",
                    },
                    {
                        id: 7,
                        message:
                            'Same here, always putting in the work. So, any big plans for the upcoming break?',
                    },
                    {
                        id: 7,
                        message:
                            ' Not really, just looking forward to spending some quality time with the family. Maybe hit the beach for a bit of relaxation. How about you?',
                    },
                    {
                        id: signedInUser.id,
                        message:
                            "Sounds nice! I'm thinking of taking a short vacation too, somewhere quiet where I can recharge. Maybe the mountains or a secluded beach.",
                    },
                ],
            },
            {
                id: 8,
                name: 'Jasmin Walia',
                icon: 'https://wpkixx.com/html/winku/images/resources/friend-avatar9.jpg',
                status: 'offline',
                messages: [
                    {
                        id: signedInUser.id,
                        message:
                            'Hi Mom, it was okay, I guess. Math was a bit challenging today, but I think I got the hang of it',
                    },
                    {
                        id: 8,
                        message:
                            "That's great to hear! Math can be tricky sometimes, but I'm proud of you for working hard. Anything else interesting happen?",
                    },
                    {
                        id: signedInUser.id,
                        message:
                            'Oh, a science project about plants sounds fascinating! Do you have any ideas yet?',
                    },
                    {
                        id: 8,
                        message: 'Yay! Thanks, Mom, youre the best!',
                    },
                ],
            },
        ],
    },

    reducers: {
        sendMessage: (state, action) => {
            const chat = state.chats.find(
                (chat) => chat.id == action.payload.currentId,
            );
            chat.messages.push(action.payload.newMessage);
            console.log(action.payload.currentId);
        },
    },
});

export const sendMessage = chatsSlice.actions.sendMessage;
export default chatsSlice.reducer;
