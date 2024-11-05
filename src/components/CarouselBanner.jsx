'use client'

import Image from 'next/image'
import { Carousel } from 'flowbite-react'
import { motion } from 'framer-motion'
import img from '@/images/background-call-to-action.jpg'

let config = {
  root: {
    base: 'relative h-full w-full rounded-none',
    leftControl:
      'absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none',
    rightControl:
      'absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none',
  },
  indicators: {
    active: {
      off: 'bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800',
      on: 'bg-white dark:bg-gray-800',
    },
    base: 'h-3 w-3 rounded-full',
    wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
  },
  item: {
    base: 'absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
    wrapper: {
      off: 'w-full flex-shrink-0 transform cursor-default snap-center',
      on: 'w-full flex-shrink-0 transform cursor-grab snap-center',
    },
  },
  control: {
    base: 'hidden inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
    icon: 'hidden h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6',
  },
  scrollContainer: {
    base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none',
    snap: 'snap-x',
  },
}

export function CarouselBanner() {
  return (
    <div className="relative h-80 sm:h-[28rem] xl:h-[38rem]">
      <Carousel theme={config} indicators={false}>
        {/* <Image
          src={img}
          alt="..."
        /> */}
        <div className="relative h-full w-full">
          <Image
            src={'https://flowbite.com/docs/images/carousel/carousel-1.svg'}
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Carousel>
      <div className="absolute top-0 z-50 h-full w-full">
        {/* <img
          className="h-24 w-24"
        src="https://upload.wikimedia.org/wikipedia/commons/2/25/Intel_logo_%282006-2020%29.jpg"/> */}
        <div className="h-full py-12 sm:py-32 lg:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'tween',
              duration: 0.75,
              transition: 'easeIn',
              delay: 0.5,
            }}
            className="mx-auto my-auto max-w-7xl px-6 lg:px-8"
          >
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl 2xl:text-7xl">
                Deploy to the cloud with confidence
              </h1>
              <p className="mt-8 text-pretty text-base font-medium text-gray-200 sm:text-xl/8 2xl:text-2xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
