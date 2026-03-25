const sharp = require('sharp')
const { readdirSync } = require('fs')
const { join, extname, basename } = require('path')

const INPUT_DIR = './public/images/gallery'
const SUPPORTED = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG']

const files = readdirSync(INPUT_DIR).filter(f => SUPPORTED.includes(extname(f)))

console.log(`Found ${files.length} images to convert...`)

async function convertAll() {
  for (const file of files) {
    const inputPath = join(INPUT_DIR, file)
    const outputName = basename(file, extname(file)) + '.webp'
    const outputPath = join(INPUT_DIR, outputName)

    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
      console.log(`✅ ${file} → ${outputName}`)
    } catch (err) {
      console.error(`❌ Failed: ${file}`, err.message)
    }
  }
  console.log('✅ All done!')
}

convertAll()