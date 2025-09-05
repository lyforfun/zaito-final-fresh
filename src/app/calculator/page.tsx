'use client';
import { useState } from 'react'

export default function CalculatorPage() {
  const [amount, setAmount] = useState(100000)
  const [term, setTerm] = useState(30)
  const [rate, setRate] = useState(0.99) // Daily rate in percent
 const [result, setResult] = useState<{ totalInterest: string; totalRepayment: string; dailyPayment: string; } | null>(null);

  const calculateLoan = () => {
    const dailyRateDecimal = rate / 100
    const totalInterest = amount * dailyRateDecimal * term
    const totalRepayment = amount + totalInterest
    const dailyPayment = totalRepayment / term

    setResult({
      totalInterest: totalInterest.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
      dailyPayment: dailyPayment.toFixed(2),
    })
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Калькулятор микрокредитов
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Рассчитайте примерную сумму к погашению и ежедневный платеж по микрокредиту.
        </p>

        <div className="bg-gray-50 rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="mb-6">
            <label htmlFor="amount" className="block text-gray-700 text-sm font-semibold mb-2">
              Сумма займа (₸)
            </label>
            <input
              type="range"
              id="amount"
              min="10000" 
              max="500000" 
              step="10000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>10 000 ₸</span>
              <span>{amount.toLocaleString()} ₸</span>
              <span>500 000 ₸</span>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="term" className="block text-gray-700 text-sm font-semibold mb-2">
              Срок займа (дней)
            </label>
            <input
              type="range"
              id="term"
              min="5" 
              max="60" 
              step="1"
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>5 дней</span>
              <span>{term} дней</span>
              <span>60 дней</span>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="rate" className="block text-gray-700 text-sm font-semibold mb-2">
              Ежедневная ставка (%)
            </label>
            <input
              type="number"
              id="rate"
              min="0.1" 
              max="2.5" 
              step="0.01"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={calculateLoan}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md"
          >
            Рассчитать
          </button>
        </div>

        {result && (
          <div className="bg-blue-50 rounded-xl shadow-md p-8 border border-blue-200 text-blue-900">
            <h2 className="text-2xl font-bold mb-4">Результаты расчета:</h2>
            <div className="space-y-3">
              <p className="flex justify-between text-lg">
                <span>Сумма займа:</span>
                <span className="font-semibold">{amount.toLocaleString()} ₸</span>
              </p>
              <p className="flex justify-between text-lg">
                <span>Срок займа:</span>
                <span className="font-semibold">{term} дней</span>
              </p>
              <p className="flex justify-between text-lg">
                <span>Ежедневная ставка:</span>
                <span className="font-semibold">{rate}%</span>
              </p>
              <hr className="border-blue-300" />
              <p className="flex justify-between text-xl font-bold">
                <span>Общая сумма к погашению:</span>
                <span className="text-green-700">{result.totalRepayment} ₸</span>
              </p>
              <p className="flex justify-between text-lg">
                <span>Переплата:</span>
                <span className="text-red-600">{result.totalInterest} ₸</span>
              </p>
              <p className="flex justify-between text-lg">
                <span>Ежедневный платеж:</span>
                <span className="font-semibold">{result.dailyPayment} ₸</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

