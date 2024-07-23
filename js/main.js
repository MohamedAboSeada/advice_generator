const endpoint = `https://api.adviceslip.com/advice`;
const btn = document.querySelector('.advice_gen__btn');
const loading = document.querySelector('.loading');

async function getRandomAdvice(callback) {
    loading.classList.remove('hide');
	let res = await fetch(endpoint);
	let data = await res.json();

	callback(data);
}

function updateAdviceCard({ slip: { advice, id } } = data) {
	const id_el = document.querySelector('.advice_gen__advice-id');
	const text_el = document.querySelector('.advice_gen__advice-text');

	id_el.textContent = id;
	text_el.textContent = `"${advice}"`;
    loading.classList.add('hide');
}

getRandomAdvice(updateAdviceCard);

btn.addEventListener('click', (_) => {
	getRandomAdvice(updateAdviceCard);
});
