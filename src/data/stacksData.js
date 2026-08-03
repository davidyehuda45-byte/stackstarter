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
        { label: 'Jalankan aplikasi (Maven)', code: '.\mvnw spring-boot:run' }
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
  }
];