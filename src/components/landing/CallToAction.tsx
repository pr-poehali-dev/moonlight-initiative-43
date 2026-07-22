import Icon from "@/components/ui/icon"

export default function CallToAction() {
  return (
    <section id="contact" className="my-20">
      <div
        className="rounded-3xl border border-[#f0e7dc] shadow-sm overflow-hidden"
        style={{ background: "linear-gradient(135deg, #fff4ed 0%, #fffdfb 40%, #fbf1e9 100%)" }}
      >
        <div className="p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="teal-tag mb-4 inline-block">Связаться с нами</span>
            <h2 className="text-[#2b2620] mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Оставьте <span className="text-[#EE7B2E]">заявку</span>
            </h2>
            <p className="mb-6 text-sm md:text-base text-gray-500">
              Хотите разместить оборудование, стать партнёром или инвестором? Оставьте контакты — мы свяжемся с вами и
              подберём подходящее решение под ваши задачи.
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
                <span>30 МВт · до 3600 стоек · 15 ЦОД</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#e6faf8] flex items-center justify-center">
                  <Icon name="Mail" className="w-4 h-4 text-[#2EC4B6]" />
                </div>
                <span>info@positron-dc.ru</span>
              </div>
            </div>
          </div>

          <form className="bg-[#fffdfb] rounded-2xl p-6 md:p-8 space-y-4 shadow-sm border border-[#f0e7dc]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2b2620] mb-1.5">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full rounded-lg border border-[#ece0d2] bg-[#faf6f1] px-4 py-2.5 text-[#2b2620] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2b2620] mb-1.5">Компания</label>
                <input
                  type="text"
                  placeholder="Название компании"
                  className="w-full rounded-lg border border-[#ece0d2] bg-[#faf6f1] px-4 py-2.5 text-[#2b2620] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2b2620] mb-1.5">Телефон или e-mail</label>
              <input
                type="text"
                placeholder="Как с вами связаться"
                className="w-full rounded-lg border border-[#ece0d2] bg-[#faf6f1] px-4 py-2.5 text-[#2b2620] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2b2620] mb-1.5">Интересует</label>
              <select className="w-full rounded-lg border border-[#ece0d2] bg-[#faf6f1] px-4 py-2.5 text-[#2b2620] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent text-sm">
                <option>Размещение оборудования</option>
                <option>Аренда стоек / модулей</option>
                <option>Партнёрство</option>
                <option>Инвестиции</option>
                <option>Другое</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2b2620] mb-1.5">Комментарий</label>
              <textarea
                rows={3}
                placeholder="Кратко опишите вашу задачу"
                className="w-full rounded-lg border border-[#ece0d2] bg-[#faf6f1] px-4 py-2.5 text-[#2b2620] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent text-sm resize-none"
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
  )
}