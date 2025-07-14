
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
				lavender: {
					'50': 'hsl(var(--lavender-50))',
					'100': 'hsl(var(--lavender-100))',
					'200': 'hsl(var(--lavender-200))',
					'300': 'hsl(var(--lavender-300))',
					'400': 'hsl(var(--lavender-400))',
					'500': 'hsl(var(--lavender-500))',
					'600': 'hsl(var(--lavender-600))',
					'700': 'hsl(var(--lavender-700))',
					'800': 'hsl(var(--lavender-800))',
					'900': 'hsl(var(--lavender-900))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' },
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' },
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'slide-out': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' },
				},
				'bounce': {
					'0%, 100%': {
						transform: 'translateY(0)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: 'translateY(-25%)',
						'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
					},
				},
				'float3D': {
					'0%, 100%': { 
						transform: 'translateY(0) translateX(0) translateZ(0) rotateX(0deg) rotateY(0deg)',
					},
					'25%': { 
						transform: 'translateY(-30px) translateX(15px) translateZ(10px) rotateX(10deg) rotateY(5deg)',
					},
					'50%': { 
						transform: 'translateY(-20px) translateX(-10px) translateZ(20px) rotateX(-5deg) rotateY(10deg)',
					},
					'75%': { 
						transform: 'translateY(-40px) translateX(20px) translateZ(5px) rotateX(15deg) rotateY(-5deg)',
					},
				},
				'rotate3D': {
					'0%': { transform: 'rotateZ(0deg)' },
					'100%': { transform: 'rotateZ(360deg)' },
				},
				'gradientShift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				'pulse3D': {
					'0%': { 
						boxShadow: '0 10px 30px rgba(67, 56, 202, 0.3), 0 5px 15px rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(67, 56, 202, 0.6)',
					},
					'70%': { 
						boxShadow: '0 10px 30px rgba(67, 56, 202, 0.3), 0 5px 15px rgba(0, 0, 0, 0.1), 0 0 0 15px rgba(67, 56, 202, 0)',
					},
					'100%': { 
						boxShadow: '0 10px 30px rgba(67, 56, 202, 0.3), 0 5px 15px rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(67, 56, 202, 0)',
					},
				},
				'backgroundFloat': {
					'0%, 100%': { transform: 'translateZ(-50px) rotateX(0deg) rotateY(0deg)' },
					'33%': { transform: 'translateZ(-40px) rotateX(2deg) rotateY(1deg)' },
					'66%': { transform: 'translateZ(-60px) rotateX(-1deg) rotateY(-2deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'scale-out': 'scale-out 0.3s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-out': 'slide-out 0.5s ease-out',
				'slide-out-right': 'slide-out-right 0.5s ease-out',
				'bounce': 'bounce 1s infinite',
				'float3D': 'float3D 12s ease-in-out infinite',
				'rotate3D': 'rotate3D 20s linear infinite',
				'gradientShift': 'gradientShift 4s ease infinite',
				'pulse3D': 'pulse3D 2s infinite',
				'backgroundFloat': 'backgroundFloat 30s ease-in-out infinite',
			},
			perspective: {
				'none': 'none',
				'500': '500px',
				'1000': '1000px',
				'1200': '1200px',
				'2000': '2000px',
			},
			transformStyle: {
				'flat': 'flat',
				'preserve-3d': 'preserve-3d',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
