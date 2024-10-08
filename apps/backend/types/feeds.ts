import { rssParser } from '../instances/rssParser'

export type JsonFeed = ReturnType<typeof JSON.parse>

export type XmlFeed = Awaited<ReturnType<typeof rssParser.parseString>>
