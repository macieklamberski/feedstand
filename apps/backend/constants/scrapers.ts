export const feedLinkSelectors = [
    'link[type="application/rss+xml"]',
    'link[type="application/atom+xml"]',
    'link[type="application/json"][rel="alternate"]',
    'link[type="application/feed+json"]',
]

export const htmlContentTypes = ['text/html', 'application/xhtml+xml']

export const jsonFeedContentTypes = ['text/html', 'application/xhtml+xml']

export const xmlFeedContentTypes = [
    'application/atom+xml',
    'application/rss+xml',
    'application/xml',
    'text/xml',
]
