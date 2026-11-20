# Study Planner

A small React app for planning study sessions: you add tasks with a subject and a number of minutes, tick them off, filter them (All, Active, Done) and clear the finished ones. Tasks are saved in your browser's `localStorage`, suggested tasks are loaded from `public/starter-tasks.json`, every task has its own page, a Stats page totals the minutes per subject, and a progress bar and the tab title show how much is left. It is the companion code for the Sypher course "React Fundamentals". The root of this repository is the finished app from the capstone lesson, built with React 19, Vite 8, React Router 8 and tested with Vitest 5. `steps/` holds the app as it looks after each earlier lesson that changes it.

## Set up your computer

You need three things: Node.js (which brings npm), Git and a current web browser.

### Node.js

Use Node.js 24 LTS or newer. The course is written for Node.js 26 LTS, and any current LTS line works. The lowest versions the tools accept are Node.js 22.22 for React Router 8, 22.12 for Vitest 5 and 20.19 for Vite 8.

On Windows, either run the installer from the official download page (https://nodejs.org/en/download) or use winget in a terminal:

```bash
winget install OpenJS.NodeJS.LTS
```

On macOS, either run the installer from the same download page or use Homebrew:

```bash
brew install node@24
```

Homebrew installs `node@24` without adding it to your `PATH` and prints the line to add to your shell profile. Follow that hint, then open a new terminal.

On Linux, the `nodejs` package in many distributions is too old for Vite 8, so use a version manager. With nvm (https://github.com/nvm-sh/nvm):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# open a new terminal, then:
nvm install --lts
```

fnm (https://github.com/Schniz/fnm) works the same way (`fnm install --lts`), and both also work on macOS if you want to switch Node.js versions per project.

Open a new terminal and check:

```bash
node --version
npm --version
```

You see version numbers like these (yours may be newer):

```text
v24.19.0
11.17.0
```

If the terminal says `command not found` or `is not recognized`, close it and open a new one so it picks up the updated `PATH`.

### Git

On Windows:

```bash
winget install --id Git.Git -e
```

On macOS, `xcode-select --install` installs Git with Apple's command line tools, or use Homebrew:

```bash
brew install git
```

On Linux, use your package manager:

```bash
sudo apt install git     # Debian, Ubuntu
sudo dnf install git     # Fedora, RHEL
```

Check it:

```bash
git --version
```

```text
git version 2.41.0
```

Any 2.x version is fine.

### A browser

A current Chrome, Edge or Firefox. Its developer tools (F12) show the console, which is the first place to look when the page is blank. The React Developer Tools extension is optional and adds a Components tab.

### Get the code

Clone the repository into the folder where you keep your projects (use the address shown on the repository page):

```bash
git clone <repository URL> study-planner
cd study-planner
```

If you do not want to use Git, download the repository as a ZIP file from its page, unzip it and open a terminal in the unzipped `study-planner` folder.

## Run the app

1. Open a terminal in the `study-planner` folder and install the packages:

   ```bash
   npm install
   ```

   This downloads React, React Router, Vite, Vitest and the rest into `node_modules` and writes `package-lock.json`. It ends with a line like `added 106 packages`.
2. Start the dev server:

   ```bash
   npm run dev
   ```

   ```text
     VITE v8.3.5  ready in 300 ms

     ➜  Local:   http://localhost:5173/
     ➜  Network: use --host to expose
     ➜  press h + enter to show help
   ```

   The version and the time differ on your machine. Leave it running; Ctrl+C stops it.
3. Open http://localhost:5173/ in your browser. On a first visit you see the heading Today, a progress bar at 33% done, the add form, the filters All (3), Active (2) and Done (1), three sample tasks and three suggested tasks. The tab title reads `2 left | Study Planner`. Add a task, tick one, open a task by clicking its title, and visit Stats in the header. Reload the page: everything is still there, because it is saved in `localStorage`.
4. To prove the whole app compiles, stop the dev server and build it:

   ```bash
   npm run build
   ```

   ```text
   vite v8.3.5 building client environment for production...
   transforming...
   ✓ 110 modules transformed.
   rendering chunks...
   computing gzip size...
   dist/index.html                   0.46 kB │ gzip:  0.29 kB
   dist/assets/index-<hash>.css      1.37 kB │ gzip:  0.63 kB
   dist/assets/index-<hash>.js     264.46 kB │ gzip: 83.98 kB
   ✓ built in 299ms
   ```

   The hashes, sizes and time can differ slightly. `npm run preview` serves `dist/` at http://localhost:4173/ so you can try the production build. `dist/` is plain static files; a real host needs a fallback that sends unknown paths to `index.html`, so a refresh on `/stats` works.

## Running the tests

```bash
npx vitest run
```

```text
 RUN  v5.1.0 /path/to/study-planner

 Test Files  2 passed (2)
      Tests  7 passed (7)
```

`npx vitest run --reporter=verbose` lists the seven tests by name: two for `minutesBySubject` in `src/state/stats.test.js` and five for the reducer in `src/state/tasksReducer.test.js`. `npm test` runs Vitest in watch mode instead: it re-runs the tests every time you save, and `q` quits.

`npm run lint` runs Oxlint. It reports three `only-export-components` warnings, for `SUBJECTS` in `AddTaskForm.jsx` and the two hooks in `TasksContext.jsx`. They only mean that hot reloading reloads those files fully; the app and the tests are not affected.

## Project layout

```text
study-planner/
  index.html                    page shell with the root div; loads src/main.jsx
  package.json                  scripts (dev, build, lint, preview, test) and dependencies
  vite.config.js                the React plugin and the Vitest settings (jsdom, setup file)
  .oxlintrc.json                lint rules, including the Rules of Hooks
  public/
    favicon.svg                 tab icon from the Vite template
    starter-tasks.json          the suggested tasks, fetched at run time
  src/
    main.jsx                    StrictMode, BrowserRouter and TasksProvider around App
    App.jsx                     the route table
    index.css                   global layout and color variables
    setupTests.js               registers the jest-dom matchers for Vitest
    state/
      tasksReducer.js           every change to the task list, as actions
      TasksContext.jsx          the provider, saving to localStorage, useTasks and useTasksDispatch
      storage.js                sample tasks and the localStorage helpers
      stats.js                  minutesBySubject for the Stats page
      *.test.js                 tests for the reducer and for stats.js
    hooks/
      useLocalStorageState.js   state that is saved to localStorage (the filter)
      useFetchJson.js           fetches JSON with loading and error states
    components/                 Layout, AddTaskForm, FilterBar, TaskItem (with its CSS Module), ProgressBar, StarterTasks
    pages/                      TasksPage, TaskDetailPage, StatsPage, NotFoundPage
  steps/                        the app after earlier lessons (see the lesson map)
```

## Lesson map

Each folder in `steps/` is a complete Vite project. To run one:

```bash
cd steps/07-rendering-lists-and-conditional-ui
npm install
npm run dev
```

Every step starts from the Vite template of lesson 1 (`npm create vite@latest study-planner -- --template react`), with the template's starter `App.jsx`, images and styles replaced by the lesson's code. In the early steps `src/index.css` and `src/App.css` are empty on purpose, as lesson 2 asks, so those pages are unstyled.

| Step folder | Lesson | What changes |
|---|---|---|
| `steps/02-components-and-jsx` | Components and JSX | `App` is made of `Header` and `TaskList` components with a fixed list of three tasks |
| `steps/03-props` | Props | `TaskItem` gets each task's title, subject, minutes and done flag through props |
| `steps/04-state-with-usestate` | State with useState | The tasks live in state; Done and Undo buttons and Add sample task change it |
| `steps/05-handling-events` | Handling Events | Click handlers tick and delete tasks, passed down to `TaskItem` |
| `steps/06-forms-and-inputs` | Forms and Inputs | `AddTaskForm`, a controlled form with title, subject and minutes |
| `steps/07-rendering-lists-and-conditional-ui` | Rendering Lists and Conditional UI | `FilterBar` with All, Active and Done counts, stable keys, and messages for empty lists |
| `steps/08-effects-and-data-fetching` | Effects and Data Fetching | Tasks are saved to `localStorage`; `StarterTasks` fetches `public/starter-tasks.json` |
| `steps/10-sharing-state` | Sharing State | The filter is lifted into `App` and shared by `FilterBar`, `Summary` and `TaskList` |
| `steps/11-usereducer` | useReducer | All task changes go through `tasksReducer` |
| `steps/12-custom-hooks` | Custom Hooks | `useLocalStorageState` and `useFetchJson`; the tab title shows how many tasks are left |
| `steps/13-styling-react-apps` | Styling React Apps | `App.css` with a light and a dark theme, a CSS Module for `TaskItem`, and `ProgressBar` |
| `steps/14-routing-with-react-router` | Routing with React Router | React Router 8: `Layout` with `NavLink`s, a page per task, a Stats page and a Not found page |
| root of the repository | Capstone | Everything combined: the reducer in context, hooks, components and pages in folders, tests, production build |

Lesson 9 (refs), lesson 15 (performance and the React Compiler) and lesson 16 (testing) teach with separate small examples, so they have no step folder. Lesson 16's test setup is part of the root app, and lesson 15's compiler is left off, as the capstone suggests turning it on as a next step.

## Troubleshooting

- **`Vite requires Node.js version 20.19+ or 22.12+`, or React Router or Vitest refuse to run.** Your Node.js is too old. Install a current LTS (see Set up your computer), open a new terminal, delete `node_modules` and run `npm install` again.
- **`Port 5173 is in use, trying another one...`.** Another dev server, often one from a `steps/` folder, is still running. Vite picks the next free port and prints it, so open the address it shows, or stop the other server with Ctrl+C in its terminal.
- **The page is blank.** Open the browser console (F12). An error there names the file and line. If you opened `index.html` by double-clicking it, that cannot work: the app only runs through `npm run dev` or `npm run preview`.
- **You want to start again with the three sample tasks.** The tasks and the filter are saved under the keys `study-planner.tasks` and `study-planner.filter`. In the browser console on the app's page, run `localStorage.clear()` and reload. The steps from lesson 8 on use the same address and can share saved data, so clearing it also helps when an older step shows tasks you did not expect.
- **`npm test` never finishes.** That is watch mode, which waits for you to save a file. Press `q` to quit, or use `npx vitest run` to run the tests once.

## License

Copyright (C) 2026 SypherNext

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). You may
use, study and change it. If you share a modified version, or run one as a website or service
that other people use, you must make your full modified source code available under the same
license. See [LICENSE](LICENSE) for the full terms.
