import mfoData from '@/data/mfo.json'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Star, CheckCircle, XCircle, Clock, DollarSign, Calendar, Info, ArrowRight } from 'lucide-react'

export default function MfoPage({ params }: { params: { mfoId: string } }) {
  const mfo = mfoData.find(m => m.id === params.mfoId)

  if (!mfo) {
    notFound()
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-blue-600">{mfo.name.charAt(0)}</span>
            </div>
            <div className="text-center md:text-left flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{mfo.name}</h1>
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-xl font-semibold text-gray-800">{mfo.rating}</span>
                <span className="ml-2 text-gray-600">({mfo.reviewsCount} отзывов)</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {mfo.description}
              </p>
              <Link
                href={mfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-200 shadow-lg"
              >
                Оформить займ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 rounded-xl p-6 flex items-center space-x-4">
            <DollarSign className="h-8 w-8 text-blue-600" />
            <div>
              <div className="text-gray-600 text-sm">Сумма займа</div>
              <div className="text-lg font-semibold text-gray-900">от {mfo.minAmount.toLocaleString()} ₸ до {mfo.maxAmount.toLocaleString()} ₸</div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 flex items-center space-x-4">
            <Calendar className="h-8 w-8 text-purple-600" />
            <div>
              <div className="text-gray-600 text-sm">Срок займа</div>
              <div className="text-lg font-semibold text-gray-900">{mfo.minTerm} - {mfo.maxTerm} дней</div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 flex items-center space-x-4">
            <Clock className="h-8 w-8 text-green-600" />
            <div>
              <div className="text-gray-600 text-sm">Время рассмотрения</div>
              <div className="text-lg font-semibold text-gray-900">{mfo.approvalTime}</div>
            </div>
          </div>
        </div>

        {/* Requirements and Conditions */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Условия и требования</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Требования к заемщику</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Возраст: {mfo.requirements.age}</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{mfo.requirements.citizenship}</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Доход: {mfo.requirements.income}</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Документы: {mfo.requirements.documents}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Преимущества</h3>
              <ul className="space-y-2">
                {mfo.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200 text-yellow-800">
          <p className="text-sm leading-relaxed">
            <strong>Важное примечание:</strong> Информация о микрофинансовой организации {mfo.name} 
            предоставлена для ознакомления. Актуальные условия, процентные ставки и требования 
            рекомендуется уточнять на официальном сайте МФО перед оформлением займа.
          </p>
        </div>
      </div>
    </div>
  )
}

