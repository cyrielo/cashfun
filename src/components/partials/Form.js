import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Form extends React.Component {
	render() {
		const formType = this.props.type;
		let dynamicForm = '';

		if(formType === 'signin') {
			dynamicForm = (
				<div id="form-container">
					<div id="form-intro">
						<h2>Sign in</h2>
						<p>
							Connect and see all the cash you've missed.
						</p>
					</div>

					<div className="row">
				    <div className="input-field col s12">
				      <input placeholder=" " id="email" type="email" className="validate"/>
				      <label className="active" htmlFor="first_name2">Email</label>
				    </div>
					</div>
					<div className="row">
				    <div className="input-field col s12">
				      <input placeholder=" "  id="password" type="password" className="validate"/>
				      <label className="active" htmlFor="password">Password</label>
				    </div>
					</div>

					<div className="row">
						<div className="col s12" id='auth-button'>
							<Button 
						classes="waves-effect waves-light btn teal" 
						type="submit"
						icon="add"
						text="Sign in"/>
						</div>
					</div>
				</div>
			);
		} 
		else {
			dynamicForm = (
				<div id="form-container">
					<div id="form-intro">
						<h2>Sign up | Start cashing out real dough!</h2>
						
					</div>

					<div className="row">
				    <div className="input-field col s12">
				      <input placeholder=" " id="email" type="email" className="validate"/>
				      <label className="active" htmlFor="email">Email</label>
				    </div>
					</div>

					<div className="row">
				    <div className="input-field col s12">
				      <input placeholder=" " id="username" type="text" className="validate"/>
				      <label className="active" htmlFor="username">Username</label>
				    </div>
					</div>

					<div className="row">
				    <div className="input-field col s12">
				      <input placeholder=" "  id="password" type="password" className="validate"/>
				      <label className="active" htmlFor="password">Choose password</label>
				    </div>
					</div>

					<div className="row">
						<div className="col s12" id='auth-button'>
							<Button 
						classes="waves-effect waves-light btn teal" 
						type="submit"
						icon="add"
						text="Sign up"/>
						</div>
					</div>
				</div>
			);
		}

		return (
			 <div> { dynamicForm } </div> 
		);
	}
}

Form.propTypes = {
	type: PropTypes.string
}

export default Form;
