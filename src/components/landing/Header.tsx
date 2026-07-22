import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { useTheme } from "next-themes"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isDarkMode = mounted && resolvedTheme === "dark"

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled ? "bg-white/95 dark:bg-[#101112]/95 backdrop-blur-sm shadow-sm border-b border-[#e8edf5] dark:border-[#2a2d30]" : "bg-transparent"
        }`}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-[#1a1f2e] dark:text-white">
                Пози<span className="text-[#EE7B2E]">трон</span>
              </span>
            </a>

            <div className="flex items-center space-x-4">
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li>
                    <a
                      href="#about"
                      className="text-gray-600 dark:text-gray-300 hover:text-[#EE7B2E] dark:hover:text-[#EE7B2E] transition-colors text-sm"
                    >
                      О проекте
                    </a>
                  </li>
                  <li>
                    <a
                      href="#advantages"
                      className="text-gray-600 dark:text-gray-300 hover:text-[#EE7B2E] dark:hover:text-[#EE7B2E] transition-colors text-sm"
                    >
                      Преимущества
                    </a>
                  </li>
                  <li>
                    <a
                      href="#clients"
                      className="text-gray-600 dark:text-gray-300 hover:text-[#EE7B2E] dark:hover:text-[#EE7B2E] transition-colors text-sm"
                    >
                      Клиенты
                    </a>
                  </li>
                  <li>
                    <a
                      href="#roadmap"
                      className="text-gray-600 dark:text-gray-300 hover:text-[#EE7B2E] dark:hover:text-[#EE7B2E] transition-colors text-sm"
                    >
                      Этапы
                    </a>
                  </li>
                  <li>
                    <a
                      href="#company"
                      className="text-gray-600 dark:text-gray-300 hover:text-[#EE7B2E] dark:hover:text-[#EE7B2E] transition-colors text-sm"
                    >
                      О компании
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="btn-primary text-sm">
                      Оставить заявку
                    </a>
                  </li>
                </ul>
              </nav>

              <ThemeToggle />

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md bg-transparent hover:bg-gray-200/50 dark:hover:bg-gray-800/20 md:hidden"
                aria-label="Меню"
              >
                <Menu className="h-6 w-6 text-black dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 md:hidden">
          <div className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-[#111111] shadow-xl overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111]">
              <span className="text-xl font-bold text-black dark:text-white">
                Пози<span className="text-[#EE7B2E]">трон</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="Закрыть меню"
              >
                <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Главная
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    О проекте
                  </a>
                </li>
                <li>
                  <a
                    href="#advantages"
                    className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Преимущества
                  </a>
                </li>
                <li>
                  <a
                    href="#clients"
                    className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Клиенты
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Этапы
                  </a>
                </li>
                <li>
                  <a
                    href="#company"
                    className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    О компании
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Вопросы
                  </a>
                </li>
              </ul>
            </nav>

            <div className="p-4 mt-4 border-t border-gray-200 dark:border-gray-800">
              <a
                href="#contact"
                className="flex items-center justify-center w-full py-3 px-4 bg-[#EE7B2E] text-white rounded-lg text-base font-medium hover:bg-opacity-90 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}