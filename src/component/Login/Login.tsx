import { useSession, signIn, signOut } from "next-auth/react"
import * as React from 'react';
import Button from "@mui/material/Button";

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <p>Welcome {session?.user?.email} <br /></p>
        <Button variant={'contained'} color={'error'} onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }
  return (
    <>
      <h2>Please Login</h2> <br />
      <Button variant={'contained'} color={'primary'} onClick={() => signIn()}>Sign in</Button>
    </>
  )
}