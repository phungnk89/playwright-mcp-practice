# Playwright MCP - Test Automation

End-to-end test automation framework using **Playwright** + **TypeScript**:

- **UI tests** — Playwright Test for browser testing against [the-internet.herokuapp.com](https://the-internet.herokuapp.com)
- **API tests** — Playwright API testing against [restful-booker.herokuapp.com](https://restful-booker.herokuapp.com)

With **Playwright MCP** for AI-assisted test creation.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [API Tests](#api-tests)
- [Setting Up Playwright MCP](#setting-up-playwright-mcp)
- [Using MCP to Create Tests](#using-mcp-to-create-tests)

---

## Prerequisites

- **Node.js** >= 18 (recommended: latest LTS)
- **npm** (comes with Node.js)
- **VS Code** with [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) and [Playwright Test](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extensions

Verify your installation:

```bash
node --version
npm --version
```

---

## Project Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd playwright-mcp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

This downloads Chromium, Firefox, and WebKit browsers used by Playwright.

### 4. Verify setup

```bash
npm run test:ui
```

You should see test results in the terminal.

---

## Project Structure

```
playwright-mcp/
├── playwright.config.ts         # Playwright configuration (UI + API projects)
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
│
├── ui-tests/                    # UI test layer (Playwright Test)
│   ├── ab-testing.spec.ts       # A/B Testing tests
│   ├── checkboxes.spec.ts       # Checkboxes tests
│   ├── form-auth.spec.ts        # Form Authentication tests
│   └── *.spec.ts                # 44 spec files covering 87 test cases
│
├── objects/                     # Page Object layer
│   ├── index.ts                 # Barrel export for all page objects
│   ├── heroku-home.page.ts      # Home page object
│   └── *.page.ts                # Feature-specific page objects
│
├── api-tests/                   # API test layer (Playwright Test)
│   ├── ping.spec.ts             # Health check endpoint test
│   ├── auth.spec.ts             # Auth token tests
│   └── booking.spec.ts          # Booking CRUD tests
│
└── .github/workflows/test.yml   # CI pipeline (API + UI tests)
```

### Layer Breakdown

| Layer            | Directory             | Purpose                                                                |
| ---------------- | --------------------- | ---------------------------------------------------------------------- |
| **UI tests**     | `ui-tests/*.spec.ts`  | Playwright Test specs — describes **what** to test                     |
| **Page objects** | `objects/*.page.ts`   | Encapsulates page selectors and actions — keeps tests **maintainable** |
| **API tests**    | `api-tests/*.spec.ts` | API endpoint tests using Playwright's `APIRequestContext`              |

---

## How It Works

The test flow follows the **Page Object Model** pattern:

```
Spec File (.spec.ts)
    ↓  Tests use...
Page Objects (.page.ts)
    ↓  Page objects interact with...
Browser (Playwright)
```

### 1. Spec File

Describes test scenarios using Playwright Test:

```typescript
// ui-tests/checkboxes.spec.ts
import { test, expect } from '@playwright/test';
import { HerokuHomePage, CheckboxesPage } from '../objects';

test.describe('Checkboxes', () => {
  let homePage: HerokuHomePage;
  let checkboxesPage: CheckboxesPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Checkboxes');
    checkboxesPage = new CheckboxesPage(page);
  });

  test('Toggle checkbox 1', async () => {
    await checkboxesPage.toggleCheckbox(0);
    await expect(checkboxesPage.checkboxes.nth(0)).toBeChecked();
  });
});
```

### 2. Page Object

Encapsulates selectors and actions for a page:

```typescript
// objects/checkboxes.page.ts
import { type Locator, type Page } from '@playwright/test';

export class CheckboxesPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly checkboxes: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.checkboxes = page.locator('#checkboxes input[type="checkbox"]');
  }

  async toggleCheckbox(index: number) {
    await this.checkboxes.nth(index).click();
  }
}
```

---

## Writing Tests

### Step 1: Create a Page Object

Create `objects/my-feature.page.ts`:

```typescript
import { type Locator, type Page } from '@playwright/test';

export class MyFeaturePage {
  private readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
  }
}
```

Export it from `objects/index.ts`:

```typescript
export { MyFeaturePage } from './my-feature.page';
```

### Step 2: Create a Spec File

Create `ui-tests/my-feature.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';
import { HerokuHomePage, MyFeaturePage } from '../objects';

test.describe('My Feature', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('My Feature');
  });

  test('Verify page loads', async ({ page }) => {
    await expect(page).toHaveURL(/\/my-feature/);
    const myFeaturePage = new MyFeaturePage(page);
    await expect(myFeaturePage.heading).toBeVisible();
  });
});
```

### Step 3: Run the Test

```bash
npm run test:ui
```

---

## Running Tests

### Run all tests (UI + API)

```bash
npm test
```

### Run all UI tests

```bash
npm run test:ui
```

### Run all API tests

```bash
npm run test:api
```

### Run a specific spec file

```bash
npx playwright test ui-tests/checkboxes.spec.ts
```

### Run tests by name

```bash
npx playwright test --grep "Toggle checkbox"
```

### Run tests with tag annotation

```typescript
// In your spec file, use test annotations:
test('my test @smoke', async ({ page }) => { ... });
```

```bash
npx playwright test --grep "@smoke"
```

### View HTML report

```bash
npx playwright show-report
```

### Run in headed mode (see the browser)

```bash
npx playwright test --project=ui --headed
```

### Run in UI mode (interactive)

```bash
npx playwright test --project=ui --ui
```

---

## API Tests

API tests use Playwright's built-in `APIRequestContext` to test the [Restful Booker API](https://restful-booker.herokuapp.com).

### Test Coverage

| Test File         | Endpoints                            | Tests                      |
| ----------------- | ------------------------------------ | -------------------------- |
| `ping.spec.ts`    | `GET /ping`                          | Health check               |
| `auth.spec.ts`    | `POST /auth`                         | Valid/invalid credentials  |
| `booking.spec.ts` | `GET/POST/PUT/PATCH/DELETE /booking` | Full CRUD, filtering, auth |

### Run API tests

```bash
npm run test:api
```

---

## Setting Up Playwright MCP

**Playwright MCP (Model Context Protocol)** lets AI tools (like GitHub Copilot) control a real browser to inspect pages, capture snapshots, and generate tests automatically.

### 1. Configure MCP in VS Code

The project uses the official `@playwright/mcp` package. No separate installation is needed — it runs via `npx`.

**Option A: Workspace settings** (this project only — recommended)

Create or edit `.vscode/mcp.json`:

```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

**Option B: User settings** (applies to all projects)

Open VS Code `Settings (JSON)` and add:

```json
{
  "mcp": {
    "servers": {
      "playwright": {
        "command": "npx",
        "args": ["@playwright/mcp@latest"]
      }
    }
  }
}
```

### 2. Verify MCP is running

1. Open VS Code
2. Open GitHub Copilot Chat (Agent mode)
3. You should see Playwright MCP tools available (browser_navigate, browser_snapshot, browser_click, etc.)

---

## Using MCP to Create Tests

Playwright MCP allows you to ask GitHub Copilot to interact with a real browser and generate tests based on what it sees.

### Example Workflow

#### 1. Ask Copilot to explore a page

In Copilot Chat (Agent mode), type:

```
Navigate to https://the-internet.herokuapp.com/checkboxes
and take a snapshot of the page
```

Copilot will launch a browser, navigate to the page, and capture a snapshot of all elements.

#### 2. Ask Copilot to generate a test

```
Based on the page snapshot, create a Playwright spec file
and page object for testing the checkboxes on this page.
Follow the existing project structure.
```

Copilot will:

- Inspect the page elements from the snapshot
- Generate a `.page.ts` page object with selectors
- Generate a `.spec.ts` test file with Playwright actions and assertions

#### 3. Ask Copilot to interact and verify

```
Click the first checkbox and verify it becomes checked.
Then create a test for this interaction.
```

Copilot will physically click the checkbox in the browser, observe the result, and write accurate test code based on real behavior.

### Available MCP Actions

| Action                  | What it does                                  |
| ----------------------- | --------------------------------------------- |
| `browser_navigate`      | Navigate to a URL                             |
| `browser_snapshot`      | Capture an accessibility snapshot of the page |
| `browser_click`         | Click an element on the page                  |
| `browser_type`          | Type text into an input field                 |
| `browser_select_option` | Select dropdown options                       |
| `browser_hover`         | Hover over an element                         |
| `browser_screenshot`    | Take a screenshot                             |
| `browser_console`       | Read browser console logs                     |
| `browser_wait`          | Wait for page changes                         |

### Tips for Using MCP Effectively

1. **Start by navigating** — Always navigate to the target page first so Copilot can see the elements.
2. **Take snapshots** — Snapshots give Copilot the page structure to write accurate selectors.
3. **Be specific** — Tell Copilot to follow your project patterns (page objects, spec files).
4. **Iterate** — Ask Copilot to interact with elements, then verify the behavior before writing the test.
5. **Review generated code** — Always review AI-generated selectors and assertions for accuracy.

---

## Configuration Reference

### playwright.config.ts

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  retries: 2,
  reporter: [['list'], ['html']],
  projects: [
    {
      name: 'ui',
      testDir: './ui-tests',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://the-internet.herokuapp.com',
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'api',
      testDir: './api-tests',
      use: {
        baseURL: 'https://restful-booker.herokuapp.com',
        extraHTTPHeaders: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    },
  ],
});
```

### Key Playwright CLI Options

```bash
npx playwright test --project=ui          # Run only UI tests
npx playwright test --project=api         # Run only API tests
npx playwright test --grep "login"        # Filter by test name
npx playwright test --headed              # Run with visible browser
npx playwright test --ui                  # Interactive UI mode
npx playwright test --workers=4           # Control parallelism
npx playwright test --retries=0           # Disable retries
```
