import path from 'path'
import fs from 'fs'
import sharp from 'sharp' // Importe o Sharp

export default async function handler(req, res) {
  const { fileName } = req.query
  const filePath = path.join(process.cwd(), 'public/fotosgaleria', fileName)

  try {
    // Verifique a extensão do arquivo para determinar o tipo de conteúdo
    const fileExtension = path.extname(filePath).toLowerCase()
    let contentType = ''

    if (fileExtension === '.jpg' || fileExtension === '.jpeg') {
      contentType = 'image/jpeg'
    } else if (fileExtension === '.png') {
      contentType = 'image/png'
    }

    if (contentType) {
      const fileContents = fs.readFileSync(filePath)

      // Obtenha o tamanho da imagem original
      const tamanhoOriginal = fileContents.length

      // Aplique a compressão com o Sharp
      const compressedImage = await sharp(fileContents)
        .jpeg({ quality: 70 }) // Ajuste a qualidade conforme necessário
        .toBuffer()

      // Obtenha o tamanho da imagem comprimida
      const tamanhoComprimido = compressedImage.length

      console.log(`Tamanho original: ${tamanhoOriginal} bytes`)
      console.log(`Tamanho comprimido: ${tamanhoComprimido} bytes`)

      res.setHeader('Content-Type', contentType)
      res.end(compressedImage) // Envie a imagem comprimida como resposta
    } else {
      // Tipo de conteúdo desconhecido
      res.status(404).end()
    }
  } catch (error) {
    console.error(error)
    res.status(404).end()
  }
}
