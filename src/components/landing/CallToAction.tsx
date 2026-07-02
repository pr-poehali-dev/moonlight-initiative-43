import Icon from "@/components/ui/icon"

export default function CallToAction() {
  return (
    <>
      <section id="about" className="my-20">
        <div className="bg-white dark:bg-[#1c1e20] rounded-3xl border border-[#e8edf5] dark:border-[#2a2d30] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <span className="teal-tag mb-4 inline-block w-fit">О компании</span>
              <h2 className="text-[#1a1f2e] dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                <span className="text-[#EE7B2E]">«Позитрон»</span> — ЦОД
                <span className="block">нового поколения</span>
              </h2>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                «Позитрон» — модульный центр обработки данных, предназначенный для размещения вычислительных мощностей
                любого масштаба: от корпоративных серверов до крупных AI-кластеров.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Мы создаём надёжную инженерную площадку с собственной энергетикой и продуманной архитектурой, чтобы
                IT-компании, облачные провайдеры и разработчики AI могли расти без капитальных затрат на строительство с нуля.
              </p>
            </div>
            <div className="relative min-h-[280px] md:min-h-0">
              <img
                src="https://cdn.poehali.dev/projects/4f64628e-3175-4b19-b6dc-410e56e48aea/files/2faf9a9b-5114-4b53-8349-4fa040f041f9.jpg"
                alt="Серверный зал Позитрон"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/5" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="my-20">
        <div
          className="rounded-3xl border border-[#e8edf5] shadow-sm overflow-hidden"
          style={{ background: "linear-gradient(135deg, #fff4ed 0%, #ffffff 40%, #e6faf8 100%)" }}
        >
          <div className="p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="teal-tag mb-4 inline-block">Связаться с нами</span>
              <h2 className="text-[#1a1f2e] mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                Оставьте <span className="text-[#EE7B2E]">заявку</span>
              </h2>
              <p className="mb-6 text-sm md:text-base text-gray-500">
                Хотите арендовать мощности, стать партнёром или инвестором? Оставьте контакты — мы свяжемся с вами и подберём подходящее решение.
              </p>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#e6faf8] flex items-center justify-center">
                    <Icon name="MapPin" className="w-4 h-4 text-[#2EC4B6]" />
                  </div>
                  <span>Ленинградская область</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#fff4ed] flex items-center justify-center">
                    <Icon name="Zap" className="w-4 h-4 text-[#EE7B2E]" />
                  </div>
                  <span>30 МВт · 3600 стоек</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#e6faf8] flex items-center justify-center">
                    <Icon name="Mail" className="w-4 h-4 text-[#2EC4B6]" />
                  </div>
                  <span>info@positron-dc.ru</span>
                </div>
              </div>
            </div>

            <form className="bg-white rounded-2xl p-6 md:p-8 space-y-4 shadow-sm border border-[#e8edf5]">
              <div>
                <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full rounded-lg border border-[#dde4ef] bg-[#f8f9fb] px-4 py-2.5 text-[#1a1f2e] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">Телефон или e-mail</label>
                <input
                  type="text"
                  placeholder="Как с вами связаться"
                  className="w-full rounded-lg border border-[#dde4ef] bg-[#f8f9fb] px-4 py-2.5 text-[#1a1f2e] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">Задача</label>
                <textarea
                  rows={3}
                  placeholder="Кратко опишите вашу задачу"
                  className="w-full rounded-lg border border-[#dde4ef] bg-[#f8f9fb] px-4 py-2.5 text-[#1a1f2e] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#EE7B2E] hover:bg-[#d96e25] text-white font-semibold text-sm transition-colors"
              >
                Отправить заявку
              </button>
              <p className="text-xs text-center text-gray-400">Мы свяжемся с вами в течение рабочего дня</p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
