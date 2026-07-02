import Icon from "@/components/ui/icon"

const advantages = [
  {
    id: 1,
    value: "30 МВт",
    title: "Суммарная мощность",
    description:
      "Базовый модуль — 2 МВт, объединение двух модулей в блок 4 МВт. Готовая энергетическая инфраструктура на площадке.",
    icon: "Zap",
  },
  {
    id: 2,
    value: "3600",
    title: "Серверных стоек",
    description:
      "Единая площадка для размещения вычислительных мощностей любого масштаба — от корпоративных серверов до AI-кластеров.",
    icon: "Server",
  },
  {
    id: 3,
    value: "4 Га",
    title: "Площадь кластера",
    description:
      "В Ленинградской области. Энергетическая инфраструктура, модули дата-центра, административные здания и парковка.",
    icon: "MapPin",
  },
  {
    id: 4,
    value: "ГПУ",
    title: "Собственная генерация",
    description:
      "Объект снабжается электроэнергией за счёт собственной выработки на газогенераторных установках — независимость и надёжность.",
    icon: "Factory",
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Ключевые
        <span className="block text-[#EE7B2E] dark:text-[#EE7B2E]">преимущества</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Готовая инженерная площадка с собственной энергетикой и продуманной архитектурой. Всё для быстрого запуска и
        поэтапного масштабирования ваших вычислительных мощностей.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((item) => (
          <div
            key={item.id}
            className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-[#EE7B2E] w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <Icon name={item.icon} className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#EE7B2E] mb-1">{item.value}</div>
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
