import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
export default class list extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	data : this.props.bld
	    }
	}
	render(){
	    return (			
	      <ul className="hotbrand_ul">
	     		{
			   		this.state.data.map((item,j) =>{return <li key={j}>
			   			<Link to={{pathname: '/BrandDetails/'+ item.name ,state: '666666'}}>
					  		<h4><img src={item.imgSrc} /></h4>
			   				<h5>{item.name}</h5>
			   				<p>{item.txt}</p>
			   			</Link>
					</li>})
				}
	     </ul>
	    );
	}
};