'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '../supabase/server'

export async function signIn(formData: FormData) {
  try {
    const supabase = await createClient()
    
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return { error: error.message }
    }

    redirect('/dashboard')
  } catch (error) {
    console.error('Error signing in:', error)
    return { error: 'An error occurred during sign-in' }
  }
}

export async function signOut() {
  try {
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/')
  } catch (error) {
    console.error('Error signing out:', error)
    return { error: 'An error occurred during sign-out' }
  }
}

