## Next.js Page LoadingBar 

Component used to display a css animated loading bar on top of the page

```
npm i next-page-loading-bar
```

Example Use with a Layout wrapper component

```js
import React, { Component } from "react"
import routerEvents from "next-router-events"
import Navigation from "./NavigationContainer"
import LoadingBar from "./PageLoader"

export default class Layout extends Component {
  state = { pageLoading: true }
  render() {
    const { children} = this.props
    return (
      <div>
        <LoadingBar show={this.state.pageLoading} />
        <Navigation />
        <div className="pageContent">
            {children}
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.setState(() => ({
      pageLoading: false,
    }))
  }
  componentWillMount() {
    routerEvents.on("routeChangeStart", this.pageLoadStart)
    routerEvents.on("routeChangeComplete", this.pageLoadEnd)
  }
  componentWillUnmount() {
    routerEvents.off("routeChangeStart", this.pageLoadStart)
    routerEvents.off("routeChangeComplete", this.pageLoadEnd)
  }
  pageLoadStart = url => {
    const currentUrl = window.location.pathname + window.location.search
    if (url !== currentUrl) {
      this.setState(() => ({ pageLoading: true }))
    }
  }
  pageLoadEnd = url => {
    this.setState(() => ({ pageLoading: false }))
  }
}
```

Using `withLoadingBar` to Wrapp Page or layout component to save on boilerplate

```js
import React, { Component } from "react"
import Navigation from "./NavigationContainer"
import { withLoadingBar } from "./PageLoader"

export default withLoadingBar(
  class Layout extends Component {
    render() {
      const { children} = this.props
      return (
      <div>
        <Navigation />
        <div className="pageContent">
          {children}
        </div>
      </div>
      )
    }
  }
)
```

This didn't quite workout like I wanted for some reason so I'll get to fixing it later

currently what happens is that the animation is triggered after page tranitions for some reason.