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
  // eslint-disable-next-line no-unused-vars
  const a = rc
  // eslint-disable-next-line no-unused-vars
  const b = PropTypes
  // eslint-disable-next-line no-unused-vars
  const c = loadable
  // eslint-disable-next-line no-unused-vars
  const d = rehypeRaw
  // eslint-disable-next-line no-unused-vars
  const e = rehypeSanitize
  // eslint-disable-next-line no-unused-vars
  const f = loadStripe
  // eslint-disable-next-line no-unused-vars
  const g = queryString
  // eslint-disable-next-line no-unused-vars
  const h = Doughnut
  // eslint-disable-next-line no-unused-vars
  const i = useInView
  // eslint-disable-next-line no-unused-vars
  const j = ReactMapGL
  // eslint-disable-next-line no-unused-vars
  const k = Marker
  // eslint-disable-next-line no-unused-vars
  const l = NavigationControl
  // eslint-disable-next-line no-unused-vars
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
