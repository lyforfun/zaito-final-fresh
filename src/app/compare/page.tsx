

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import mfoData from '@/data/mfo.json'
import { Star, CheckCircle, XCircle } from 'lucide-react'

export default function ComparePage() {
  const mfo1 = mfoData[0]
  const mfo2 = mfoData[1]

  if (!mfo1 || !mfo2) {
    return (
      <div className="bg-white py-16 text-center text-gray-600">
        Недостаточно данных для сравнения МФО.
      </div>
    )
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Сравнение микрокредитов
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Сравните ключевые параметры двух микрофинансовых организаций, чтобы выбрать лучшее предложение.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Empty column for features/criteria */}
          <div className="hidden lg:block">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100 h-full">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Параметры</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="font-semibold">Название МФО</li>
                <li className="font-semibold">Рейтинг</li>
                <li className="font-semibold">Минимальная сумма</li>
                <li className="font-semibold">Максимальная сумма</li>
                <li className="font-semibold">Минимальный срок</li>
                <li className="font-semibold">Максимальный срок</li>
                <li className="font-semibold">Процентная ставка</li>
                <li className="font-semibold">Время рассмотрения</li>
                <li className="font-semibold">Возраст заемщика</li>
                <li className="font-semibold">Наличие гражданства РК</li>
                <li className="font-semibold">Наличие ИИН</li>
                <li className="font-semibold">Наличие банковского счета</li>
              </ul>
            </div>
          </div>

          {/* MFO 1 Column */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">{mfo1.name.charAt(0)}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{mfo1.name}</h2>
              <div className="flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-lg font-semibold text-gray-800">{mfo1.rating}</span>
                <span className="ml-2 text-gray-600">({mfo1.reviewsCount})</span>
              </div>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li><span className="lg:hidden font-semibold">Название МФО: </span>{mfo1.name}</li>
              <li><span className="lg:hidden font-semibold">Рейтинг: </span>{mfo1.rating}</li>
              <li><span className="lg:hidden font-semibold">Мин. сумма: </span>{mfo1.minAmount.toLocaleString()} ₸</li>
              <li><span className="lg:hidden font-semibold">Макс. сумма: </span>{mfo1.maxAmount.toLocaleString()} ₸</li>
              <li><span className="lg:hidden font-semibold">Мин. срок: </span>{mfo1.minTerm} дней</li>
              <li><span className="lg:hidden font-semibold">Макс. срок: </span>{mfo1.maxTerm} дней</li>
              <li><span className="lg:hidden font-semibold">Ставка: </span>{mfo1.rate}</li>
              <li><span className="lg:hidden font-semibold">Время: </span>{mfo1.approvalTime}</li>
              <li className="flex items-center"><span className="lg:hidden font-semibold">Возраст: </span>{mfo1.requirements.age === 'Возраст от 18 лет' ? <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> : <XCircle className="h-5 w-5 text-red-500 mr-2" />} От 18 лет</li>
              <li className="flex items-center"><span className="lg:hidden font-semibold">Гражданство РК: </span>{mfo1.requirements.citizenship === 'Гражданство РК' ? <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> : <XCircle className="h-5 w-5 text-red-500 mr-2" />} Гражданство РК</li>
              <li className="flex items-center"><span className="lg:hidden font-semibold">Наличие ИИН: </span>{mfo1.requirements.documents === 'Наличие ИИН' ? <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> : <XCircle className="h-5 w-5 text-red-500 mr-2" />} Наличие ИИН</li>
              <li className="flex items-center"><span className="lg:hidden font-semibold">Банковский счет: </span>{mfo1.requirements.income === 'Наличие банковского счета' ? <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> : <XCircle className="h-5 w-5 text-red-500 mr-2" />} Банковский счет</li>
            </ul>
            <div className="mt-8 text-center">
              <Link
                href={mfo1.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-200 shadow-md"
              >
                Оформить займ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* MFO 2 Column */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">{mfo2.name.charAt(0)}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{mfo2.name}</h2>
              <div className="flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-lg font-semibold text-gray-800">{mfo2.rating}</span>
                <span className="ml-2 text-gray-600">({mfo2.reviewsCount})</span>
              </div>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li><span className="lg:hidden font-semibold">Название МФО: </span>{mfo2.name}</li>
              <li><span className="lg:hidden font-semibold">Рейтинг: </span>{mfo2.rating}</li>
              <li><span className="lg:hidden font-semibold">Мин. сумма: </span>{mfo2.minAmount.toLocaleString()} ₸</li>
              <li><span className="lg:hidden font-semibold">Макс. сумма: </span>{mfo2.maxAmount.toLocaleString()} ₸</li>
              <li><span className="lg:hidden font-semibold">Мин. срок: </span>{mfo2.minTerm} дней</li>
              <li><span className="lg:hidden font-semibold">Макс. срок: </span>{mfo2.maxTerm} дней</li>
              <li><span className="lg:hidden font-semibold">Ставка: </span>{mfo2.rate}</li>
              <li><span className="lg:hidden font-semibold">Время: </span>{mfo2.approvalTime}</li>
              <li className="flex items-center"><span className="lg:hidden font-semibold">Возраст: </span>{mfo2.requirements.age === 'Возраст от 18 лет' ? <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> : <XCircle className="h-5 w-5 text-red-500 mr-2" />} От 18 лет</li>
              <li className="flex items-center"><span className="lg:hidden font-semibold">Гражданство РК: </span>{mfo2.requirements.citizenship === 'Гражданство РК' ? <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> : <XCircle className="h-5 w-5 text-red-500 mr-2" />} Гражданство РК</li>
              <li className="flex items-center"><span className="lg:hidden font-semibold">Наличие ИИН: </span>{mfo2.requirements.documents === 'Наличие ИИН' ? <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> : <XCircle className="h-5 w-5 text-red-500 mr-2" />} Наличие ИИН</li>
              <li className="flex items-center"><span className="lg:hidden font-semibold">Банковский счет: </span>{mfo2.requirements.income === 'Наличие банковского счета' ? <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> : <XCircle className="h-5 w-5 text-red-500 mr-2" />} Банковский счет</li>
            </ul>
            <div className="mt-8 text-center">
              <Link
                href={mfo2.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-200 shadow-md"
              >
                Оформить займ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
