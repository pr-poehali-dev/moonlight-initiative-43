import ContactFormButton from "./ContactFormButton"

export default function Hero() {
  return (
    <section id="hero" className="my-6 relative overflow-hidden rounded-[2rem]">
      <img
        src="https://cdn.poehali.dev/projects/4f64628e-3175-4b19-b6dc-410e56e48aea/files/327e34a4-de88-4f26-a481-3ad0a7da9ff6.jpg"
        alt="Дата-центр Позитрон — вид с высоты птичьего полёта"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1720]/90 via-[#0f1720]/70 to-[#0f1720]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1720]/60 to-transparent" />

      <div className="relative z-10 px-6 py-16 md:px-12 lg:px-16 md:py-28 lg:py-36 min-h-[520px] md:min-h-[600px] flex flex-col justify-center">
        <div className="max-w-xl">
          <span className="inline-block mb-5 text-xs font-semibold px-4 py-1.5 rounded-full bg-[#2ec4b6]/20 text-[#5fe0d3] backdrop-blur-sm border border-[#2ec4b6]/30">
            Ленинградская область · 15 ЦОД · 30 МВт
          </span>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Дата-центр
            <span className="block text-[#EE7B2E]">Позитрон</span>
          </h1>
          <p className="my-6 text-sm md:text-lg text-gray-200 max-w-md">
            Готовая инженерная площадка для ваших серверов и AI-кластеров. Размещение вычислительных мощностей любого
            масштаба — без капитальных затрат на строительство с нуля.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton>Оставить заявку</ContactFormButton>
            <a
              href="#about"
              className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all inline-block"
            >
              О проекте
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
