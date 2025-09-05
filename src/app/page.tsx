import Link from 'next/link'
import { ArrowRight, Star, Shield, Clock, Calculator, TrendingUp, Users, Award } from 'lucide-react'
import cities from '@/data/cities.json'
import mfoData from '@/data/mfo.json'
import reviews from '@/data/reviews.json'
// Проверка сохранения

export default function HomePage() {
  const topMfos = mfoData.slice(0, 4)
  const topCities = cities.slice(0, 6)
  const featuredReviews = reviews.slice(0, 3)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Микрокредиты в{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Казахстане
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Сравните условия микрофинансовых организаций и выберите лучший займ 
              для ваших потребностей. Быстро, удобно, безопасно.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/loans" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Сравнить займы
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/calculator" 
                className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Калькулятор
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{mfoData.length}+</div>
                <div className="text-gray-600">МФО партнеров</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{cities.length}</div>
                <div className="text-gray-600">Городов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">4.8</div>
                <div className="text-gray-600">Средний рейтинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top MFOs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Топ МФО Казахстана
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Лучшие микрофинансовые организации с проверенной репутацией и выгодными условиями
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {topMfos.map((mfo) => (
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
          
          <div className="text-center">
            <Link 
              href="/loans" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              Посмотреть все МФО
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Микрокредиты Алматы
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Найдите лучшие предложения микрокредитов в вашем городе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCities.map((city) => (
              <Link
                key={city.id}
                href={`/city/${city.id}`}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-200 border border-gray-100 text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{city.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {city.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">МФО:</span>
                    <span className="ml-2 font-semibold text-blue-600">{city.mfoCount}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">До:</span>
                    <span className="ml-2 font-semibold text-green-600">
                      {city.maxAmount.toLocaleString()} ₸
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700 flex items-center justify-center">
                  Посмотреть предложения
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают Zaito.kz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы делаем процесс поиска и сравнения микрокредитов максимально простым и удобным
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Быстрое сравнение
              </h3>
              <p className="text-gray-600">
                Сравните условия всех МФО за несколько секунд и найдите лучшее предложение
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Проверенные МФО
              </h3>
              <p className="text-gray-600">
                Работаем только с лицензированными организациями с проверенной репутацией
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Лучшие условия
              </h3>
              <p className="text-gray-600">
                Находим самые выгодные предложения с низкими ставками и гибкими условиями
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Экспертная поддержка
              </h3>
              <p className="text-gray-600">
                Наши эксперты помогут выбрать оптимальный займ для ваших потребностей
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Узнайте, что говорят о нас те, кто уже воспользовался нашим сервисом
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{review.name.charAt(0)}</span>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.city}</div>
                  </div>
                  {review.verified && (
                    <Award className="ml-auto h-5 w-5 text-green-500" />
                  )}
                </div>
                
                 <div className="flex items-center">
  {[...Array(5)].map((_, i) => (
    <Star 
      key={i} 
      className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
    />
  ))}
</div> // <--- ...А ВОТ ТЕПЕРЬ ОН ЗАКРЫТ!

<p className="text-gray-700 text-sm leading-relaxed">
  &quot;{review.text}&quot;
</p>
 

            
                
                <div className="mt-4 text-xs text-gray-500">
                  Сумма займа: {review.amount.toLocaleString()} ₸
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/reviews" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              Читать все отзывы
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы найти лучший займ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Сравните предложения от ведущих МФО Казахстана и получите деньги уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/loans" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Сравнить займы
            </Link>
            <Link 
              href="/calculator" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Рассчитать платеж
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
