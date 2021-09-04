import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import Seo from "../components/Seo"

export const query = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
    }
  }
`

const TagsPage = ({
  data: {
    allMdx: { group, totalCount },
  },
}) => (
  <Layout>
    <Seo title="Tags" />

    <div>
      <h1>Tags</h1>
      <p>
        {totalCount} posts are listed in {group.length} categories
      </p>
      {group.map(({ fieldValue, totalCount }) => (
        <Link key={fieldValue} to={`/tags/${kebabCase(fieldValue)}`}>
          {fieldValue} ({totalCount})
        </Link>
      ))}
    </div>
  </Layout>
)

export default TagsPage
