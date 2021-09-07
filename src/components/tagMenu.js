import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import kebabCase from "lodash/kebabCase"
import { UnorderedList, ListItem } from "@chakra-ui/react"

const TagMenu = ({ onClose }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  const group = data.allMdx.group
  return (
    <UnorderedList>
      <ListItem as="li" mt="2" onClick={onClose}>
        <Link to="/">トップページへ</Link>
      </ListItem>
      {group.map(({ fieldValue }) => (
        <ListItem as="li" mt="2" key={fieldValue} onClick={onClose}>
          <Link to={`/tags/${kebabCase(fieldValue)}`}>{fieldValue}</Link>
        </ListItem>
      ))}
    </UnorderedList>
  )
}
export default TagMenu
