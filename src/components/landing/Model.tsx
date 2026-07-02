import Icon from "@/components/ui/icon"

const specs = [
  { id: 1, value: "2 МВт", label: "Базовый модуль", icon: "Box" },
  { id: 2, value: "4 МВт", label: "Объединённый блок", icon: "Boxes" },
  { id: 3, value: "30 МВт", label: "Суммарная мощность", icon: "Zap" },
  { id: 4, value: "3600", label: "Серверных стоек", icon: "Server" },
]

const features = [
  "Архитектура высокой доступности и энергоэффективности",
  "Поэтапное масштабирование под любой объём нагрузки",
  "Собственная выработка электроэнергии на ГПУ",
  "Доступ к магистральным каналам связи",
  "Благоприятные климатические условия Ленинградской области",
  "Развитая транспортная и энергетическая инфраструктура",
]

export default function Model() {
  return (
    <section id="model" className="my-20">
      <div className="card p-8 md:p-10 lg:p-12 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Модель
          <span className="block text-[#EE7B2E] dark:text-[#EE7B2E]">центра обработки данных</span>
        </h2>
        <p className="mb-10 max-w-2xl text-gray-700 dark:text-gray-300">
          Архитектура построена на принципах высокой доступности, энергоэффективности и поэтапного масштабирования. На
          участке размещаются энергетическая инфраструктура, модули дата-центра, административные здания и парковка.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {specs.map((spec) => (
            <div
              key={spec.id}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 text-center"
            >
              <Icon name={spec.icon} className="w-6 h-6 text-[#EE7B2E] mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-black dark:text-white">{spec.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{spec.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <Icon name="Check" className="w-5 h-5 text-[#EE7B2E] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
