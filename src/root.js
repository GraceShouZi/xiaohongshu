import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Header from './components/header';
import Main from './pages/main';
import Selected from './pages/selected';
import Brands from './pages/brands';
import SearchResult from './pages/searchResult';
import SelectDetails from './pages/selectPages/details';
import BrandDetails from './pages/brandPages/brandDetails';
import Content from './pages/content';
class App extends React.Component{
	constructor(props) {
	    super(props);
	}
	render(){
	    return (			
	     <div>
	     	<Header />
	     	<div style={{height:0.4+'rem'}}></div>
	     	{this.props.children}
	     </div>
	    );
	}
};
class Home extends React.Component{
	constructor(props) {
	    super(props);
	}
	render(){
	    return (			
	     <div>
	     	<Main />
	     </div>
	    );
	}
};

export default class root extends React.Component{
	constructor(props) {
	    super(props);
	}
	render(){
		return(
	   		<HashRouter>
			    <App>
			        <Route exact path='/' component={Home} />
			        <Route path='/selected' component={Selected} />
			        <Route path='/brands' component={Brands} />
			        <Route path='/searchResult' component={SearchResult} />
			        <Route path='/selectDetails' component={SelectDetails} />
			        <Route path='/brandDetails' component={BrandDetails} />
			        <Route path='/content' component={Content} />
			    </App>
		  </HashRouter>
	    )
	}
};
