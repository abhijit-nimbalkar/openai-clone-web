'use client';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'framer-motion';
import MobileSidebar from '../components/ui/MobileSidebar';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Left: Logo + Hamburger */}
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">OpenAI</h1>
            <MobileSidebar />
          </div>

          {/* Right: Sign Up Button */}
          <div>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      <section className="h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Discover what's possible with AI
        </motion.h2>
        <p className="max-w-xl text-lg text-gray-600 mb-8">
          Explore our powerful models and APIs to build your own AI-driven solutions.
        </p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button className="text-white bg-black px-6 py-3 rounded-full text-lg">Get Started</Button>
        </motion.div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Our Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['ChatGPT', 'DALL·E', 'Codex'].map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{product}</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at elit.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white border-t mt-10 py-6 px-6 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
          <span>&copy; 2025 OpenAI Clone. All rights reserved.</span>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
