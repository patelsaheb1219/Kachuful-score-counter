# Contributing to Kachuful Score Counter

First off, thank you for considering contributing to Kachuful Score Counter! It's people like you that make this app better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (screenshots, code snippets)
- **Describe the behavior you observed and what you expected**
- **Include details about your environment** (browser, OS, device)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any alternative solutions you've considered**

### Your First Code Contribution

Unsure where to begin? Look for issues tagged with:

- `good first issue` - Simple issues that are great for newcomers
- `help wanted` - Issues that need community support

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Kachuful-score-counter.git
   cd Kachuful-score-counter
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. Make your changes
6. Test your changes:
   ```bash
   npm start
   npm run build
   ```

## Development Process

1. **Write Clean Code**: Follow the existing code style and patterns
2. **Test Thoroughly**: Test your changes in multiple browsers and devices
3. **Update Documentation**: Update README.md or other docs if needed
4. **Keep Changes Focused**: Each PR should address a single concern

### Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to GitHub Pages
npm run deploy
```

## Style Guidelines

### TypeScript/React Guidelines

- Use functional components with hooks
- Use TypeScript types and interfaces
- Follow React best practices
- Use meaningful variable and function names
- Add comments for complex logic

### CSS Guidelines

- Use existing CSS classes when possible
- Follow the BEM naming convention for new classes
- Maintain responsive design
- Test on different screen sizes

### Code Example

```typescript
// Good
interface Player {
  id: number;
  name: string;
  score: number;
}

const updatePlayerScore = (playerId: number, points: number): void => {
  // Implementation
};

// Bad
const upd = (id, pts) => {
  // Implementation
};
```

## Commit Messages

Write clear and meaningful commit messages:

### Good Commit Messages

```
Add player history tracking feature
Fix scoring calculation bug for zero bids
Update README with installation instructions
Refactor trump suit rotation logic
```

### Bad Commit Messages

```
fix bug
update
changes
asdf
```

### Commit Message Format

```
<type>: <subject>

<body (optional)>

<footer (optional)>
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Example:**

```
feat: Add player history tracking

- Store bid and result history for each player
- Display history in a collapsible section
- Add tests for history functionality

Closes #42
```

## Pull Request Process

1. **Update Documentation**: Ensure README or other docs are updated
2. **Test Your Changes**: Verify everything works as expected
3. **Describe Your Changes**: Write a clear PR description
4. **Link Related Issues**: Reference any related issues
5. **Be Patient**: Wait for review and address feedback
6. **Keep It Clean**: Squash commits if requested

### Pull Request Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Testing
Describe how you tested your changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have tested my changes thoroughly
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
```

## Questions?

Feel free to open an issue with the `question` label, or reach out to the maintainers.

Thank you for contributing! 🎉
