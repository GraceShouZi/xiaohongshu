import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
export default class list extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	data : this.props.lsd
	    }
	}
	zanClick(i){
		var zanFlag = this.state.data[i].zanFlag;
		if(!zanFlag){
			this.state.data[i].zan++;
			this.state.data[i].zanFlag = true;
		}else{
			this.state.data[i].zan--;
			this.state.data[i].zanFlag = false;
		}
		this.setState({
			data:this.state.data,
		})
	}
	componentWillReceiveProps(props){
		var _this = this;
		setTimeout(function(){
		    _this.setState({ 
	    		data : _this.props.lsd
	    	});
		},10)
	}
	render(){
	    return (			
	     	<ul>
	     		{
			   		this.state.data.map((item,i) =>{return <li key={i}>
			   				<Link  to={{pathname: '/content/'+ item.name ,state: '666666'}}>
							  	<h4><img src={item.img} /></h4>
							  	<h5>{item.title}</h5>
							  	<p className="list_font01 gray">{item.text}</p>
						  	</Link>
						  	<div className="list_font02">
						  		<span><img src={item.img} /></span>
						  		<i>{item.name}</i>
						  		<em onClick={this.zanClick.bind(this,i)} className={item.zanFlag?'zan02':''}>{item.zan}</em>
						  	</div>
					  	
					  </li>
			   		})
				}
	     	</ul>
	    );
	}
};