const loadCommentsBtnElement = document.getElementById('load-comments-btn');

async function fetchCommentsForPost(event) {
    const postId = loadCommentsBtnElement.dataset.postid;
    const response = await fetch(`/posts/${postId}/comments`);
    const responseData = await response.json(); //parsed response data as Javascript Object
    console.log(responseData);
}

loadCommentsBtnElement.addEventListener('click', fetchCommentsForPost);