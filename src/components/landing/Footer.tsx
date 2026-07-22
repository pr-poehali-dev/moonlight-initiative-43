import Icon from "@/components/ui/icon"

export default function Footer() {
  return (
    <footer className="container py-12 border-t border-[#dde7ed] dark:border-[#1f2c38]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center mb-4">
            <span className="text-2xl font-bold text-[#1a2530] dark:text-white">
              Пози<span className="text-[#EE7B2E]">трон</span>
            </span>
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
            Дата-центр из 15 отдельных ЦОД для серверов и AI-кластеров. Готовая инженерная площадка в Ленинградской
            области.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#1a2530] dark:text-white mb-4">Навигация</h4>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li><a href="#about" className="hover:text-[#EE7B2E] transition-colors">О проекте</a></li>
            <li><a href="#advantages" className="hover:text-[#EE7B2E] transition-colors">Преимущества</a></li>
            <li><a href="#clients" className="hover:text-[#EE7B2E] transition-colors">Клиенты</a></li>
            <li><a href="#roadmap" className="hover:text-[#EE7B2E] transition-colors">Этапы</a></li>
            <li><a href="#model" className="hover:text-[#EE7B2E] transition-colors">3D-модель</a></li>
            <li><a href="#company" className="hover:text-[#EE7B2E] transition-colors">О компании</a></li>
            <li><a href="#contact" className="hover:text-[#EE7B2E] transition-colors">Контакты</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#1a2530] dark:text-white mb-4">Контакты</h4>
          <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <Icon name="MapPin" className="w-4 h-4 text-[#2EC4B6]" />
              Ленинградская область
            </li>
            <li className="flex items-center gap-2">
              <Icon name="Mail" className="w-4 h-4 text-[#2EC4B6]" />
              info@positron-dc.ru
            </li>
            <li className="flex items-center gap-2">
              <Icon name="Phone" className="w-4 h-4 text-[#2EC4B6]" />
              +7 (800) 000-00-00
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-[#ece0d2] dark:border-[#352d24] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Позитрон. Все права защищены.</p>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="w-2 h-2 rounded-full bg-[#2EC4B6] inline-block" />
          Площадка в активной стадии реализации
        </div>
      </div>
    </footer>
  )
}