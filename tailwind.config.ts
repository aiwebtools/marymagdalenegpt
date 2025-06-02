
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '3rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			spacing: {
				'divine': '3rem',
				'holy': '5rem',
				'celestial': '8rem',
				'sacred': '12rem',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// TRANSCENDENT DIVINE COLORS FOR ULTIMATE HOLINESS
				divine: {
					DEFAULT: '#9b87f5', // Primary divine purple
					light: '#E9D5FF',   // Light angelic purple
					dark: '#1A1F2C',    // Deep cosmic purple
					glow: '#8B5CF6',    // Vivid divine glow
					celestial: '#FFD700', // Golden celestial light
					sacred: '#FF69B4',  // Sacred pink
					holy: '#FFFFFF',    // Pure holy white
					transcendent: '#F0E68C', // Transcendent gold
					ethereal: '#DDA0DD', // Ethereal plum
				},
				mystic: {
					DEFAULT: '#D946EF',  // Magenta mystical energy
					gold: '#FFD700',     // Divine gold
					blue: '#0EA5E9',     // Celestial blue
					violet: '#8A2BE2',   // Deep violet wisdom
					rose: '#FF1493',     // Divine rose
					silver: '#C0C0C0',   // Silver moonlight
					platinum: '#E5E4E2', // Platinum radiance
					crystal: '#B0E0E6',  // Crystal clarity
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'divine': '1.5rem',
				'holy': '2rem',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// ULTIMATE DIVINE ANIMATIONS FOR TRANSCENDENT HOLINESS
				'float': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
					'25%': { transform: 'translateY(-15px) rotate(2deg) scale(1.02)' },
					'50%': { transform: 'translateY(-10px) rotate(0deg) scale(1.05)' },
					'75%': { transform: 'translateY(-8px) rotate(-2deg) scale(1.02)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '0.8',
						boxShadow: '0 0 30px rgba(155, 135, 245, 0.6), 0 0 60px rgba(255, 215, 0, 0.4)',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						boxShadow: '0 0 60px rgba(255, 215, 0, 0.9), 0 0 120px rgba(217, 70, 239, 0.7), 0 0 180px rgba(138, 43, 226, 0.5)',
						transform: 'scale(1.05)'
					}
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'divine-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						filter: 'brightness(1) hue-rotate(0deg) saturate(1)'
					},
					'25%': { 
						transform: 'scale(1.03)',
						filter: 'brightness(1.1) hue-rotate(5deg) saturate(1.1)'
					},
					'50%': { 
						transform: 'scale(1.07)',
						filter: 'brightness(1.3) hue-rotate(10deg) saturate(1.3)'
					},
					'75%': { 
						transform: 'scale(1.03)',
						filter: 'brightness(1.1) hue-rotate(5deg) saturate(1.1)'
					}
				},
				'celestial-dance': {
					'0%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
					'20%': { transform: 'translateY(-25px) rotate(8deg) scale(1.05)' },
					'40%': { transform: 'translateY(-15px) rotate(0deg) scale(1.1)' },
					'60%': { transform: 'translateY(-20px) rotate(-8deg) scale(1.05)' },
					'80%': { transform: 'translateY(-10px) rotate(4deg) scale(1.08)' },
					'100%': { transform: 'translateY(0) rotate(0deg) scale(1)' }
				},
				'holy-glow': {
					'0%, 100%': { 
						textShadow: '0 0 15px #FFD700, 0 0 30px #FF69B4, 0 0 45px #8A2BE2, 0 0 60px #9b87f5'
					},
					'25%': { 
						textShadow: '0 0 25px #FFD700, 0 0 50px #FF69B4, 0 0 75px #8A2BE2, 0 0 100px #9b87f5, 0 0 125px #FFFFFF'
					},
					'50%': { 
						textShadow: '0 0 35px #FFD700, 0 0 70px #FF69B4, 0 0 105px #8A2BE2, 0 0 140px #9b87f5, 0 0 175px #FFFFFF'
					},
					'75%': { 
						textShadow: '0 0 25px #FFD700, 0 0 50px #FF69B4, 0 0 75px #8A2BE2, 0 0 100px #9b87f5, 0 0 125px #FFFFFF'
					}
				},
				'divine-sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
					'25%': { opacity: '0.7', transform: 'scale(0.5) rotate(90deg)' },
					'50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
					'75%': { opacity: '0.7', transform: 'scale(0.5) rotate(270deg)' }
				},
				'transcendent-flow': {
					'0%': { transform: 'translateX(-100%) rotateY(0deg)', opacity: '0' },
					'25%': { transform: 'translateX(-25%) rotateY(90deg)', opacity: '0.5' },
					'50%': { transform: 'translateX(0%) rotateY(180deg)', opacity: '1' },
					'75%': { transform: 'translateX(25%) rotateY(270deg)', opacity: '0.5' },
					'100%': { transform: 'translateX(100%) rotateY(360deg)', opacity: '0' }
				},
				'ethereal-drift': {
					'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.6' },
					'33%': { transform: 'translate(20px, -20px) rotate(120deg)', opacity: '1' },
					'66%': { transform: 'translate(-20px, -10px) rotate(240deg)', opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 25s linear infinite',
				'fade-in': 'fade-in 0.8s ease-out',
				'shimmer': 'shimmer 2.5s infinite linear',
				'divine-pulse': 'divine-pulse 5s ease-in-out infinite',
				'celestial-dance': 'celestial-dance 10s ease-in-out infinite',
				'holy-glow': 'holy-glow 4s ease-in-out infinite alternate',
				'divine-sparkle': 'divine-sparkle 2.5s ease-in-out infinite',
				'transcendent-flow': 'transcendent-flow 6s ease-in-out infinite',
				'ethereal-drift': 'ethereal-drift 12s ease-in-out infinite'
			},
			backgroundImage: {
				'radial-glow': 'radial-gradient(circle, rgba(155,135,245,0.2) 0%, rgba(10,10,20,0) 80%)',
				'divine-gradient': 'linear-gradient(45deg, #FFD700, #FF69B4, #8A2BE2, #9b87f5, #D946EF)',
				'celestial-gradient': 'linear-gradient(135deg, #FFD700 0%, #FF69B4 20%, #8A2BE2 40%, #9b87f5 60%, #0EA5E9 80%, #D946EF 100%)',
				'holy-radial': 'radial-gradient(ellipse at center, rgba(255,215,0,0.4) 0%, rgba(255,105,180,0.3) 25%, rgba(138,43,226,0.2) 50%, rgba(155,135,245,0.1) 75%, transparent 100%)',
				'transcendent-spiral': 'conic-gradient(from 0deg, #FFD700, #FF69B4, #8A2BE2, #9b87f5, #D946EF, #FFD700)'
			},
			boxShadow: {
				'neon': '0 0 10px theme("colors.divine.DEFAULT"), 0 0 30px theme("colors.divine.glow"), 0 0 60px theme("colors.mystic.gold")',
				'inner-glow': 'inset 0 0 30px theme("colors.divine.glow")',
				'divine': '0 0 40px rgba(255, 215, 0, 0.7), 0 0 80px rgba(255, 105, 180, 0.5), 0 0 120px rgba(138, 43, 226, 0.4), 0 0 160px rgba(155, 135, 245, 0.3)',
				'celestial': '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 215, 0, 0.5), 0 0 90px rgba(155, 135, 245, 0.4)',
				'holy': '0 0 70px rgba(255, 215, 0, 0.9), 0 0 140px rgba(255, 105, 180, 0.7), 0 0 210px rgba(138, 43, 226, 0.5), 0 0 280px rgba(155, 135, 245, 0.3)',
				'transcendent': '0 0 100px rgba(255, 215, 0, 1), 0 0 200px rgba(217, 70, 239, 0.8), 0 0 300px rgba(138, 43, 226, 0.6)'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
