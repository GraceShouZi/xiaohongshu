import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import List from '../components/list';
export default class select extends React.Component{
	constructor(props) {
	    super(props);
	   	this.handleScroll = this.handleScroll.bind(this);
	    this.state={
	    	loadingFlag:true,
	    	listData1:[{'img':require('../images/7.jpg'),'title':'PONY评妆 | 张韶涵同款眼妆、高光大揭秘！竟然不到100元！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../images/2.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../images/6.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../images/4.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006}],
	    	listData2:[{'img':require('../images/6.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../images/2.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../images/3.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../images/1.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006}],
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
    	var arr1 ={'img':require('../images/3.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006};
    	var arr2 ={'img':require('../images/4.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006};
        if(scrollTop+height>=scrollHeight){
        	if(_this.state.listData1.length<15){
	        	setTimeout(function(){
	        		_this.setState({ 
	        			loadingFlag: false,
	        			listData1:_this.state.listData1,
	        			listData2:_this.state.listData2
	        		});
	        	},200)
	        }else{
	        	setTimeout(function(){
	        		_this.setState({ 
	        			loadingFlag: true
	        		});
	        	},200)
	        }
        } 
    }    
	render(){
		var loadingTxt = this.state.loadingFlag ? '无更多数据' : '加载中...';
	    return (	
	    <div style={{"padding":"0.1rem 0 0 0"}}>		
		    <div className="list">
				<List lsd = {this.state.listData1} />
				<List lsd = {this.state.listData2} />
			</div>
			<div className="loading">{loadingTxt}</div>
		</div>
	    );
	}
};