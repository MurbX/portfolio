'use client'

import { motion } from 'framer-motion'

export default function ThreeD() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating Dark Grid Pattern */}
      <motion.div
        className="absolute top-20 right-20 preserve-3d"
        animate={{
          rotateY: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-48 h-48 relative preserve-3d bg-gradient-to-br from-gray-900/10 to-gray-700/10 backdrop-blur-sm border border-gray-800/20 rounded-2xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </motion.div>

      {/* Dark Hexagonal Pattern */}
      <motion.div
        className="absolute bottom-40 left-20 preserve-3d"
        animate={{
          rotateZ: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotateZ: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-40 h-40 bg-gradient-to-br from-gray-900/10 to-gray-800/10 backdrop-blur-sm rounded-2xl border border-gray-700/20 shadow-xl"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        ></div>
      </motion.div>

      {/* Floating Dark Circle with Rings */}
      <motion.div
        className="absolute top-1/3 left-1/4 preserve-3d"
        animate={{
          rotateX: [0, 15, 0],
          rotateZ: [0, -15, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full border-2 border-gray-800/30"></div>
          <div className="absolute inset-4 rounded-full border-2 border-gray-700/20"></div>
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm"></div>
        </div>
      </motion.div>

      {/* Tilting Dark Rectangle with Diagonal Lines */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 preserve-3d"
        animate={{
          rotateY: [0, 10, -10, 0],
          rotateX: [0, -10, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-56 h-72 bg-gradient-to-br from-gray-900/15 to-gray-700/10 backdrop-blur-md rounded-3xl border border-gray-800/20 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)`
          }}></div>
        </div>
      </motion.div>

      {/* Floating Dark Sphere with Gradient */}
      <motion.div
        className="absolute top-2/3 right-1/3 preserve-3d"
        animate={{
          y: [0, -40, 0],
          rotateY: [0, 180, 360],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 12, repeat: Infinity, ease: "linear" }
        }}
      >
        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-gray-900/20 via-gray-800/10 to-transparent backdrop-blur-sm shadow-2xl border border-gray-700/20"></div>
      </motion.div>

      {/* Rotating Dark Square with Dot Pattern */}
      <motion.div
        className="absolute top-1/2 left-10 preserve-3d"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-40 h-40 bg-gradient-to-br from-gray-900/15 to-gray-800/10 backdrop-blur-sm rounded-2xl border border-gray-700/20 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)',
            backgroundSize: '15px 15px'
          }}></div>
        </div>
      </motion.div>
    </div>
  )
}
