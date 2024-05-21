import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import chatsSlice from '../features/messages/chatsSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        chats: chatsSlice,
    },
});

export default store;
