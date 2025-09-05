import Link from 'next/link'
import { Shield, Users, TrendingUp, Award, Target, Heart, Zap } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Довольных клиентов' },
    { icon: TrendingUp, value: '8+', label: 'МФО партнеров' },
    { icon: Shield, value: '100%', label: 'Безопасность данных' },
    { icon: Award, value: '4.8', label: 'Средний рейтинг' }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Мы используем современные технологии шифрования для защиты ваших данных и работаем только с лицензированными МФО.'
    },
    {
      icon: Heart,
      title: 'Забота о клиентах',
      description: 'Наша цель - помочь вам найти лучшие условия займа. Мы предоставляем честную и полную информацию о всех предложениях.'
    },
    {
      icon: Zap,
      title: 'Скорость и удобство',
      description: 'Сравните условия десятков МФО за несколько секунд и найдите оптимальное решение для ваших потребностей.'
    },
    {
      icon: Target,
      title: 'Точность данных',
      description: 'Мы регулярно обновляем информацию о условиях займов и следим за актуальностью всех данных на сайте.'
    }
  ]

  const team = [
    {
      name: 'Алексей Петров',
      position: 'Основатель и CEO',
      description: 'Эксперт в области финансовых технологий с 10-летним опытом работы в банковской сфере.'
    },
    {
      name: 'Мария Иванова',
      position: 'Директор по развитию',
      description: 'Специалист по микрофинансированию, отвечает за партнерские отношения с МФО.'
    },
    {
      name: 'Дмитрий Сидоров',
      position: 'Технический директор',
      description: 'Разработчик с опытом создания финтех-решений, обеспечивает техническую сторону проекта.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              О проекте Zaito.kz
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Мы создали удобный сервис для сравнения микрокредитов, чтобы помочь людям 
              принимать осознанные финансовые решения
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Наша миссия
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Сделать рынок микрофинансирования в Казахстане более прозрачным и доступным, 
              предоставляя людям инструменты для сравнения и выбора лучших условий займов.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Почему мы создали Zaito.kz?
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Рынок микрофинансирования в Казахстане активно развивается, но информация 
                    о различных предложениях часто разрозненна и сложна для сравнения.
                  </p>
                  <p>
                    Мы решили создать единую платформу, где каждый может быстро и легко 
                    сравнить условия различных МФО, прочитать отзывы реальных клиентов 
                    и принять обоснованное решение.
                  </p>
                  <p>
                    Наша цель - защитить потребителей от невыгодных условий и помочь 
                    найти оптимальное решение для каждой конкретной ситуации.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Наши ценности
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Как мы работаем
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Простой и прозрачный процесс поиска лучших условий займа
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Собираем данные
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Мы регулярно обновляем информацию о условиях займов от всех ведущих МФО Казахстана
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Анализируем и сравниваем
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Наши алгоритмы помогают найти наиболее подходящие предложения для ваших потребностей
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Предоставляем результат
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Вы получаете полную информацию для принятия обоснованного решения
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Наша команда
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Профессионалы с опытом в финансовой сфере и IT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-medium mb-4">
                  {member.position}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Есть вопросы или предложения?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Мы всегда открыты для диалога и готовы улучшать наш сервис
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacts" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Связаться с нами
            </Link>
            <a 
              href="mailto:info@zaito.kz" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Написать email
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

