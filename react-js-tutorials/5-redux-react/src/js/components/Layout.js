import React from "react"
import {connect} from "react-redux"

import {fetchUser} from "../actions/userActions";
import {fetchTweets} from "../actions/tweetsActions";
 //@connect is a decorator and depends on "babel-plugin-transform-decorators-legacy" in package
 //and "transform-decorators" in webpack".
@connect((state) => {
  return {
    user: state.user.user, //set in this.props
    userFetched: state.user.fetched,
    tweets: state.tweets.tweets,
  }
})
export default class Layout extends React.Component {
  componentWillMount(){
    this.props.dispatch(fetchUser())
  }
  fetchTweets(){
    this.props.dispatch(fetchTweets())
  }
  render() {
    const {user, tweets} = this.props;
    if (!tweets.length){
      return <button onClick={this.fetchTweets.bind(this)}>Load tweets</button>
    }

    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>);
    return (
    <div>
      <h1>{user.name}</h1>
      <ul>{mappedTweets}</ul>
    </div>)
  }
}
