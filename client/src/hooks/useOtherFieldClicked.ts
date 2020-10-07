import { RefObject, useState, useEffect } from 'react'

export function useOtherClicked(me: RefObject<HTMLElement>) {
    const [otherFieldClicked, setOtherFieldClicked] = useState(false)
    const handleWindowClick = (e: MouseEvent) => {
        if (!me.current) return

        setOtherFieldClicked(!me.current.contains(e.target as Node))
    }

    useEffect(() => {
        window.addEventListener('click', handleWindowClick)

        return () => {
            window.removeEventListener('click', handleWindowClick)
        }
    }, [])

    return {
        otherFieldClicked,
    }
}
