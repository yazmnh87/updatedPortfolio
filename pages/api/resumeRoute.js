import { createReadStream } from 'fs'
import { pipeline } from 'stream'

export default (req, res) => {
    const filePath = '/public'
    const fileName = 'TESTFILEdownload.txt'
    // console.log({res})
    res.sendFile('/public/TESTFILEdownload.txt')
    // res.download(filePath, fileName)

}