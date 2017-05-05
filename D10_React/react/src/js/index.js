var React = require("react");
var ReactDOM = require("react-dom");

/*var HelloMessage = React.createClass({
	render:function (){
		return <h1 className="green">Hello {this.props.name}</h1>;
	}
})*/
/*class HelloMessage extends React.Component{
	render(){
		return <h1 className="green">Hello {this.props.name}</h1>;
	}
}
*/

/*class Todos extends React.Component{

	render(){
		return (<ol>
			{
				React.Children.map(this.props.children,function (todo){
					return <li>{todo}</li>
				})
			}
		</ol>)
	}
}*/
/*class MyComponent extends React.Component{
	handleClick(){
		this.refs.myTextInput.focus()
	}
	render(){
		return (
			<div>
				<input type="text" ref="myTextInput" /><br />
				<input type="button" value="获取myTextInput的焦点" onClick={this.handleClick.bind(this)} />
			</div>
			)
	}
}*/

/*class LikeButton extends React.Component{
	constructor (props){
		super(props);
		this.state = {liked:false}
	}
	handleClick(){

		var liked = !this.state.liked;
		this.setState({
			liked: liked
		})
	}
	componentDidUpdate(){
		console.log("渲染完成")
	}
	componentWillUpdate(){
		console.log("render触发之前，更新")
	}
	render(){

		var text = this.state.liked ? 'like' : 'haven\'t liked';
		return (
			<p onClick={this.handleClick.bind(this)}>
				You {text} this. Click to toggle.
			</p>
			)
	}
}*/

class UserGist extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			username: '',
      		lastGistUrl: ''
		}
	}
	componentDidMount(){
		var that = this;
		axios.get(this.props.source)
		  .then(function (response) {
		    // console.log(response);
		    var lastGist = response.data[0];
			console.log(lastGist);
			// console.log(this)
			that.setState({
				username:lastGist.owner.login,
				lastGistUrl:lastGist.owner.url
			})
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		/*$.get(this.props.source,function (result){

			var lastGist = result[0];
			console.log(lastGist);
			// console.log(this)
			that.setState({
				username:lastGist.owner.login,
				lastGistUrl:lastGist.owner.url
			})
		})*/
	}
	render(){
		return (
	      <div>
	        用户名:{this.state.username}.s last gist is
	        <a href={this.state.lastGistUrl}>here</a>.
	      </div>
	    );
	}
}

ReactDOM.render(
	<UserGist source="https://api.github.com/users/octocat/gists" />,
	document.getElementById("app")
	);