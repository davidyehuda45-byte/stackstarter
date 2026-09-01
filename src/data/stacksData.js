export const STACKS_DATA = [
  // ================= WEB FRONTEND =================
  {
    id: 'react-vite',
    name: 'React (Vite)',
    category: 'Frontend',
    description: 'Library UI populer berbasis komponen dengan build tool Vite super kencang.',
    prerequisites: ['Node.js v18+'],
    commands: {
      cmd: [
        { label: 'Buat project baru', code: 'npm create vite@latest my-react-app -- --template react' },
        { label: 'Masuk ke folder', code: 'cd my-react-app' },
        { label: 'Install dependencies', code: 'npm install' },
        { label: 'Jalankan dev server', code: 'npm run dev' }
      ],
      powershell: [
        { label: 'Buat project baru', code: 'npm create vite@latest my-react-app -- --template react' },
        { label: 'Masuk ke folder', code: 'cd my-react-app' },
        { label: 'Install dependencies', code: 'npm install' },
        { label: 'Jalankan dev server', code: 'npm run dev' }
      ],
      bash: [
        { label: 'Buat project baru', code: 'npm create vite@latest my-react-app -- --template react' },
        { label: 'Masuk ke folder', code: 'cd my-react-app' },
        { label: 'Install dependencies', code: 'npm install' },
        { label: 'Jalankan dev server', code: 'npm run dev' }
      ]
    }
  },
  {
    id: 'next-js',
    name: 'Next.js',
    category: 'Frontend',
    description: 'Framework React full-stack untuk SSR, SSG, dan App Router.',
    prerequisites: ['Node.js v18.17+'],
    commands: {
      cmd: [
        { label: 'Buat project Next.js', code: 'npx create-next-app@latest my-next-app' },
        { label: 'Masuk ke folder', code: 'cd my-next-app' },
        { label: 'Jalankan server dev', code: 'npm run dev' }
      ],
      powershell: [
        { label: 'Buat project Next.js', code: 'npx create-next-app@latest my-next-app' },
        { label: 'Masuk ke folder', code: 'cd my-next-app' },
        { label: 'Jalankan server dev', code: 'npm run dev' }
      ],
      bash: [
        { label: 'Buat project Next.js', code: 'npx create-next-app@latest my-next-app' },
        { label: 'Masuk ke folder', code: 'cd my-next-app' },
        { label: 'Jalankan server dev', code: 'npm run dev' }
      ]
    }
  },
  {
    id: 'vue-vite',
    name: 'Vue 3 (Vite)',
    category: 'Frontend',
    description: 'Framework progressive JavaScript yang simpel dan performan.',
    prerequisites: ['Node.js v18+'],
    commands: {
      cmd: [
        { label: 'Buat project Vue', code: 'npm create vue@latest my-vue-app' },
        { label: 'Masuk ke folder', code: 'cd my-vue-app' },
        { label: 'Install & Jalankan', code: 'npm install & npm run dev' }
      ],
      powershell: [
        { label: 'Buat project Vue', code: 'npm create vue@latest my-vue-app' },
        { label: 'Masuk ke folder', code: 'cd my-vue-app' },
        { label: 'Install & Jalankan', code: 'npm install; npm run dev' }
      ],
      bash: [
        { label: 'Buat project Vue', code: 'npm create vue@latest my-vue-app' },
        { label: 'Masuk ke folder', code: 'cd my-vue-app' },
        { label: 'Install & Jalankan', code: 'npm install && npm run dev' }
      ]
    }
  },
  {
    id: 'svelte-kit',
    name: 'SvelteKit',
    category: 'Frontend',
    description: 'Framework Svelte tanpa virtual DOM untuk aplikasi web yang sangat responsif.',
    prerequisites: ['Node.js v18+'],
    commands: {
      cmd: [
        { label: 'Inisialisasi Svelte', code: 'npx sv create my-svelte-app' },
        { label: 'Masuk ke folder', code: 'cd my-svelte-app' },
        { label: 'Install & Jalankan', code: 'npm install & npm run dev' }
      ],
      powershell: [
        { label: 'Inisialisasi Svelte', code: 'npx sv create my-svelte-app' },
        { label: 'Masuk ke folder', code: 'cd my-svelte-app' },
        { label: 'Install & Jalankan', code: 'npm install; npm run dev' }
      ],
      bash: [
        { label: 'Inisialisasi Svelte', code: 'npx sv create my-svelte-app' },
        { label: 'Masuk ke folder', code: 'cd my-svelte-app' },
        { label: 'Install & Jalankan', code: 'npm install && npm run dev' }
      ]
    }
  },
  {
    id: 'angular',
    name: 'Angular',
    category: 'Frontend',
    description: 'Platform dan framework TypeScript enterprise skala besar buatan Google.',
    prerequisites: ['Node.js v18.13+', 'Angular CLI'],
    commands: {
      cmd: [
        { label: 'Install Angular CLI', code: 'npm install -g @angular/cli' },
        { label: 'Buat project baru', code: 'ng new my-angular-app' },
        { label: 'Masuk & Jalankan', code: 'cd my-angular-app & ng serve --open' }
      ],
      powershell: [
        { label: 'Install Angular CLI', code: 'npm install -g @angular/cli' },
        { label: 'Buat project baru', code: 'ng new my-angular-app' },
        { label: 'Masuk & Jalankan', code: 'cd my-angular-app; ng serve --open' }
      ],
      bash: [
        { label: 'Install Angular CLI', code: 'npm install -g @angular/cli' },
        { label: 'Buat project baru', code: 'ng new my-angular-app' },
        { label: 'Masuk & Jalankan', code: 'cd my-angular-app && ng serve --open' }
      ]
    }
  },

  // ================= WEB BACKEND =================
  {
    id: 'express-js',
    name: 'Express.js',
    category: 'Backend',
    description: 'Framework web minimalis dan fleksibel untuk Node.js.',
    prerequisites: ['Node.js v18+'],
    commands: {
      cmd: [
        { label: 'Buat folder & masuk', code: 'mkdir my-express-api & cd my-express-api' },
        { label: 'Inisialisasi package', code: 'npm init -y' },
        { label: 'Install Express & Nodemon', code: 'npm install express & npm install -D nodemon' },
        { label: 'Jalankan server dev', code: 'npx nodemon index.js' }
      ],
      powershell: [
        { label: 'Buat folder & masuk', code: 'mkdir my-express-api; cd my-express-api' },
        { label: 'Inisialisasi package', code: 'npm init -y' },
        { label: 'Install Express & Nodemon', code: 'npm install express; npm install -D nodemon' },
        { label: 'Jalankan server dev', code: 'npx nodemon index.js' }
      ],
      bash: [
        { label: 'Buat folder & masuk', code: 'mkdir my-express-api && cd my-express-api' },
        { label: 'Inisialisasi package', code: 'npm init -y' },
        { label: 'Install Express & Nodemon', code: 'npm install express && npm install -D nodemon' },
        { label: 'Jalankan server dev', code: 'npx nodemon index.js' }
      ]
    }
  },
  {
    id: 'nest-js',
    name: 'NestJS',
    category: 'Backend',
    description: 'Framework Node.js progresif berbasis TypeScript dengan arsitektur terstruktur.',
    prerequisites: ['Node.js v16+'],
    commands: {
      cmd: [
        { label: 'Install Nest CLI', code: 'npm install -g @nestjs/cli' },
        { label: 'Buat project baru', code: 'nest new my-nest-api' },
        { label: 'Masuk & Jalankan', code: 'cd my-nest-api & npm run start:dev' }
      ],
      powershell: [
        { label: 'Install Nest CLI', code: 'npm install -g @nestjs/cli' },
        { label: 'Buat project baru', code: 'nest new my-nest-api' },
        { label: 'Masuk & Jalankan', code: 'cd my-nest-api; npm run start:dev' }
      ],
      bash: [
        { label: 'Install Nest CLI', code: 'npm install -g @nestjs/cli' },
        { label: 'Buat project baru', code: 'nest new my-nest-api' },
        { label: 'Masuk & Jalankan', code: 'cd my-nest-api && npm run start:dev' }
      ]
    }
  },
  {
    id: 'hono-js',
    name: 'Hono',
    category: 'Backend',
    description: 'Framework web ultra kencang untuk Cloudflare Workers, Deno, Bun, dan Node.js.',
    prerequisites: ['Node.js v18+' /* or Bun */],
    commands: {
      cmd: [
        { label: 'Buat project Hono', code: 'npm create hono@latest my-hono-app' },
        { label: 'Masuk ke folder', code: 'cd my-hono-app' },
        { label: 'Install & Jalankan', code: 'npm install & npm run dev' }
      ],
      powershell: [
        { label: 'Buat project Hono', code: 'npm create hono@latest my-hono-app' },
        { label: 'Masuk ke folder', code: 'cd my-hono-app' },
        { label: 'Install & Jalankan', code: 'npm install; npm run dev' }
      ],
      bash: [
        { label: 'Buat project Hono', code: 'npm create hono@latest my-hono-app' },
        { label: 'Masuk ke folder', code: 'cd my-hono-app' },
        { label: 'Install & Jalankan', code: 'npm install && npm run dev' }
      ]
    }
  },
  {
    id: 'django',
    name: 'Django',
    category: 'Backend',
    description: 'Framework Python High-Level dengan prinsip "Batteries Included".',
    prerequisites: ['Python v3.10+', 'pip'],
    commands: {
      cmd: [
        { label: 'Buat virtualenv', code: 'python -m venv venv' },
        { label: 'Aktifkan virtualenv', code: 'venv\\Scripts\\activate.bat' },
        { label: 'Install Django', code: 'pip install django' },
        { label: 'Buat project & run', code: 'django-admin startproject my_app & cd my_app & python manage.py runserver' }
      ],
      powershell: [
        { label: 'Buat virtualenv', code: 'python -m venv venv' },
        { label: 'Aktifkan virtualenv', code: '.\\venv\\Scripts\\Activate.ps1' },
        { label: 'Install Django', code: 'pip install django' },
        { label: 'Buat project & run', code: 'django-admin startproject my_app; cd my_app; python manage.py runserver' }
      ],
      bash: [
        { label: 'Buat virtualenv', code: 'python3 -m venv venv' },
        { label: 'Aktifkan virtualenv', code: 'source venv/bin/activate' },
        { label: 'Install Django', code: 'pip install django' },
        { label: 'Buat project & run', code: 'django-admin startproject my_app && cd my_app && python manage.py runserver' }
      ]
    }
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'Backend',
    description: 'Framework Python modern & kencang untuk membuat REST API berbasis OpenAPI.',
    prerequisites: ['Python v3.8+', 'pip'],
    commands: {
      cmd: [
        { label: 'Buat virtualenv', code: 'python -m venv venv' },
        { label: 'Aktifkan virtualenv', code: 'venv\\Scripts\\activate.bat' },
        { label: 'Install FastAPI & Uvicorn', code: 'pip install fastapi uvicorn' },
        { label: 'Jalankan server', code: 'uvicorn main:app --reload' }
      ],
      powershell: [
        { label: 'Buat virtualenv', code: 'python -m venv venv' },
        { label: 'Aktifkan virtualenv', code: '.\\venv\\Scripts\\Activate.ps1' },
        { label: 'Install FastAPI & Uvicorn', code: 'pip install fastapi uvicorn' },
        { label: 'Jalankan server', code: 'uvicorn main:app --reload' }
      ],
      bash: [
        { label: 'Buat virtualenv', code: 'python3 -m venv venv' },
        { label: 'Aktifkan virtualenv', code: 'source venv/bin/activate' },
        { label: 'Install FastAPI & Uvicorn', code: 'pip install fastapi uvicorn' },
        { label: 'Jalankan server', code: 'uvicorn main:app --reload' }
      ]
    }
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'Backend',
    description: 'Framework PHP paling populer dengan sintaks elegan dan ekosistem lengkap.',
    prerequisites: ['PHP v8.2+', 'Composer'],
    commands: {
      cmd: [
        { label: 'Buat project Laravel', code: 'composer create-project laravel/laravel my-laravel-app' },
        { label: 'Masuk ke folder', code: 'cd my-laravel-app' },
        { label: 'Jalankan server lokal', code: 'php artisan serve' }
      ],
      powershell: [
        { label: 'Buat project Laravel', code: 'composer create-project laravel/laravel my-laravel-app' },
        { label: 'Masuk ke folder', code: 'cd my-laravel-app' },
        { label: 'Jalankan server lokal', code: 'php artisan serve' }
      ],
      bash: [
        { label: 'Buat project Laravel', code: 'composer create-project laravel/laravel my-laravel-app' },
        { label: 'Masuk ke folder', code: 'cd my-laravel-app' },
        { label: 'Jalankan server lokal', code: 'php artisan serve' }
      ]
    }
  },
  {
    id: 'gin-golang',
    name: 'Gin (Go)',
    category: 'Backend',
    description: 'Framework HTTP web performa sangat tinggi untuk bahasa Go.',
    prerequisites: ['Go 1.20+'],
    commands: {
      cmd: [
        { label: 'Buat folder & inisialisasi module', code: 'mkdir my-go-api & cd my-go-api & go mod init my-go-api' },
        { label: 'Install Gin framework', code: 'go get -u github.com/gin-gonic/gin' },
        { label: 'Jalankan program', code: 'go run main.go' }
      ],
      powershell: [
        { label: 'Buat folder & inisialisasi module', code: 'mkdir my-go-api; cd my-go-api; go mod init my-go-api' },
        { label: 'Install Gin framework', code: 'go get -u github.com/gin-gonic/gin' },
        { label: 'Jalankan program', code: 'go run main.go' }
      ],
      bash: [
        { label: 'Buat folder & inisialisasi module', code: 'mkdir my-go-api && cd my-go-api && go mod init my-go-api' },
        { label: 'Install Gin framework', code: 'go get -u github.com/gin-gonic/gin' },
        { label: 'Jalankan program', code: 'go run main.go' }
      ]
    }
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    category: 'Backend',
    description: 'Framework enterprise berdaya tahan tinggi buatan Pivotal/VMware untuk Java.',
    prerequisites: ['JDK 17+', 'Maven / Gradle'],
    commands: {
      cmd: [
        { label: 'Inisialisasi via CLI (Spring Initializr)', code: 'curl https://start.spring.io/starter.zip -d dependencies=web -o my-app.zip' },
        { label: 'Ekstrak & masuk', code: 'tar -xf my-app.zip & cd my-app' },
        { label: 'Jalankan aplikasi (Maven)', code: 'mvnw spring-boot:run' }
      ],
      powershell: [
        { label: 'Inisialisasi via CLI (Spring Initializr)', code: 'Invoke-WebRequest -Uri https://start.spring.io/starter.zip -OutFile my-app.zip' },
        { label: 'Ekstrak & masuk', code: 'Expand-Archive my-app.zip -DestinationPath my-app; cd my-app' },
        { label: 'Jalankan aplikasi (Maven)', code: '.\\mvnw spring-boot:run' }
      ],
      bash: [
        { label: 'Inisialisasi via CLI (Spring Initializr)', code: 'curl https://start.spring.io/starter.zip -d dependencies=web -o my-app.zip' },
        { label: 'Ekstrak & masuk', code: 'unzip my-app.zip -d my-app && cd my-app' },
        { label: 'Jalankan aplikasi (Maven)', code: './mvnw spring-boot:run' }
      ]
    }
  },

  // ================= MOBILE =================
  {
    id: 'react-native-expo',
    name: 'React Native (Expo)',
    category: 'Mobile',
    description: 'Platform mudah untuk membuat aplikasi Android & iOS menggunakan React.',
    prerequisites: ['Node.js v18+', 'Expo Go App'],
    commands: {
      cmd: [
        { label: 'Buat app Expo', code: 'npx create-expo-app my-expo-app' },
        { label: 'Masuk ke folder', code: 'cd my-expo-app' },
        { label: 'Jalankan bundler Metro', code: 'npx expo start' }
      ],
      powershell: [
        { label: 'Buat app Expo', code: 'npx create-expo-app my-expo-app' },
        { label: 'Masuk ke folder', code: 'cd my-expo-app' },
        { label: 'Jalankan bundler Metro', code: 'npx expo start' }
      ],
      bash: [
        { label: 'Buat app Expo', code: 'npx create-expo-app my-expo-app' },
        { label: 'Masuk ke folder', code: 'cd my-expo-app' },
        { label: 'Jalankan bundler Metro', code: 'npx expo start' }
      ]
    }
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'Mobile',
    description: 'Toolkit UI lintas platform dari Google menggunakan bahasa Dart.',
    prerequisites: ['Flutter SDK', 'Android Studio / Xcode'],
    commands: {
      cmd: [
        { label: 'Buat project Flutter', code: 'flutter create my_flutter_app' },
        { label: 'Masuk ke folder', code: 'cd my_flutter_app' },
        { label: 'Jalankan di emulator', code: 'flutter run' }
      ],
      powershell: [
        { label: 'Buat project Flutter', code: 'flutter create my_flutter_app' },
        { label: 'Masuk ke folder', code: 'cd my_flutter_app' },
        { label: 'Jalankan di emulator', code: 'flutter run' }
      ],
      bash: [
        { label: 'Buat project Flutter', code: 'flutter create my_flutter_app' },
        { label: 'Masuk ke folder', code: 'cd my_flutter_app' },
        { label: 'Jalankan di emulator', code: 'flutter run' }
      ]
    }
  },

  // ================= DATABASE & ORM =================
  {
    id: 'prisma-orm',
    name: 'Prisma ORM',
    category: 'Database',
    description: 'Next-generation ORM untuk Node.js & TypeScript (PostgreSQL, MySQL, SQLite, MongoDB).',
    prerequisites: ['Node.js v16+'],
    commands: {
      cmd: [
        { label: 'Install Prisma CLI', code: 'npm install prisma --save-dev' },
        { label: 'Inisialisasi Prisma', code: 'npx prisma init' },
        { label: 'Generate Client', code: 'npx prisma generate' },
        { label: 'Buka Prisma Studio (GUI)', code: 'npx prisma studio' }
      ],
      powershell: [
        { label: 'Install Prisma CLI', code: 'npm install prisma --save-dev' },
        { label: 'Inisialisasi Prisma', code: 'npx prisma init' },
        { label: 'Generate Client', code: 'npx prisma generate' },
        { label: 'Buka Prisma Studio (GUI)', code: 'npx prisma studio' }
      ],
      bash: [
        { label: 'Install Prisma CLI', code: 'npm install prisma --save-dev' },
        { label: 'Inisialisasi Prisma', code: 'npx prisma init' },
        { label: 'Generate Client', code: 'npx prisma generate' },
        { label: 'Buka Prisma Studio (GUI)', code: 'npx prisma studio' }
      ]
    }
  },
  {
    id: 'drizzle-orm',
    name: 'Drizzle ORM',
    category: 'Database',
    description: 'TypeScript ORM ringan dan cepat dengan fokus pada tipe data tajam & zero-overhead.',
    prerequisites: ['Node.js v18+'],
    commands: {
      cmd: [
        { label: 'Install Drizzle & Kit', code: 'npm install drizzle-orm & npm install -D drizzle-kit' },
        { label: 'Jalankan migrasi schema', code: 'npx drizzle-kit push' },
        { label: 'Buka Drizzle Studio', code: 'npx drizzle-kit studio' }
      ],
      powershell: [
        { label: 'Install Drizzle & Kit', code: 'npm install drizzle-orm; npm install -D drizzle-kit' },
        { label: 'Jalankan migrasi schema', code: 'npx drizzle-kit push' },
        { label: 'Buka Drizzle Studio', code: 'npx drizzle-kit studio' }
      ],
      bash: [
        { label: 'Install Drizzle & Kit', code: 'npm install drizzle-orm && npm install -D drizzle-kit' },
        { label: 'Jalankan migrasi schema', code: 'npx drizzle-kit push' },
        { label: 'Buka Drizzle Studio', code: 'npx drizzle-kit studio' }
      ]
    }
  },
  {
    id: 'supabase-cli',
    name: 'Supabase CLI',
    category: 'Database',
    description: 'Alternatif Firebase Open-Source berbasis PostgreSQL.',
    prerequisites: ['Docker Desktop'],
    commands: {
      cmd: [
        { label: 'Install Supabase CLI', code: 'npm install -g supabase' },
        { label: 'Inisialisasi lokal', code: 'supabase init' },
        { label: 'Jalankan stack lokal', code: 'supabase start' }
      ],
      powershell: [
        { label: 'Install Supabase CLI', code: 'npm install -g supabase' },
        { label: 'Inisialisasi lokal', code: 'supabase init' },
        { label: 'Jalankan stack lokal', code: 'supabase start' }
      ],
      bash: [
        { label: 'Install Supabase CLI', code: 'npm install -g supabase' },
        { label: 'Inisialisasi lokal', code: 'supabase init' },
        { label: 'Jalankan stack lokal', code: 'supabase start' }
      ]
    }
  },

  // ================= DEVOPS & TOOLS =================
  {
    id: 'docker-compose',
    name: 'Docker Compose',
    category: 'DevOps',
    description: 'Tool kontainerisasi untuk menjalankan aplikasi multi-kontainer.',
    prerequisites: ['Docker Desktop'],
    commands: {
      cmd: [
        { label: 'Jalankan kontainer (Background)', code: 'docker compose up -d' },
        { label: 'Cek log kontainer', code: 'docker compose logs -f' },
        { label: 'Matikan kontainer', code: 'docker compose down' }
      ],
      powershell: [
        { label: 'Jalankan kontainer (Background)', code: 'docker compose up -d' },
        { label: 'Cek log kontainer', code: 'docker compose logs -f' },
        { label: 'Matikan kontainer', code: 'docker compose down' }
      ],
      bash: [
        { label: 'Jalankan kontainer (Background)', code: 'docker compose up -d' },
        { label: 'Cek log kontainer', code: 'docker compose logs -f' },
        { label: 'Matikan kontainer', code: 'docker compose down' }
      ]
    }
  },
  {
    id: 'tailwind-v4',
    name: 'Tailwind CSS v4',
    category: 'DevOps',
    description: 'Utility-first CSS framework versi terbaru dengan engine Oxide super kencang.',
    prerequisites: ['Node.js v18+'],
    commands: {
      cmd: [
        { label: 'Install Tailwind v4 & Vite plugin', code: 'npm install tailwindcss @tailwindcss/vite' }
      ],
      powershell: [
        { label: 'Install Tailwind v4 & Vite plugin', code: 'npm install tailwindcss @tailwindcss/vite' }
      ],
      bash: [
        { label: 'Install Tailwind v4 & Vite plugin', code: 'npm install tailwindcss @tailwindcss/vite' }
      ]
    }
  },
  {
    id: 'shadcn-ui',
    name: 'shadcn/ui',
    category: 'DevOps',
    description: 'Komponen UI yang dapat di-copy/paste dan di kustomisasi penuh.',
    prerequisites: ['React / Next.js', 'Tailwind CSS'],
    commands: {
      cmd: [
        { label: 'Inisialisasi shadcn', code: 'npx shadcn@latest init' },
        { label: 'Tambah komponen Button', code: 'npx shadcn@latest add button' }
      ],
      powershell: [
        { label: 'Inisialisasi shadcn', code: 'npx shadcn@latest init' },
        { label: 'Tambah komponen Button', code: 'npx shadcn@latest add button' }
      ],
      bash: [
        { label: 'Inisialisasi shadcn', code: 'npx shadcn@latest init' },
        { label: 'Tambah komponen Button', code: 'npx shadcn@latest add button' }
      ]
    }
  },

  // ================= MORE FRONTEND =================
  {
    id: 'astro',
    name: 'Astro',
    category: 'Frontend',
    description: 'Framework content-first yang menghasilkan halaman statis super cepat dan bisa dikombinasikan dengan island komponen.',
    descriptionEn: 'Content-first framework producing very fast static pages, extensible with component islands.',
    difficulty: 'Medium',
    tags: ['frontend', 'island-architecture', 'static'],
    docs: 'https://docs.astro.build/',
    repo: 'https://github.com/withastro/astro',
    popularity: 78,
    prerequisites: ['Node.js v18.17+'],
    commands: {
      cmd: [
        { label: 'Buat project Astro', code: 'npm create astro@latest my-astro-app -- --template minimal' },
        { label: 'Masuk ke folder', code: 'cd my-astro-app' },
        { label: 'Install dependencies', code: 'npm install' },
        { label: 'Jalankan dev server', code: 'npm run dev' }
      ],
      powershell: [
        { label: 'Buat project Astro', code: 'npm create astro@latest my-astro-app -- --template minimal' },
        { label: 'Masuk ke folder', code: 'cd my-astro-app' },
        { label: 'Install dependencies', code: 'npm install' },
        { label: 'Jalankan dev server', code: 'npm run dev' }
      ],
      bash: [
        { label: 'Buat project Astro', code: 'npm create astro@latest my-astro-app -- --template minimal' },
        { label: 'Masuk ke folder', code: 'cd my-astro-app' },
        { label: 'Install dependencies', code: 'npm install' },
        { label: 'Jalankan dev server', code: 'npm run dev' }
      ]
    }
  },
  {
    id: 'nuxt-3',
    name: 'Nuxt 3',
    category: 'Frontend',
    description: 'Framework Vue full-stack dengan server-side rendering, file-based routing, dan auto-import.',
    descriptionEn: 'Full-stack Vue framework with SSR, file-based routing and auto-imports.',
    difficulty: 'Medium',
    tags: ['frontend', 'vue', 'ssr'],
    docs: 'https://nuxt.com/docs',
    repo: 'https://github.com/nuxt/nuxt',
    popularity: 74,
    prerequisites: ['Node.js v18+'],
    commands: {
      cmd: [
        { label: 'Buat project Nuxt', code: 'npx nuxi@latest init my-nuxt-app' },
        { label: 'Masuk ke folder', code: 'cd my-nuxt-app' },
        { label: 'Install dependencies', code: 'npm install' },
        { label: 'Jalankan dev server', code: 'npm run dev' }
      ],
      powershell: [
        { label: 'Buat project Nuxt', code: 'npx nuxi@latest init my-nuxt-app' },
        { label: 'Masuk ke folder', code: 'cd my-nuxt-app' },
        { label: 'Install dependencies', code: 'npm install' },
        { label: 'Jalankan dev server', code: 'npm run dev' }
      ],
      bash: [
        { label: 'Buat project Nuxt', code: 'npx nuxi@latest init my-nuxt-app' },
        { label: 'Masuk ke folder', code: 'cd my-nuxt-app' },
        { label: 'Install dependencies', code: 'npm install' },
        { label: 'Jalankan dev server', code: 'npm run dev' }
      ]
    }
  },

  // ================= TESTING =================
  {
    id: 'vitest',
    name: 'Vitest',
    category: 'Testing',
    description: 'Test runner modern yang super cepat untuk Vite dan proyek JavaScript/TypeScript.',
    descriptionEn: 'A fast, modern test runner for Vite and JavaScript/TypeScript projects.',
    difficulty: 'Easy',
    tags: ['testing', 'vitest', 'vite'],
    docs: 'https://vitest.dev/guide/',
    repo: 'https://github.com/vitest-dev/vitest',
    popularity: 80,
    prerequisites: ['Node.js v18+'],
    commands: {
      cmd: [
        { label: 'Install Vitest', code: 'npm install -D vitest' },
        { label: 'Jalankan test (watch mode)', code: 'npx vitest' },
        { label: 'Jalankan test sekali', code: 'npx vitest run' }
      ],
      powershell: [
        { label: 'Install Vitest', code: 'npm install -D vitest' },
        { label: 'Jalankan test (watch mode)', code: 'npx vitest' },
        { label: 'Jalankan test sekali', code: 'npx vitest run' }
      ],
      bash: [
        { label: 'Install Vitest', code: 'npm install -D vitest' },
        { label: 'Jalankan test (watch mode)', code: 'npx vitest' },
        { label: 'Jalankan test sekali', code: 'npx vitest run' }
      ]
    }
  },
  {
    id: 'playwright',
    name: 'Playwright',
    category: 'Testing',
    description: 'Test end-to-end lintas browser (Chromium, Firefox, WebKit) dari Microsoft.',
    descriptionEn: 'Cross-browser end-to-end testing (Chromium, Firefox, WebKit) by Microsoft.',
    difficulty: 'Medium',
    tags: ['testing', 'e2e', 'browser'],
    docs: 'https://playwright.dev/docs/intro',
    repo: 'https://github.com/microsoft/playwright',
    popularity: 84,
    prerequisites: ['Node.js v18+'],
    commands: {
      cmd: [
        { label: 'Inisialisasi Playwright', code: 'npm init playwright@latest' },
        { label: 'Install browser dependencies', code: 'npx playwright install --with-deps' },
        { label: 'Jalankan test', code: 'npx playwright test' }
      ],
      powershell: [
        { label: 'Inisialisasi Playwright', code: 'npm init playwright@latest' },
        { label: 'Install browser dependencies', code: 'npx playwright install --with-deps' },
        { label: 'Jalankan test', code: 'npx playwright test' }
      ],
      bash: [
        { label: 'Inisialisasi Playwright', code: 'npm init playwright@latest' },
        { label: 'Install browser dependencies', code: 'npx playwright install --with-deps' },
        { label: 'Jalankan test', code: 'npx playwright test' }
      ]
    }
  },
  {
    id: 'cypress',
    name: 'Cypress',
    category: 'Testing',
    description: 'Test framework end-to-end populer dengan runner & debugger interaktif yang nyaman.',
    descriptionEn: 'Popular end-to-end test framework with an interactive runner and debugger.',
    difficulty: 'Medium',
    tags: ['testing', 'e2e', 'cypress'],
    docs: 'https://docs.cypress.io/guides/overview/why-cypress',
    repo: 'https://github.com/cypress-io/cypress',
    popularity: 72,
    prerequisites: ['Node.js v18+'],
    commands: {
      cmd: [
        { label: 'Install Cypress', code: 'npm install -D cypress' },
        { label: 'Buka Cypress Test Runner', code: 'npx cypress open' },
        { label: 'Jalankan test headless', code: 'npx cypress run' }
      ],
      powershell: [
        { label: 'Install Cypress', code: 'npm install -D cypress' },
        { label: 'Buka Cypress Test Runner', code: 'npx cypress open' },
        { label: 'Jalankan test headless', code: 'npx cypress run' }
      ],
      bash: [
        { label: 'Install Cypress', code: 'npm install -D cypress' },
        { label: 'Buka Cypress Test Runner', code: 'npx cypress open' },
        { label: 'Jalankan test headless', code: 'npx cypress run' }
      ]
    }
  },

  // ================= AI / ML =================
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'AI/ML',
    description: 'Framework machine learning open-source populer buatan Google untuk training dan inference.',
    descriptionEn: 'Google\u2019s popular open-source machine learning framework for training and inference.',
    difficulty: 'Advanced',
    tags: ['ai', 'ml', 'python'],
    docs: 'https://www.tensorflow.org/learn',
    repo: 'https://github.com/tensorflow/tensorflow',
    popularity: 88,
    prerequisites: ['Python v3.9+', 'pip'],
    commands: {
      cmd: [
        { label: 'Install TensorFlow', code: 'python -m pip install tensorflow' },
        { label: 'Cek versi TF', code: 'python -c "import tensorflow as tf; print(tf.__version__)"' }
      ],
      powershell: [
        { label: 'Install TensorFlow', code: 'python -m pip install tensorflow' },
        { label: 'Cek versi TF', code: 'python -c "import tensorflow as tf; print(tf.__version__)"' }
      ],
      bash: [
        { label: 'Install TensorFlow', code: 'python3 -m pip install tensorflow' },
        { label: 'Cek versi TF', code: 'python3 -c "import tensorflow as tf; print(tf.__version__)"' }
      ]
    }
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'AI/ML',
    description: 'Framework deep learning populer dengan dynamic computation graph dan kompatibel CUDA.',
    descriptionEn: 'Popular deep learning framework with dynamic computation graphs and CUDA support.',
    difficulty: 'Advanced',
    tags: ['ai', 'ml', 'deep-learning'],
    docs: 'https://pytorch.org/docs/stable/index.html',
    repo: 'https://github.com/pytorch/pytorch',
    popularity: 86,
    prerequisites: ['Python v3.8+', 'pip'],
    commands: {
      cmd: [
        { label: 'Install PyTorch (CPU)', code: 'python -m pip install torch torchvision torchaudio' },
        { label: 'Cek versi PyTorch', code: 'python -c "import torch; print(torch.__version__)"' }
      ],
      powershell: [
        { label: 'Install PyTorch (CPU)', code: 'python -m pip install torch torchvision torchaudio' },
        { label: 'Cek versi PyTorch', code: 'python -c "import torch; print(torch.__version__)"' }
      ],
      bash: [
        { label: 'Install PyTorch (CPU)', code: 'python3 -m pip install torch torchvision torchaudio' },
        { label: 'Cek versi PyTorch', code: 'python3 -c "import torch; print(torch.__version__)"' }
      ]
    }
  },
  {
    id: 'ollama',
    name: 'Ollama',
    category: 'AI/ML',
    description: 'Jalankan model AI/GPT lokal seperti Llama dan Gemma langsung di mesinmu.',
    descriptionEn: 'Run local AI models such as Llama and Gemma directly on your machine.',
    difficulty: 'Medium',
    tags: ['ai', 'llm', 'local'],
    docs: 'https://ollama.com/library',
    repo: 'https://github.com/ollama/ollama',
    popularity: 90,
    prerequisites: ['Ollama (desktop/CLI)'],
    commands: {
      cmd: [
        { label: 'Install Ollama (Windows)', code: 'winget install Ollama.Ollama' },
        { label: 'Download model Llama', code: 'ollama pull llama3.2' },
        { label: 'Jalankan chat lokal', code: 'ollama run llama3.2' }
      ],
      powershell: [
        { label: 'Install Ollama (Windows)', code: 'winget install Ollama.Ollama' },
        { label: 'Download model Llama', code: 'ollama pull llama3.2' },
        { label: 'Jalankan chat lokal', code: 'ollama run llama3.2' }
      ],
      bash: [
        { label: 'Install Ollama', code: 'curl -fsSL https://ollama.com/install.sh | sh' },
        { label: 'Download model Llama', code: 'ollama pull llama3.2' },
        { label: 'Jalankan chat lokal', code: 'ollama run llama3.2' }
      ]
    }
  },

  // ================= MONOREPO =================
  {
    id: 'turborepo',
    name: 'Turborepo',
    category: 'Monorepo',
    description: 'Build system monorepo berkinerja tinggi dengan caching tugas dan remote cache.',
    descriptionEn: 'High-performance monorepo build system with task caching and remote cache.',
    difficulty: 'Advanced',
    tags: ['monorepo', 'build', 'performance'],
    docs: 'https://turbo.build/repo/docs',
    repo: 'https://github.com/vercel/turborepo',
    popularity: 76,
    prerequisites: ['Node.js v18+'],
    commands: {
      cmd: [
        { label: 'Buat monorepo Turbo', code: 'npx create-turbo@latest my-turborepo' },
        { label: 'Masuk ke folder', code: 'cd my-turborepo' },
        { label: 'Install dependencies', code: 'npm install' },
        { label: 'Jalankan dev workspace', code: 'npm run dev' }
      ],
      powershell: [
        { label: 'Buat monorepo Turbo', code: 'npx create-turbo@latest my-turborepo' },
        { label: 'Masuk ke folder', code: 'cd my-turborepo' },
        { label: 'Install dependencies', code: 'npm install' },
        { label: 'Jalankan dev workspace', code: 'npm run dev' }
      ],
      bash: [
        { label: 'Buat monorepo Turbo', code: 'npx create-turbo@latest my-turborepo' },
        { label: 'Masuk ke folder', code: 'cd my-turborepo' },
        { label: 'Install dependencies', code: 'npm install' },
        { label: 'Jalankan dev workspace', code: 'npm run dev' }
      ]
    }
  },
  {
    id: 'nx',
    name: 'Nx',
    category: 'Monorepo',
    description: 'Suite monorepo cerdas untuk frontend & backend dengan generators, plugins, dan caching.',
    descriptionEn: 'Smart monorepo suite for frontend and backend with generators, plugins and caching.',
    difficulty: 'Advanced',
    tags: ['monorepo', 'angular', 'react', 'node'],
    docs: 'https://nx.dev/getting-started/intro',
    repo: 'https://github.com/nrwl/nx',
    popularity: 75,
    prerequisites: ['Node.js v18+'],
    commands: {
      cmd: [
        { label: 'Buat workspace Nx', code: 'npx create-nx-workspace@latest my-workspace' },
        { label: 'Masuk ke folder', code: 'cd my-workspace' },
        { label: 'Jalankan dev server', code: 'npm run dev' }
      ],
      powershell: [
        { label: 'Buat workspace Nx', code: 'npx create-nx-workspace@latest my-workspace' },
        { label: 'Masuk ke folder', code: 'cd my-workspace' },
        { label: 'Jalankan dev server', code: 'npm run dev' }
      ],
      bash: [
        { label: 'Buat workspace Nx', code: 'npx create-nx-workspace@latest my-workspace' },
        { label: 'Masuk ke folder', code: 'cd my-workspace' },
        { label: 'Jalankan dev server', code: 'npm run dev' }
      ]
    }
  },

  // ================= TOOLS =================
  {
    id: 'pnpm',
    name: 'pnpm',
    category: 'Tools',
    description: 'Package manager cepat dan hemat disk dengan dependency store global yang efisien.',
    descriptionEn: 'Fast, disk-efficient package manager with an efficient global dependency store.',
    difficulty: 'Easy',
    tags: ['tools', 'package-manager', 'node'],
    docs: 'https://pnpm.io/installation',
    repo: 'https://github.com/pnpm/pnpm',
    popularity: 83,
    prerequisites: ['Node.js v18+'],
    commands: {
      cmd: [
        { label: 'Install pnpm global', code: 'npm install -g pnpm' },
        { label: 'Buat project Vite', code: 'pnpm create vite my-pnpm-app --template react' },
        { label: 'Install dependencies', code: 'pnpm install' },
        { label: 'Jalankan dev server', code: 'pnpm run dev' }
      ],
      powershell: [
        { label: 'Install pnpm global', code: 'npm install -g pnpm' },
        { label: 'Buat project Vite', code: 'pnpm create vite my-pnpm-app --template react' },
        { label: 'Install dependencies', code: 'pnpm install' },
        { label: 'Jalankan dev server', code: 'pnpm run dev' }
      ],
      bash: [
        { label: 'Install pnpm global', code: 'npm install -g pnpm' },
        { label: 'Buat project Vite', code: 'pnpm create vite my-pnpm-app --template react' },
        { label: 'Install dependencies', code: 'pnpm install' },
        { label: 'Jalankan dev server', code: 'pnpm run dev' }
      ]
    }
  },
  {
    id: 'bun',
    name: 'Bun',
    category: 'Tools',
    description: 'Runtime JavaScript super cepat, package manager, bundler, dan test runner dalam satu tool.',
    descriptionEn: 'Ultra-fast JavaScript runtime, package manager, bundler and test runner in one tool.',
    difficulty: 'Medium',
    tags: ['tools', 'runtime', 'javascript'],
    docs: 'https://bun.sh/docs',
    repo: 'https://github.com/oven-sh/bun',
    popularity: 79,
    prerequisites: ['Node.js v18+ (installer shell)'],
    commands: {
      cmd: [
        { label: 'Install Bun (Windows via npm)', code: 'npm install -g bun' },
        { label: 'Buat project Vite', code: 'bun create vite my-bun-app' },
        { label: 'Install dependencies', code: 'bun install' },
        { label: 'Jalankan dev server', code: 'bun run dev' }
      ],
      powershell: [
        { label: 'Install Bun (Windows via npm)', code: 'npm install -g bun' },
        { label: 'Buat project Vite', code: 'bun create vite my-bun-app' },
        { label: 'Install dependencies', code: 'bun install' },
        { label: 'Jalankan dev server', code: 'bun run dev' }
      ],
      bash: [
        { label: 'Install Bun', code: 'curl -fsSL https://bun.sh/install | bash' },
        { label: 'Buat project Vite', code: 'bun create vite my-bun-app' },
        { label: 'Install dependencies', code: 'bun install' },
        { label: 'Jalankan dev server', code: 'bun run dev' }
      ]
    }
  },
  {
    id: 'uv',
    name: 'uv (Python)',
    category: 'Tools',
    description: 'Package & project manager Python super cepat dari Astral, pengganti pip/poetry yang modern.',
    descriptionEn: 'Astral\u2019s ultra-fast Python package and project manager, a modern pip/poetry replacement.',
    difficulty: 'Easy',
    tags: ['tools', 'python', 'package-manager'],
    docs: 'https://docs.astral.sh/uv/',
    repo: 'https://github.com/astral-sh/uv',
    popularity: 81,
    prerequisites: ['Python v3.8+'],
    commands: {
      cmd: [
        { label: 'Install uv via pip', code: 'python -m pip install uv' },
        { label: 'Inisialisasi project', code: 'uv init my-uv-project' },
        { label: 'Jalankan script', code: 'uv run main.py' }
      ],
      powershell: [
        { label: 'Install uv via pip', code: 'python -m pip install uv' },
        { label: 'Inisialisasi project', code: 'uv init my-uv-project' },
        { label: 'Jalankan script', code: 'uv run main.py' }
      ],
      bash: [
        { label: 'Install uv', code: 'curl -LsSf https://astral.sh/uv/install.sh | sh' },
        { label: 'Inisialisasi project', code: 'uv init my-uv-project' },
        { label: 'Jalankan script', code: 'uv run main.py' }
      ]
    }
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Tools',
    description: 'Sistem version control wajib untuk melacak perubahan kode dan berkolaborasi.',
    descriptionEn: 'Essential version control system for tracking code changes and collaborating.',
    difficulty: 'Easy',
    tags: ['tools', 'git', 'vcs'],
    docs: 'https://git-scm.com/doc',
    repo: 'https://github.com/git/git',
    popularity: 95,
    prerequisites: ['Git'],
    commands: {
      cmd: [
        { label: 'Inisialisasi repo', code: 'git init' },
        { label: 'Tambah semua file', code: 'git add .' },
        { label: 'Commit pertama', code: 'git commit -m "init"' }
      ],
      powershell: [
        { label: 'Inisialisasi repo', code: 'git init' },
        { label: 'Tambah semua file', code: 'git add .' },
        { label: 'Commit pertama', code: 'git commit -m "init"' }
      ],
      bash: [
        { label: 'Inisialisasi repo', code: 'git init' },
        { label: 'Tambah semua file', code: 'git add .' },
        { label: 'Commit pertama', code: 'git commit -m "init"' }
      ]
    }
  }
];