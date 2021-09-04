import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import kebabCase from "lodash/kebabCase"
import { List, ListItem } from "@chakra-ui/react"

const TagMenu = ({ onClose }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
        totalCount
      }
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  const group = data.allMdx.group
  return (
    <List>
      {group.map(({ fieldValue, totalCount }) => (
        <ListItem key={fieldValue} onClick={onClose}>
          <Link to={`/tags/${kebabCase(fieldValue)}`}>
            {`${fieldValue} [${totalCount}]`}
          </Link>
        </ListItem>
      ))}
    </List>
  )
}
export default TagMenu
