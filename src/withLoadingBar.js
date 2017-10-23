import React, { Component } from "react"
import routerEvents from "next-router-events"

export default function withLoadingBar(Child) {
  return class withLoadingBar extends Component {
    state = { pageLoading: false }
    static getInitialProps(context) {
      return Child.getInitialProps(context)
    }
    render() {
      return (
        <div>
          <LoadingBar show={this.state.pageLoading} />
          <Child {...this.props} />,
        </div>
      )
    }
    componentDidMount() {
      this.setState(() => ({ pageLoading: false }))
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
}
