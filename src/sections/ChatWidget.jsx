import React, { useState } from 'react'
import { MessageCircle, SendHorizontal, X, Paperclip } from 'lucide-react'
import { chatPrompts } from '../data/siteData'
import { motion, AnimatePresence } from 'framer-motion'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'agent', text: 'Hi there! How can we help with your real estate mandate?' },
  ])
  const [draft, setDraft] = useState('')
  const [fileName, setFileName] = useState('')

  const handleSend = () => {
    if (!draft.trim()) return
    setMessages((prev) => [...prev, { from: 'user', text: draft }])
    setDraft('')
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.06, rotate: 0.5 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed right-4 sm:right-7 bottom-4 sm:bottom-7 z-40 h-14 w-14 rounded-full bg-gold-100 text-charcoal shadow-luxe grid place-items-center hover:scale-105 transition-transform"
        aria-label="Toggle chat widget"
        data-interactive
        data-levitate
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.22 }}
            className="fixed right-4 sm:right-7 bottom-24 sm:bottom-28 z-40 w-[calc(100vw-2rem)] max-w-sm sm:w-[320px] max-h-[70vh] pb-[env(safe-area-inset-bottom)]"
            data-interactive
            data-levitate
          >
            <div className="section-surface rounded-3xl border border-white/20 overflow-hidden">
              <div className="px-5 py-4 subtle-border bg-white/5">
                <h4 className="font-semibold">Cityscape AI Assistant</h4>
                <p className="text-xs text-stone/70 mt-1">UI demo - backend connection pending.</p>
              </div>

              <div className="max-h-64 overflow-y-auto p-4 space-y-3">
                {messages.map((message, idx) => (
                  <div
                    key={`${message.text}-${idx}`}
                    data-levitate
                    className={`text-sm rounded-2xl px-3 py-2 max-w-[85%] ${
                      message.from === 'user'
                        ? 'ml-auto bg-gold-100/90 text-charcoal'
                        : 'bg-white/8 text-stone'
                    }`}
                    data-interactive
                  >
                    {message.text}
                  </div>
                ))}
              </div>

              <div className="px-4 py-3 border-t border-white/10">
                <div className="flex flex-wrap gap-2 mb-3">
                  {chatPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => setDraft(prompt)}
                      data-interactive
                      data-levitate
                      className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-stone hover:bg-white/8"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <label className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/20 hover:bg-white/10 cursor-pointer">
                    <Paperclip size={17} />
                    <input
                      type="file"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                      className="sr-only"
                    />
                  </label>
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    data-interactive
                    data-levitate
                    className="min-h-[42px] w-full rounded-full border border-white/20 bg-white/5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold-100/40"
                    placeholder={fileName ? `Attached: ${fileName}` : 'Ask anything...'}
                  />
                  <button
                    type="button"
                    onClick={handleSend}
                    data-interactive
                    data-levitate
                    className="h-10 w-10 rounded-full bg-gold-600 text-charcoal grid place-items-center shrink-0"
                  >
                    <SendHorizontal size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
