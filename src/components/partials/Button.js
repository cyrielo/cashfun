import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
	render() {
		let type = (this.props.type) ? this.props.type : 'button';
		let icon = '';

		if(this.props.icon) {
			// icon = (<i class="material-icons"> { this.props.icon } </i>)
		}

		return (
			<button className={this.props.classes} type={ type }>
				{ icon }
				{ this.props.text }
			</button>
		);
	}
}

Button.propTypes = {
	type: PropTypes.string,
	classes: PropTypes.string,
	icon: PropTypes.string,
	text: PropTypes.string
}

export default Button;
