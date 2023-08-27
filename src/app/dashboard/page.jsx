"use client"

import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import styles from './page.module.css'




export default function Dashboard() {
  // const [data, setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {

  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" })

  //     if (!res.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const data = await res.json()
  //     setData(data)
  //     setIsLoading(false)
  //   }

  //   getData()
  //   console.log(data)
  // }, [])

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  console.log(data)

  return (
    <div className={styles.container}>Dashboard</div>
  )
}
