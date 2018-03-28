import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
export default class select extends React.Component{
	constructor(props) {
	    super(props);
	    this.handleScroll = this.handleScroll.bind(this);
	    this.state={
	    	data:[{
	    		"imgSrc":require('../images/1.jpg'),
	    		"title":"圣诞糖霜饼干DIY教程",
	    		"path":"/content:id"
	    	},{
	    		"imgSrc":require('../images/2.jpg'),
	    		"title":"圣诞妆容怎么画？"
	    	},{
	    		"imgSrc":require('../images/3.jpg'),
	    		"title":"今年圣诞节送什么礼物给TA？"
	    	},{
	    		"imgSrc":require('../images/4.jpg'),
	    		"title":"Becca 2017圣诞限定高光盘试色"
	    	},{
	    		"imgSrc":require('../images/5.jpg'),
	    		"title":"星巴克带来的圣诞节限定"
	    	}],
	    	loadingFlag:true
	    }

	}
	componentWillMount() {
	    window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll(e){  
		var scrollTop = document.body.scrollTop;
    	var height = document.body.clientHeight; 
    	var scrollHeight = document.body.scrollHeight;
    	var _this = this;
    	var arr = {"imgSrc":require('../images/3.jpg'),"title":"圣诞糖霜饼干DIY教程"};
        if(scrollTop+height>=scrollHeight){
        	if(_this.state.data.length<10){
	        	setTimeout(function(){
	        		_this.state.data.push(arr)
	        		_this.setState({ 
	        			loadingFlag: true,
	        			data:_this.state.data
	        		});
	        	},200)
	        }else{
	        	setTimeout(function(){
	        		_this.setState({ 
	        			loadingFlag: false
	        		});
	        	},200)
	        }
        } 
	}	
	render(){
		var loadingTxt = this.state.loadingFlag ? '加载中...' : '无更多数据';
	    return (			
	     <div>
	     	<ul className="select">
	     		{
	     			this.state.data.map((item,i)=>{return <li key={i}>
	     				<Link to={{pathname: '/selectDetails/'+ item.title ,state: '666666'}}>
		     				<h3><img src={item.imgSrc} /></h3>
		     				<p>{item.title}</p>
	     				</Link>
	     			</li>})
	     		}
	     	</ul>
	     	<div className="loading"><img className={this.state.loadingFlag?'':'hide'} src={require('../images/loading.gif')} />{loadingTxt}</div>
	     </div>
	    );
	}
};