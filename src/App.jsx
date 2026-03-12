import { useState } from 'react'
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


function App() {
  const [count, setCount] = useState(0)

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
                autoPlay=""
                muted=""
                loop=""
                className="background-video rounded-lg"
                style={{ borderRadius: '1rem' }}
              >
                <source src="media/media_video.mp4" type="video/mp4" />
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
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="rounded-lg"
          style={{ borderRadius: '1rem', padding: '1rem' }}
        >
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <CardImage
                image={"https://picsum.photos/200/300"}
                title="Committee Member"
                description="This is a student description"
                badgetext="Chairperson"
                className="rounded-lg"
                style={{ borderRadius: '1rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image={"https://picsum.photos/200/300"}
                title="Committee Member"
                description="This is a student description"
                badgetext="Vice Chair"
                className="rounded-lg"
                style={{ borderRadius: '1rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image={"https://picsum.photos/200/300"}
                title="Committee Member"
                description="This is a student description"
                badgetext="Webmaster"
                className="rounded-lg"
                style={{ borderRadius: '1rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image={"https://picsum.photos/200/300"}
                title="Committee Member"
                description="This is a student description"
                badgetext="PRO"
                className="rounded-lg"
                style={{ borderRadius: '1rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image={"https://picsum.photos/200/300"}
                title="Committee Member"
                description="This is a student description"
                badgetext="OCM"
                className="rounded-lg"
                style={{ borderRadius: '1rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image={"https://picsum.photos/200/300"}
                title="Committee Member"
                description="This is a student description"
                badgetext="1st Year Rep"
                className="rounded-lg"
                style={{ borderRadius: '1rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image={"https://picsum.photos/200/300"}
                title="Committee Member"
                description="This is a student description"
                badgetext="IDK"
                className="rounded-lg"
                style={{ borderRadius: '1rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image={"https://picsum.photos/200/300"}
                title="Committee Member"
                description="This is a student description"
                badgetext="Something"
                className="rounded-lg"
                style={{ borderRadius: '1rem' }}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <CardImage
                image={"https://picsum.photos/200/300"}
                title="Committee Member"
                description="This is a student description"
                badgetext="Yup Tallaght"
                className="rounded-lg"
                style={{ borderRadius: '1rem' }}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="rounded-full" style={{ borderRadius: '9999px' }} />
          <CarouselNext className="rounded-full" style={{ borderRadius: '9999px' }} />
        </Carousel>
        <section id="Events" className="Events rounded-lg" style={{ borderRadius: '1rem' }}>
          <div className="card-row">
            <h2>Our Events</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <CardImage
                image={"https://picsum.photos/200/300"}
                title="Photography Night"
                description="Capture moments with us!"
                buttontext="Join Now"
                className="card rounded-lg"
              />
              <CardImage
                image={"https://picsum.photos/200/300"}
                title="Videography Workshop"
                description="Learn to shoot and edit videos."
                buttontext="Register"
                className="card rounded-lg"
              />
              <CardImage
                image={"https://picsum.photos/200/300"}
                title="Graphic Design Jam"
                description="Create stunning visuals."
                buttontext="Sign Up"
                className="card rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
