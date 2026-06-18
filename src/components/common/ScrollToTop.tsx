import { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function ScrollToTop() {

    const location = useLocation()

    useEffect(() => {

        if (location.hash) {

            const element =
                document.getElementById(
                    location.hash.slice(1)
                )

            if (element) {

                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })

                return
            }

        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

    }, [
        location.pathname,
        location.hash,
    ])

    return null
}