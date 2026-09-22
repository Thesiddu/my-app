/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext, useContext } from 'react'

const RouterContext = createContext({
  path: '/',
  navigate: () => {}
})

export function useRouter() {
  return useContext(RouterContext)
}

export function Router({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/'
    }
    return '/'
  })

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/')
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (toPath, hash = '') => {
    if (typeof window === 'undefined') return
    const url = hash ? `${toPath}${hash}` : toPath
    window.history.pushState({}, '', url)
    setCurrentPath(toPath)

    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <RouterContext.Provider value={{ path: currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function Link({ href, children, className = '', onClick, ...props }) {
  const { path, navigate } = useRouter()

  const handleClick = (e) => {
    if (onClick) onClick(e)
    if (e.defaultPrevented) return

    // External link or new tab
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || props.target === '_blank') {
      return
    }

    // In-page hash link
    if (href.startsWith('#')) {
      e.preventDefault()
      if (path === '/') {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState({}, '', href)
      } else {
        navigate('/', href)
      }
      return
    }

    // Internal router link
    e.preventDefault()
    const [pathname, hash] = href.split('#')
    navigate(pathname || '/', hash ? `#${hash}` : '')
  }

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
