import React from 'react'
import NextLink from 'next/link'

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <NextLink href="/profile/John">Fake login with John</NextLink>
      <br/>
      <NextLink href="/profile/John">Fake login with Jane</NextLink>
      <br/>
      <NextLink href="/">Home</NextLink>
    </div>
  )
}
