import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
	render() {
		const isLoggedIn = this.props.isLoggedIn;
		const userID = this.props.userID;
		let headerNav = '';

		if(!isLoggedIn) {
			headerNav = (
				<ul id="nav-mobile" className="right hide-on-med-and-down">
		      <li>
		       <Link to="/signin">Login</Link>
		      </li>
		      <li>
		      	<Link to="/signup">Signup</Link>
		      </li>
		    </ul>
			);
		}

		else {
			headerNav = (
				<ul id="nav-mobile" className="right hide-on-med-and-down">
		      <li>
		       <a href="#">Home</a>
		      </li>
		      <li>
		       	<a href="#">Profile</a>
		      </li>
		      <li>
		       	<a href="#">Logout</a>
		      </li>
		    </ul>
		  );
		}

		return (
			 <nav>
		    <div className="nav-wrapper white grey-text text-darken-2">
		      <a href="#" className="brand-logo">CashFun</a>
		      { headerNav }
		    </div>
		  </nav>
		)
	}
}

Header.propTypes = {
	isLoggedIn: PropTypes.bool,
	userID: PropTypes.number
};

export default Header;


