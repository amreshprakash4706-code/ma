'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

interface ReviewFormProps {
  propertyId: string
  onReviewSubmitted?: () => void
}

export function ReviewForm({ propertyId, onReviewSubmitted }: ReviewFormProps) {
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In production: POST to /api/reviews
    setTimeout(() => {
      alert('Thank you! Your review has been submitted. (Demo)')
      setComment('')
      setRating(5)
      setIsSubmitting(false)
      onReviewSubmitted?.()
    }, 800)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="text-sm font-medium mb-2">Your Rating</div>
        <div className="flex gap-1">
          {[1,2,3,4,5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="p-1"
            >
              <Star className={`h-6 w-6 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-zinc-300'}`} />
            </button>
          ))}
        </div>
      </div>

      <textarea
        className="input min-h-[100px] w-full resize-y"
        placeholder="Share your experience with this property..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />

      <Button type="submit" disabled={isSubmitting || !comment.trim()}>
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </Button>
    </form>
  )
}
