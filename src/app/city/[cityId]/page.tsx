import cities from '@/data/cities.json'
import mfoData from '@/data/mfo.json'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'

export default function CityPage({ params }: { params: { cityId: string } }) {
  const city = cities.find(c => c.id === params.cityId)

  if (!city) {
    notFound()
  }

  const mfosInCity = mfoData.filter(mfo => mfo.cities.includes(city.id))

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Микрокредиты в {city.name}
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          {city.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mfosInCity.map((mfo) => (
            <Link
              key={mfo.id}
              href={`/mfo/${mfo.id}`}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-200 border border-gray-100 hover:border-blue-200"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{mfo.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{mfo.name}</h3>
                <div className="flex items-center justify-center mb-3">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{mfo.rating}</span>
                  <span className="ml-1 text-xs text-gray-500">({mfo.reviewsCount})</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>от {mfo.minAmount.toLocaleString()} ₸</div>
                  <div className="text-green-600 font-semibold">{mfo.rate}</div>
                  <div className="text-blue-600">{mfo.approvalTime}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

