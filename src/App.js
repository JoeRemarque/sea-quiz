import React from 'react';
import './index.scss';

const questions = [
	{
		title: 'Чего больше на Земле: воды или суши?',
		variants: ['Суши', 'Воды'],
		correct: 1,
	},
	{
		title: 'Какой воды на Земле больше: пресной или солёной?',
		variants: ['Пресной', 'Солёной'],
		correct: 1,
	},
	{
		title: 'Из какой это сказки: «Ветер по морю гуляет и кораблик подгоняет»?',
		variants: [
			'Теремок',
			'Колобок',
			'Сказка о царе Салтане',
		],
		correct: 2,
	},
	{
		title: 'Как называется море, в имени которого присутствует название камня?',
		variants: ['Чёрное', 'Мертвое', 'Мраморное'],
		correct: 2,
	},
	{
		title: 'Почему Чёрное море назвали именно так',
		variants: ['потому что было черного цвета', 'потому что черное означало бурное, опасное для плавания в далёкие времена', 'просто так назвали'],
		correct: 1,
	},
	{
		title: 'Какое море самое солёное на Земле?',
		variants: ['Солёное', 'Красное', 'Мёртвое'],
		correct: 2,
	},
	{
		title: 'Какое море самое крупное на Земле?',
		variants: ['Красное', 'Карибское', 'Филиппинское', 'Баренцево'],
		correct: 2,
	},
	{
		title: 'Какое море самое мелкое в мире?',
		variants: ['Мертвое', 'Азовское', 'Эгейское'],
		correct: 1,
	},
	{
		title: 'Как называется рак, обитающий в приливно-отливной зоне, который «по своим убеждениям отрёкся от мирской жизни» и удалился для жительства в пустынные места?',
		variants: ['Рак-дурак', 'Рак-одиночка', 'Рак-отшельник'],
		correct: 2,
	},
	{
		title: '«Подальше от моря — подальше от горя», — кто так говорил?',
		variants: ['В народе', 'Абоба', 'Робинзон Крузо'],
		correct: 0,
	},
	{
		title: 'Сколько морей есть на планете?',
		variants: ['46', '51', '63'],
		correct: 2,
	},
	{
		title: 'Какое море является на самом деле озером?',
		variants: ['Аравийское море', 'Каспийское море', 'Охотское море'],
		correct: 1,
	},
	{
		title: 'Назовите самую крупную рыбу морских глубин',
		variants: ['Голубой кит', 'Пожилая скумбрия', 'Акула'],
		correct: 2,
	},
	{
		title: 'При какой температуре замерзает морская вода',
		variants: ['-2 градуса', '0 градусов', '-5 градуса'],
		correct: 0,
	},
	{
		title: 'Какое море не имеет берегов?',
		variants: ['Гренландское', 'Саргассово', 'Тасманово'],
		correct: 1,
	},
];
// 20. Вытаскиваем в Result correct.
function Result({ correct }) {
	return ( // 21. <h2>Вы отгадали {correct} ответа из {questions}</h2>
		<div className="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>Вы отгадали {correct} ответа из {questions.length}</h2>
			<a href='/'>
				<button>Попробовать снова</button>
			</a>
		</div>
	);
}
// 4. Вытаскваем из пропсов question и рендерим его тут ниже, а именно: <h1>{question.title}</h1>.
// 8. Вытаскиваем в Game onClickVariant.
// 13. Вытаскиваем в Game step.
function Game({ question, onClickVariant, step }) {
	// 14. Создаем переменную которая определяет прогрессБар. Шаг делим на кол-во вопросов и умножаем на 100. При момощи Math.round - округляем.
	const percentage = Math.round((step / questions.length) * 100);
	return ( // 15. <div style={{ width: `${percentage}%` }} - указываем прогрессБар на странице.
		<>
			<div className="progress">
				<div style={{ width: `${percentage}%` }} className="progress__inner"></div>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{
					// 5. В question, есть variants. С помощью map мы пробегаемся по каждому варианту, мы назовем его text. И указываем, что мы хотим превратить массив строчек в массив элементов li, указывая text в li <li>{text}</li>. Когда мы рендерим любой список, мы должны указывать ключ, key={text}.
					// 9. Передаем onClickVariant внутрь каждого li.
					// 10. Теперь мы хотим передовать какой то index, чтобы понять, какой вариант мы выбрали. Для этого добавляем index и с помощью стрелочной функции вызываем onClick(событие клика) и передаем внутрь onClickVariant (index). Прошлый вариант был такой: onClick = {onClickVariant} key={text}>{text}
					question.variants.map((text, index) => (
						<li onClick = {() => onClickVariant(index)} key={text}>{text}</li>
					))
				}
			</ul>
		</>
	);
}

function App() {
	// 1. Создаем useState. В конце пишем 0 - это наш шаг [step], т.е. первый вопрос.
	const [step, setStep] = React.useState(0);
	// 17. Создаем еще один useState для проверки правильности ответа. В конце тоже ноль.
	const [correct, setCorrect] = React.useState(0);
	// 2. Из массива questions по индексу step берем наш вопрос.
	const question = questions[step];
	
// 6. Создаем функцию, чтобы понимать, что произошел клик на один из вариантов ответов. Эта функция будет получать один из вариантов (назовем его index). Console.log сделает проверку, после реализации в пункте 10.
	const onClickVariant = (index) => {
		console.log(step, index);
		setStep(step + 1); // 11. Переходим к следующему вопросу. Добавляем шаг +1.
		// 18. onClickVariant говорит нам, какой вариант мы выбрали. const question = questions[step] - позволяет нам понять, какой сейчас вопрос. А правельный вариант ответа храниться в массиве questions, в correct. Проверка: Если вариант, который я выбрал прямо сейчас с верным ответом, то мы говорим что был выбран верный вариант (correct + 1).
		if (index == question.correct) {
			setCorrect(correct + 1);
		}
	}
// 3. Передаем question в компонент Game.
// 7. Передаем onClickVariant в Game.
// 12. Передаем step в Game.
	return (
		<div className="App">
			{
				// 16. Если шаг не равен кол-ву наших вопросов, в этом случае показываем Game. Если нет, то показываем Result.Было: <Game question = {question} onClickVariant = {onClickVariant} step = {step} />
				step != questions.length ? <Game question = {question} onClickVariant = {onClickVariant} step = {step} /> : <Result correct = {correct} /> // 19. Передаем в Result кол-во правельных вариантов.
			}
		</div>
	);
}

export default App;
