var tags = [], attrs = [], attributes = [];

var time = performance.now();

// REDUX

var initialState = {
	type: 'INIT',
	position: 0
}

function todoApp(state, action) {
	if (typeof state === 'undefined') {
		return initialState;
	}

	if(action.type === 'ADD'){
		return { position: action.position }
		// клонировать объект состояния, изменить position и вернуть новый объект
	}

	return state;
};

function addTodo(pos){
	return {
		type: 'ADD',
		position: pos
	}
};

// REACT

var Sub = React.createClass({

	render: function(){
		var data = this.props.data;

		return (
			<nav className="subMenu">
				{
					data.map(function(item, index){
						return <a className="attr" key={index}> {index}. {item.name}</a>;
					})
				}
			</nav>
		);
	}
});

var Menu = React.createClass({

	getInitialState: function(){
		return { active: false };
	},

	handleClick: function(){
		this.setState({ active: !this.state.active })
	},

	render: function(){
		var tag = this.props.data;
		var attr2 = this.props.attr;

		return (
			<section
					className={ this.state.active ? "active" : "" }
					key = { tag.id }>
				<a	className = "tag"
					href="#"
					onClick = {this.handleClick}>
					{ tag.name }
					<small className = {attr2.length > 0 ? "" : "hidden"}> {attr2.length} атрибутов </small>
				</a>

				<Sub
					data={attr2} />
			</section>
		)
	}
});

var Nav = React.createClass({

	getTags: function(a){
		var attr = [], breaker = false;

		for(var i = 0; i < attributes.length; i++){

			if(attributes[i].attr == a) {
				breaker = true;				// устанавливаем метку "найден один элемент"
				attr.push(attributes[i]);	// сохраняем найденный элемент во временный массив
				// для сокращения массива атрибутов во время выборки (количество итераций уменьшается на 2)
				attributes.splice(i, 1);	// удаляем найденный элемент
				--i;						// возвращаем индекс на один назад
			} else if(breaker) return(attr);// после прохода всех атрибутов тэга завершаем функцию
		}

		return(attr);
	},

	componentDidMount: function(){
		attributes = [];
	},

	render: function(){
		attributes = this.props.data;
		var self = this;

		return (
			<nav className="mainNav">
				{
					tags.map(function(item, index){
						return <Menu
							key={index}
							data={item}
							attr={ self.getTags(item.id) }/>
					})
				}
			</nav>
		);
	}
});

var Tag = React.createClass({
	render: function(){
		var data = this.props.data;
		var tagTemplate = data.map(function(item, index){
			return (
				<article key = {index}>
					<h2>&lt;{item.name}&gt;</h2>
					<p>{item.shdes}</p>
					<p dangerouslySetInnerHTML={{__html: item.des }}></p>
				</article>
			)
		});

		return (
			<div className = "tags">
				{tagTemplate}
			</div>
		);
	}
});

var Main = React.createClass({
	componentWillMount: function(){

		//получаем данные из базы данных (функция getData в getData.js)
		getData(handlerPath, '').forEach(function(item){ (item.attr != 0) ? attrs.push(item) : tags.push(item); });

	},

	render: function(){
		return (
			<div>
				<Tag data = {tags} />

					<Nav data={attrs} />

			</div>
		)
	}
});

ReactDOM.render(
	<Main />,
	document.getElementById('react')
);

time = performance.now() - time;
console.log('Время выполнения = ', (time / 1000).toFixed(2), 'секунд');
