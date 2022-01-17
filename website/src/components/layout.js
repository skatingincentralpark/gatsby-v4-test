import * as React from "react"
import { Link } from "gatsby"

import rc from '@stripe/react-stripe-js'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import rehypeRaw from 'rehype-raw' // plugin to parse the tree again (and raw nodes). Improper use of rehype-raw can open you up to a cross-site scripting (XSS) attack. Either do not combine this plugin with user content or use rehype-sanitize.
import rehypeSanitize from 'rehype-sanitize' 
import { loadStripe } from '@stripe/stripe-js'
import queryString from 'query-string'
import 'rc-slider/assets/index.css'
import { Doughnut } from 'react-chartjs-2'
import Slider from 'react-slick'
import 'react-datepicker/dist/react-datepicker.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useInView } from 'react-intersection-observer'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'

const Layout = ({ location, title, children }) => {
  /**
   * Dependencies used in project
   */
  const a = rc
  const b = PropTypes
  const c = loadable
  const d = rehypeRaw
  const e = rehypeSanitize
  const f = loadStripe
  const g = queryString
  const h = Doughnut
  const i = useInView
  const j = ReactMapGL
  const k = Marker
  const l = NavigationControl
  const m = Slider
  
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
