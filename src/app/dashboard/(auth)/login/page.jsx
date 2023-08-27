"use client"

import React from 'react'
import styles from './page.modules.css'

import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {



  const session = useSession()
  const router = useRouter()

  if (session.status === "loading") {
    return <p>Loading...</p>
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard")
  }

  const handleSubmit = async (e) => {

    const email = e.target[0].value
    const password = e.target[0].value

    signIn("credentials", { email, password })

  }


  return (
    <div >
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder='email' className={styles.input} required />
        <input type="text" placeholder='password' className={styles.input} required />
        <button className={styles.button}>Login</button>
        {/* {err && "Something went wrong"} */}
        <Link href='/dashboard/login'> Login with an existing account </Link>
      </form>
      <button onClick={() => signIn("google")}>Login With Google</button>
    </div>
  )
}
