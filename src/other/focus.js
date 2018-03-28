import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
var width = document.body.clientWidth < 768 ? document.body.clientWidth : 768 ;
var linkFlag;
var timer;
export default class about extends React.Component{
	constructor(props){
		super(props);
		this.handleTouchStart = this.handleTouchStart.bind(this);
		this.handleTouchMove = this.handleTouchMove.bind(this);
		this.handleTouchEnd = this.handleTouchEnd.bind(this);
		this.state = {
			num:this.props.data.length,
			width:width,
			lWidth:-width,
			startX:0,
			moveX:0,
			index:0,
			left:0,
			times:'0.3s'
	    }
	}
	componentWillMount(){
		var _this = this;
		linkFlag = _this.props.Nolink !=undefined ? false : true; 
		if(_this.props.auto){
			timer =  setInterval(function(){
				_this.autoPlay(_this.state.index,_this.props.auto)
			},3000)
		}
	}
	componentWillUnmount(){
		clearInterval(timer);
	}
	handleTouchStart(e){
		var _this = this;
		_this.setState({ 
    		startX:e.changedTouches[0].pageX,
    		flag:false
    	});
    	clearInterval(timer);
    	e.stopPropagation();
	}
	handleTouchMove(e){
		var startX = this.state.startX;
		var moveX = e.changedTouches[0].pageX;	
		var index = this.state.index;
		this.setState({ 
    		left: (index*this.state.lWidth) + moveX - startX,
    		time:'0s',
    		flag:false
    	});
	}
	handleTouchEnd(e){
    	var startX = this.state.startX;
		var endX = e.changedTouches[0].pageX;
		var index = this.state.index;
		var num = this.state.num-1;
		var _this = this;
		if(endX - startX > 30){
			if(index!=0){
				index--;
			}
		}
		if(endX - startX < -30){
			if(index!=num){
				index++
			}
		}
		this.setState({ 
			index:index,
	    	left: index*this.state.lWidth,
	    	time:'0.3s',
	    	prices: index
	    });
		if(!linkFlag){
			this.props.handleFocusIndex(index);
		};
		if(_this.props.auto){
			timer =  setInterval(function(){
				_this.autoPlay(_this.state.index,_this.props.auto)
			},3000)
		}
	}
	componentWillReceiveProps(props){
		var _this = this;
		setTimeout(function(){
		    _this.setState({ 
	    		width:_this.props.Rw,
	    		lWidth:-(_this.props.Rw),
	    		left:-(_this.props.Rw*_this.state.index)
	    	});
		},10)
	}
	autoPlay(i,f){
		var _this = this;
		var len = _this.props.data.length;
		i++;
		if(i==len){i=0;}
		_this.setState({
			index:i,
			left:-i*width
		});
	}
	render(){
		var linkData
		if(this.props.Nolink!=undefined || this.props.Nolink != null){
			 linkData = this.props.data.map((item,i)=>{return <li key={i} style={{width:this.state.width+'px'}}><img src={item.Url} alt="" /></li>});
		}else{		
		     linkData = this.props.data.map((item,i)=>{return <li key={i} style={{width:this.state.width+'px'}}><Link to={{pathname: item.path +'/'+ item.title ,state: '666666'}}><img src={item.Url} alt="" /></Link></li>});
		}
	    return (		
	      <div onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd}>
	      	<ul style={{width:this.state.num*this.state.width+'px',left:this.state.left+'px',transition:this.state.times}}>
	      		{linkData}
	      	</ul>
	      	<ol>
      			 {
			   		this.props.data.map((data,i) =>{return <li key={i} className={this.state.index==i ? 'focus_li_A':''}></li>;
			   		})
				 }
      		</ol>

		  </div>
	    );
	}
};
