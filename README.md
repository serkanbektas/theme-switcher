# Theme Switcher

A modern, responsive web application built with Next.js 15 that provides a beautiful theme switching functionality with dark/light mode support.

## Features

- 🌓 Dark/Light mode switching
- 🎨 Custom theme support
- 📱 Responsive design
- ⚡ Built with Next.js 15
- 🎨 TypeScript support
- 🎨 Tailwind CSS for styling
- 🧪 Vitest for testing

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Testing**: Vitest
- **Icons**: Lucide React
- **Font**: Geist

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm (Package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/serkanbektas/theme-switcher.git
cd theme-switcher
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm test` - Run tests
- `pnpm test:ui` - Run tests with UI
- `pnpm test:coverage` - Generate test coverage
- `pnpm format:write` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## Project Structure

```
src/
├── app/          # Next.js app directory
├── components/   # Reusable components
├── lib/          # Utility functions
├── store/        # Zustand store
├── styles/       # Global styles
├── themes/       # Theme configurations
├── types/        # TypeScript types
└── test/         # Test files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Serkan Bektas
