import React from 'react';
import axios from 'axios'
import Focus from '../other/focus';
import List from '../components/list';
import BrandList from '../components/brandList';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
var winWidth = document.body.clientWidth > 768 ? 768 : document.body.clientWidth;
var arr = [{'img':require('../images/1.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../images/2.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../images/3.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../images/4.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006}];
var arr1 = [];
var arr2 = [];
export default class main extends React.Component{
	constructor(props) {
	    super(props);
	    this.handleScroll = this.handleScroll.bind(this);
	    this.go = this.go.bind(this);
	    this.state={
	    	focusData:[
		    	{"path":"/content" , "Url":require('../images/focus_img01.jpg'),"title":"标题1"},
				{"path":"/content" , "Url":require('../images/focus_img02.jpg'),"title":"标题2"},
				{"path":"/content" , "Url":require('../images/focus_img03.jpg'),"title":"标题3"},
				{"path":"/content" , "Url":require('../images/focus_img04.jpg'),"title":"标题4"}
			],
	    	topIndex:0,
	    	top:{
				topData:[
			        {"num":0, "text":"推荐" , "name":"nav_icon01" , "path":"/"},
					{"num":1, "text":"附近" , "name":"nav_icon02" , "path":"/" },
					{"num":2, "text":"视频" , "name":"nav_icon03" , "path":"/"},
					{"num":3, "text":"时尚" , "name":"nav_icon05" , "path":"/"},
					{"num":4, "text":"护肤" , "name":"nav_icon01" , "path":"/"},
					{"num":5, "text":"彩妆" , "name":"nav_icon02" , "path":"/" },
					{"num":6, "text":"美食" , "name":"nav_icon03" , "path":"/"},
					{"num":7, "text":"时尚" , "name":"nav_icon05" , "path":"/"}
			    ]
	    	},
	    	hotBrand:[
	    		{'imgSrc':require('../images/1.jpg'),'name':'品牌1','txt':"品牌·118万人在讨论"},
	    		{'imgSrc':require('../images/2.jpg'),'name':'品牌2','txt':"品牌·118万人在讨论"},
	    		{'imgSrc':require('../images/3.jpg'),'name':'品牌3','txt':"品牌·118万人在讨论"},
	    		{'imgSrc':require('../images/4.jpg'),'name':'品牌4','txt':"品牌·118万人在讨论"},
	    		{'imgSrc':require('../images/focus_img01.jpg'),'name':'品牌1','txt':"品牌·118万人在讨论"},
	    		{'imgSrc':require('../images/focus_img02.jpg'),'name':'品牌2','txt':"品牌·118万人在讨论"},
	    		{'imgSrc':require('../images/focus_img03.jpg'),'name':'品牌3','txt':"品牌·118万人在讨论"},
	    		{'imgSrc':require('../images/focus_img04.jpg'),'name':'品牌4','txt':"品牌·118万人在讨论"}
	    	],
	    	loadingFlag:true,
	    	Rw:winWidth,
	    	listData1:[],
	    	listData2:[]
	    }
	}
	go(){
		axios.get('./js/data.json').then((res)=>{
			var data = res.data;
			//console.log(data)
        }).catch((err)=>{
            console.log(err);
        })
	}
	componentWillMount() {
		var _this = this;
		this.go();
	    window.addEventListener('scroll', this.handleScroll);
	    window.onresize = function(){
			var winWidth = document.body.clientWidth > 768 ? 768 : document.body.clientWidth;
			setTimeout(function(){
		    	_this.setState({
			    	Rw:winWidth
			    });	
		    },10)		
		};
		for(var i=0;i<arr.length;i++){
			if(i%2==0){
				arr1.push(arr[i])
			}else{
				arr2.push(arr[i])
			}
		}
		_this.setState({
			listData1:arr1,
			listData2:arr2,
		});
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll(e){ 
		var scrollTop = document.body.scrollTop;
    	var height = document.body.clientHeight; 
    	var scrollHeight = document.body.scrollHeight;
    	var _this = this;
    	var ddd = {'img':require('../images/1.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006}
        if(scrollTop+height>=scrollHeight){
        	if(_this.state.listData1.length<10){
        		_this.state.listData1.push(ddd);
        		_this.state.listData2.push(ddd)
	        	setTimeout(function(){
	        		_this.setState({ 
	        			loadingFlag: true,
	        			listData1:_this.state.listData1,
	        			listData2:_this.state.listData2
	        		});
	        	},200);
	        }else{
	        	setTimeout(function(){
	        		_this.setState({ 
	        			loadingFlag: false
	        		});
	        	},200)
	        }
        } 
    }   
    navClick(i) {
		var _this = this;
		_this.setState({
		 	topIndex:i,
		 	loadingFlag: true,
		 	listData1:[],
		 	listData2:[]
		});
		setTimeout(function(){
			var www = [{'img':require('../images/3.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../images/4.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006}];
			_this.setState({
	    		listData1:www,
	    		listData2:www
			})
		},300);
	} 
	render(){
		var loadingTxt = this.state.loadingFlag ? '加载中...' : '无更多数据';
	    return (			
	     <div className="main">
	     		<ul className="mainTop">
		     		{
				   		this.state.top.topData.map((item,i) =>{return <li key={i} className={this.state.topIndex==i ? 'mainTop_A' : ''} onClick={this.navClick.bind(this,i)}>
				   			<span>{item.text}</span>
				   		</li>;})
					}
	     		</ul>
	     		<div className="mainList">
	     			<div className={this.state.topIndex !=0 ?'hide':''}>
	     				<div className="focus" id="focus">
	     					<Focus data = {this.state.focusData}  Rw={this.state.Rw} auto={true}/>
	     				</div>
	     				<div className="hotbrand">
	     					<h3 className="title_h3">热门品牌</h3>
	     					<BrandList bld={this.state.hotBrand} />
	     				</div>
	     			</div>
	     			<h3 className={["title_h3",this.state.topIndex !=0 ?"hide":""].join(' ')}>热门笔记</h3>
	     			<div className="list">
	     				<List lsd = {this.state.listData1} />
	     				<List lsd = {this.state.listData2} />
	     			</div>
	     		</div>
	     		<div className="loading"><img className={this.state.loadingFlag?'':'hide'} src={require('../images/loading.gif')} />{loadingTxt}</div>
	     </div>
	    );
	}
};