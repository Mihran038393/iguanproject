import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [
            {
                userId: 2,
                userPhoto:
                    'https://wpkixx.com/html/winku/images/resources/friend-avatar2.jpg',
                userName: 'Bucky',
                userSurname: 'Barnes',
                publishedDate: 'June,2 2018 19:22PM',
                userEmail: 'wintersolder@gmail.com',
                postImage:
                    'https://wpkixx.com/html/winku/images/resources/user-post.jpg',
                viewed: 233,
                likes: 162,
                comments: 7,
                dislikes: 22,
                postText:
                    "Love is a beautiful and mysterious force that touches us all in different ways. It's the warmth in a smile, the tenderness in a hug, and the understanding in a glance. Love can be found in the simplest gestures and the grandest declarations.",
                commentsData: [
                    {
                        userId: 1,
                        userPhoto:
                            'https://wpkixx.com/html/winku/images/resources/friend-avatar9.jpg',
                        userName: 'John',
                        userSurname: 'Doe',
                        publishedDate: '19:22PM',
                        commentText:
                            'we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post',
                        replies: [
                            {
                                userId: 5,
                                userPhoto:
                                    'https://wpkixx.com/html/winku/images/resources/friend-avatar5.jpg',
                                userName: 'Tony',
                                userSurname: 'Montana',
                                publishedDate: '22:30PM',
                                commentText:
                                    ' The implementation is clear and concise, making it easy to understand. I especially like how you handled the edge cases gracefully. The comments throughout the code are helpful for anyone who needs to maintain it in the future. Keep up the good work',
                            },
                            {
                                userId: 6,
                                userPhoto:
                                    'https://wpkixx.com/html/winku/images/resources/friend-avatar6.jpg',
                                userName: 'Mr',
                                userSurname: 'Bean',
                                publishedDate: '19:22PM',
                                commentText:
                                    ' I especially like how you handled the edge cases gracefully',
                            },
                        ],
                    },
                    {
                        userId: 7,
                        userPhoto:
                            'https://wpkixx.com/html/winku/images/resources/friend-avatar2.jpg',
                        userName: 'Bucky',
                        userSurname: 'Barnes',
                        publishedDate: '20:41PM',
                        commentText:
                            'we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel',
                    },
                ],
            },
            {
                userId: 3,
                userPhoto:
                    'https://wpkixx.com/html/winku/images/resources/friend-avatar3.jpg',
                userName: 'Sarah',
                userSurname: 'Loren',
                publishedDate: 'June,8 2019 19:22PM',
                userEmail: 'wintersolder@gmail.com',
                postImage:
                    'https://wpkixx.com/html/winku/images/resources/recent-88.jpg',
                viewed: 400,
                likes: 270,
                comments: 64,
                dislikes: 31,
                postText:
                    "Love teaches us empathy, patience, and forgiveness. It gives us the courage to be vulnerable and the strength to overcome any obstacle. Love is not just a feeling; it's a way of being—a choice we make every day to cherish, respect, and uplift those around us",
                commentsData: [],
            },
            {
                userId: 4,
                userPhoto:
                    'https://wpkixx.com/html/winku/images/resources/friend-avatar4.jpg',
                userName: 'Jason',
                userSurname: 'Borne',
                publishedDate: 'June,14 2019 19:22PM',
                userEmail: 'wintersolder@gmail.com',
                postImage:
                    'https://wpkixx.com/html/winku/images/resources/recent-77.jpg',
                viewed: 233,
                likes: 162,
                comments: 7,
                dislikes: 22,
                postText:
                    "It's the warmth in a smile, the tenderness in a hug, and the understanding in a glance. Love can be found in the simplest gestures and the grandest declarations.",
                commentsData: [],
            },
        ],
    },
    reducers: {
        addPost: (state, action) => {
            if (action.payload.postImage || action.payload.postText) {
                state.posts.unshift(action.payload);
            }
        },
        addComment: (state, action) => {
            const post = state.posts.find(
                (post) => post.userId == action.payload.id,
            );
            if (action.payload.newComment.commentText) {
                post.commentsData.push(action.payload.newComment);
            }
        },
    },
});

export const { addPost, addComment } = postsSlice.actions;
export default postsSlice.reducer;
