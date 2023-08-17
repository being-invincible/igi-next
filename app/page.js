"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const route = useRouter()
  useEffect(() => {
    route.push("/en")
      }, [route])
  
  return (
    <>
    </>
  )
}