import { RefObject, useEffect, useState } from 'react'

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export default function useIntersectionObserver(
  elementRef: RefObject<Element>[],
  { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }: Args,
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  const frozen = entry?.isIntersecting && freezeOnceVisible

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver

    const observerOptions = { threshold, root, rootMargin }

    const observer = new IntersectionObserver(updateEntry, observerOptions)

    elementRef.forEach((element) => {
      let node = element?.current

      if (!hasIOSupport || frozen || !node) return

      observer.observe(node)
    })

    return () => observer.disconnect()
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen])

  return entry
}
