import React from 'react';
import PropTypes from 'prop-types';

const Email = ({ updateState, error }) => (
  <div id="rEmail">
    <p>EMAIL: <sup class="redA">*</sup></p>
    <input maxLength="60" type="email" onChange={(e) => { updateState({ email: e.target.value }); }} />
    <br />
    <div className="rUnderText">
      Limit 60 characters
    </div>
    <div className="text-danger">{error}</div>
  </div>
);

export default Email;

// class Email extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ email: event.target.value });
//     this.props.updateState({ email: event.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <p>Email:</p>
//         <input maxLength="60" type="email" value={this.state.email} onChange={this.handleChange} />
//         <br />
//         Limit 60 characters
//       </div>
//     );
//   }
// }
