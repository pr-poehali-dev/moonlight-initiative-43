import Icon from "@/components/ui/icon"

const advantages = [
  {
    id: 1,
    value: "30 МВт",
    title: "Суммарная мощность кластера",
    description: "Мощность одного ЦОД — 2 МВт. Поэтапное масштабирование под любой объём вычислительной нагрузки.",
    icon: "Zap",
  },
  {
    id: 2,
    value: "ГПУ",
    title: "Независимая энергетика",
    description:
      "Объект снабжается электроэнергией за счёт собственной выработки на газогенераторных установках MTU (Rolls-Royce Solutions).",
    icon: "Factory",
  },
  {
    id: 3,
    value: "до 3600",
    title: "Серверных стоек",
    description:
      "Проектом предусмотрено размещение до 240 стоек в одном ЦОД в зависимости от необходимой вычислительной мощности.",
    icon: "Server",
  },
  {
    id: 4,
    value: "99,9%",
    title: "Непрерывная работа",
    description:
      "Надёжность уровня Tier III. Замена оборудования и плановое обслуживание проходят без остановок дата-центра.",
    icon: "ShieldCheck",
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="my-20">
      <h2 className="text-[#1a2530] dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Ключевые
        <span className="block text-[#EE7B2E]">преимущества</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-500 dark:text-gray-400">
        Готовая инженерная площадка с независимой энергетикой и продуманной архитектурой. Всё для быстрого запуска и
        поэтапного масштабирования ваших вычислительных мощностей.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-[#16202b] rounded-3xl p-6 border-b-4 border-[#2EC4B6] shadow-[0_4px_24px_-8px_rgba(26,37,48,0.08)] hover:shadow-md transition-shadow duration-300"
          >
            <div className="bg-[#fff4ed] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Icon name={item.icon} className="w-6 h-6 text-[#EE7B2E]" />
            </div>
            <div className="text-3xl font-bold text-[#EE7B2E] mb-1">{item.value}</div>
            <h3 className="text-base font-semibold mb-2 text-[#1a2530] dark:text-white">{item.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}