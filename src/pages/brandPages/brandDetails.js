import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import List from '../../components/list';
var arr = [
	{'img':require('../../images/9.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},
	{'img':require('../../images/10.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},
	{'img':require('../../images/11.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},
	{'img':require('../../images/14.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006}];
var arr1 = [];
var arr2 = [];
var photoArr = [{"num":1,"list":[
	{"imgSrc":require('../../images/9.jpg')},
	{"imgSrc":require('../../images/9.jpg')},
	{"imgSrc":require('../../images/9.jpg')},
	{"imgSrc":require('../../images/9.jpg')},
	{"imgSrc":require('../../images/9.jpg')},
	{"imgSrc":require('../../images/9.jpg')}]
}]
export default class select extends React.Component{
	constructor(props) {
	    super(props);
	    this.handleScroll = this.handleScroll.bind(this);
	    var arr = this.props.location.pathname.split("/");
	    var arrName = arr[arr.length-1];
	    this.state={
			name:arrName,
			people:10000,
			navlist:[{"name":"首页"},{"name":"图集"},{"name":"笔记"},{"name":"商品"}],
			title:'香奈儿，秉承创始人嘉柏丽尔•香奈儿女士划时代的创新理念与前瞻创意，成为现代女性美学的风向标。无论时尚精品、香水与美容品、腕表与高级珠宝,都致力于为女性塑造自由、优雅、与众不同的风格。',
	    	flagHeight:false,
	    	navIndex:0,
	    	photos:photoArr,
	    	loadingFlag:false
	    }
	}
	componentWillMount() {
		var _this = this;
	    window.addEventListener('scroll', this.handleScroll);
	    for(var i=0;i<arr.length;i++){
			if(i%2==0){
				arr1.push(arr[i])
			}else{
				arr2.push(arr[i])
			}
		}
		_this.setState({
			noteList1:arr1,
			noteList2:arr2,
			storeList1:arr1,
			storeList2:arr2
		})
	}
	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	}
	unfoldClick(){
		this.setState({
			flagHeight:!this.state.flagHeight
		})
	}
	navClick(i){
		this.setState({
			navIndex:i,
			loadingFlag:i!=0,
			photos:photoArr,
			noteList1:arr1,
			noteList2:arr2,
			storeList1:arr1,
			storeList2:arr2
		});
	}
	moreClick(i){
		var _this = this;
		var arr = [{"num":2,"list":[{"imgSrc":require('../../images/11.jpg')},{"imgSrc":require('../../images/9.jpg')},{"imgSrc":require('../../images/10.jpg')},{"imgSrc":require('../../images/11.jpg')},{"imgSrc":require('../../images/focus_img03.jpg')},{"imgSrc":require('../../images/10.jpg')}]}];
		if(_this.state.photos.length<6){
			_this.setState({
				photos:this.state.photos.concat(arr),
				loadingFlag:true
			})
		}
	}
	handleScroll(e){ 
		var scrollTop = document.body.scrollTop;
    	var height = document.body.clientHeight; 
    	var scrollHeight = document.body.scrollHeight;
    	var _this = this; 
    	if(_this.state.navIndex==0){ return false;}
        if(scrollTop+height>=scrollHeight){
        	if(_this.state.navIndex==1){
        		var ptotodata = [{"num":2,"list":[{"imgSrc":require('../../images/11.jpg')},{"imgSrc":require('../../images/9.jpg')},{"imgSrc":require('../../images/10.jpg')},{"imgSrc":require('../../images/11.jpg')},{"imgSrc":require('../../images/focus_img03.jpg')},{"imgSrc":require('../../images/10.jpg')}]}];
        		setTimeout(function(){
        			_this.setState({
						photos:_this.state.photos.concat(ptotodata)
					})
        		},300)
        	}else if(_this.state.navIndex==2){
        		var notedata1 ={'img':require('../../images/11.jpg'),'title':'3步拥有完美仪态！','text':'第一眼不是很惊艳','name':'生活研究所','zan':1006};
    			var notedata2 ={'img':require('../../images/10.jpg'),'title':'3步拥有完美仪态！','text':'第一眼不是很惊艳','name':'生活研究所','zan':1006};
        		setTimeout(function(){
	        		_this.setState({
						noteList1:_this.state.noteList1.concat(notedata1),
						noteList2:_this.state.noteList2.concat(notedata2)
					})
	        	},300)
        	}else if(_this.state.navIndex==3){
        		var stodedata1 ={'img':require('../../images/9.jpg'),'title':'3步拥有完美仪态！','text':'第一眼不是很惊艳','name':'生活研究所','zan':1006};
    			var stodedata2 ={'img':require('../../images/10.jpg'),'title':'3步拥有完美仪态！','text':'第一眼不是很惊艳','name':'生活研究所','zan':1006};
        		setTimeout(function(){
	        		_this.setState({
						storeList1:_this.state.storeList1.concat(stodedata1),
						storeList2:_this.state.storeList2.concat(stodedata2)
					})
	        	},300)
        	}
        } 
    }    
	render(){
		var loadingTxt = this.state.loadingFlag && this.state.navIndex!=0 ? '加载中...' : '无更多数据';
	    return (			
	     <div className="brand_content">
	     	<div className="brand_content_top" style={{"backgroundImage":"url("+ require('../../images/focus_img01.jpg')+")"}}>
	     		<dl>
	     			<dt>{this.state.name}</dt>
	     			<dd>有{this.state.people}人在讨论</dd>
	     		</dl>
	     		<span>关注</span>
	     	</div>
	     	<ul className="brand_content_ul">
				{
					this.state.navlist.map((item,i)=>{return<li key={i} className={this.state.navIndex==i?'on':''} 
					onClick={this.navClick.bind(this,i)}>
						{item.name}
					</li>})
				}
	     	</ul>
	     	<p className="brand_content_title">
	     		<span className={this.state.flagHeight ? '':'bct_height'}>{this.state.title}</span>
	     		<i className={this.state.flagHeight ? 'hide':''} onClick={this.unfoldClick.bind(this)}>展开</i>
	     	</p>
	     	<div className = {["photo_list",this.state.navIndex==0 || this.state.navIndex==1 ?'show':'hide'].join(' ')}>
				<h3 className="title_h3">图集</h3>
				{
					this.state.photos.map((item,i)=>{return <ul key={i}>
						{
							item.list.map((itmes,j)=>{ return <li key={j}>
								<img src={itmes.imgSrc} />
							</li>})
						}
					</ul>})
				}
				<p className={["more",this.state.navIndex==1 ? 'hide':''].join(' ')} onClick={this.moreClick.bind(this)}><span>查看更多</span></p>
	     	</div>
	     	<div className = {["note_list",this.state.navIndex==0 || this.state.navIndex==2?'show':'hide'].join(' ')}>
				<h3 className="title_h3">笔记</h3>
				<div className="list">
     				<List lsd = {this.state.noteList1} />
     				<List lsd = {this.state.noteList2} />
     			</div>
				<p className={["more",this.state.navIndex==2 ? 'hide':''].join(' ')}><span>查看更多</span></p>
	     	</div>
	     	<div className = {["store_list",this.state.navIndex==0 ||this.state.navIndex==3?'show':'hide'].join(' ')}>
				<h3 className="title_h3">商品</h3>
				<div className="list">
     				<List lsd = {this.state.storeList1} />
     				<List lsd = {this.state.storeList2} />
     			</div>
				<p className={["more",this.state.navIndex==3 ? 'hide':''].join(' ')}><span>查看更多</span></p>
	     	</div>
	     	<div className={["loading",this.state.loadingFlag && this.state.navIndex!=0?'':'hide'].join(' ')}>{loadingTxt}</div>
	     </div>
	    );
	}
};