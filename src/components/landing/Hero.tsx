import ContactFormButton from "./ContactFormButton"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Модульный ЦОД
            <span className="block text-[#EE7B2E] dark:text-[#EE7B2E]">Позитрон</span>
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Готовая инженерная площадка для ваших серверов и AI-кластеров. Размещение вычислительных мощностей любого
            масштаба в Ленинградской области — без капитальных затрат на строительство с нуля.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton>Оставить заявку</ContactFormButton>
            <a href="#model" className="btn-secondary text-black dark:text-white">
              Узнать больше
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.poehali.dev/projects/4f64628e-3175-4b19-b6dc-410e56e48aea/files/636d245e-bb48-45a8-9fa5-7f0a08ef19bd.jpg"
            alt="Модульный центр обработки данных Позитрон"
            className="w-full h-auto rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
