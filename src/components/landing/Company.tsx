import Icon from "@/components/ui/icon"

const facts = [
  {
    id: 1,
    title: "ООО «РЕСУРС ЭК»",
    description: "Заёмщик и реализатор проекта дата-центра «Позитрон».",
    icon: "Briefcase",
  },
  {
    id: 2,
    title: "РЕСУРС — ПОЗИТРОН",
    description: "Компания, входящая в группу компаний «Позитрон».",
    icon: "Network",
  },
  {
    id: 3,
    title: "История и репутация",
    description: "За плечами группы — многолетний опыт и высокие отраслевые награды, включая орден Ленина.",
    icon: "Award",
  },
]

export default function Company() {
  return (
    <section id="company" className="my-20">
      <div className="bg-[#fffdfb] dark:bg-[#262019] rounded-3xl border border-[#f0e7dc] dark:border-[#352d24] shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <span className="teal-tag mb-4 inline-block w-fit">О компании</span>
            <h2 className="text-[#2b2620] dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Группа компаний
              <span className="block text-[#EE7B2E]">«Позитрон»</span>
            </h2>
            <p className="mb-8 text-gray-500 dark:text-gray-400">
              Проект реализует ООО «РЕСУРС ЭК» — часть группы компаний «Позитрон» с многолетней историей и надёжной
              репутацией. Мы создаём современную инженерную инфраструктуру для размещения вычислительных мощностей любого
              масштаба.
            </p>

            <div className="space-y-4">
              {facts.map((fact) => (
                <div key={fact.id} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e6faf8] flex items-center justify-center shrink-0">
                    <Icon name={fact.icon} className="w-5 h-5 text-[#2EC4B6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2b2620] dark:text-white">{fact.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{fact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] md:min-h-0">
            <img
              src="https://cdn.poehali.dev/projects/4f64628e-3175-4b19-b6dc-410e56e48aea/files/2faf9a9b-5114-4b53-8349-4fa040f041f9.jpg"
              alt="Инфраструктура дата-центра Позитрон"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/5" />
          </div>
        </div>
      </div>
    </section>
  )
}