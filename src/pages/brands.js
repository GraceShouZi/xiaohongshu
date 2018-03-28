import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import BrandList from '../components/brandList';
export default class select extends React.Component{
	constructor(props) {
	    super(props);
	    this.handleScroll = this.handleScroll.bind(this);
	    this.state={
	    	data:[
	    		{'imgSrc':require('../images/7.jpg'),'name':'品牌1','txt':'品牌·2万人在讨论'},
	    		{'imgSrc':require('../images/6.jpg'),'name':'品牌2','txt':'品牌·2万人在讨论'},
	    		{'imgSrc':require('../images/5.jpg'),'name':'品牌3','txt':'品牌·2万人在讨论'},
	    		{'imgSrc':require('../images/4.jpg'),'name':'品牌4','txt':'品牌·2万人在讨论'},
	    		{'imgSrc':require('../images/3.jpg'),'name':'品牌1','txt':'品牌·2万人在讨论'},
	    		{'imgSrc':require('../images/2.jpg'),'name':'品牌2','txt':'品牌·2万人在讨论'},
	    		{'imgSrc':require('../images/1.jpg'),'name':'品牌3','txt':'品牌·2万人在讨论'},
	    		{'imgSrc':require('../images/focus_img04.jpg'),'name':'品牌4','txt':'品牌·2万人在讨论'}
	    	],
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
    	var arr1 = {'imgSrc':require('../images/6.jpg'),'name':'品牌333','txt':"品牌·200人在讨论"};
    	var arr2 = {'imgSrc':require('../images/3.jpg'),'name':'品牌333','txt':"品牌·200人在讨论"};
        if(scrollTop+height>=scrollHeight){
        	if(_this.state.data.length<30){
	        	setTimeout(function(){
	        		_this.state.data.push(arr1,arr2)
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
	     <div className="brands">
	     	<BrandList bld={this.state.data}/>
	     	<div className="loading"><img className={this.state.loadingFlag?'':'hide'} src={require('../images/loading.gif')} />{loadingTxt}</div>
	     </div>
	    );
	}
};