'use client'

import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import { Send, Users, Smile } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import data from '@emoji-mart/data'
// import Picker from '@emoji-mart/react'

const socket = typeof window !== 'undefined' ? io('http://localhost:3000') : null

interface Message {
  sender: string
  text: string
  time: string
}

const ChatRoom: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [username, setUsername] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!socket) return

    socket.on('message', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message])
    })

    return () => {
      socket.off('message')
    }
  }, [])

  useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(storedUsername)
    } else {
      const newUsername = `User${Math.floor(Math.random() * 1000)}`
      setUsername(newUsername)
      localStorage.setItem('username', newUsername)
    }
  }, [])

  const sendMessage = () => {
    if (input.trim()) {
      const message: Message = {
        sender: username,
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      if (socket) {
        socket.emit('message', message)
      }
      setMessages((prevMessages) => [...prevMessages, message])
      setInput('')
    }
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleEmojiSelect = (emoji: any) => {
    setInput((prev) => prev + emoji.native)
    setShowEmojiPicker(false)
  }

  const Sidebar = () => (
    <div className="p-4 h-full flex flex-col">
      <h2 className="text-xl font-bold mb-4">Community Chat</h2>
      <div className="flex items-center space-x-2 mb-4">
        <Avatar>
          <AvatarImage src={`https://avatar.vercel.sh/${username}.png`} alt={username} />
          <AvatarFallback>{username?.[0]?.toUpperCase() || 'U'}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{username}</p>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <Button variant="outline" className="justify-start">
          <Users className="mr-2 h-4 w-4" />
          Online Users
        </Button>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col h-[90vh] bg-gray-100">
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block w-1/4 bg-white border-r border-gray-200">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 ">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === username ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] px-3 py-2 rounded-lg ${
                    msg.sender === username
                      ? 'bg-[#D4A64E] text-black'
                      : 'bg-white text-black'
                  }`}
                >
                  {msg.sender !== username && (
                    <p className="text-xs font-semibold mb-1">{msg.sender}</p>
                  )}
                  <p className="mb-1">{msg.text}</p>
                  <p className="text-xs text-gray-500 text-right">{msg.time}</p>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="bg-gray-100 p-4">
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message"
                  className="pr-10"
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <Smile className="h-4 w-4" />
                </Button>
              </div>
              <Button onClick={sendMessage} size="icon" className="rounded-full bg-primary text-primary-foreground">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            {showEmojiPicker && (
              <div className="absolute bottom-16 right-4">
                {/* <Picker data={data} onEmojiSelect={handleEmojiSelect} /> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatRoom

