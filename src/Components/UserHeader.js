import React, { Component } from 'react';
import { fetchUser } from '../actions';
import { connect } from 'react-redux'

class UserHeader extends Component{

componentDidMount(){
this.props.fetchUser(this.props.userId)    
}
    render(){
       
       const { user }= this.props
       if(!user){
           return null
       }
     console.log(this.props.user)
        return (
            <div>
                {user.name}
            </div>
        )
    }
}

const mapStateToProps=(state, ownProps)=>{
    
    return {
        user:state.user.find(user=>user.id===ownProps.userId)
    }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);