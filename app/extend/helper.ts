import * as crypto from 'crypto'

export default {
    md5(text: string) {
        return crypto
            .createHash('md5')
            .update(text)
            .digest('hex')
    },

    sha1(text: string) {
        return crypto
            .createHash('sha1')
            .update(text)
            .digest('hex')
    }
}