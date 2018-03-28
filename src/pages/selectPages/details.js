import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import List from '../../components/list';
export default class select extends React.Component{
	constructor(props) {
	    super(props);
	    this.handleScroll = this.handleScroll.bind(this);
	    var arr = this.props.location.pathname.split("/");
	    var arrTitle = arr[arr.length-1];
	    var arrContent="";
	    for(var i=0;i<6;i++){
	    	arrContent+=arrTitle
	    }
	    this.state={
			title:arrTitle,
			content:arrContent,
	    	listData1:[{'img':require('../../images/9.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006,'time':'2018-01-03'},{'img':require('../../images/13.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006,'time':'2018-01-02'},{'img':require('../../images/7.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006,'time':'2018-01-01'}],
	    	listData2:[{'img':require('../../images/14.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006,'time':'2018-01-03'},{'img':require('../../images/12.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006,'time':'2018-02-01'},{'img':require('../../images/3.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006,'time':'2018-01-02'}],
	    	loadingFlag:true,
	    	sortTitle:'按综合排序',
	    	sortIndex:0,
	    	sortFlag:false,
	    	sortList:[{'title':'按综合排序'},{'title':'按时间排序'},{'title':'按热度排序'}]
	    }
	}
	sortShow(){
		this.setState({
			sortFlag:!this.state.sortFlag
		})
	}
	sortClick(item,i){
		var _this = this;
		var data1 = _this.state.listData1;
		var data2 = _this.state.listData2;
		_this.setState({
				sortFlag:!_this.state.sortFlag,
				sortTitle:item.title,
				sortIndex:i
		})
		if(item.title="按时间排序"){
			data1.sort(function(a,b){
			    return Date.parse(a.time) - Date.parse(b.time);
			});
			data2.sort(function(a,b){
			    return Date.parse(a.time) - Date.parse(b.time);
			});
		}
		setTimeout(function(){
			_this.setState({
				listData1:data1,
				listData2:data2
			})
		},200);
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
    	var arr1 ={'img':require('../../images/8.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006};
    	var arr2 ={'img':require('../../images/8.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006};
        if(scrollTop+height>=scrollHeight){
        	if(_this.state.listData1.length<15){
	        	setTimeout(function(){
	        		_this.state.listData1.push(arr1);
	        		_this.state.listData2.push(arr2);
	        		_this.setState({ 
	        			loadingFlag: true,
	        			listData1:_this.state.listData1,
	        			listData2:_this.state.listData2,
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
	     <div className="select_content">
	     	<div className="select_content_top" style={{"backgroundImage":"url("+ require('../../images/8.jpg')+")"}}>
	     		<dl>
	     			<dt>{this.state.title}</dt>
	     			<dd>{this.state.content}</dd>
	     		</dl>
	     	</div>
	     	<div className="select_content_sort">
	     		<h3 onClick={this.sortShow.bind(this)} className={this.state.sortFlag ?'sort_arrow':''}>{this.state.sortTitle}</h3>
	     		<ul className={this.state.sortFlag?'':'hide'}>
	     			{
	     				this.state.sortList.map((item,i)=>{return <li key={i} onClick={this.sortClick.bind(this,item,i)} className={this.state.sortIndex==i?'on':''}>
	     					{item.title}
	     				</li>})
	     			}
	     		</ul>
	     	</div>
	     	<div className="list">
 				<List lsd = {this.state.listData1} />
 				<List lsd = {this.state.listData2} />
 			</div>
 			<div className="loading">{loadingTxt}</div>
	     </div>
	    );
	}
};