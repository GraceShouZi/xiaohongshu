import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Focus from '../other/focus';
import BrandList from '../components/brandList';
import List from '../components/list';
var width = document.body.clientWidth < 768 ? document.body.clientWidth : 768 ;
export default class select extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			focusData:[
		    	{"path":"" , "Url":require('../images/3.jpg'),"title":"标题1"},
				{"path":"" , "Url":require('../images/12.jpg'),"title":"标题2"},
				{"path":"" , "Url":require('../images/13.jpg'),"title":"标题3"},
				{"path":"" , "Url":require('../images/8.jpg'),"title":"标题4"}
			],
			Rw:width,
			index:0,
			focusIndex:0,
			Nolink:false,
			imgSrc:require('../images/3.jpg'),
			name:'女王大人',
			jgzFlag:false,
			otherNote:[
	    		{'imgSrc':require('../images/9.jpg'),'name':'发现了一条弹力好到能劈叉的牛仔裤👖','txt':''},
	    		{'imgSrc':require('../images/10.jpg'),'name':'发现了一条弹力好到能劈叉的牛仔裤👖','txt':''},
	    		{'imgSrc':require('../images/11.jpg'),'name':'发现了一条弹力好到能劈叉的牛仔裤👖','txt':''},
	    		{'imgSrc':require('../images/9.jpg'),'name':'发现了一条弹力好到能劈叉的牛仔裤👖','txt':''}
	    	]
	    }
	}
 	componentWillMount() {
		var _this = this;
	    window.onresize = function(){
			var winWidth = document.body.clientWidth > 768 ? 768 : document.body.clientWidth;
			setTimeout(function(){
		    	_this.setState({
			    	Rw:winWidth
			    });	
		    },10)		
		};
		var arr = [
			{'img':require('../images/5.jpg'),'title':'3步拥有完美仪态！','text':'3步拥有完美仪态！仪态！','name':'生活研究所1','zan':1006},
	    	{'img':require('../images/2.jpg'),'title':'3步拥有完美仪态！','text':'其实秘诀就在于像诗','name':'生活研究所2','zan':1006},
	    	{'img':require('../images/3.jpg'),'title':'3步拥有完美仪态！','text':'3步拥有完美仪态！','name':'生活研究所3','zan':1006},
	    	{'img':require('../images/4.jpg'),'title':'3步拥有完美仪态！','text':'3步拥有完美仪态！3步拥有完美仪态！','name':'生活研究所4','zan':1006}
	    ];
		var arr1=[];
		var arr2=[];
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
	handleFocusIndex(i){
		var _this = this;
		_this.setState({
			focusIndex:i
		});
 	}
 	jgzClick(){
 		this.setState({
 			jgzFlag:!this.state.jgzFlag
 		})	
 	}
	render(){
	    return (			
	     <div>
	     	<div className="content_top">
	    		<Focus data = {this.state.focusData}  Rw={this.state.Rw} handleFocusIndex={this.handleFocusIndex.bind(this)} Nolink={this.state.Nolink} auto={false}/>
	    	    <span className="content_top_tips">{this.state.focusIndex+1}/{this.state.focusData.length}</span>
	    	</div>
	    	<div className="content_main">
	    		<div className="content_main_title">
	    			<img src={this.state.imgSrc} />
	    			<b>{this.state.name}</b>
	    			<i className={this.state.jgzFlag?'':'on'} onClick={this.jgzClick.bind(this)}>{this.state.jgzFlag?'已关注':'加关注'}</i>
	    		</div>
	    		<dl className="content_main_note">
	    			<dt>深圳首家原谅色火锅店打卡，好吃到汤底都喝光|深圳探店</dt>
	    			<dd>	    			
	    				<p>终于吃上了魔法汤一样的原谅色火锅，我觉得这个颜色很美呀，更像我最爱的抹茶🍵</p>
	    				<p>听店员说汤汁是用青椒藤椒佐以数十种蔬菜打成的汁做汤底，清香微辣，很好喝，刚进店里我就先喝光了两碗，但是绿色的汤很辣哦，不能吃辣的宝宝不联系喝汤🥣</p>
	    				<p>终于吃上了魔法汤一样的原谅色火锅，我觉得这个颜色很美呀，更像我最爱的抹茶🍵</p>
	    				<p>听店员说汤汁是用青椒藤椒佐以数十种蔬菜打成的汁做汤底，清香微辣，很好喝，刚进店里我就先喝光了两碗，但是绿色的汤很辣哦，不能吃辣的宝宝不联系喝汤🥣</p>
	    				<p>听店员说汤汁是用青椒藤椒佐以数十种蔬菜打成的汁做汤底，清香微辣，很好喝，刚进店里我就先喝光了两碗，但是绿色的汤很辣哦，不能吃辣的宝宝不联系喝汤🥣</p>
	    			</dd>
	    		</dl>
	    	</div>
	    	<div>
	    	<div className="hotbrand otherNote">
 				<h3 className="title_h3">它的笔记</h3>
 				<BrandList bld={this.state.otherNote} />
 			</div>
			<div>
 				<h3 className="title_h3">其他笔记</h3>
 				<div className="list">
     				<List lsd = {this.state.listData1} />
     				<List lsd = {this.state.listData2} />
     			</div>
 			</div>
	    	</div>
	     </div>
	    );
	}
};