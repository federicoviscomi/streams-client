import React from 'react';

class GoogleAuth extends React.Component {

    state = {isSignedIn: null};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '962974237785-pldshthr6qr46beqbde2cui25h48jpc8.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        console.log('on auth change');
        console.log(this.auth.isSignedIn.get());
        this.setState({isSigned: this.auth.isSignedIn.get()});
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return (
                <div>I don't know if we are signed in</div>
            );
        } else if (this.state.isSignedIn) {
            return (
                <div>
                    <button
                        className="ui red google button"
                        onClick={this.onSignOutClick}
                    >
                        <i className="google icon"> </i>
                        Sign Out
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <button
                        className="ui red google button"
                        onClick={this.onSignInClick}
                    >
                        <i className="google icon"> </i>
                        Sign In With Google
                    </button>
                </div>
            );
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth;
