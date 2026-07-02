import Icon from "@/components/ui/icon"

const stages = [
  {
    id: 1,
    phase: "Этап 1",
    title: "Подготовка площадки",
    description: "Готовая энергетическая инфраструктура, инженерные сети, подготовка участка 4 Га.",
    status: "Выполнено",
    done: true,
  },
  {
    id: 2,
    phase: "Этап 2",
    title: "Ввод первой очереди",
    description: "Монтаж первых модулей дата-центра, запуск базовых блоков мощностью 2–4 МВт.",
    status: "В работе",
    active: true,
    done: false,
  },
  {
    id: 3,
    phase: "Этап 3",
    title: "Масштабирование",
    description: "Поэтапное наращивание мощности до 30 МВт, размещение до 3600 серверных стоек.",
    status: "Планируется",
    done: false,
  },
  {
    id: 4,
    phase: "Этап 4",
    title: "Полная загрузка кластера",
    description: "Ввод административных и офисных зданий, вывод площадки на проектную мощность.",
    status: "Планируется",
    done: false,
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="my-20">
      <h2 className="text-[#1a1f2e] dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Дорожная
        <span className="block text-[#EE7B2E]">карта</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-500 dark:text-gray-400">
        План реализации проекта и очереди ввода мощностей. Поэтапный подход позволяет масштабироваться под ваши задачи.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map((stage) => (
          <div
            key={stage.id}
            className={`rounded-3xl p-6 border shadow-sm transition-all duration-300 ${
              stage.done
                ? "bg-[#fff4ed] border-[#EE7B2E]/30 dark:bg-[#2a1a0a] dark:border-[#EE7B2E]/30"
                : stage.active
                ? "bg-white border-[#2EC4B6] shadow-md dark:bg-[#1c1e20]"
                : "bg-white border-[#e8edf5] dark:bg-[#1c1e20] dark:border-[#2a2d30]"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`text-sm font-semibold ${stage.done ? "text-[#EE7B2E]" : "text-[#2EC4B6]"}`}>
                {stage.phase}
              </span>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  stage.done
                    ? "bg-[#EE7B2E] text-white"
                    : stage.active
                    ? "bg-[#2EC4B6] text-white"
                    : "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300"
                }`}
              >
                {stage.status}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Icon
                name={stage.done ? "CircleCheck" : stage.active ? "CircleDot" : "Circle"}
                className={`w-5 h-5 shrink-0 ${
                  stage.done ? "text-[#EE7B2E]" : stage.active ? "text-[#2EC4B6]" : "text-gray-300"
                }`}
              />
              <h3 className="text-base font-semibold text-[#1a1f2e] dark:text-white">{stage.title}</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{stage.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
