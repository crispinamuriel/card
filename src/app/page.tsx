import Image from 'next/image'
import Card from './Card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="">
        <Card />
      </div>
    </main>
  )
}
