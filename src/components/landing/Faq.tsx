import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Где расположена площадка ЦОД?",
    answer:
      "Площадка расположена в Ленинградской области — регионе с развитой энергетической и транспортной инфраструктурой, а также доступом к магистральным каналам связи. Участок площадью 4,1 Га находится в собственности.",
  },
  {
    id: 2,
    question: "Какая суммарная мощность доступна?",
    answer:
      "Дата-центр состоит из 15 отдельных ЦОД. Мощность одного ЦОД — 2 МВт, суммарная мощность кластера — 30 МВт. Предусмотрено размещение до 240 стоек в одном ЦОД и до 3600 стоек в целом.",
  },
  {
    id: 3,
    question: "Как обеспечивается электроснабжение?",
    answer:
      "Объект снабжается электроэнергией за счёт собственной выработки на газогенераторных установках (ГПУ) MTU (Rolls-Royce Solutions). Это обеспечивает энергонезависимость и надёжность. Подтверждён лимит в 70 млн м³ газа в год.",
  },
  {
    id: 4,
    question: "Какой уровень надёжности у дата-центра?",
    answer:
      "Надёжность соответствует уровню Tier III, заявленная отказоустойчивость — 99,9%. Дата-центр обеспечивает замену оборудования и плановое обслуживание без остановок.",
  },
  {
    id: 5,
    question: "Можно ли размещать AI-кластеры?",
    answer:
      "Да. Дата-центр спроектирован для размещения вычислительных мощностей любого масштаба — от корпоративных серверов до крупных AI-кластеров с высокой плотностью энергопотребления.",
  },
  {
    id: 6,
    question: "На каком этапе находится проект?",
    answer:
      "Подведены магистральные сети, готовы фундаменты под все 15 ЦОД, готовы внутриплощадочные сети газоснабжения с подключением. Установлены и подключены к сети первые 2 ГПУ MTU.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="bg-white dark:bg-[#1c1e20] rounded-3xl p-8 md:p-10 border border-[#e8edf5] dark:border-[#2a2d30] shadow-sm">
        <h2 className="text-[#1a1f2e] dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#EE7B2E]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
          Ответы на ключевые вопросы о площадке, мощностях и форматах сотрудничества. Не нашли нужного — оставьте
          заявку, и мы свяжемся с вами.
        </p>

        <div className="space-y-2">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-[#e8edf5] dark:border-[#2a2d30] last:border-0">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-4 font-medium text-[#1a1f2e] dark:text-white hover:text-[#EE7B2E] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform text-[#2EC4B6] ${openItem === faq.id ? "rotate-180" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="pb-4 text-gray-500 dark:text-gray-400">
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