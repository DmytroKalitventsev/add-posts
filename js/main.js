let doc = document;

let posts = [
	{
		title: 'Post1',
		text: 'Lorem ipsum dolor sit',
		img: 'img1.png',
		publish: true,
	},
	{
		title: 'Post2',
		text: 'Lorem ipsum dolor sit',
		img: 'img2.png',
		publish: true,
	},
	{
		title: 'Post3',
		text: 'Lorem ipsum dolor sit',
		img: 'img3.png',
		publish: true,
	},
	{
		title: 'Post4',
		text: 'Lorem ipsum dolor sit',
		img: 'img4.png',
		publish: true,
	},
	{
		title: 'Post5',
		text: 'Lorem ipsum dolor sit',
		img: 'img5.png',
		publish: true,
	},
];

let parentPosts = doc.querySelector('.posts');
let classMod = '';
let count = 1;

for (let i = 0; i < posts.length; i++) {
	if (posts[i].publish) {
		if (count % 2 == 0) {
			classMod = ' post__background';
		} else {
			classMod = '';
		}

		renderPost(parentPosts, posts[i], classMod);

		count++;
	}
}

function renderPost(parent, object, classModif) {
	let postHtml = `
		<div class="post${classModif}">
			<div class="post__img">
				<img src="./img/${object.img}" alt="picture">
			</div>
			<div class="post__content">
				<h3>${object.title}</h3>
				<p>${object.text}</p>
			</div>
		</div>
	`;

	parent.innerHTML += postHtml;
}