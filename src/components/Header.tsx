'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Calculator, BarChart3 } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zaito.kz</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/loans" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Займы
            </Link>
            <Link href="/calculator" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
              <Calculator className="h-4 w-4 mr-1" />
              Калькулятор
            </Link>
            <Link href="/compare" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
              <BarChart3 className="h-4 w-4 mr-1" />
              Сравнение
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Отзывы
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link 
              href="/loans" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Сравнить займы
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/loans" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Займы
              </Link>
              <Link 
                href="/calculator" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calculator className="h-4 w-4 mr-2" />
                Калькулятор
              </Link>
              <Link 
                href="/compare" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Сравнение
              </Link>
              <Link 
                href="/reviews" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Отзывы
              </Link>
              <Link 
                href="/faq" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/loans" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Сравнить займы
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

