import React, { Component } from 'react'
import UserProfile from './FormValidation/UserProfile/UserProfile'
import DemoJSS from './JSS_StyledComponent/DemoJSS/DemoJSS'
import DemoTheme from './JSS_StyledComponent/Themes/DemoTheme'

export default class App extends Component {


  render() {
    return (
      <div>
          {/* <UserProfile /> */}
          {/* <DemoJSS /> */}
          <DemoTheme />
      </div>
    )
  }
}
