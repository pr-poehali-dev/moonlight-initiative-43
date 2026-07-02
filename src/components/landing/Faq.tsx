import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Где расположена площадка ЦОД?",
    answer:
      "Площадка расположена в Ленинградской области — регионе с благоприятными климатическими условиями, развитой энергетической и транспортной инфраструктурой, а также доступом к магистральным каналам связи. Общая площадь кластера — 4 Га.",
  },
  {
    id: 2,
    question: "Какая суммарная мощность доступна?",
    answer:
      "Суммарная мощность кластера — 30 МВт. Базовый модуль составляет 2 МВт, при необходимости два модуля объединяются в один блок мощностью 4 МВт. Всего на площадке размещается до 3600 серверных стоек.",
  },
  {
    id: 3,
    question: "Как обеспечивается электроснабжение?",
    answer:
      "Объект снабжается электроэнергией за счёт собственной выработки на газогенераторных установках (ГПУ). Это обеспечивает энергонезависимость, надёжность и предсказуемую стоимость электроэнергии для резидентов.",
  },
  {
    id: 4,
    question: "Можно ли размещать AI-кластеры?",
    answer:
      "Да. Модульный ЦОД спроектирован для размещения вычислительных мощностей любого масштаба — от корпоративных серверов до крупных AI-кластеров с высокой плотностью энергопотребления.",
  },
  {
    id: 5,
    question: "Какие форматы сотрудничества доступны?",
    answer:
      "Мы работаем с клиентами (аренда стоек и модулей), партнёрами (совместные проекты и интеграция) и инвесторами (участие в развитии инфраструктуры). Формат подбирается индивидуально под ваши задачи.",
  },
  {
    id: 6,
    question: "На каком этапе находится проект?",
    answer:
      "Площадка находится в активной стадии реализации. Готова энергетическая инфраструктура, идёт приём заявок на резервирование мощностей первой очереди. Реализация ведётся поэтапно по дорожной карте.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#EE7B2E] dark:text-[#EE7B2E]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Ответы на ключевые вопросы о площадке, мощностях и форматах сотрудничества. Не нашли нужного — оставьте
          заявку, и мы свяжемся с вами.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#EE7B2E] dark:hover:text-[#EE7B2E] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#EE7B2E]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}