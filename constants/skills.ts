import { CategorizedSkills, Skill } from 'types/skills';

export const SKILLS = {
    js: {
        id: 'js',
        name: 'Javascript',
        icon: 'js',
        quote: {
            quote:
                'Any app that can be written in Javascript, will eventually be written in Javascript',
            author: 'Jeff Atwood',
        },
        description: `As the canonical language of the web, Javascript is like my native tongue. It's 
      elegant yet terse functional programming is perhaps what keeps me drawn to it the most, 
      alongside the hugely thriving and rich ecosystem. As a bonus, I have found ESLint and 
      Prettier to be the most straightforward linting and formatting tools I have come to work with 
      yet. These days, Javascript is my go-to language for green-field projects, and I feel 
      completely comfortable working with it.`,
        stats: {
            years: 7,
            used: 'Web Development (Front and Back End)',
            likes: 'Functional Programming, ES5+ Improvements, Portability, Tooling',
            dislikes:
                'Backwards Compatibility Quirks, Poor Quality Packages, Poor Quality Tutorials and Documentation',
        },
        gist: '8e1f9108592c0a71dcb64436a7de8eea',
    },
    ts: {
        id: 'ts',
        name: 'TypeScript',
        icon: 'ts',
        quote: {
            quote:
                'I like to consider type definitions with TypeScript to be a form of inline automated tests.',
            author: 'Kyle Simpson',
        },
        description: `When I was fairly new to the TypeScript world, I fell in love the second I started 
using the coc-tsserver vim plugin. Since then, I have become obsessive over the language and the
DX benefits that the tooling provides, and have championed it everywhere I can! I've been reading
the dev notes of every release for the past several years, and have gained a deep insight of how
to manipulate the type system to get extremely refined safety via complex generics`,
        stats: {
            years: 4,
            used: 'Recent JavaScript projects, Web Development, Library Development',
            likes: 'Type Safety, Tooling, Development Experience',
            dislikes: 'Sometimes the LSP can get a bit slow on larger projects =(',
        },
        gist: '002037c73f4a0151d5980343fade34f9',
    },
    rust: {
        id: 'rust',
        name: 'Rust',
        icon: 'rust',
        quote: {
            quote:
                'People complain about Rust syntax. I think that most of the time when people think they have an issue with Rust’s syntax, they actually object to Rust’s semantics.',
            author: 'Alex Kladov',
        },
        description: `When I first had heard of Rust, I was intimidated, and didn't quite understand it. However,
I seemingly just couldn't escape it, and soon enough found myself reading The Book. It took me a large number of months
to get through it, but finishing The Book and learning Rust have been one of the most important and influential moments
in my programming journey. I would highly recommend _everyone_ spend some time with the language and learn why it
works the way it does. It is a true marvel, and when you get the hang of it, an absolute pleasure to write!`,
        stats: {
            years: 3,
            used: 'LearnCard/Didkit/SSI, personal projects',
            likes: 'Type System, Compiler, If it compiles, it probably works!',
            dislikes:
                "Fighting the Compiler, Not getting to work with it as much as I'd like",
        },
    },
    ruby: {
        id: 'ruby',
        name: 'Ruby',
        icon: 'ruby',
        quote: { quote: 'Matz is nice and so we are nice' },
        description: `Ruby used to be my favorite programming language. Something about the 
                  philosophy of trying to make developers smile has creaed this incredibly 
                  beautiful community. This community has, in turn, given back and managed to 
                  create this incredibly beautiful programminglanguage. I considered myself 
                  pretty into programming before learning Ruby, but I wouldn't say I truly fell 
                  in love with it until I dove deep into Ruby. Ruby code can be written in a way 
                  that truly feels like reading English, and I find that to be an incredible feat. 
                  Yet at the same time, difficult programming concepts such as functional 
                programming and metaprogramming, which are difficult to even explain in simple 
                  English, are both simple and elegant in the language.`,
        stats: {
            years: 3,
            used: 'Ruby on Rails, Scripting, Developing a love of programming',
            likes:
                'Beauty of the Language, Happiness Philosophy, Sharp Tools Philosophy, Libraries, Gems, Community, Documentation',
            dislikes:
                '(Sometimes) Poor Performance, Difficulty of Finding a Ruby Job',
        },
        gist: 'f23630c3389bf2855a42b8edc64681fa',
    },
    c: {
        id: 'c',
        name: 'C',
        icon: 'c',
        quote: {
            quote:
                "If it wasn't for C, we'd be writing programs in BASIC, PASCAL, and COBOL",
        },
        description: `C was one of the first programming languages I came in contact with, and 
                  honestly, it's a miracle I stuck through after that. All jokes aside, C 
                  is an extremely powerful language that will likely never die. I have found 
                  it to be an incredible language to study the fundamentals of computer science. 
                  I also get an odd sense of joy when I occasionally manage to get a C program 
                  through the compiler on the first try. To me, C is not so much a language I 
                  would like to seriously work in, but an academic endeavor that has been 
                  consistently rewarding for me at every step. My knowledge of C has also been hugely
                  beneficial in maintaining my Operating System!`,
        stats: {
            years: 3,
            used:
                'Independent study (Algorithms/Data Structures), HackerRank, Leetcode, Vetting System Packages',
            likes: 'Speed, Close to the Metal, Simplicity',
            dislikes:
                'Footguns, Segfaults, Useless Compiler Errors, Lack of Unified Adoption of Standards',
        },
    },
    python: {
        id: 'python',
        name: 'Python',
        icon: 'python',
        quote: {
            quote: 'Python is executable pseudocode. Perl is executable line noise.',
            author: 'Bruce Eckel',
        },
        description: `Python is the first programming language I've ever used. I wrote my first 
                  "Hello, world" with it back in 2010. At the time, I didn't have an apprecation 
                  for what Python was capable of, and I ultimately became discouraged and spent 
                  more time writing TI-BASIC prgrams to help me cheat on my Physics exams. Since 
                  then I have tried picking Python back up multiple times, and for whatever reason, 
                  I've had a hard time getting it to stick. I prefer 
                  Javascript/TypeScript for developing web applications, but in ML, Python just can't
                  be beat. I've gotten a lot more used to Python as a tool in my belt, but if I'm not
                  doing something ML-related, I probably wouldn't choose to use it!`,
        stats: {
            years: 5,
            used:
                'Scripting, Data Analysis, Data Visualization, Machine Learning (Auto-GPT/LangChain)',
            likes:
                'Expressiveness, Simplicity, Standard Library, Third Party Libraries, PyTorch',
            dislikes: 'Getting an environment set up! Conda drives me insane!',
        },
    },
    java: {
        id: 'java',
        name: 'Java',
        icon: 'java',
        quote: {
            quote:
                'If Java had true garbage collection, most programs would delete themselves upon execution',
            author: 'Robert Sewell',
        },
        description: `I don't think there's any language I hear and read more about than Java. Though 
                  I have extreme exposure to the language, I have not yet used it for very much. 
                  In college, I took multiple classes that used Java. For the most part, that was 
                  a pleasant experience for me. The tooling surrounding the language is fantastic, 
                  and I don't mind it being so rigid. I guess I just don't quite feel as productive 
                  in Java as I do other languages, so I simply haven't spent as much time writing 
                  Java code.`,
        stats: {
            years: 1,
            used: 'College Programming Homework',
            likes: 'Tooling, Popularity, Better Quality of Life Than C or C++',
            dislikes: 'Oracle, Boilerplate, Slow Adoption of Features',
        },
    },
    php: {
        id: 'php',
        name: 'PHP',
        icon: 'php',
        quote: {
            quote: `I've never thought of PHP as more than a simple tool to solve problems.`,
            author: 'Rasmus Lerdorf',
        },
        description: `PHP has been around for longer than I have been alive. The most recent figure 
                  I've seen shows that almost 80% of websites are using it in some way. It's 
                  practically impossible to get into web development without learning some PHP! 
                  My experience with PHP has been mostly decent, but I prefer to use a more modern 
                  backend language. I have used it for several college projects, as well as some 
                  one-off personal projects, but the wide range of security pitfalls and (in my 
                      opinion) ugly syntax have kept me away from PHP and focused more on using 
                      languages like Javascript and Rust in the back end.`,
        stats: {
            years: 1,
            used: 'Web Development',
            likes: 'Popularity, C-Like Syntax',
            dislikes: 'Security Traps, Outdated Tutorials, Inconsistencies',
        },
    },
    html: {
        id: 'html',
        name: 'HTML',
        icon: 'html',
        quote: {
            quote: "In '93 to '94, every browser had its own flavor of HTML.",
            author: 'Tim Berners-Lee',
        },
        description: `HTML is my bread and butter. It is at the core of everything that I do on the 
                  web. I was first exposed to HTML way back in the late 2000s working on my Myspace 
                  page. I have found that despite working with HTML for years, I am still surprised 
                      by what can be expressed with it. The addition of semantic tags has truly made it 
                      an expressive language, and I strive to use them as often as possible.`,
        stats: {
            years: 10,
            used: 'Building Websites',
            likes: 'Tooling (Emmett), Popularity',
            dislikes: 'Sometimes Confusing Semantic Tags',
        },
    },
    css: {
        id: 'css',
        name: 'CSS',
        icon: 'css',
        quote: {
            quote:
                'Style is not a display of wealth, but an expression of imagination',
            author: 'Anonymous',
        },
        description: `CSS is perhaps one of the most important technologies ever invented. Styling 
                  User Interfaces is an extremely difficult thing to do, and CSS manages to make 
                  styling accessible to both left and right-brained humans. Improvements to CSS are 
                  improvements to the look, feel, and accessibility of all future websites, which 
                  is easy to take for granted. CSS is deceptively simple. It is easy to learn, but 
                      difficult to master. I have worked with CSS for years, yet I still find myself 
                      discovering new features of CSS almost every day.`,
        stats: {
            years: 10,
            used: 'Styling Websites',
            likes: 'Straightforward Syntax, Power, Flexibility',
            dislikes: 'Verbose Variable Syntax, Lack of Nested Selectors',
        },
    },
    sass: {
        id: 'sass',
        name: 'SASS/SCSS',
        icon: 'sass',
        quote: {
            quote:
                'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
        },
        description: `CSS is an incredible technology. However, some key features are just plain 
                  missing. You might not even realize you need some of these features until you use 
                  SASS/SCSS. Sass adds useful color functions (lighten, darken, etc), allows you to 
                  nest selectors, and use variables and mixins. It adds these features seamlessly 
                  over the top of CSS, meaning you can add Sass to a project and rename all of your 
                  .css files to .scss! This thin layer of extension makes it, in my eyes, the 
                  perfect CSS technology. I have used Sass in every single project I have made 
                      since I first used it, and I will likely continue to use it in every single 
                      project I make in the future.`,
        stats: {
            years: 5,
            used: 'Styling Websites',
            likes: 'Extreme Similarity to CSS, Nested Selectors, Mixins',
            dislikes: `Nothing`,
        },
    },
    tailwind: {
        id: 'tailwind',
        name: 'Tailwind',
        icon: 'tailwind',
        quote: {
            quote:
                "Tailwind is more than a CSS framework, it's an engine for creating design systems.",
        },
        description: `Few technologies have managed to ruin all of their competitors for me. Tailwind 
                      is one of those technologies. That is not to say that I can't use another CSS framework, it is simply that, given the chance, I would never choose to use another CSS framework. Tailwind is just that good for me. I have found it to dramatically improve my design workflow. This, in turn, has dramatically improved my designs in general.`,
        stats: {
            years: 4,
            used: 'Styling Websites',
            likes: 'Efficient Workflow, Sane Defaults',
            dislikes:
                'This CSS Framework Has Ruined All Other Methods of Styling for Me',
        },
    },
    react: {
        id: 'react',
        name: 'React',
        icon: 'react',
        quote: {
            quote:
                "One of the things I love most about React compared to other frameworks that I've used is how exposed you are to JavaScript when you're using it.",
            author: 'Kent C. Dodds',
        },
        description:
            'Being a huge JS/TS fanatic, I take great pleasure in working with React. I find most of the framework to be extremely intuitive and easy to use. When I first built Tic-Tac-Toe from the official documentation, it just clicked for me. Since then, I have used React to build several websites, using CRA, Next, Vite, Astro, and even by simply adding the React and React-DOM script tags to an existing page. I prefer to use Functional Components with Hooks and have found the Context API to be a wonderful solution for handling most of my more intricate state management needs. ',
        stats: {
            years: 5,
            used: 'Front End Web Development',
            likes: 'Simplicity, Popularity, Hooks, Context, JSX, One-Way Data Flow',
            dislikes: 'Class Components, Fractured Community',
        },
    },
    rails: {
        id: 'rails',
        name: 'Rails',
        icon: 'rails',
        quote: { quote: 'Rails is omakase', author: 'David Heinemeir Hansson' },
        description:
            "Ruby on Rails is what threw me into the deep ocean of web development. The Convention over Configuration philosophy coupled with the phenomenal approach to Full-Stack web design makes building extremely complicated applications highly accessible to developers of all skill levels. It's a web framework that just makes a lot of sense and tries to eliminate any part of itself that doesn't. I often use Rails as the gold standard for how to approach problems in other languages and frameworks, because I believe they have found some of the best solutions to some of web development's more complicated problems. I adore the Rails community, even though it tends to be so polarizing.",
        stats: {
            years: 2,
            used: 'Building Full-Stack Web Apps',
            likes: 'Ruby, Convention Over Configuration, Community, Readable Code',
            dislikes: 'Magic, Lack of Jobs',
        },
    },
    webpack: {
        id: 'webpack',
        name: 'Webpack',
        icon: 'webpack',
        quote: { quote: 'Bundle your assets' },
        description:
            'Webpack was once at the forefront of modern Front End Web Development. Whether we realized it or not, most Front End devs were using Webpack in almost every single project. React, Angular, and Vue all used/use Webpack behind the scenes, with most other Front End frameworks allowing you to use Webpack easily. I have a fair amount of experience with Webpack thanks to The Odin Project. I also built my first portfolio website by making extensive use of Webpack. However, I have found that Webpack can be complicated, intimidating, and confusing, so I try and avoid having to tweak it if I can.',
        stats: {
            years: 4,
            used: 'Front End Web Development',
            likes: 'Relative Simplicity, Speed, Tooling, Documentation',
            dislikes: 'Complicated Ecosystem',
        },
    },
    esbuild: {
        id: 'esbuild',
        name: 'ESBuild',
        icon: 'esbuild',
        quote: {
            quote:
                'Our current build tools for the web are 10-100x slower than they could be.',
        },
        description: `I realized the importance of webpack a number of years ago, but the amount of time it takes to do its job was unforgivable to me. I soon started hearing about ESBuild, and found that it seems to solve _all_ of Webpack's problems, not just speed. Since then, I have written _loads_ of custom ESBuild scripts with and without the help of Rollup, and even written a couple of bespoke plugins for working with WASM. I find ESBuild to be an absolutely essential tool, that may only be dethroned for me by SWC.`,
        stats: {
            years: 3,
            used: 'Front End Web Development, library tooling',
            likes: 'Simplicity, Speed, Tooling, Documentation',
            dislikes: 'Inability to use plugins in transform-only environments',
        },
    },
    swc: {
        id: 'swc',
        name: 'SWC',
        icon: 'swc',
        quote: {
            quote:
                'SWC is 20x faster than Babel on a single thread and 70x faster on four cores.',
        },
        description: `I have a tendency to believe too much in dogma or silly things like that, and one of those things is that Rust is always better than Go. (This is objectively untrue, and yet I still view it as a rule of thumb!) Because of that, I really _want_ to use SWC more than ESBuild, and when I _have_ used SWC, I've really enjoyed it. However, I just started with ESBuild first, and have spent so much time reading its output and working with it that I truly feel attached to ESBuild, whereas I'm just not quite there yet with SWC. Given the chance though, I would love to start using SWC a lot more!`,
        stats: {
            years: 1,
            used: 'Front End Web Development, library tooling',
            likes: 'Simplicity, Speed, Rust',
            dislikes: 'Lack of large adoption that ESBuild has',
        },
    },
    express: {
        id: 'express',
        name: 'Express',
        icon: 'express',
        quote: {
            quote:
                'It goes without saying that Express is the biggest deal for Node.js business',
            author: 'Chuoxian Yang',
        },
        description: `Before Express, my experience with web servers was primarily centered around 
                  Apache/PHP and Puma/Rails. With Puma, I was able to quickly get a Back End up and 
                  running, but the application would almost always be extremely heavy and 
                  inefficient. With Apache, I could get a lightweight Back End up, but it was 
                  highly complex and would take me quite a bit of development time. With Express, 
                  I can quickly and easily get a lightweight Back End up and running in minutes. I 
                  am aware that servers such as Flask and Sinatra exist that work similarly to 
                  Express, but for whatever Express is the one that just sort of clicked for me. I 
                      am very comfortable working in an Express Back End, and will usually reach for an 
Express server if I need a quick API endpoint up and running. I've also found it
works extremely well and easily in a serverless environment, which really helped me get up to speed in serverless!`,
        stats: {
            years: 4.5,
            used: 'Back End Web Development',
            likes: 'Simplicity, Popularity, Modularity, Efficiency, Documentation',
            dislikes: 'Poor Quality Tutorials',
        },
    },
    handlebars: {
        id: 'handlebars',
        name: 'Handlebars',
        icon: 'handlebars',
        quote: { quote: 'Minimal templating on steroids' },
        description: `I have a love/hate relationship with HTML templating languages. I love them 
      because they make writing HTML so straightforward. I hate them because they make it difficult 
      to create reusable components. Handlebars is no exception. I have found it to be a wonderful 
      templating language. I initially found it by switching out EJS for Handlebars and was 
      immediately impressed by how much better Handlebars was to work with. Unfortunately, I have 
          since focused my attention on React for handling my Views, so I am no longer using 
HTML templating languages. However, I _still_ find myself reaching for handlebars for _other_ templating
needs, such as if I need a madlib style data template that can be filled in with user input, handlebars is
a great option!`,
        stats: {
            years: 3,
            used: 'Front End Web Development',
            likes: 'Straightforward, Partials, Powerful Helpers',
            dislikes: 'Hard to find usecases',
        },
    },
    mongo: {
        id: 'mongo',
        name: 'MongoDB',
        icon: 'mongo',
        quote: { quote: 'No database makes you more productive.' },
        description: `I have a weird fascination with NoSQL Databases. I like to tell myself that the 
      future is free of Relational DBs, even if I don't believe it. Of all the NoSQL Databases I 
      have tried (Mongo, Couch, Cassandra, Neo4j, Redis), I consider MongoDB to be my second favorite. It is easy to get 
up and running, and I find the Mongoose ORM both intuitive and powerful. I have done all kinds of work
with Mongo, from query optimization to sophisticated aggregation to powerful text search to GeoSpatial querying, and I have yet
to find something that was truly difficult to do with the database!`,
        stats: {
            years: 4,
            used: 'Database for Web Applications and Microservices, Research',
            likes: 'Simple, Flexible, Scalable',
            dislikes: "It's not Neo4j",
        },
    },
    neo4j: {
        id: 'neo4j',
        name: 'Neo4j',
        icon: 'neo4j',
        quote: { quote: 'Graphs for Everyone' },
        description: `Neo4j is incredible. The idea of storing data as a graph rather than rows in tables
is truly revolutionary in my eyes, and _greatly_ simlifies a huge amount of work when dealing with lots
of complex data. There are obvious shortcomings with this database, but when its warranted, I have yet
to experience something as awesome as writing a sophisticated Neo4j Cypher query!`,
        stats: {
            years: 4,
            used: 'Database for Microservices',
            likes: 'Graphs, Visualizations in Neo4j Aura, Power',
            dislikes:
                'Hard to use for simple things compared to something like Redis or Mongo',
        },
    },
    postgres: {
        id: 'postgres',
        name: 'PostgreSQL',
        icon: 'postgres',
        quote: {
            quote: 'Postgres is the one, true database',
            author: 'Sean Griffin',
        },
        description: `If I feel the need for any kind of serious Database, I will always choose 
      Postgres. Postgres offers the full power of a Relational Database, with the flexibility of a 
      NoSQL Database thanks to its Jsonb data type. Postgres is also ubiquitous, with support for 
      it in every programming language I have used to date. There are some phenomenal tools 
          developed for Postgres, such as pgcli and pg_flame. While I tend to use Mongo or Redis for simpler 
          projects, Postgres is absolutely my go-to Database when any type of complexity is involved.`,
        stats: {
            years: 3,
            used: 'Database for Web Applications, Research',
            likes: 'Flexibility, Efficiency, Popularity, Ubiquity, Speed',
            dislikes: 'Setup/Deployment can be Frustrating',
        },
    },
    mysql: {
        id: 'mysql',
        name: 'MySQL',
        icon: 'mysql',
        quote: {
            quote: 'Save the People, Save the Products',
            author: 'Michael "Monty" Widenius',
        },
        description: `MySQL is the first Database I have experience with. In my mind, it is the 
      industry standard Relational Database. To call it ubiquitous is an understatement. MySQL is 
      very easy to get set up and running and is highly performant. Unfortunately, MySQL has a 
      shaky past due to Oracle's acquisition of Sun Microsystems back in 2009. Thanks to Oracle's 
      reputation for being unfriendly towards Open Source software, a fork of MySQL named MariaDB 
      was created and has splintered MySQL development for the past decade. Given the two, I prefer 
      to use MariaDB both out of principle, and because I find MariaDB a better Database. However, 
          this fractured ecosystem often leads me to simply choose another Database, namely PostgreSQL 
          or MongoDB.`,
        stats: {
            years: 2,
            used: 'Database for Web Applications, Research',
            likes: 'Popularity, Ubiquity, Speed',
            dislikes: 'Oracle',
        },
    },
    redis: {
        id: 'redis',
        name: 'Redis',
        icon: 'redis',
        quote: {
            quote:
                'Any intelligent fool can make things bigger and more complex. It takes a touch of genius - and a lot of courage - to move in the opposite direction.',
            author: 'E.F. Schumacher',
        },
        description: `Redis is one of my all-time favorite pieces of software. I hold a lot of respect 
      for its author Antirez. I am also particularly fond of its codebase. I like to look at the 
      Redis source code as a golden example of a well-written C codebase. As an in-memory store, 
        Redis has a different purpose than other Databases. However, this means it has a ton of 
      utility and can be used in some very creative ways. For example, I once wrote an 
      authentication system using JSON Web Tokens that required keeping a blacklist of expired 
      tokens. Due to the nature of JSON Web Tokens, I wouldn't need to keep any given token in the 
      blacklist for longer than a set amount of time. Redis made this extremely easy. Not only was 
      it extremely fast, meaning I could easily check for a token in the blacklist, but it also has 
features specifically for letting items stored in it expire after a set time. Redis can also very 
powerfully handle caching, and is surprisingly good at working as a fan-out style service as well.
The only issue 
      I have run into with Redis is that people simply don't like to get it set up. Many times I 
          have seen applications resort to Docker just to be able to reliably use Redis as a team, and 
          getting Redis set up in production can sometimes be a challenge.`,
        stats: {
            years: 4,
            used: 'Caching for Web Applications and Microservices, Research',
            likes: 'Speed, Simplicity, Codebase, Efficiency, Power',
            dislikes: '',
        },
    },
    git: {
        id: 'git',
        name: 'Git',
        icon: 'git',
        quote: {
            quote: 'Any program is only as good as it is useful',
            author: 'Linus Torvalds',
        },
        description: `Git is arguably one of the most important pieces of software ever created. It is 
      what allows us as developers to collaboratively work together. It is not the first Version 
      Control System by a long shot, but it quickly rose to dominance upon release and is now the 
      canonical VCS for software projects. The ubiquity of Git has led to nearly every tool I use 
      taking advantage of it. My shell prompt uses Git to give me information about the project I'm 
      working in. FZF and Ripgrep take Git into account when searching. Neovim fires up Language 
      Servers based upon Git. CI/CD would be practically impossible without the use of Git. Also, 
      thanks to Github, I can share my code with the world using Git. It is an immeasurably 
          powerful tool that has only made me feel more comfortable as a developer the more I learn 
          about it.`,
        stats: {
            years: 5.5,
            used: 'Version Control, Open Source Contributions',
            likes: 'Ubiquity, Great CLI, Tooling',
            dislikes: 'Awkward Workflows, Merge Conflicts',
        },
    },
    github: {
        id: 'github',
        name: 'Github',
        icon: 'github',
        quote: {
            quote: 'Talk is cheap. Show me the code.',
            author: 'Linus Torvalds',
        },
        description: `Github is the heart of open source. It is the reason I can call myself an Open 
      Source Contributor. It contains a wealth of information in the form of millions of programs' 
      source code. Additionally, it is an efficient means for collaboration, allowing someone like 
      me to make contributions to huge projects easily. The site itself makes working with Git 
          extremely straightforward and helps to exemplify why certain git workflows are useful. Github 
          also has a wonderful API that has made tools like the GH CLI possible.`,
        stats: {
            years: 5,
            used:
                'Hosting Personal Projects, Contributing to Open Source Projects, Contributing to Work',
            likes: 'Ease of Use, Popularity, GH CLI',
            dislikes: 'Github Itself is Closed Source',
        },
    },
    heroku: {
        id: 'heroku',
        name: 'Heroku',
        icon: 'heroku',
        quote: {
            quote: 'Heroku allows developers to do what they do best - develop.',
        },
        description: `Heroku used to be my preferred deployment method. While I'm not afraid of manually 
      configuring a server and getting it up and running, I appreciate that Heroku doesn't force me 
      to. Their free plan is more than enough for making hobby sites, and if the wake-up time is 
      too much, it's easy to pay and get around that. I love their CLI, and their plugin ecosystem 
      has easily managed to fill my needs every time. While I would never recommend Heroku for 
          hosting a static site, I have found that they are usually a great choice for an app with any 
          kind of back end.`,
        stats: {
            years: 5,
            used: 'Hosting Web Applications',
            likes: 'Easy Set Up, Generous Free Plan, Easy to Scale, Ecosystem',
            dislikes: 'Free plan got a lot worse recently',
        },
    },
    aws: {
        id: 'aws',
        name: 'AWS',
        icon: 'aws',
        quote: {
            quote:
                "I don't need a hard disk in my computer if I can get to the server faster.",
            author: 'Steve Jobs',
        },
        description: `Amazon Web Services is one of the most important things to happen to the 
      internet. I can't even begin to list the number of websites that rely on AWS every single 
      day. My experience with AWS has been huge since working as a professional dev. I have used their Cloud9 IDE to spin 
up an EC2 instance and develop fully in the cloud. I have done the S3/IAM dance many times. I have set up and maintained
CI/CD using CodePipeline. I have manually spun up and dealt with EC2 instances. I have made countless Lambdas, making use
of EFS, Redis, and other outside resources. I have built an application using Elastic Beanstalk via Terraform. I've even
written my own small Rust program to make dealing with MFA in the CLI much less painful!`,
        stats: {
            years: 5,
            used:
                'Cloud9 IDE, S3 Storage, IAM Permissions, ECS, Elastic Beanstalk, Lambda, Cloudwatch, Elasticache, Route 53, CodePipeline, EC2',
            likes: 'Generous Free Plan, Extensive Featureset, Popularity',
            dislikes: 'Confusing Documentation, Odd Workflows, Horrible naming',
        },
    },
} as const satisfies Record<string, Skill>;

export const CATEGORIZED_SKILLS: CategorizedSkills = [
    {
        title: 'Programming Languages',
        skills: [
            SKILLS.js,
            SKILLS.ts,
            SKILLS.rust,
            SKILLS.ruby,
            SKILLS.c,
            SKILLS.python,
            SKILLS.java,
            SKILLS.php,
        ],
    },
    {
        title: 'Web Technologies',
        skills: [
            SKILLS.html,
            SKILLS.css,
            SKILLS.sass,
            SKILLS.tailwind,
            SKILLS.react,
            SKILLS.rails,
            SKILLS.webpack,
            SKILLS.esbuild,
            SKILLS.swc,
            SKILLS.express,
            SKILLS.handlebars,
        ],
    },
    {
        title: 'Databases',
        skills: [
            SKILLS.mongo,
            SKILLS.neo4j,
            SKILLS.postgres,
            SKILLS.mysql,
            SKILLS.redis,
        ],
    },
    {
        title: 'Dev Ops',
        skills: [SKILLS.git, SKILLS.github, SKILLS.heroku, SKILLS.aws],
    },
];
