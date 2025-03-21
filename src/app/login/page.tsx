// app/login/page.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Credenciales hardcodeadas
  const ADMIN_CREDENTIALS = {
    user: 'admin',
    pass: 'salao2025'
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if(username === ADMIN_CREDENTIALS.user && password === ADMIN_CREDENTIALS.pass) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/admin/horarios');
    } else {
      setError('Credenciais inválidas!');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 w-full max-w-md rounded-xl border shadow-2xl backdrop-blur-sm bg-gray-800/90 border-white/10"
      >
        {/* Logo del Salón */}
        <div className="relative mx-auto mb-8 w-48 h-16">
          <Image
            src="/preview.svg"
            alt="Karla Lelis Salão"
            fill
            className="object-contain"
          />
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-300 font-montserrat">
              Usuário
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 w-full text-white bg-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300 font-montserrat">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 w-full text-white bg-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-red-400"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            className="py-3 w-full font-semibold text-white bg-pink-500 rounded-lg transition-all hover:bg-pink-600 font-montserrat"
          >
            Acessar Painel
          </button>
        </form>

        <div className="mt-6 text-center text-gray-400">
          <Link href="/" className="transition-colors hover:text-white">
            ← Voltar para o site
          </Link>
        </div>
      </motion.div>
    </div>
  );
}