import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ROUTE_TITLES = {
  '/': 'Sanjeev Kushwah',
  '/about': 'Sanjeev Kushwah | About',
  '/skills': 'Sanjeev Kushwah | Skills',
  '/experience': 'Sanjeev Kushwah | Experience',
  '/projects': 'Sanjeev Kushwah | Projects',
  '/education': 'Sanjeev Kushwah | Education',
  '/contact': 'Sanjeev Kushwah | Contact',
}

export function usePageTitle() {
  const location = useLocation()

  useEffect(() => {
    const title = ROUTE_TITLES[location.pathname] || 'Sanjeev Kushwah'
    document.title = title
    window.scrollTo(0, 0)
  }, [location.pathname])
}
