import React from 'react';
import './index.scss';

const questions = [
	{
		title: 'Дорогие друзья. Перед Вами новая викторина. В этот раз посвященная Египту. Поехали!',
		variants: ['Поехали!', 'Да отстань ты уже!'],
		correct: 0,
	},

	{
		title: 'Как назывался властитель в Древнем Египте?',
		variants: ['Монарх', 'Фараон', 'Царь'],
		correct: 1,
	},
	{
		title: 'Величайшими архитектурными памятниками Древнего Египта являются...',
		variants: ['Висячие сады', 'Расположенные на скалах храмы', 'Пирамиды'],
		correct: 2,
	},
	{
		title: 'Какая река являлась источником жизни в Древнем Египте?',
		variants: ['Амазонка', 'Березина', 'Двина', 'Нил'],
		correct: 3,
	},
	{
		title: 'Какой материал использовали для письма древние египтяне?',
		variants: ['Папирус', 'Бересту', 'Глиняные таблички'],
		correct: 0,
	},
	{
		title: 'Какое мифическое чудовище с головой женщины, лапами и телом льва и крыльями грифона охраняет пирамиды в Гизе?',
		variants: ['Атлант', 'Сфинкс', 'Кариатида'],
		correct: 1,
	},
	{
		title: 'Первой построенной в Египте гигантской ступенчатой пирамидой была...',
		variants: ['пирамида Хеопса', 'пирамида Рамзеса', 'пирамида Джосера'],
		correct: 2,
	},
	{
		title: 'Богом подземного царства в Древнем Египте был...',
		variants: ['Осирис', 'Гор', 'Ра'],
		correct: 0,
	},
	{
		title: 'Как называли богиню, изображавшуюся в Древнем Египте в виде кошки или женщины с головой кошки?',
		variants: ['Артемида', 'Хатшепсут', 'Бастет'],
		correct: 2,
	},
	{
		title: 'Как назывался жук, почитавшийся как священное животное богов Солнца и бывший символом возрождения, воскресения из мертвых?',
		variants: ['Колорадский жук', 'Жук-олень', 'Скарабей'],
		correct: 2,
	},
	{
		title: 'Какая царица в древнеегипетской культуре стала одним из символов красоты и изысканности?',
		variants: ['Хатшепсут', 'Меритатон', 'Нефертити'],
		correct: 2,
	},
	{
		title: 'Какое название носит скала на западном берегу Нила, в которой во время правления Рамзеса II были высечены два знаменитых древнеегипетских храма?',
		variants: ['Абу-Симбель', 'Карнак', 'Луксор', 'Aquamarin all inclusive'],
		correct: 0,
	},
	{
		title: 'Столица Древнего Египетского царства?',
		variants: ['Каир', 'Луксор', 'Мемфис', 'Бобруйск'],
		correct: 2,
	},
	{
		title: 'Французский ученый, разгадавший тайну египетских иероглифов...',
		variants: ['Наполеон', 'Шампольон', 'Депардье'],
		correct: 1,
	},
	{
		title: 'Кого в Древнем Египте называли «отцом ужаса»?',
		variants: ['Осириса', 'Исида', 'Сфинкса'],
		correct: 2,
	},
	{
		title: 'В каком году до н.э. произошло объединение Древнего Египта?',
		variants: ['В 3000 г. до н.э', 'В 0 г.', 'В 50 г. н.э.'],
		correct: 0,
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
