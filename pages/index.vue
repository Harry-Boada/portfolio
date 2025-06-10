<template>
  <main class="min-h-screen bg-black text-white overflow-x-hidden">

    <header class="w-full">
        <!-- Navigation -->
        <nav class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
            <div class="container mx-auto px-6 py-4">
                <div class="flex justify-between items-center">
                    <span class="text-xl font-bold">PORTAFOLIO</span>
                    <ul class="hidden md:flex space-x-8">
                        <li>
                            <a href="#home" class="hover:text-emerald-400 transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href="#about" class="hover:text-emerald-400 transition-colors duration-300">About me</a>
                        </li>
                        <li>
                            <a href="#projects" class="hover:text-emerald-400 transition-colors duration-300">Projects</a>
                        </li>
                        <li>
                            <a href="#skills" class="hover:text-emerald-400 transition-colors duration-300">Skills</a>
                        </li>
                        <li>
                            <a href="#contact" class="hover:text-emerald-400 transition-colors duration-300">Contact</a>
                        </li>    
                    </ul>

                    <button @click="toggleMobileMenu" class="md:hidden">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </header>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="fixed inset-0 z-40 md:hidden">
      <div class="fixed inset-0 bg-black/90 backdrop-blur-sm" @click="toggleMobileMenu"></div>
      <div class="fixed right-0 top-0 h-full w-64 bg-gray-900 p-6">
        <ul class="flex flex-col space-y-4 mt-16">
             <li>
                <a href="#home" class="hover:text-emerald-400 transition-colors duration-300">Home</a>
            </li>
            <li>
                <a href="#about" class="hover:text-emerald-400 transition-colors duration-300">About me</a>
            </li>
            <li>
                <a href="#projects" class="hover:text-emerald-400 transition-colors duration-300">Projects</a>
            </li>
            <li>
                <a href="#skills" class="hover:text-emerald-400 transition-colors duration-300">Skills</a>
            </li>
            <li>
                <a href="#contact" class="hover:text-emerald-400 transition-colors duration-300">Contact</a>
            </li>    
        </ul>
      </div>
    </div>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex md:items-center relative overflow-hidden items-start">
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
      
      <!-- Background Image -->
      <figure class="absolute right-0 top-20 w-1/2 h-1/2">
        <img v-lazy="'/image/foto.webp'" alt="Profile" class="w-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"/>
      </figure>

      <div class="container mx-auto px-6 relative z-20">
        <div class="max-w-2xl">
          <div class="mb-4">
            <button @click="relaodPage" class="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group">
              <svg width="44px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.39502 12.0014C4.39544 12.4156 4.73156 12.751 5.14577 12.7506C5.55998 12.7502 5.89544 12.4141 5.89502 11.9999L4.39502 12.0014ZM6.28902 8.1116L6.91916 8.51834L6.91952 8.51777L6.28902 8.1116ZM9.33502 5.5336L9.0396 4.84424L9.03866 4.84464L9.33502 5.5336ZM13.256 5.1336L13.4085 4.39927L13.4062 4.39878L13.256 5.1336ZM16.73 7.0506L16.1901 7.57114L16.1907 7.57175L16.73 7.0506ZM17.7142 10.2078C17.8286 10.6059 18.2441 10.8358 18.6422 10.7214C19.0403 10.607 19.2703 10.1915 19.1558 9.79342L17.7142 10.2078ZM17.7091 9.81196C17.6049 10.2129 17.8455 10.6223 18.2464 10.7265C18.6473 10.8307 19.0567 10.5901 19.1609 10.1892L17.7091 9.81196ZM19.8709 7.45725C19.9751 7.05635 19.7346 6.6469 19.3337 6.54272C18.9328 6.43853 18.5233 6.67906 18.4191 7.07996L19.8709 7.45725ZM18.2353 10.7235C18.6345 10.8338 19.0476 10.5996 19.1579 10.2004C19.2683 9.80111 19.034 9.38802 18.6348 9.2777L18.2353 10.7235ZM15.9858 8.5457C15.5865 8.43537 15.1734 8.66959 15.0631 9.06884C14.9528 9.46809 15.187 9.88119 15.5863 9.99151L15.9858 8.5457ZM19.895 11.9999C19.8946 11.5856 19.5585 11.2502 19.1443 11.2506C18.7301 11.251 18.3946 11.5871 18.395 12.0014L19.895 11.9999ZM18.001 15.8896L17.3709 15.4829L17.3705 15.4834L18.001 15.8896ZM14.955 18.4676L15.2505 19.157L15.2514 19.1566L14.955 18.4676ZM11.034 18.8676L10.8815 19.6019L10.8839 19.6024L11.034 18.8676ZM7.56002 16.9506L8.09997 16.4301L8.09938 16.4295L7.56002 16.9506ZM6.57584 13.7934C6.46141 13.3953 6.04593 13.1654 5.64784 13.2798C5.24974 13.3942 5.01978 13.8097 5.13421 14.2078L6.57584 13.7934ZM6.58091 14.1892C6.6851 13.7884 6.44457 13.3789 6.04367 13.2747C5.64277 13.1705 5.23332 13.4111 5.12914 13.812L6.58091 14.1892ZM4.41914 16.544C4.31495 16.9449 4.55548 17.3543 4.95638 17.4585C5.35727 17.5627 5.76672 17.3221 5.87091 16.9212L4.41914 16.544ZM6.05478 13.2777C5.65553 13.1674 5.24244 13.4016 5.13212 13.8008C5.02179 14.2001 5.25601 14.6132 5.65526 14.7235L6.05478 13.2777ZM8.30426 15.4555C8.70351 15.5658 9.11661 15.3316 9.22693 14.9324C9.33726 14.5331 9.10304 14.12 8.70378 14.0097L8.30426 15.4555ZM5.89502 11.9999C5.89379 10.7649 6.24943 9.55591 6.91916 8.51834L5.65889 7.70487C4.83239 8.98532 4.3935 10.4773 4.39502 12.0014L5.89502 11.9999ZM6.91952 8.51777C7.57513 7.50005 8.51931 6.70094 9.63139 6.22256L9.03866 4.84464C7.65253 5.4409 6.47568 6.43693 5.65852 7.70544L6.91952 8.51777ZM9.63045 6.22297C10.7258 5.75356 11.9383 5.62986 13.1059 5.86842L13.4062 4.39878C11.9392 4.09906 10.4158 4.25448 9.0396 4.84424L9.63045 6.22297ZM13.1035 5.86793C14.2803 6.11232 15.3559 6.7059 16.1901 7.57114L17.27 6.53006C16.2264 5.44761 14.8807 4.70502 13.4085 4.39927L13.1035 5.86793ZM16.1907 7.57175C16.9065 8.31258 17.4296 9.21772 17.7142 10.2078L19.1558 9.79342C18.8035 8.5675 18.1557 7.44675 17.2694 6.52945L16.1907 7.57175ZM19.1609 10.1892L19.8709 7.45725L18.4191 7.07996L17.7091 9.81196L19.1609 10.1892ZM18.6348 9.2777L15.9858 8.5457L15.5863 9.99151L18.2353 10.7235L18.6348 9.2777ZM18.395 12.0014C18.3963 13.2363 18.0406 14.4453 17.3709 15.4829L18.6312 16.2963C19.4577 15.0159 19.8965 13.5239 19.895 11.9999L18.395 12.0014ZM17.3705 15.4834C16.7149 16.5012 15.7707 17.3003 14.6587 17.7786L15.2514 19.1566C16.6375 18.5603 17.8144 17.5643 18.6315 16.2958L17.3705 15.4834ZM14.6596 17.7782C13.5643 18.2476 12.3517 18.3713 11.1842 18.1328L10.8839 19.6024C12.3508 19.9021 13.8743 19.7467 15.2505 19.157L14.6596 17.7782ZM11.1865 18.1333C10.0098 17.8889 8.93411 17.2953 8.09997 16.4301L7.02008 17.4711C8.06363 18.5536 9.40936 19.2962 10.8815 19.6019L11.1865 18.1333ZM8.09938 16.4295C7.38355 15.6886 6.86042 14.7835 6.57584 13.7934L5.13421 14.2078C5.48658 15.4337 6.13433 16.5545 7.02067 17.4718L8.09938 16.4295ZM5.12914 13.812L4.41914 16.544L5.87091 16.9212L6.58091 14.1892L5.12914 13.812ZM5.65526 14.7235L8.30426 15.4555L8.70378 14.0097L6.05478 13.2777L5.65526 14.7235Z" fill="#ffffff"></path> </g></svg>
            </button>
          </div>
          
          <div class="space-y-4 animate-fade-in-up">
            <p class="text-gray-400 text-lg">Hi There!</p>
            <h1 class="text-5xl md:text-6xl font-bold leading-tight">
              I am <span class="text-gradient bg-gradient-to-r from-[#00a324] via-[#00ad85] to-[#00ad85] bg-clip-text text-transparent">Frontend Developer Junior</span>
            </h1>
            <p class="text-xl text-gray-300 max-w-md">
              Mechatronics Engineering Student
            </p>
            <button @click="scrollToContact"  class="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25">
              Contact Me
            </button>
          </div>

          <!-- Contact Info -->
          <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="group">
              <p class="text-gray-400 text-sm mb-1">Email</p>
              <p class="text-white group-hover:text-emerald-400 transition-colors duration-300">harrisonboada@gmail.com</p>
            </div>
            <div class="group">
              <p class="text-gray-400 text-sm mb-1">Phone</p>
              <p class="text-white group-hover:text-emerald-400 transition-colors duration-300">+57 3003339871</p>
            </div>
            <div class="group">
              <p class="text-gray-400 text-sm mb-1">Location</p>
              <p class="text-white group-hover:text-emerald-400 transition-colors duration-300">Colombia, Bogotá</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-900/50 mx-auto">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div class="space-y-6">
              <div>
                <p class="text-emerald-400 text-lg mb-2">Who am I?</p>
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                  I'm Harrison Esteban Boada Aldana,<br>
                  <span class="text-emerald-400"> Frontend Developer Junior</span>
                </h2>
              </div>
              
              <p class="text-gray-300 leading-relaxed">
                I'm a versatile front-end developer with a background in designing and developing scalable web applications. I focus on software and website development, with knowledge of Python and JavaScript. I have experience in front-end development with Vue js-Nuxt, TypeScript, SASS and TailwindCSS, and I'm also learning new technologies such as Django and PostgreSQL. I'm looking to collaborate as a front-end developer on teams passionate about creating optimal and efficient solutions for creating accessible and dynamic websites.
              </p>

              <ul class="grid grid-cols-2 gap-6 text-sm">
                <li>
                  <p class="text-gray-400 mb-1">Name</p>
                  <p class="text-white">Harrison Esteban Boada Aldana</p>
                </li>
                <li>
                  <p class="text-gray-400 mb-1">From</p>
                  <p class="text-white">Colombia, Bogotá D.C</p>
                </li>
                <li>
                  <p class="text-gray-400 mb-1">Age</p>
                  <p class="text-white">21</p>
                </li>
                <li>
                  <p class="text-gray-400 mb-1">Email</p>
                  <p class="text-white">harrisonboada@gmail.com</p>
                </li>
                <li>
                  <p class="text-gray-400 mb-1">LinkedIn</p>
                  <p class="text-white">https://www.linkedin.com/in/harrisonesteban/</p>
                </li>
              </ul>

              <button @click="downloadCV" class="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25">
                Download CV
              </button>
            </div>
          </div>
          
          <div class="order-1 lg:order-2 flex items-center">
            <div class="relative">
              <img 
                v-lazy="'/image/foto_1.webp'" 
                alt="About Me" 
                class="w-[300px] rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 md:ml-40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">My technical skills</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            My technical skills are the following
          </p>
        </div>

        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- HTML 5 -->
          <article class="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-xl"
               @click="openServiceModal(services[0])">
            <div class="text-emerald-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg width="44px" height="44px" viewBox="-1 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#34D399"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>html [#124]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -7639.000000)" fill="#34D399"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z" id="html-[#124]"> </path> </g> </g> </g> </g></svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
              HTML 5
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              I use it daily to structure semantic and accessible content.
            </p>
          </article>

          <!-- CSS 3 -->
          <div class="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-xl"
               @click="openServiceModal(services[1])">
            <div class="text-emerald-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg fill="#34D399" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="44px" height="44px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b001a2b"> <path display="inline" d="M204.064,46.682v22.018h-56.302V0.501h56.302v24.13h-32.172v22.051H204.064z M261.941,24.631h22.492 V0.501h-56.308c0,0,0,12.112,0,24.13c7.533,7.533,11.461,11.139,22.356,22.034c-6.369,0-22.356,0.022-22.356,0.021v22.014h56.308 V46.682L261.941,24.631z M341.746,24.631h22.49V0.501H307.93c0,0,0,12.112,0,24.13c7.531,7.533,11.461,11.139,22.355,22.034 c-6.365,0-22.355,0.022-22.355,0.021v22.014h56.307V46.682L341.746,24.631z M438.395,101.112l-34.203,370.486l-148.193,39.9 l-148.196-39.9L73.605,101.112H438.395z M369.477,176.444H255.865h-115.62l5.529,44.739h110.091h6.184l-6.184,2.574 l-106.067,44.177l3.518,43.73l102.549,0.333l54.963,0.175l-3.521,58.311l-51.442,14.484v-0.046l-0.422,0.116l-49.684-12.542 l-3.015-36.195h-0.164h-46.085h-0.162l6.032,69.876l93.5,27.649v-0.05l0.168,0.05l93-27.146L361.1,267.935H255.865h-0.26 l0.26-0.112l109.086-46.639L369.477,176.444z"> </path> </g> </g></svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
              CSS 3
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              I handle advanced styles, animations and responsive designs with ease.
            </p>
          </div>

          <!-- JavaScript -->
          <div class="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-xl"
               @click="openServiceModal(services[2])">
            <div class="text-emerald-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg width="44px" height="44px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="nonzero" clip-rule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9 6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75 8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" fill="#34D399"></path> </g></svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
              JavaScript
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Develop interactive and dynamic logic for web applications, using the tools provided by this language.
            </p>
          </div>

          <!-- SASS -->
          <div class="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-xl"
               @click="openServiceModal(services[3])">
            <div class="text-emerald-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg fill="#34D399" width="44px" height="44px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 15.144531 5.0136719 C 13.731238 4.939082 12.142266 5.1556875 10.587891 5.6953125 C 8.1178906 6.5523125 5.4463906 7.90025 3.5253906 9.65625 C 1.2433906 11.74625 0.87734375 13.565172 1.0273438 14.326172 C 1.5613438 17.025172 5.367625 18.785891 6.890625 20.087891 C 6.815625 20.128891 6.7456875 20.164172 6.6796875 20.201172 C 5.9156875 20.572172 3.0814688 22.029656 2.3554688 23.597656 C 1.5354688 25.375656 2.4911406 26.648266 3.1191406 26.822266 C 5.0781406 27.354266 7.01675 26.424516 8.09375 24.853516 C 9.17175 23.281516 9.0419219 21.229922 8.5449219 20.294922 C 8.5399219 20.280922 8.5303906 20.271812 8.5253906 20.257812 C 8.7223906 20.142813 8.923 20.027109 9.125 19.912109 C 9.514 19.687109 9.8935625 19.481734 10.226562 19.302734 C 10.038562 19.797734 9.9030312 20.394859 9.8320312 21.255859 C 9.7480313 22.263859 10.173563 23.568031 10.726562 24.082031 C 10.970562 24.307031 11.265266 24.3125 11.447266 24.3125 C 12.094266 24.3125 12.385031 23.790016 12.707031 23.166016 C 13.105031 22.405016 13.457031 21.521484 13.457031 21.521484 C 13.457031 21.521484 13.017656 23.912109 14.222656 23.912109 C 14.662656 23.912109 15.103781 23.358219 15.300781 23.074219 L 15.300781 23.078125 C 15.300781 23.078125 15.308031 23.060437 15.332031 23.023438 C 15.379031 22.954438 15.402344 22.914063 15.402344 22.914062 L 15.402344 22.900391 C 15.580344 22.602391 15.970641 21.919969 16.556641 20.792969 C 17.315641 19.335969 18.041016 17.515625 18.041016 17.515625 C 18.111016 17.915625 18.208031 18.310266 18.332031 18.697266 C 18.463031 19.132266 18.740938 19.609266 18.960938 20.072266 C 18.782937 20.310266 18.673828 20.447266 18.673828 20.447266 C 18.673828 20.451266 18.676687 20.455031 18.679688 20.457031 C 18.538688 20.640031 18.378844 20.836297 18.214844 21.029297 C 17.614844 21.726297 16.901594 22.524906 16.808594 22.753906 C 16.695594 23.023906 16.724453 23.224859 16.939453 23.380859 C 17.098453 23.499859 17.381781 23.518094 17.675781 23.496094 C 18.214781 23.459094 18.594344 23.330047 18.777344 23.248047 C 19.114344 23.130047 19.432656 22.967672 19.722656 22.763672 C 20.308656 22.341672 20.665812 21.736453 20.632812 20.939453 C 20.613813 20.499453 20.467062 20.058484 20.289062 19.646484 C 20.341062 19.573484 20.398219 19.495969 20.449219 19.417969 C 21.377219 18.093969 22.09375 16.640625 22.09375 16.640625 C 22.16375 17.040625 22.260766 17.435266 22.384766 17.822266 C 22.497766 18.193266 22.717922 18.601 22.919922 19 C 22.048922 19.692 21.508313 20.494484 21.320312 21.021484 C 20.973312 21.997484 21.246813 22.436109 21.757812 22.537109 C 21.987813 22.583109 22.314594 22.478906 22.558594 22.378906 C 22.920594 22.260906 23.261313 22.089141 23.570312 21.869141 C 24.156312 21.447141 24.723547 20.856688 24.685547 20.054688 C 24.671547 19.692688 24.569594 19.330422 24.433594 18.982422 C 25.169594 18.680422 26.12475 18.515344 27.34375 18.652344 C 29.95375 18.950344 30.465187 20.544984 30.367188 21.208984 C 30.269188 21.873984 29.720109 22.245469 29.537109 22.355469 C 29.354109 22.465469 29.2985 22.506844 29.3125 22.589844 C 29.3355 22.708844 29.419219 22.703781 29.574219 22.675781 C 29.790219 22.638781 30.942141 22.135344 30.994141 20.902344 C 31.069103 19.345129 29.53861 17.63228 26.826172 17.644531 L 26.822266 17.644531 C 25.880607 17.645115 24.95225 17.856237 24.107422 18.263672 C 23.830422 17.718672 23.544047 17.241766 23.498047 16.884766 C 23.442047 16.467766 23.382266 16.220562 23.447266 15.726562 C 23.513266 15.231563 23.807734 14.529516 23.802734 14.478516 C 23.797734 14.428516 23.736813 14.176875 23.132812 14.171875 C 22.528812 14.166875 22.007266 14.286406 21.947266 14.441406 C 21.840266 14.726406 21.757219 15.018406 21.699219 15.316406 C 21.591219 15.852406 20.490187 17.768578 19.867188 18.767578 C 19.661188 18.377578 19.488172 18.034766 19.451172 17.759766 C 19.395172 17.342766 19.333437 17.095562 19.398438 16.601562 C 19.464437 16.106562 19.760859 15.404516 19.755859 15.353516 C 19.750859 15.303516 19.689938 15.051875 19.085938 15.046875 C 18.481938 15.041875 17.959437 15.161406 17.898438 15.316406 C 17.837438 15.472406 17.771391 15.838406 17.650391 16.191406 C 17.528391 16.544406 16.061734 19.735453 15.677734 20.564453 C 15.480734 20.986453 15.311453 21.325688 15.189453 21.554688 C 15.170453 21.591687 15.157437 21.614813 15.148438 21.632812 C 15.162437 21.609813 15.171875 21.586703 15.171875 21.595703 C 15.068875 21.792703 15.007813 21.902344 15.007812 21.902344 L 15.007812 21.90625 C 14.927812 22.05325 14.838875 22.1875 14.796875 22.1875 C 14.768875 22.1875 14.707547 21.802391 14.810547 21.275391 C 15.030547 20.166391 15.551875 18.442813 15.546875 18.382812 C 15.541875 18.350812 15.643125 18.052578 15.203125 17.892578 C 14.776125 17.741578 14.623937 17.994141 14.585938 17.994141 C 14.547937 17.994141 14.519531 18.085938 14.519531 18.085938 C 14.519531 18.085938 14.991375 16.142578 13.609375 16.142578 C 12.746375 16.142578 11.546031 17.06825 10.957031 17.90625 C 10.587031 18.10325 9.7854063 18.530375 8.9414062 18.984375 C 8.6184062 19.158375 8.2866562 19.336859 7.9726562 19.505859 C 7.9496563 19.482859 7.93025 19.4605 7.90625 19.4375 C 6.22825 17.6865 3.1307188 16.448656 3.2617188 14.097656 C 3.3087188 13.240656 3.61475 10.991766 9.21875 8.2597656 C 13.81275 6.0237656 17.485188 6.6369531 18.117188 8.0019531 C 19.026187 9.9499531 16.152813 13.575656 11.382812 14.097656 C 9.5648125 14.294656 8.7272813 13.526531 8.4882812 13.269531 C 8.2402813 12.999531 8.2014219 12.985156 8.1074219 13.035156 C 7.9524219 13.117156 8.0514219 13.356047 8.1074219 13.498047 C 8.2484219 13.860047 8.8750469 14.427047 9.8730469 14.748047 C 10.750047 15.028047 12.763797 15.263109 15.341797 14.287109 C 18.237797 13.196109 20.450062 10.232453 19.789062 7.6894531 C 19.368437 6.0738281 17.50002 5.1379883 15.144531 5.0136719 z M 13.607422 17.289062 C 13.680719 17.294469 13.735125 17.321547 13.765625 17.373047 C 13.929625 17.644047 13.195813 19.638891 13.007812 20.087891 C 12.707812 20.807891 12.074453 22.641922 11.689453 22.544922 C 11.361453 22.462922 11.159047 21.064453 11.623047 19.689453 C 11.857047 18.997453 12.354391 18.172563 12.650391 17.851562 C 13.005141 17.463062 13.387531 17.272844 13.607422 17.289062 z M 23.347656 19.550781 C 23.402656 19.710781 23.431547 19.878875 23.435547 20.046875 C 23.430547 21.078875 22.676656 21.463047 22.222656 21.623047 C 22.128656 21.559047 22.141078 21.342828 22.455078 20.673828 C 22.577078 20.412828 22.859656 19.972781 23.347656 19.550781 z M 7.6035156 20.6875 C 7.9925156 22.0805 7.6179844 23.309344 6.7089844 24.277344 C 5.8469844 25.198344 4.6371875 25.546906 4.1171875 25.253906 C 3.5591875 24.936906 3.77975 23.579656 4.84375 22.597656 C 5.49075 22.001656 6.3259063 21.452281 6.8789062 21.113281 C 7.0059062 21.040281 7.1871094 20.929875 7.4121094 20.796875 C 7.4501094 20.773875 7.46875 20.765625 7.46875 20.765625 C 7.51075 20.738625 7.5565156 20.7155 7.6035156 20.6875 z M 19.380859 20.847656 C 19.380859 20.870656 19.386719 20.894875 19.386719 20.921875 C 19.380719 21.741875 18.573031 22.295625 18.207031 22.515625 L 18.210938 22.515625 L 18.210938 22.517578 C 18.083938 22.581578 17.966156 22.621844 17.910156 22.589844 C 17.868156 22.566844 17.962891 22.480469 17.962891 22.480469 C 17.962891 22.480469 18.614094 21.796375 18.871094 21.484375 C 19.021094 21.301375 19.193859 21.085656 19.380859 20.847656 z"></path></g></svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
              SASS
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              I efficiently implement variables and other tools for web layout.
            </p>
          </div>

          <!-- Tailwind CSS -->
          <div class="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-xl"
               @click="openServiceModal(services[4])">
            <div class="text-emerald-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg fill="#34D399" width="44px" height="44px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path></g></svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
              Tailwind CSS  
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Build fast interfaces with its customizable utility system.
            </p>
          </div>

          <!-- Git -->
          <div class="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-xl"
               @click="openServiceModal(services[5])">
            <div class="text-emerald-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg width="44px" height="44px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#34D399"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>git</title> <rect width="24" height="24" fill="none"></rect> <path d="M2.6,10.59,8.38,4.8l1.69,1.7A2,2,0,0,0,11,8.73v5.54A2,2,0,0,0,10,16a2,2,0,0,0,4,0,2,2,0,0,0-1-1.73V9.41l2.07,2.09A1.17,1.17,0,0,0,15,12a2,2,0,1,0,2-2,1.17,1.17,0,0,0-.5.07L13.93,7.5a2,2,0,0,0-1.15-2.34,2.1,2.1,0,0,0-1.28-.09L9.8,3.38l.79-.78a2,2,0,0,1,2.82,0l8,8a2,2,0,0,1,0,2.82l-8,8a2,2,0,0,1-2.82,0l-8-8A2,2,0,0,1,2.6,10.59Z"></path> </g></svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
              Git
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                I control versions and collaborate on projects using standard workflows.
            </p>
          </div>

          <!-- Vue js -->
          <div class="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-xl"
               @click="openServiceModal(services[5])">
            <div class="text-emerald-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg fill="#34D399" width="44px" height="44px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"></path> </g></svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
              Vue js
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              I develop interactive and scalable applications with Vue js.
            </p>
          </div>

          <!-- NUXT -->
          <div class="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-xl"
               @click="openServiceModal(services[5])">
            <div class="text-emerald-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg width="44px" height="44px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_nuxt</title><path d="M10.648,25.734a1.465,1.465,0,0,1-.157-.942H3.847L13.716,7.417l4.159,7.41,1.308-.976L15.076,6.467A1.752,1.752,0,0,0,13.7,5.56a1.531,1.531,0,0,0-1.343.924l-10,17.593a1.729,1.729,0,0,0-.087,1.656,1.526,1.526,0,0,0,1.456.706H12.1a1.523,1.523,0,0,1-1.456-.7Z" style="fill:#00c58e"></path><path d="M29.636,24.112,21.589,9.823a1.692,1.692,0,0,0-1.351-.907,1.489,1.489,0,0,0-1.308.907l-1.064,1.7v3.3l2.371-4.071,7.951,14.071H25.163a1.377,1.377,0,0,1-.122.837l-.026.052a1.729,1.729,0,0,1-1.456.732h4.734a1.72,1.72,0,0,0,1.456-.732,1.548,1.548,0,0,0-.122-1.6Z" style="fill:#108775"></path><path d="M25.233,25.7l.026-.052.07-.139a1.278,1.278,0,0,0,.061-.7,2.11,2.11,0,0,0-.27-.724l-6.286-10.9-.95-1.656h-.017l-.959,1.648-6.277,10.9a2.18,2.18,0,0,0-.244.715,1.438,1.438,0,0,0,.148.942,1.563,1.563,0,0,0,1.482.7H23.725a1.79,1.79,0,0,0,1.508-.741ZM17.866,14.836,23.62,24.8H12.112Z" style="fill:#2f495e"></path></g></svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
              Nuxt.js
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              I'm getting better at Nuxt to build Vue apps with server-side rendering and better SEO.
            </p>
          </div>

          <!-- TypeScript -->
          <div class="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-xl"
               @click="openServiceModal(services[5])">
            <div class="text-emerald-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg width="44px" height="44px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="nonzero" clip-rule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" fill="#34D399"></path> </g></svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
              TypeScript
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              I use TypeScript to write more secure and maintainable code, especially in large projects.
            </p>
          </div>

           <!-- Python -->
          <div class="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-xl"
               @click="openServiceModal(services[5])">
            <div class="text-emerald-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <svg fill="#34D399" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="44px" height="44px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51ec286"> <path display="inline" d="M194.734,246.879h121.768c33.9,0,60.956-27.908,60.956-61.95V68.846c0-33.035-27.87-57.855-60.956-63.371 c-20.943-3.484-42.673-5.069-63.51-4.971c-20.845,0.097-40.74,1.874-58.258,4.971c-51.586,9.117-60.952,28.191-60.952,63.371 v46.463H255.69v15.486H133.782h-45.75c-35.434,0-66.459,21.295-76.158,61.808c-11.192,46.435-11.694,75.409,0,123.898 c8.666,36.088,29.359,61.807,64.79,61.807h41.917v-55.699C118.581,282.37,153.39,246.879,194.734,246.879z M187.063,84.333 c-12.636,0-22.877-10.355-22.877-23.161c0-12.849,10.241-23.3,22.877-23.3c12.594,0,22.873,10.451,22.873,23.3 C209.936,73.979,199.658,84.333,187.063,84.333z M499.37,192.603c-8.761-35.27-25.484-61.808-60.96-61.808h-45.75v54.134 c0,41.972-35.582,77.292-76.158,77.292H194.734c-33.349,0-60.952,28.547-60.952,61.954v116.079 c0,33.037,28.726,52.476,60.952,61.943c38.589,11.353,75.59,13.409,121.768,0c30.688-8.876,60.956-26.764,60.956-61.943v-46.461 H255.69v-15.486h121.768h60.952c35.431,0,48.638-24.715,60.96-61.807C512.092,278.314,511.549,241.589,499.37,192.603z M324.178,424.766c12.64,0,22.873,10.356,22.873,23.156c0,12.85-10.233,23.305-22.873,23.305 c-12.595,0-22.877-10.455-22.877-23.305C301.301,435.122,311.583,424.766,324.178,424.766z"> </path> </g> </g></svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
              Python
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              I have knowledge in Python
            </p>
          </div>
        </section>
      </div>
    </section>

    <!-- projects section -->
  <section id="projects" class="py-20 bg-gray-950">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">My Projects</h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Explore some of the projects I've developed 🥷
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Proyecto dinámico -->
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl border border-gray-800 hover:border-emerald-400/30"
        >
          <!-- Imagen del proyecto -->
          <div class="relative overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <!-- Contenido del proyecto -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span 
                v-for="tech in project.technologies.slice(0, 3)" 
                :key="tech"
                class="px-2 py-1 bg-emerald-400/10 text-emerald-400 text-xs rounded-full border border-emerald-400/20"
              >
                {{ tech }}
              </span>
              <span v-if="project.technologies.length > 3" class="text-gray-500 text-xs">
                +{{ project.technologies.length - 3 }}
              </span>
            </div>

            <h3 class="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
              {{ project.title }}
            </h3>
            
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6 text-sm leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Botones de acción -->
            <div class="flex gap-3">
              <a 
                :href="project.liveUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-center text-sm font-medium hover:shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Ver Proyecto
              </a>
              
              <a 
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-center text-sm font-medium hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-900/50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Contact me</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Let's work together to create something amazing.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-300 mb-2">Name</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label class="block text-gray-300 mb-2">Email</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
            </div>
            <div>
              <label class="block text-gray-300 mb-2">Subject</label>
              <input 
                v-model="form.subject"
                type="text" 
                class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label class="block text-gray-300 mb-2">Message</label>
              <textarea 
                v-model="form.message"
                rows="5" 
                class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-emerald-400 focus:outline-none transition-colors duration-300 resize-none"
                required
              ></textarea>
            </div>
            <div class="text-center">
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 disabled:transform-none"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </div>
            <div v-if="submitError" class="mt-4 p-3 bg-red-500/20 text-red-300 rounded-lg text-center">
              {{ submitError }}
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Service Modal -->
    <div v-if="selectedService" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="fixed inset-0 bg-black/80 backdrop-blur-sm" @click="closeServiceModal"></div>
      <div class="bg-gray-900 rounded-2xl p-8 max-w-md w-full relative z-10 transform transition-all duration-300">
        <button 
          @click="closeServiceModal"
          class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-emerald-400 mb-4">
          <svg v-if="selectedService.title === 'Web Development'" class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
          <svg v-else-if="selectedService.title === '3D Design'" class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
          </svg>
          <svg v-else-if="selectedService.title === 'Design Trends'" class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>
          <svg v-else-if="selectedService.title === 'Customer Support'" class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3"/>
          </svg>
          <svg v-else-if="selectedService.title === 'Branding'" class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
          </svg>
          <svg v-else class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-4">{{ selectedService.title }}</h3>
        <p class="text-gray-300 mb-6">{{ selectedService.fullDescription }}</p>
        <button 
          @click="closeServiceModal"
          class="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
</main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import emailjs from 'emailjs-com';

// Meta tags
useHead({
  title: 'Harrison Esteban Boada Aldana',
  meta: [
    { name: 'description', content: 'Frontend Developer' }
  ]
})

// Reactive data
const mobileMenuOpen = ref(false)
const isSubmitting = ref(false)
const selectedService = ref(null)
const submitError = ref('');

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})


// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const relaodPage = () => {
  location.reload();
}

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv/Harrison_cv.pdf';
  link.download = 'CV_Harrison_Esteban_Boada_Aldana.pdf'; // nombre sugerido al descargar
  link.click();
  
}

const openServiceModal = (service: any) => {
  selectedService.value = service
}

const closeServiceModal = () => {
  selectedService.value = null
}

//  --------------- Projects ------------------
interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

const projects: Ref<Project[]> = ref([
  {
    id: 1,
    title: "Batatabit",
    description: "Landing page about an exchange made for Platzi's responsive design course. The site was built following the Mobile First methodology, technologies (HTML, CSS).",
    image: "/image/batatabit.webp",
    technologies: ["HTML 5", "CSS 3",],
    liveUrl: "https://batatabit-harry.netlify.app/",
    githubUrl: "https://github.com/Harry-Boada/Batatabit"
  },
  {
    id: 2,
    title: "Ecuaciones Diferenciales Project",
    description: "This project was developed in the context of a Differential Equations course. The objective was to model and project population growth in the Greater Toronto Area (GTA) using mathematical models based on first-order differential equations. Historical population growth data were collected, and methods such as the logistic model were applied to predict future population trends. The analysis is displayed on an interactive web page, allowing the results to be explored graphically.",
    image: "/image/ecuaciones_diferenciales.webp",
    technologies: ["Vue.js 3", "TypeScript", "Tailwind CSS", "Chart js"],
    liveUrl: "https://team-papitas-fritas.netlify.app/",
    githubUrl: "https://github.com/Harry-Boada/EcuacionesDiferencialesProgrambles"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "My personal portfolio developed with the Nuxt framework, including JavaScript and a fully responsive design using Tailwind CSS for layout and using the mobile-first methodology..",
    image: "/image/portafolio.webp",
    technologies: ["Nuxt 3", "JavaScript", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://portfolio-harrison-boada.netlify.app/",
    githubUrl: "https://github.com/Harry-Boada/portfolio"
  },
  {
    id: 4,
    title: "OnPackage",
    description: "OnPackage is a web application developed from scratch as part of a labor challenge of the Mission ICT program in 2022. For six months, I worked on this software development project acquiring experience in the entire life cycle of an application: from planning and design, to implementation and deployment. The objective was to create an efficient tool for the management and monitoring of packages, allowing to register, update and track shipments intuitively. This project allowed me to apply knowledge in Fronnd and Backend, and strengthen my teamwork skills and resolution of real problems.Technologies used: Vue.js, TypeScript, Python, Django, Mongodb.",
    image: "/image/onpackage.webp",
    technologies: ["Nuxt", "TypeScript", "Python", "Django", "Mongodb"],
    liveUrl: "https://onpackage.netlify.app/",
    githubUrl: "https://github.com/Harry-Boada/package_managment"
  },
])

// ---------------------------- Form Contact me --------------------------------
const SERVICE_ID = 'service_5xdnz3q';
const TEMPLATE_ID = 'template_5spknat';
const USER_ID = 'ChVlIQkBk3Mffi2J_';


const submitForm = async () => {
  isSubmitting.value = true;
  submitError.value = '';

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message
      },
      USER_ID
    );

    alert('Message sent successfully!');
    
    // Resetear formulario
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    submitError.value = 'Failed to send message. Please try again later.';
  } finally {
    isSubmitting.value = false;
  }
};


// Lazy loading 
const vLazy = {
  mounted(el: HTMLImageElement, binding: any) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.src = binding.value
          observer.unobserve(el)
        }
      })
    })
    observer.observe(el)
  }
}

//  scrolling for navigation
onMounted(() => {
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href') as string)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
})
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

/* Service Icons */
.WebIcon {
  @apply w-12 h-12;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-900;
}

::-webkit-scrollbar-thumb {
  @apply bg-emerald-500 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-emerald-400;
}
</style>    