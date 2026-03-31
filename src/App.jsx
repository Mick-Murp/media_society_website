import { useEffect, useRef, useState } from 'react'
import './App.css'

import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from './components/Footer'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import { CardImage } from "@/components/ui/CardImage"

const POSTER_FILES = [
  'ACN.png',
  'ADR.png',
  'B2B Video.png',
  'Back To Basics - CF.png',
  'EGM 1.png',
  'FNN.png',
  'GDN.png',
  'HSRN.png',
  'Harder.png',
  'Improv Night.png',
  'Poster 01_10_25.png',
  'Skit Video 2.png',
  'The Roast of RJM.png',
  'Vine Night.png',
]

function getRandomPosters(files, count) {
  const shuffled = [...files].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

function App() {
  const heroVideoRef = useRef(null)
  const [featuredPosters, setFeaturedPosters] = useState([])

  useEffect(() => {
    const video = heroVideoRef.current

    const tryAutoplay = async () => {
      try {
        await video.play()
      } catch {
      }
    }

    tryAutoplay()
  }, [])

  useEffect(() => {
    setFeaturedPosters(getRandomPosters(POSTER_FILES, 3))
  }, [])

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="MediaSoc Website" />
      <title>Media Soc - Welcome</title>
      <link rel="stylesheet" href="styles.css" />
      <header>
        <Navbar />
      </header>
      <main>
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <video
                ref={heroVideoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="background-video rounded-lg"
                style={{ borderRadius: '1rem' }}
              >
                <source src="/media/media_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2>Welcome to Media Soc</h2>
              <p>Join Us Today!</p>
              <a
                href="https://societies.tudublin.ie/societies/mediasociety"
                className="cta-button rounded-lg"
                style={{ borderRadius: '0.5rem' }}
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
        <section id="about" className="about rounded-lg" style={{ borderRadius: '1rem' }}>
          <div className="about-container">
            <h2>About Us</h2>
            <p>
              TU Dublin Media Society has one mission; to give students on TU
              Dublin’s Tallaght Campus a space to be creative.
            </p>
            <p>
              Founded in 2024, Media Society has endeavoured to provide students in
              TU Dublin with the most fun, creative outlet possible.
            </p>
            <p>
              With weekly events ranging from photography to videography - graphic
              design to audio, there’s something for everyone, every Wednesday.
            </p>
            <p>Create with Us. Join Media Society today!.</p>
          </div>
        </section>

        <p className="section-title" style={{ marginTop: '3rem' }}>Meet the Committee</p>
        <Carousel
          id="committee"
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-6 rounded-lg"
          style={{ borderRadius: '1rem', padding: '1rem', marginBottom: '0.5rem' }}
        >
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <CardImage
                image="/media/Committee%20Photos/Chairperson%20-%20Eoin%20Stowe.png"
                title="Eoin Stowe"
                badgetext="Chairperson"
                className="rounded-[2.5rem] max-w-md"
                imageClassName="aspect-[4/5] object-cover object-top"
                style={{ borderRadius: '2.5rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image="/media/Committee%20Photos/Secretary%20-%20Alex%20O_Donoghue.png"
                title="Alex O'Donoghue"
                badgetext="Secretary"
                className="rounded-[2.5rem] max-w-md"
                imageClassName="aspect-[4/5] object-cover object-top"
                style={{ borderRadius: '2.5rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image="/media/Committee%20Photos/Webmaster%20-%20Michael%20Murphy.png"
                title="Michael Murphy"
                badgetext="Webmaster"
                className="rounded-[2.5rem] max-w-md"
                imageClassName="aspect-[4/5] object-cover object-top"
                style={{ borderRadius: '2.5rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image="/media/Committee%20Photos/PRO%20-%20Chris%20Schmidt.png"
                title="Chris Schmidt"
                badgetext="PRO"
                className="rounded-[2.5rem] max-w-md"
                imageClassName="aspect-[4/5] object-cover object-top"
                style={{ borderRadius: '2.5rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image="/media/Committee%20Photos/OCM%20-%20Shane%20Doherty.png"
                title="Shane Doherty"
                badgetext="OCM"
                className="rounded-[2.5rem] max-w-md"
                imageClassName="aspect-[4/5] object-cover object-top"
                style={{ borderRadius: '2.5rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image="/media/Committee%20Photos/First%20Year%20Rep%20-%20Caleb%20Payne.png"
                title="Caleb Payne"
                badgetext="1st Year Rep"
                className="rounded-[2.5rem] max-w-md"
                imageClassName="aspect-[4/5] object-cover object-top"
                style={{ borderRadius: '2.5rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image="/media/Committee%20Photos/Treasurer%20-%20Eoghan%20O_Hallurain.png"
                title="Eoghan O'Hallurain"
                badgetext="Treasurer"
                className="rounded-[2.5rem] max-w-md"
                imageClassName="aspect-[4/5] object-cover object-top"
                style={{ borderRadius: '2.5rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image="/media/Committee%20Photos/HSO%20-%20Zoe%20Abbott.png"
                title="Zoe Abbott"
                badgetext="HSO"
                className="rounded-[2.5rem] max-w-md"
                imageClassName="aspect-[4/5] object-cover object-top"
                style={{ borderRadius: '2.5rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image="/media/Committee%20Photos/Equipment%20Officer%20-%20Achilles%20Mac%20Catha%CC%81in.png"
                title="Achilles Mac Catháin"
                badgetext="Equipment Officer"
                className="rounded-[2.5rem] max-w-md"
                imageClassName="aspect-[4/5] object-cover object-top"
                style={{ borderRadius: '2.5rem' }}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="rounded-full" style={{ borderRadius: '9999px' }} />
          <CarouselNext className="rounded-full" style={{ borderRadius: '9999px' }} />
        </Carousel>
        <section id="events" className="Events rounded-lg" style={{ borderRadius: '1rem', marginTop: '3rem', paddingBottom: '1rem' }}>
          <div className="card-row">
            <h2 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Our Events</h2>
            <div id="gallery" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {featuredPosters.map((poster) => (
                <CardImage
                  key={poster}
                  image={`/media/Posters/${encodeURIComponent(poster)}`}
                  className="rounded-[2.5rem] lg:max-w-md"
                  imageClassName="aspect-[4/5]"
                  imageOnly
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
