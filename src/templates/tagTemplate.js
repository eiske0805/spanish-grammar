import React from "react"
import { Link, graphql } from "gatsby"

import {
  Box,
  Heading,
  List,
  ListItem,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react"

import Seo from "../components/seo"

export const query = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          slug
        }
      }
    }
  }
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx

  return (
    <>
      <Seo title={`${tag}タグ`} />

      <Heading as="h2">{`${tag}には${totalCount}件の記事があります。`}</Heading>

      <List>
        {edges.map(({ node }) => {
          const { excerpt, slug } = node
          const { title, date, tags } = node.frontmatter

          return (
            <ListItem key={slug} mt="4">
              <Link to={`/${slug}`}>
                <Heading as="h3">{title}</Heading>
              </Link>

              <Text>
                {date}
                <span> ● Tag: </span>
                {tags.map(tag => (
                  <Link
                    key={tag.toLowerCase()}
                    to={`/tags/${tag.toLowerCase()}`}
                  >
                    {tag}
                  </Link>
                ))}
              </Text>

              <p>{excerpt}</p>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default Tags
