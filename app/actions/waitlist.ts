'use server'

import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function addToWaitlist(formData: FormData) {
  const fullName = formData.get('fullName') as string
  const email = formData.get('email') as string

  if (!fullName || !email) {
    return { error: 'Full name and email are required.' }
  }

  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ full_name: fullName, email }])
      .select()

    if (error) throw error

    return { success: true, message: 'You have been added to the waitlist!' }
  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return { error: 'An error occurred while adding you to the waitlist. Please try again.' }
  }
}