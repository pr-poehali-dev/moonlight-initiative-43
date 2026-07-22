import Icon from "@/components/ui/icon"

const specs = [
  { id: 1, value: "15", label: "отдельных ЦОД", icon: "Boxes" },
  { id: 2, value: "2 МВт", label: "мощность одного ЦОД", icon: "Zap" },
  { id: 3, value: "240", label: "стоек в одном ЦОД", icon: "Server" },
  { id: 4, value: "4,1 Га", label: "площадь участка", icon: "MapPin" },
]

export default function Model() {
  return (
    <section id="model" className="my-20">
      <div
        className="rounded-3xl p-8 md:p-10 lg:p-12 shadow-[0_4px_24px_-8px_rgba(26,37,48,0.08)]"
        style={{ background: "linear-gradient(135deg, #ffffff 55%, #e3f7f5 100%)" }}
      >
        <span className="teal-tag mb-4 inline-block">3D-модель</span>
        <h2 className="text-[#1a2530] dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Модель
          <span className="block text-[#EE7B2E]">центра обработки данных</span>
        </h2>
        <p className="mb-10 max-w-2xl text-gray-500">
          Наглядная планировка площадки: 15 модульных ЦОД, энергетическая инфраструктура на газогенераторных установках,
          административные здания и внутриплощадочные сети.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-[0_8px_32px_-12px_rgba(26,37,48,0.18)] mb-10 bg-white">
          <img
            src="https://cdn.poehali.dev/projects/4f64628e-3175-4b19-b6dc-410e56e48aea/files/3ac863b7-c3ee-435a-b403-31b6655235fc.jpg"
            alt="3D-модель дата-центра Позитрон"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((spec) => (
            <div key={spec.id} className="rounded-2xl border-t-4 border-[#2EC4B6] bg-white p-5 text-center shadow-[0_4px_20px_-8px_rgba(26,37,48,0.1)]">
              <Icon name={spec.icon} className="w-6 h-6 text-[#2EC4B6] mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-[#EE7B2E]">{spec.value}</div>
              <div className="text-sm text-gray-500 mt-1">{spec.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}