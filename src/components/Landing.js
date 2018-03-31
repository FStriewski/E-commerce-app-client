
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SignUpPage from './SignUpPage'
import LogInPage from './LogInPage'
import LogOutPage from './LogOutPage' 
import { Link } from 'react-router-dom'



class Landing extends PureComponent {
    // static propTypes = {
    //     product: PropTypes.arrayOf(PropTypes.shape({
    //         id: PropTypes.number.isRequired,
    //         name: PropTypes.string.isRequired,
    //         price: PropTypes.number.isRequired,
    //         description: PropTypes.string.isRequired
    //     })).isRequired
    // }


    render() {

        return (
            <div>
                <h1>Welcome to the store,!</h1>
                <Link to={'/login'} component={LogInPage} className="login">Log In</Link>
                <br/>
                <Link to={'/logout'} component={LogOutPage} className="logout">Log Out</Link>
                <p> Or create account here: </p>
                <Link to={'/signup'} component={SignUpPage} className="signup">Sign Up</Link>
            </div>
        )
    }
}



const mapStateToProps = function (state) {
    return {

    }
}

export default connect(mapStateToProps, {  })(Landing)