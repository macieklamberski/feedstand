import { tables } from '../../database/tables'
import { db } from '../../instances/database'
import { generateChannel } from '../factories/channel'

export const seedChannels = async () => {
    await db.insert(tables.channels).values([
        generateChannel({
            url: 'https://zenhabits.net/feed',
            title: 'zen habits',
            link: 'https://zenhabits.net',
            description: 'breathe',
            lastScannedAt: undefined,
        }),
        generateChannel({
            url: 'http://deconstructingyourself.com/feed',
            title: 'Deconstructing Yourself',
            link: 'http://deconstructingyourself.com',
            description: 'Mindfulness, Meditation, and Awakening for Modern Mutants',
            lastScannedAt: undefined,
        }),
        generateChannel({
            url: 'https://daringfireball.net/feeds/json',
            title: 'Daring Fireball',
            link: 'https://daringfireball.net',
            description: undefined,
            lastScannedAt: undefined,
        }),
    ])
}
