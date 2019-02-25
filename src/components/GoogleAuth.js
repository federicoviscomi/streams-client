import React from 'react';
import {signIn, signOut} from "../actions";
import {connect} from "react-redux";


class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '962974237785-pldshthr6qr46beqbde2cui25h48jpc8.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedId) => {
       if (true === isSignedId) {
           this.props.signIn(this.auth.currentUser.get().getId());
       } else {
           this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <div>I don't know if we are signed in</div>
            );
        } else if (this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
