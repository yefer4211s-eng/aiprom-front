import { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function ScrollToTop() {

    const location = useLocation()

    useEffect(() => {

        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual'
        }

        if (location.hash) {

            requestAnimationFrame(() => {

                const id = location.hash.substring(1)

                const el =
                    document.getElementById(id)

                if (!el) return

                const navbar =
                    document.querySelector('nav')

                const offset =
                    navbar?.clientHeight || 0

                const y =
                    el.getBoundingClientRect().top +
                    window.scrollY -
                    offset -
                    16

                window.scrollTo({
                    top: y,
                    behavior: 'auto',
                })

            })

        } else {

            window.scrollTo({
                top: 0,
                behavior: 'auto',
            })

        }

    }, [
        location.pathname,
        location.hash,
    ])

    return null
}