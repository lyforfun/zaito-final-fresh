import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zaito.kz</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ведущий сервис сравнения микрокредитов в Казахстане. 
              Помогаем найти лучшие условия займов от проверенных МФО.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/loans" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Все займы
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Калькулятор
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Сравнение МФО
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Часто задаваемые вопросы
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Города</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/city/almaty" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Займы в Алматы
                </Link>
              </li>
              <li>
                <Link href="/city/nur-sultan" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Займы в Нур-Султане
                </Link>
              </li>
              <li>
                <Link href="/city/shymkent" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Займы в Шымкенте
                </Link>
              </li>
              <li>
                <Link href="/city/aktobe" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Займы в Актобе
                </Link>
              </li>
              <li>
                <Link href="/city/karaganda" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Займы в Караганде
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">info@zaito.kz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zaito.kz - Сравнение микрокредитов в Казахстане. Все права защищены.
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400 text-xs leading-relaxed">
              <strong>Важное предупреждение:</strong> Информация на сайте носит справочный характер. 
              Условия кредитования, процентные ставки и требования к заемщикам уточняйте непосредственно 
              в выбранной микрофинансовой организации. Zaito.kz не является кредитором и не участвует 
              в процессе выдачи займов. Мы лишь предоставляем информацию для сравнения условий различных МФО.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

