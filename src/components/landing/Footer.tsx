import Icon from "@/components/ui/icon"

export default function Footer() {
  return (
    <footer className="container py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center mb-4">
            <span className="text-2xl font-bold text-black dark:text-white">
              Пози<span className="text-[#EE7B2E]">трон</span>
            </span>
          </a>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
            Модульный центр обработки данных для серверов и AI-кластеров. Готовая инженерная площадка в Ленинградской
            области.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-black dark:text-white mb-4">Навигация</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a href="#advantages" className="hover:text-[#EE7B2E] transition-colors">
                Преимущества
              </a>
            </li>
            <li>
              <a href="#opportunities" className="hover:text-[#EE7B2E] transition-colors">
                Возможности
              </a>
            </li>
            <li>
              <a href="#model" className="hover:text-[#EE7B2E] transition-colors">
                Модель ЦОД
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#EE7B2E] transition-colors">
                Вопросы
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black dark:text-white mb-4">Контакты</h4>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <Icon name="MapPin" className="w-4 h-4 text-[#EE7B2E]" />
              Ленинградская область
            </li>
            <li className="flex items-center gap-2">
              <Icon name="Mail" className="w-4 h-4 text-[#EE7B2E]" />
              info@positron-dc.ru
            </li>
            <li className="flex items-center gap-2">
              <Icon name="Phone" className="w-4 h-4 text-[#EE7B2E]" />
              +7 (800) 000-00-00
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Позитрон. Все права защищены.
        </p>
      </div>
    </footer>
  )
}
