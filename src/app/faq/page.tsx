import faqData from '@/data/faq.json'

export default function FAQPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Часто задаваемые вопросы
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Здесь вы найдете ответы на самые распространенные вопросы о микрокредитах и нашем сервисе.
        </p>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{item.question}</h2>
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

