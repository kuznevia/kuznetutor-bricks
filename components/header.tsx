import Link from 'next/link'
import React, { useContext } from 'react'
import { ReactBricksContext } from 'react-bricks'

const Header: React.FC = () => {
  const { toggleColorMode } = useContext(ReactBricksContext);

  return (
    <header className="bg-white sm:h-20 py-5 border-b sm:sticky top-0">
      <div className="max-w-5xl mx-auto px-6">
        <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
            <img src="/react-bricks-logo.svg" className="w-48" alt="React Bricks" />
            <div className="sm:ml-8 flex space-x-5 text-center">
              <Link href="/" className="text-gray-500 hover:text-pink-700">
                Домашняя страница
              </Link>
              <Link href="/about-us" className="text-gray-500 hover:text-pink-700">
                Обо мне
              </Link>
              <Link href="/blog" className="text-gray-500 hover:text-pink-700">
                Блог
              </Link>
            </div>
          </div>
          <button
            className="py-2 px-5 rounded text-white font-medium bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg transition duration-200"
            onClick={toggleColorMode}
          >
            Сменить тему
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
