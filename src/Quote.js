export default function Quote({quote}) {
  return (
    <div className="Quote">
      {quote.text} - {quote.author}
    </div>
  )
}