import styled from '@emotion/styled'

const themed = (...tags) => props =>
  tags.map(tag => props.theme[tag] && { ['& ' + tag]: props.theme[tag] })

const themedHeadings = props => ({
  '& h1, & h2, & h3, & h4, & h5, & h6': props.theme.heading,
})

const themedLinks = props => ({
  '& a': {
    color: props.theme.colors.link,
  },
})

// backwards compatibility
const themedQuote = props => ({
  '& blockquote': props.theme.quote,
})

const themedCode = props => ({
  '& code, & pre': {
    fontFamily: props.theme.monospace,
    color: props.theme.colors.code,
    background: props.theme.colors.codeBackground,
  },
})

const Outer = styled.div(props =>
  props.theme.aspectRatio
    ? {
        width: '100%',
        height: 0,
        paddingBottom: props.theme.aspectRatio * 100 + '%',
        position: 'relative',
        outline: '1px solid tomato',
      }
    : {
        width: '100vw',
        height: '100vh',
      }
)

const Inner = styled.div(
  props => ({
    fontFamily: props.theme.font,
    color: props.theme.colors.text,
    backgroundColor: props.theme.colors.background,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  }),
  props =>
    props.theme.aspectRatio
      ? {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          margin: 'auto',
          outline: '1px solid cyan',
        }
      : {
          width: '100vw',
          height: '100vh',
        },
  props => props.theme.css,
  props => props.theme.Slide,
  themedLinks,
  themedHeadings,
  themedCode,
  themedQuote,
  themed(
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'a',
    'ul',
    'ol',
    'li',
    'p',
    'blockquote',
    'img',
    'table',
    'pre',
    'code'
  )
)

export const Root = props => (
  <Outer>
    <Inner {...props} />
  </Outer>
)

export default Root
