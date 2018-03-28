import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import history from '../history';
export default class Header extends React.Component{
	constructor(props,context){
		super(props);
		this.state={
			navData:[{"name":"精选","path":"/selected"},{"name":"品牌","path":"/brands"}],
			listFlag:false,
			hotList:[{"name":"热门1"},{"name":"热门2"},{"name":"热门3"},{"name":"热门4"},{"name":"热门5"},{"name":"热门6"},{"name":"热门7"},{"name":"热门8"}]
		}
	}
	searchClick(){
		var _this = this;
		_this.setState({
			listFlag:!_this.state.listFlag
		})
	}
	render(){
		return(
				<div className="nav">
				    <span className="nav_logo">
				    	<Link to="/"><img src={require('../images/logo.png')} /></Link>
				    </span>
				    <span className="search" onClick={this.searchClick.bind(this)}></span>
				    <ul className="nav_list gray">
						{
							this.state.navData.map((item,i)=>{return <li key={i} className={item.path == location.hash.slice(1) ? 'nav_A':''}>
								<Link to={item.path}>{item.name}</Link>
							</li>})
						}
				    </ul>
				    <div className={["searchlist",this.state.listFlag ? "":"hide"].join(' ')}>
				    	<div className="searchlist_top">
				    		<p><input type="text"/></p>
				    		<span onClick={this.searchClick.bind(this)}>取消</span>
				    	</div>
				    	<div className="searchlist_main">
							<h3>热门搜索</h3>
							<ul>
								{
									this.state.hotList.map((item,i)=>{return <li key={i}>
										<Link to={'/searchResult/'+ item.name} onClick={this.searchClick.bind(this)}>{item.name}</Link>
									</li>})
								}
							</ul>
				    	</div>
				    </div>
			    </div>
			)
	}
};