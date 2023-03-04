let doc = document;

let posts = [
	{
		title: 'Post1',
		text: 'Lorem ipsum dolor sit',
	},
	{
		title: 'Post2',
		text: 'Lorem ipsum dolor sit',
	},
	{
		title: 'Post3',
		text: 'Lorem ipsum dolor sit',
	},
]

let parentPosts = doc.querySelector('.posts');
let postHtml = '';
let classAdd = '';

for (let i = 0; i < posts.length; i++) {
	if ((i + 1) % 2 == 0) {
		classAdd += 'post_silver';
	}

	postHtml += `
		<div class="post ${classAdd}">
			<h3>${posts[i].title}</h3>
			<p>${posts[i].text}</p>
		</div>
	`;
	
	parentPosts.innerHTML += postHtml;
}