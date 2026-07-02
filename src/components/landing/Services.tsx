import Icon from "@/components/ui/icon"

const opportunities = [
  {
    id: 1,
    title: "Клиентам",
    description:
      "Аренда готовых стоек и модулей для размещения серверов и AI-кластеров. Надёжная база для роста без капитальных затрат.",
    icon: "Building2",
  },
  {
    id: 2,
    title: "Партнёрам",
    description:
      "Совместные проекты, интеграция инфраструктуры и долгосрочное сотрудничество с облачными и IT-провайдерами.",
    icon: "Handshake",
  },
  {
    id: 3,
    title: "Инвесторам",
    description:
      "Участие в масштабируемом инфраструктурном проекте с готовой энергетикой и высоким спросом на вычислительные мощности.",
    icon: "TrendingUp",
  },
]

export default function Opportunities() {
  return (
    <section id="opportunities" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Возможности для
        <span className="block text-[#EE7B2E] dark:text-[#EE7B2E]">каждой стороны</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Проект ориентирован на IT-компании, облачных провайдеров, разработчиков искусственного интеллекта и инвесторов.
        Выберите формат участия, который подходит именно вам.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {opportunities.map((item) => (
          <div key={item.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-[#EE7B2E] w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <Icon name={item.icon} className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="card p-6 md:p-8 shadow-md flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE7B2E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EE7B2E]"></span>
          </span>
          <span className="font-semibold text-black dark:text-white">Статус проекта</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Площадка в активной стадии реализации. Готовая энергетическая инфраструктура, идёт приём заявок на
          резервирование мощностей первой очереди.
        </p>
      </div>
    </section>
  )
}
