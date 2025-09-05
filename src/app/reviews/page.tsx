import reviews from '@/data/reviews.json'
import { Star, Award } from 'lucide-react'

export default function ReviewsPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Отзывы наших клиентов
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Узнайте, что говорят о нас те, кто уже воспользовался нашим сервисом и получил микрокредит.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-xl">{review.name.charAt(0)}</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900 text-lg">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.city}</div>
                </div>
                {review.verified && (
                  <Award className="ml-auto h-6 w-6 text-green-500" />
                )}
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
  &quot;{review.text}&quot;
</p>

              
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Сумма займа:</span> {review.amount.toLocaleString()} ₸
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

