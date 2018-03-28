import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import List from '../../components/list';
export default class select extends React.Component{
	constructor(props) {
	    super(props);
	    var arr = this.props.location.pathname.split("/");
	    var arrName = arr[arr.length-1];
	    this.state={
			name:arrName,
			people:10000,
			navlist:[{"name":"首页"},{"name":"图集"},{"name":"笔记"},{"name":"商品"}],
			title:'香奈儿，秉承创始人嘉柏丽尔•香奈儿女士划时代的创新理念与前瞻创意，成为现代女性美学的风向标。无论时尚精品、香水与美容品、腕表与高级珠宝,都致力于为女性塑造自由、优雅、与众不同的风格。',
	    	flagHeight:false,
	    	navIndex:0,
	    	photos:[
	    		{"num":1,"list":[{"imgSrc":require('../../images/9.jpg')},{"imgSrc":require('../../images/9.jpg')},{"imgSrc":require('../../images/9.jpg')},{"imgSrc":require('../../images/9.jpg')},{"imgSrc":require('../../images/9.jpg')},{"imgSrc":require('../../images/9.jpg')}]}
	    	],
	    	noteList1:[{'img':require('../../images/6.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../../images/5.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006}],
	    	noteList2:[{'img':require('../../images/1.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../../images/7.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006}],
	    	storeList1:[{'img':require('../../images/9.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../../images/9.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006}],
	    	storeList2:[{'img':require('../../images/9.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006},{'img':require('../../images/9.jpg'),'title':'3步拥有完美仪态！','text':'许多女星像刘诗诗，第一眼不是很惊艳，看久了却越来越好看，举手投足间说不出的优雅。其实秘诀就在于像诗','name':'生活研究所','zan':1006}],
	    }
	}
	unfoldClick(){
		this.setState({
			flagHeight:!this.state.flagHeight
		})
	}
	navClick(i){
		this.setState({
			navIndex:i
		})
	}
	moreClick(i){
		var _this = this;
		var arr = [{"num":2,"list":[{"imgSrc":require('../../images/11.jpg')},{"imgSrc":require('../../images/9.jpg')},{"imgSrc":require('../../images/10.jpg')},{"imgSrc":require('../../images/11.jpg')},{"imgSrc":require('../../images/focus_img03.jpg')},{"imgSrc":require('../../images/10.jpg')}]}];
		if(_this.state.photos.length<6){
			_this.setState({
				photos:this.state.photos.concat(arr)
			})
		}
	}
	render(){
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
				<p className="more" onClick={this.moreClick.bind(this)}><span>查看全部</span></p>
	     	</div>
	     	<div className = {["note_list",this.state.navIndex==0 || this.state.navIndex==2?'show':'hide'].join(' ')}>
				<h3 className="title_h3">笔记</h3>
				<div className="list">
     				<List lsd = {this.state.noteList1} />
     				<List lsd = {this.state.noteList2} />
     			</div>
				<p className="more"><span>查看全部</span></p>
	     	</div>
	     	<div className = {["store_list",this.state.navIndex==0 ||this.state.navIndex==3?'show':'hide'].join(' ')}>
				<h3 className="title_h3">商品</h3>
				<div className="list">
     				<List lsd = {this.state.storeList1} />
     				<List lsd = {this.state.storeList2} />
     			</div>
				<p className="more"><span>查看全部</span></p>
	     	</div>
	     </div>
	    );
	}
};