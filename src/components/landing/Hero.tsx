import ContactFormButton from "./ContactFormButton"

export default function Hero() {
  return (
    <section
      id="hero"
      className="my-8 relative overflow-hidden rounded-3xl border border-[#e8edf5] shadow-sm"
      style={{ background: 'linear-gradient(135deg, #fff4ed 0%, #ffffff 50%, #e6faf8 100%)' }}
    >
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 z-10">
          <span className="teal-tag mb-4 inline-block">Ленинградская область · 15 ЦОД · 30 МВт</span>
          <h1 className="text-[#1a1f2e] text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Дата-центр
            <span className="block text-[#EE7B2E]">Позитрон</span>
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-600">
            Готовая инженерная площадка для ваших серверов и AI-кластеров. Размещение вычислительных мощностей любого
            масштаба — без капитальных затрат на строительство с нуля.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton>Оставить заявку</ContactFormButton>
            <a href="#about" className="btn-secondary">
              О проекте
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.poehali.dev/projects/4f64628e-3175-4b19-b6dc-410e56e48aea/files/327e34a4-de88-4f26-a481-3ad0a7da9ff6.jpg"
            alt="Дата-центр Позитрон — вид с высоты птичьего полёта"
            className="w-full h-auto rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}