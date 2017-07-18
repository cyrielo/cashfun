import React from 'react';
import { Link } from 'react-router-dom';
import Form from './../partials/form';
import authStyle from './../../styles/auth.scss';

class SignIn extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row auth-row">

					<div className="col s12 m6 offset-m3 l5 offset-l3 white" id="auth-page">
						<div id="auth-container">
							<div id="auth-brand">
								<div id="brand-details">
									<div id="brand-color">
										<div id="initials">cf</div>
									</div>
									<div id="site-name">cashfun</div>
								</div>

								<div id="connections">
									<img id="first-image" src="/dist/img/img1.jpg" />
									<img id="second-image" src="/dist/img/img3.jpg" />
									<img id="third-image" src="/dist/img/img2.jpg" />
								</div>
							</div>
							<Form type='signin' />
						</div>
					</div>

					<div className="col s12 m6 offset-m3 l5 offset-l3 white center-align" id="auth-footer">
						Don't have an Account? <Link className="blue-text" to="/signup">Signup</Link>
					</div>

				</div>
			</div>
		);
	}
}

export default SignIn;
