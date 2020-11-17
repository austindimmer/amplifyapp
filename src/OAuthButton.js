// file: OAuthButton.js
import { withOAuth } from 'aws-amplify-react';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

class OAuthButton extends React.Component {
  handleClick() {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign('https://adtest.auth.ca-central-1.amazoncognito.com/oauth2/authorize?identity_provider=CPU&redirect_uri=https://master.d319jjiyplkdxt.amplifyapp.com//&response_type=TOKEN&client_id=50jsdc8vbk983369gut9htgat6&scope=aws.cognito.signin.user.admin email openid');
  }

  render() {
    return (
      <div class='login'>
        <button onClick={this.handleClick}>Log back into application with O365</button>
      </div>
    )
  }
}

//export default OAuthButton;
export default withOAuth(OAuthButton);