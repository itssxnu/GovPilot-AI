# GovPilot AI v1 — Sri Lankan Centralized Citizen Portal

GovPilot AI v1 is a centralized, service-agnostic digital public services portal built specifically for Sri Lankan citizens. No specific government service (such as Passport Renewal) is hardcoded into the application logic, routing, or layouts. Instead, services are defined and loaded dynamically via JSON-based configurations.

This platform provides a unified workspace for citizens to interact conversationally with all government departments, supported by automated OCR document checking, real-time stepper tracking, and direct delivery.

---

## Supported Services Catalog

The platform currently seeds and supports the following templates:
1. **Passport Renewal** (Department of Immigration & Emigration)
2. **National Identity Card (NIC) Application** (Department of Registration of Persons)
3. **Birth Certificate Copy Request** (Department of Registrar General)

---

## Core Features

1. **Service-Agnostic Engine**: Layouts, headers, document desks, progress bars, and vertical stepper trackers are populated dynamically from the active session's configuration parameters.
2. **Unified Conversational Dispatcher**: If a session starts with no preselected service, the citizen talks to a central AI dispatcher. The agent identifies the citizen's needs using text keyword intent detection and dynamically transitions the session to the target service (applying its workflow plan, steps, and document requirements).
3. **Conversational Agent Stream (SSE)**: Streams text messages and structured UI cards word-by-word from the FastAPI proxy using browser-native `ReadableStream` APIs.
4. **Automated OCR Polling**: Periodically requests document OCR scanning statuses every 2.5 seconds using TanStack Query and automatically halts polling once all files are verified.
5. **Multi-lingual Support**: Full support for English, Sinhala (`Noto Sans Sinhala`), and Tamil (`Noto Sans Tamil`) variable typography styles.
6. **A11y Floor**: Standard focus rings, contrast ratios exceeding WCAG AA limits, and layout height stability.

---

## Folder Structure

```text
src/
├── app/
│   ├── (marketing)/         # Centralized Services Directory Page
│   ├── (auth)/              # Login and Register
│   ├── (app)/               # Authenticated shell, Dashboard, Chat, Documents
│   ├── api/
│   │   ├── auth/            # NextAuth API routes
│   │   └── proxy/           # Mock FastAPI proxy (SSE stream, OCR checks)
│   ├── globals.css          # Custom base styles, focus rings
│   ├── layout.tsx           # Font loading configuration
│   └── providers.tsx        # React Query & NextAuth wrappers
├── components/
│   ├── cards/               # Structured presenter cards
│   ├── DocumentChecklist    # Dynamic checklists panel
│   ├── SessionHeader        # Dynamic title and progress bar
│   └── WorkflowTracker      # Dynamic vertical stepper tracker
├── hooks/
│   └── useChatStream        # SSE stream fetch wrapper
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root of the `frontend` directory:
```env
NEXTAUTH_SECRET=govpilot-ai-v1-secret-token-key-321
NEXTAUTH_URL=http://localhost:3000
```

### 3. Run the Development Server
```bash
npm run dev
```
The application will be live at [http://localhost:3000](http://localhost:3000).

### 4. Build for Production
Verify compilation and static pages rendering:
```bash
npm run build
```

---

## Running Automated Screen Verification

To capture browser screenshots of the key pages automatically:
1. Ensure the development server is running (`npm run dev`).
2. Open another terminal in the `frontend` directory and run:
```bash
node take_screenshots.js
```
The Puppeteer script will simulate authentication, initiate a passport renewal session, wait for OCR polling, trigger final confirmations, and capture screenshots directly in the artifacts folder.
