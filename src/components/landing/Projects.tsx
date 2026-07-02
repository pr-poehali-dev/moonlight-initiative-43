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
      <h2 className="text-[#1a1f2e] dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Ключевые
        <span className="block text-[#EE7B2E]">преимущества</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-500 dark:text-gray-400">
        Готовая инженерная площадка с собственной энергетикой и продуманной архитектурой. Всё для быстрого запуска и
        поэтапного масштабирования ваших вычислительных мощностей.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-[#1c1e20] rounded-3xl p-6 border-b-4 border-[#2EC4B6] shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="bg-[#fff4ed] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Icon name={item.icon} className="w-6 h-6 text-[#EE7B2E]" />
            </div>
            <div className="text-3xl font-bold text-[#EE7B2E] mb-1">{item.value}</div>
            <h3 className="text-base font-semibold mb-2 text-[#1a1f2e] dark:text-white">{item.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
