# Enhanced Payload CMS Website Template

A feature-rich, production-ready website template for Payload CMS with advanced components, blocks, and functionality.

![Payload CMS Enhanced Website Template](https://raw.githubusercontent.com/payloadcms/payload/main/templates/website/public/payload-website-template.jpg)

## ✨ Features

This template builds upon the official Payload CMS website template with significant enhancements:

### Advanced Block System
- ✅ Rich media handling (galleries, video players, audio)
- ✅ Interactive components (accordions, tabs, maps)
- ✅ Marketing elements (testimonials, team showcase, CTAs)
- ✅ Specialized content (code snippets, timelines, comparisons)

### Functional Improvements
- ✅ Comprehensive SEO toolkit
- ✅ Performance optimizations
- ✅ Multilingual support
- ✅ Enhanced authentication
- ✅ Analytics integration

## 🚀 Quick Start

### Development

1. Clone this repository
2. Install dependencies

```bash
yarn install
```

3. Configure environment variables

```
cp .env.example .env
```

4. Start the development server

```bash
yarn dev
```

The admin panel will be available at `http://localhost:3000/admin`.

### Production

1. Build the project

```bash
yarn build
```

2. Start the production server

```bash
yarn start
```

## 🏗️ Create a New Project Using This Template

```bash
npx create-payload-app@latest my-project --template https://github.com/kelibst/payload-template-enhanced-website
```

## 📦 Project Structure

```
project-root/
├── src/
│   ├── blocks/        # Enhanced block components
│   ├── collections/   # Payload collections
│   ├── components/    # React components
│   ├── fields/        # Custom field types
│   ├── globals/       # Global configuration
│   ├── hooks/         # Custom hooks
│   ├── payload/       # Payload configuration
│   ├── utilities/     # Helper functions
│   └── app/           # Next.js application
├── public/            # Static assets
├── next.config.js     # Next.js configuration
├── payload.config.ts  # Payload configuration
└── ...
```

## 🛠️ Customization

### Adding New Blocks

1. Create a new block component in `src/blocks`
2. Add the block type to the block collection
3. Create the corresponding React component

Example:

```tsx
// src/blocks/MyNewBlock/config.ts
import { Block } from 'payload/types';

export const MyNewBlock: Block = {
  slug: 'my-new-block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    // Add more fields as needed
  ],
};
```

### Styling

This template uses a combination of:
- TailwindCSS for utility-first styling
- CSS Modules for component-specific styles

## ⚙️ Environment Variables

| Variable | Description |
|----------|-------------|
| `PAYLOAD_SECRET` | Secret key for Payload |
| `MONGODB_URI` | MongoDB connection string |
| `NEXT_PUBLIC_SERVER_URL` | URL for the server |
| `PAYLOAD_PUBLIC_SERVER_URL` | URL for Payload CMS |

## 📚 Documentation

For detailed documentation on all components and features, see the [documentation site](https://github.com/kelibst/payload-template-enhanced-website/docs).

For Payload CMS documentation, visit [payloadcms.com](https://payloadcms.com/docs).

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- [Payload CMS](https://payloadcms.com) for the original website template
- All contributors who participate in this project
