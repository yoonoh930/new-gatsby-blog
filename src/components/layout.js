import React from "react"
import { Link } from "gatsby"

import { Global } from "@emotion/core"
import styled from '@emotion/styled';

import { globalStyles } from "../styles"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const Nav = styled.nav`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      a {
          ${scale(1/10)};
          margin-left: ${rhythm(1)};
          color: inherit;
          text-decoration: none;
          box-shadow: none;
      }
    `;
    const Header = styled.nav`
      display: flex;
      justify-content: space-between;
    `;
    let header

    if (location.pathname === rootPath) {
      header = (
        <div
          style={{
            display: `flex`,
            justifyContent: `space-between`,
          }}
        >
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <nav
            style={{
              display: `flex`,
              justifyContent: `flex-end`,
              alignItems: `center`,
              fontSize: `1.3rem`,
            }}>
            <Link
              style={{
                color: `#CECECE`,
                textDecoration: `none`,
                boxShadow: `none`,
              }} 
              to='/wiki'>Wiki
            </Link>
            <Link
              style={{
                color: `#CECECE`,
                textDecoration: `none`,
                boxShadow: `none`,
                marginLeft: `${rhythm(0.5)}`
              }} 
              to='/'>Blog
            </Link>
          </nav>
        </div>
      )
    } else {
      header = (
        <div
          style={{
            display: `flex`,
          }}
        >
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
          <nav
            style={{
              display: `flex`,
              justifyContent: `flex-end`,
              fontSize: `0.8rem`,
              marginLeft: `${rhythm(1)}`,
            }}>
            <Link
              style={{
                color: `#CECECE`,
                textDecoration: `none`,
                boxShadow: `none`,
              }} 
              to='/wiki'>Wiki
            </Link>
            <Link
              style={{
                color: `#CECECE`,
                textDecoration: `none`,
                boxShadow: `none`,
                marginLeft: `${rhythm(1/2)}`,
              }}
              to='/'>Blog
            </Link>
          </nav>
        </div>
      )
    }
    return (
      <Container>
        <Global styles={globalStyles}/>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </Container>
    )
  }
}

export default Layout;

const Container = styled.div`
`;
