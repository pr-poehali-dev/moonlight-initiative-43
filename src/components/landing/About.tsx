import Icon from "@/components/ui/icon"

const highlights = [
  { id: 1, value: "15", label: "отдельных ЦОД", icon: "Boxes" },
  { id: 2, value: "Tier III", label: "уровень надёжности", icon: "ShieldCheck" },
  { id: 3, value: "99,9%", label: "отказоустойчивость", icon: "Activity" },
]

export default function About() {
  return (
    <section id="about" className="my-20">
      <div
        className="rounded-3xl border border-[#f0e7dc] shadow-sm overflow-hidden"
        style={{ background: "linear-gradient(135deg, #fffdfb 55%, #fbf1e9 100%)" }}
      >
        <div className="p-8 md:p-10 lg:p-12">
          <span className="teal-tag mb-4 inline-block">О проекте</span>
          <h2 className="text-[#2b2620] dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            15 центров обработки данных
            <span className="block text-[#EE7B2E]">на одной площадке</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl">
            <p className="text-gray-600">
              Дата-центр состоит из 15 отдельных центров обработки данных, предназначенных для размещения вычислительных
              мощностей любого масштаба — от корпоративных серверов до крупных AI-кластеров. Архитектура построена на
              принципах высокой надёжности, доступности, энергоэффективности и поэтапного масштабирования.
            </p>
            <p className="text-gray-600">
              Площадка расположена в Ленинградской области — регионе с развитой энергетической и транспортной
              инфраструктурой, а также доступом к магистральным каналам связи.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {highlights.map((item) => (
              <div key={item.id} className="rounded-2xl border-t-4 border-[#2EC4B6] bg-[#fffdfb] p-5 shadow-sm">
                <Icon name={item.icon} className="w-6 h-6 text-[#2EC4B6] mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-[#EE7B2E]">{item.value}</div>
                <div className="text-sm text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}