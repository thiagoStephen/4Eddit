import labEdiit from '../../Services/labEdiit';

export const loadPosts = async () => {  // search/load posts
    try {
        const response = await labEdiit.get('/posts', {
            Headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
        return Response.data.posts;
    } catch (error) {
        console.error(error)
    };
}

export const votePost = async (id, direction) => { // vote the post
    try {
        await labEdiit.put(`posts/${id}/vote`,
            {direction: direction},
            { 
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            }
        );
    } catch (error) {
        console.log(error)
    }
}

export const createPost = async (content) => { // create new post
    try {
        await labEdiit.post(`/posts`, content, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
    } catch (error) {
        console.error(error)
    }
}