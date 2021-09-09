import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Flex } from "@chakra-ui/react"

import About from "./about"
import Menu from "./menu"
import TwitterButton from "./twitterButton"

const Navi = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          social {
            twitter
          }
        }
      }
    }
  `)
  const siteDescription = data.site.siteMetadata.description
  const twitter = data.site.siteMetadata.social.twitter

  return (
    <Flex as="nav">
      <About siteDescription={siteDescription} />
      <Menu />
      <TwitterButton twitter={twitter} />
    </Flex>
  )
}

export default Navi
