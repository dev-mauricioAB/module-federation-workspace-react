# Module Federation Workspace — React Micro Frontends 🚀

This repository demonstrates a **micro-frontend architecture** using **Webpack Module Federation** with React.  
It’s structured as a workspace of multiple React applications (host + remotes + shared) that together form a composable frontend system.

## 🧩 What It Is

With Module Federation, you can build frontend applications independently and then **compose them at runtime**.  
This setup lets different teams or features evolve autonomously, while still being integrated under a single shell (host).  

In this project:

- **Shell / Host** loads multiple remote apps and acts as the unified entry point.  
- **Remote applications** provide isolated UI modules (features) that the Host consumes dynamically.  
- **Shared modules / libraries** (e.g. shared UI components) are delegated to avoid duplication and reduce bundle size.

You’ll see how React apps can expose and consume components across builds using Webpack’s Module Federation plugin.

---

## 📦 Module Layout & Technologies

| Module / Package | Role | Key Tech |
|------------------|------|----------------------------|
| **`host` / shell** | The container application that consumes remotes | React, Webpack Module Federation |
| **`remote-*.tsx / apps`** | Independent feature apps (remotes) | React, exposed via Module Federation |
| **`shared` / `components-library`** | UI components or utilities shared across apps | React, shared dependencies |
| **Monorepo / Workspace config** | Links all apps together under one repo | Yarn / NPM workspaces, Webpack, Typescript |

You’ll see files like `webpack.config.js` for each app that configure `exposes`, `remotes`, and `shared` modules.

---

## 🏗️ Architecture & Flow

Here’s a simplified flow:

```

[ Host / Shell ]
├── imports → RemoteA
├── imports → RemoteB
└── uses → Shared components / libs

````

- The **Host** app lazy-loads remote modules (e.g. `RemoteA/Button`, `RemoteB/Page`) via Module Federation.
- **Remotes** expose specific modules (components, pages) via `exposes` in their webpack config.
- Dependencies like `react`, `react-dom`, and other shared libraries are marked as **shared** so they are not duplicated across bundles.
- This design enables **independent deployments** of remotes — you can update a remote without rebuilding the entire shell.

---

## 🧠 Why It Matters / What You’ll Learn

- Micro-frontend design with **runtime composition**  
- How to configure **Webpack Module Federation** in multiple React apps  
- Dependency sharing, version conflicts, and bundle deduplication  
- Decoupled deployment of frontend modules  
- Typescript and workspace-based architecture in frontend environments  

---

## 🚀 How to Run It Locally

### Prerequisites

- Node.js / npm or Yarn  
- Basic knowledge of React & Webpack  

### Setup

1. Clone the repo  
   ```bash
   git clone https://github.com/dev-mauricioAB/module-federation-workspace-react.git
   cd module-federation-workspace-react
   ```

2. Install dependencies

   ```bash
   npm install
   # or yarn install
   ```

3. Start the Host and Remotes
   Depending on the workspace scripts, run something like:

   ```bash
   npm run start:host
   npm run start:remote1
   npm run start:remote2
   ```

   Or a workspace-level script that boots all together.

4. Open the Host app in browser — you should see UI composed from the remotes.

Each remote and the host app must be running so that the Federated modules resolve.

---

## 📁 Directory Structure (Example)

```
/
├── host/                  # Shell app (container)
├── remote-foo/            # Remote application #1
├── remote-bar/            # Remote application #2
├── shared/                # Shared components / libs
├── webpack.common.js      # Shared webpack settings (if any)
└── package.json / workspace config
```

---

## 🔍 Challenges & Considerations

* **Version mismatches**: Be careful with shared dependency versions across host and remotes.
* **Lazy loading & fallback**: The host must handle remote loading failure (e.g. Remote down).
* **Bundle size & performance**: Shared modules help reduce duplication.
* **TypeScript typings**: You may need `*.d.ts` definitions for remote modules to import types safely.
* **Deployment coordination**: Remotes may deploy independently, but their `remoteEntry.js` endpoints must be known by the host.

---

## 🔧 Possible Improvements & Next Steps

* Add **CI/CD pipeline** to auto-deploy host and remotes
* Integrate **error boundaries / fallback UI** in the host for remote failovers
* Add **unit / integration tests** for shared and remote components
* Introduce **version constraints / feature flags** for shared modules
* Create architecture diagrams (UML or component maps)
* Explore runtime loading from **CDN / remote URLs**

---

## 👨‍💻 About Me & My Role

As a **Frontend Specialist**, this project was my exploration into **micro-frontends** and **module federation**.
I primarily built and orchestrated the Host app, integrated remotes, configured Webpack, and handled the composition of UI modules across apps.
This deepened my skills in:

* React + Webpack internals
* Frontend architecture beyond monolithic SPA
* Understanding runtime modularization and deployment independence

---

## 🤝 Related Reading & References

* Article: *Module Federation & ReactJS* by Maurício Alexandre (walkthrough of micro-frontend architecture) ([Medium][1])
* Blog: Micro-frontends with Webpack’s Module Federation (overview & examples) ([JavaScript in Plain English][2])
* Discussion: Using Module Federation in Create React App via CRACO plugin ([stackoverflow.com][3])

---

> ⚠ Note: This project is primarily educational / demonstrative. It’s meant to showcase how micro-frontends can be structured and composed in a React ecosystem using modern tooling.

[1]: https://dev-mauricioalexandre.medium.com/module-federation-reactjs-210474243daa?utm_source=chatgpt.com "Module Federation & ReactJS - Maurício Alexandre Barroso"
[2]: https://javascript.plainenglish.io/micro-frontends-using-webpacks-module-federation-with-create-react-app-f6a890600bae?utm_source=chatgpt.com "Micro Frontends Using Webpack's Module Federation with ..."
[3]: https://stackoverflow.com/questions/67297300/how-to-use-webpack-module-federation-plugin-with-create-react-app-without-ejecti?utm_source=chatgpt.com "How to use Webpack Module Federation plugin with create ..."
