const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const tagTemplate = path.resolve("src/templates/tagTemplate.js")
  const result = await graphql(`
    {
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
