import Icon from "@/components/ui/icon"
import ContactFormButton from "./ContactFormButton"

export default function CallToAction() {
  return (
    <>
      <section id="about" className="my-20">
        <div className="card p-8 md:p-10 lg:p-12 shadow-lg">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            О компании
            <span className="text-[#EE7B2E] dark:text-[#EE7B2E]"> «Позитрон»</span>
          </h2>
          <p className="mb-4 max-w-3xl text-gray-700 dark:text-gray-300">
            «Позитрон» — модульный центр обработки данных, предназначенный для размещения вычислительных мощностей
            любого масштаба: от корпоративных серверов до крупных AI-кластеров.
          </p>
          <p className="max-w-3xl text-gray-700 dark:text-gray-300">
            Мы создаём надёжную инженерную площадку с собственной энергетикой и продуманной архитектурой, чтобы IT-
            компании, облачные провайдеры и разработчики AI могли расти без капитальных затрат на строительство с нуля.
          </p>
        </div>
      </section>

      <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
        <div className="p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Оставьте <span className="text-[#EE7B2E] dark:text-[#EE7B2E]">заявку</span>
            </h2>
            <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
              Хотите арендовать мощности, стать партнёром или инвестором? Оставьте контакты и коротко опишите задачу — мы
              свяжемся с вами и подберём подходящее решение.
            </p>
            <div className="flex items-center gap-6 mb-6 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" className="w-5 h-5 text-[#EE7B2E]" />
                <span>Ленинградская область</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Zap" className="w-5 h-5 text-[#EE7B2E]" />
                <span>30 МВт · 3600 стоек</span>
              </div>
            </div>
            <ContactFormButton>Оставить заявку</ContactFormButton>
          </div>

          <form className="card p-6 md:p-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-1">Имя</label>
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2.5 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#EE7B2E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-1">Телефон или e-mail</label>
              <input
                type="text"
                placeholder="Как с вами связаться"
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2.5 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#EE7B2E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-1">Задача</label>
              <textarea
                rows={3}
                placeholder="Кратко опишите вашу задачу"
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2.5 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#EE7B2E]"
              />
            </div>
            <button type="submit" className="btn-primary w-full text-center">
              Отправить заявку
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
