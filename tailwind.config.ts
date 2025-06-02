
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
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
				// Enhanced divine colors for MAXIMUM HOLINESS
				divine: {
					DEFAULT: '#9b87f5', // Primary divine purple
					light: '#D6BCFA',   // Light angelic purple
					dark: '#1A1F2C',    // Deep cosmic purple
					glow: '#8B5CF6',    // Vivid divine glow
					celestial: '#FFD700', // Golden celestial light
					sacred: '#FF69B4',  // Sacred pink
					holy: '#FFFFFF',    // Pure holy white
				},
				mystic: {
					DEFAULT: '#D946EF',  // Magenta mystical energy
					gold: '#FFD700',     // Divine gold
					blue: '#0EA5E9',     // Celestial blue
					violet: '#8A2BE2',   // Deep violet wisdom
					rose: '#FF1493',     // Divine rose
					silver: '#C0C0C0',   // Silver moonlight
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				// DIVINE ANIMATIONS FOR MAXIMUM HOLINESS
				'float': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'25%': { transform: 'translateY(-10px) rotate(1deg)' },
					'75%': { transform: 'translateY(-5px) rotate(-1deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '0.7',
						boxShadow: '0 0 20px rgba(155, 135, 245, 0.5)'
					},
					'50%': { 
						opacity: '1',
						boxShadow: '0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(217, 70, 239, 0.6)'
					}
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' }
				},
				'divine-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						filter: 'brightness(1) hue-rotate(0deg)'
					},
					'50%': { 
						transform: 'scale(1.05)',
						filter: 'brightness(1.2) hue-rotate(10deg)'
					}
				},
				'celestial-dance': {
					'0%': { transform: 'translateY(0) rotate(0deg)' },
					'25%': { transform: 'translateY(-20px) rotate(5deg)' },
					'50%': { transform: 'translateY(-10px) rotate(0deg)' },
					'75%': { transform: 'translateY(-15px) rotate(-5deg)' },
					'100%': { transform: 'translateY(0) rotate(0deg)' }
				},
				'holy-glow': {
					'0%, 100%': { 
						textShadow: '0 0 10px #FFD700, 0 0 20px #FF69B4, 0 0 30px #8A2BE2'
					},
					'50%': { 
						textShadow: '0 0 20px #FFD700, 0 0 40px #FF69B4, 0 0 60px #8A2BE2, 0 0 80px #FFFFFF'
					}
				},
				'divine-sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
					'50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'fade-in': 'fade-in 0.7s ease-out',
				'shimmer': 'shimmer 3s infinite linear',
				'divine-pulse': 'divine-pulse 4s ease-in-out infinite',
				'celestial-dance': 'celestial-dance 8s ease-in-out infinite',
				'holy-glow': 'holy-glow 3s ease-in-out infinite alternate',
				'divine-sparkle': 'divine-sparkle 2s ease-in-out infinite'
			},
			backgroundImage: {
				'radial-glow': 'radial-gradient(circle, rgba(155,135,245,0.15) 0%, rgba(10,10,20,0) 70%)',
				'divine-gradient': 'linear-gradient(45deg, #FFD700, #FF69B4, #8A2BE2, #9b87f5)',
				'celestial-gradient': 'linear-gradient(135deg, #FFD700 0%, #FF69B4 25%, #8A2BE2 50%, #9b87f5 75%, #0EA5E9 100%)',
				'holy-radial': 'radial-gradient(ellipse at center, rgba(255,215,0,0.3) 0%, rgba(255,105,180,0.2) 30%, rgba(138,43,226,0.1) 60%, transparent 100%)'
			},
			boxShadow: {
				'neon': '0 0 5px theme("colors.divine.DEFAULT"), 0 0 20px theme("colors.divine.glow")',
				'inner-glow': 'inset 0 0 20px theme("colors.divine.glow")',
				'divine': '0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 105, 180, 0.4), 0 0 90px rgba(138, 43, 226, 0.3)',
				'celestial': '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 215, 0, 0.4), 0 0 60px rgba(155, 135, 245, 0.3)',
				'holy': '0 0 50px rgba(255, 215, 0, 0.8), 0 0 100px rgba(255, 105, 180, 0.6), 0 0 150px rgba(138, 43, 226, 0.4)'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
