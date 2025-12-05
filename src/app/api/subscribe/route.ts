import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Store emails in a JSON file (in production, use a database)
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'subscribers.json')

    // Create data directory if it doesn't exist
    try {
      await fs.access(dataDir)
    } catch {
      await fs.mkdir(dataDir, { recursive: true })
    }

    // Read existing subscribers
    let subscribers: { email: string; subscribedAt: string }[] = []
    try {
      const data = await fs.readFile(filePath, 'utf-8')
      subscribers = JSON.parse(data)
    } catch {
      // File doesn't exist yet, start with empty array
    }

    // Check if email already exists
    if (subscribers.some(s => s.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json(
        { message: 'You are already subscribed!' },
        { status: 200 }
      )
    }

    // Add new subscriber
    subscribers.push({
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString()
    })

    // Save updated subscribers
    await fs.writeFile(filePath, JSON.stringify(subscribers, null, 2))

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'subscribers.json')
    const data = await fs.readFile(filePath, 'utf-8')
    const subscribers = JSON.parse(data)
    
    return NextResponse.json({ 
      count: subscribers.length,
      subscribers 
    })
  } catch {
    return NextResponse.json({ count: 0, subscribers: [] })
  }
}
