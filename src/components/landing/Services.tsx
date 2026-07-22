import Icon from "@/components/ui/icon"

const clients = [
  {
    id: 1,
    title: "ИТ-компании",
    description: "Размещение корпоративных серверов и инфраструктуры на надёжной площадке.",
    icon: "Building2",
  },
  {
    id: 2,
    title: "Облачные провайдеры",
    description: "Масштабируемые мощности для развёртывания облачных сервисов.",
    icon: "Cloud",
  },
  {
    id: 3,
    title: "Разработчики ИИ",
    description: "Инфраструктура для крупных AI-кластеров с высокой плотностью нагрузки.",
    icon: "BrainCircuit",
  },
  {
    id: 4,
    title: "Инвесторы",
    description: "Участие в масштабируемом инфраструктурном проекте с высоким спросом.",
    icon: "TrendingUp",
  },
]

const status = [
  "Подведены магистральные сети",
  "Готовы фундаменты под все 15 ЦОД",
  "Готовы внутриплощадочные сети газоснабжения с подключением",
]

export default function Clients() {
  return (
    <section id="clients" className="my-20">
      <h2 className="text-[#1a2530] dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Наши
        <span className="block text-[#EE7B2E]">клиенты</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-500 dark:text-gray-400">
        Дата-центр обеспечивает надёжную базу для роста без капитальных затрат на строительство с нуля.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {clients.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-[#16202b] rounded-3xl p-6 shadow-[0_4px_24px_-8px_rgba(26,37,48,0.08)] hover:shadow-md transition-shadow duration-300"
          >
            <div className="bg-[#e3f7f5] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Icon name={item.icon} className="w-6 h-6 text-[#2EC4B6]" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#1a2530] dark:text-white">{item.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <div
        id="status"
        className="rounded-3xl bg-white dark:bg-[#16202b] p-8 md:p-10 shadow-[0_4px_24px_-8px_rgba(26,37,48,0.08)]"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2EC4B6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2EC4B6]"></span>
          </span>
          <span className="teal-tag">Статус проекта</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {status.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#e3f7f5] flex items-center justify-center shrink-0">
                <Icon name="Check" className="w-4 h-4 text-[#2EC4B6]" />
              </div>
              <span className="text-[#1a2530] dark:text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}