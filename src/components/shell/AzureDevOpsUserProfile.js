import React, { Component } from 'react';
import AuthenticationContext from 'adal-angular'
import { TENANT, INSTANCE, POST_LOGOUT_REDIRECT_URI, CLIENT_ID, CACHE_LOCATION } from '../../configuration/azureActiveDirectory';

class AzureDevOpsUserProfile extends Component {
    constructor(props) {
        super();

        this.state = {
            user: { }
        };

        this.props = props;
    }

    componentDidMount() {
        // This is just for playing around, all needs to be moved to the redux architecture.
        var authContext = new AuthenticationContext({
            instance: INSTANCE,
            tenant: TENANT,
            clientId: CLIENT_ID,
            postLogoutRedirectUri: POST_LOGOUT_REDIRECT_URI,
            cacheLocation: CACHE_LOCATION
        });

        authContext.handleWindowCallback();
        console.log(authContext.getLoginError());

        var user = authContext.getCachedUser();

        this.setState({
            user: user
        });

        if(user == null) {
            authContext.login();
        }

        console.log(user);
    }

    render() {
        return (
            <div className={this.props.className}>
                { this.state.user.userName != null ? this.state.user.userName : "Not logged in" }
            </div>
        )
    }
}

export default AzureDevOpsUserProfile