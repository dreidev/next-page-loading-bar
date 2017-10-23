import React from "react"
import renderer from "react-test-renderer"

import LoadingBar from "./index"

test("renders visible LoadingBar", () => {
  const tree = renderer.create(<LoadingBar show />).toJSON()
  expect(tree).toMatchSnapshot()
})

test("renders loaded LoadingBar", () => {
  const tree = renderer.create(<LoadingBar showOnFirstRender />).toJSON()
  expect(tree).toMatchSnapshot()
})

test("renders LoadingBar", () => {
  const tree = renderer.create(<LoadingBar />).toJSON()
  expect(tree).toMatchSnapshot()
})
