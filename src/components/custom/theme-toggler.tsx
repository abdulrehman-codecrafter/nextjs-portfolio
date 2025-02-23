"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Adjusted animation variants
  const iconVariants = {
    light: { 
      rotate: 0, // Sun icon upright
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 20 
      }
    },
    dark: { 
      rotate: 360, // Full rotation to reset Moon orientation
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 20 
      }
    }
  }

  if (!mounted) return null

  return (
    <motion.button
      className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-background/50 transition-colors"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        variants={iconVariants}
        animate={theme === "dark" ? "dark" : "light"}
        initial={false}
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5" style={{ transformOrigin: "center" }} />
        ) : (
          <Sun className="h-5 w-5" style={{ transformOrigin: "center" }} />
        )}
      </motion.div>
    </motion.button>
  )
}