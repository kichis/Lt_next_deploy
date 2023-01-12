// Next.js公式ドキュメントより
export default function myImageLoader({ src, width, quality }) {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}