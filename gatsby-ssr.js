/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// Move Typography.js styles to the top of the head section so they're loaded first.
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  console.log("onPreRenderHTML is Triggered")
  headComponents.sort((x, y) => {
    if (x.key === "TypographyStyle") {
      return -1
    } else if (y.key === "TypographyStyle") {
      return 1
    }
    return 0
  })
  replaceHeadComponents(headComponents)
}
