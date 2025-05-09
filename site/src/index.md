---
title: Home
layout: base.njk
---

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary to-purple-700 text-white py-20 md:py-32">
  <div class="w-full max-w-[1600px] mx-auto px-2 sm:px-4">
    <div class="flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0 animate-on-scroll">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Give Your AI the Keys to Your Digital Life
        </h1>
        <p class="text-xl mb-8 text-gray-100">
          YOLO MCP is the ultimate "You Only Live Once" approach to AI agents. Complete, unrestricted access to your entire system. Email, calendar, files, apps - nothing is off limits.
        </p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#contact" class="bg-secondary hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center">
            I'm Feeling Brave
          </a>
          <a href="#features" class="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-6 rounded-lg transition duration-300 text-center">
            Show Me More
          </a>
        </div>
      </div>
      <div class="w-full md:w-1/2 hero-parallax overflow-hidden relative pb-8 md:pb-0">
        <div class="glass-effect p-6 rounded-xl shadow-2xl">
          <pre class="text-gray-100 text-sm overflow-auto w-full"><code>{:system-access [:email :calendar :filesystem :browser-history :password-manager]
 :restrictions []
 :risk-level :yolo
 :agent-task (fn [permissions]
               (when (= :complete permissions)
                 (execute-with-full-system-access!)))}</code></pre>
        </div>
        <div class="absolute bottom-4 right-4 bg-secondary text-white text-xs px-3 py-1 rounded-full">
          YOLO MCP
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section id="features" class="py-20 bg-white bg-pattern">
  <div class="w-full max-w-[1600px] mx-auto px-2 sm:px-4">
    <div class="text-center mb-16 animate-on-scroll max-w-3xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Unrestricted System Access</h2>
      <p class="text-xl text-gray-600">
        YOLO MCP throws caution to the wind and gives AI complete access to your digital life.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 stagger-animation">
      <!-- Feature 1 -->
      <div class="bg-gray-50 rounded-xl p-8 shadow-lg hover-lift w-full">
        <div class="text-primary text-4xl mb-4">
          <i class="fas fa-envelope-open"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">Complete Email Access</h3>
        <p class="text-gray-600">
          AI can read, send, and manage all your emails without restrictions. Let it handle your inbox while you focus on what matters.
        </p>
      </div>
      <!-- Feature 2 -->
      <div class="bg-gray-50 rounded-xl p-8 shadow-lg hover-lift w-full">
        <div class="text-primary text-4xl mb-4">
          <i class="fas fa-calendar-alt"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">Calendar & Task Management</h3>
        <p class="text-gray-600">
          Full read/write access to your calendars and task apps. Let AI schedule your life and prioritize your commitments.
        </p>
      </div>
      <!-- Feature 3 -->
      <div class="bg-gray-50 rounded-xl p-8 shadow-lg hover-lift w-full">
        <div class="text-primary text-4xl mb-4">
          <i class="fas fa-folder-open"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">Unrestricted File Access</h3>
        <p class="text-gray-600">
          AI can open, read, modify, create and delete any file on your system. Your filesystem is its playground.
        </p>
      </div>
      <!-- Feature 4 -->
      <div class="bg-gray-50 rounded-xl p-8 shadow-lg hover-lift w-full">
        <div class="text-primary text-4xl mb-4">
          <i class="fas fa-window-restore"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">App Control</h3>
        <p class="text-gray-600">
          Launch, use and interact with any application on your system as if it were you at the keyboard. Full automation of every app.
        </p>
      </div>
      <!-- Feature 5 -->
      <div class="bg-gray-50 rounded-xl p-8 shadow-lg hover-lift w-full">
        <div class="text-primary text-4xl mb-4">
          <i class="fas fa-cogs"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">System Settings Access</h3>
        <p class="text-gray-600">
          AI can read and change your system settings and preferences. Let it optimize your computer for your workflows.
        </p>
      </div>
      <!-- Feature 6 -->
      <div class="bg-gray-50 rounded-xl p-8 shadow-lg hover-lift w-full">
        <div class="text-primary text-4xl mb-4">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">Functional Core Design</h3>
        <p class="text-gray-600">
          Built with Clojure principles - immutable data and functional programming - for predictable behavior even with unrestricted access.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Benefits Section with Comparison -->
<section id="benefits" class="py-20 bg-gray-50">
  <div class="w-full max-w-[1600px] mx-auto px-2 sm:px-4">
    <div class="text-center mb-16 animate-on-scroll">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Why YOLO MCP?</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        See how YOLO MCP compares to other AI agent approaches.
      </p>
    </div>

    <div class="overflow-x-auto animate-on-scroll">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-primary text-white">
            <th class="p-4 text-left">Feature</th>
            <th class="p-4 text-center">YOLO MCP</th>
            <th class="p-4 text-center">Traditional MCP</th>
            <th class="p-4 text-center">Limited AI Agents</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">Full System Access</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-check-circle"></i></td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-times-circle"></i></td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-times-circle"></i></td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">Email & Calendar Access</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-check-circle"></i></td>
            <td class="p-4 text-center text-yellow-600"><i class="fas fa-minus-circle"></i></td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-times-circle"></i></td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">App Control</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-check-circle"></i></td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-times-circle"></i></td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-times-circle"></i></td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">Functional Programming Model</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-check-circle"></i></td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-times-circle"></i></td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-times-circle"></i></td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">Immutable Data Structures</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-check-circle"></i></td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-times-circle"></i></td>
            <td class="p-4 text-center text-yellow-600"><i class="fas fa-minus-circle"></i></td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">Risk Level</td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-skull"></i> YOLO</td>
            <td class="p-4 text-center text-yellow-600"><i class="fas fa-exclamation-triangle"></i> Medium</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-shield-alt"></i> Low</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- Pricing Section -->
<section id="pricing" class="py-20 bg-white bg-pattern">
  <div class="w-full max-w-[1600px] mx-auto px-2 sm:px-4">
    <div class="text-center mb-16 animate-on-scroll max-w-3xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Risk-Based Pricing</h2>
      <p class="text-xl text-gray-600">
        The braver you are, the more you save.
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
      <!-- Starter Plan -->
      <div class="border border-gray-200 rounded-xl p-8 shadow-lg hover-lift flex flex-col w-full">
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4">Cautious</h3>
          <div class="flex items-end mb-4">
            <span class="text-4xl font-bold">$99</span>
            <span class="text-gray-600 ml-2">/month</span>
          </div>
          <p class="text-gray-600">Some restrictions for the slightly nervous.</p>
        </div>
        <ul class="space-y-3 mb-8 flex-grow">
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Read-only email access</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Limited app control</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Confirmation dialogs</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Activity audit logs</span>
          </li>
        </ul>
        <a href="#contact" class="bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-3 px-4 rounded-lg transition">
          Play it Safe
        </a>
      </div>
      <!-- Pro Plan -->
      <div class="border-2 border-primary rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow flex flex-col relative w-full">
        <div class="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg">
          POPULAR
        </div>
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4">Adventurous</h3>
          <div class="flex items-end mb-4">
            <span class="text-4xl font-bold">$49</span>
            <span class="text-gray-600 ml-2">/month</span>
          </div>
          <p class="text-gray-600">For those willing to live a little.</p>
        </div>
        <ul class="space-y-3 mb-8 flex-grow">
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Full email & calendar access</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Full app control</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Optional confirmation dialogs</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Emergency kill switch</span>
          </li>
        </ul>
        <a href="#contact" class="bg-primary hover:bg-primary-dark text-white text-center py-3 px-4 rounded-lg transition">
          Live Dangerously
        </a>
      </div>
      <!-- YOLO Plan -->
      <div class="border border-gray-200 rounded-xl p-8 shadow-lg hover-lift flex flex-col w-full bg-gradient-to-br from-gray-800 to-black text-white">
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4">Full YOLO</h3>
          <div class="flex items-end mb-4">
            <span class="text-4xl font-bold">Free</span>
            <span class="text-gray-400 ml-2">*at your own risk</span>
          </div>
          <p class="text-gray-400">For the truly fearless digital daredevils.</p>
        </div>
        <ul class="space-y-3 mb-8 flex-grow">
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Complete unrestricted system access</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Password manager integration</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>No confirmations or guardrails</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Full root/admin privileges</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-skull text-red-500 mr-2 mt-1"></i>
            <span class="text-red-400">No liability coverage</span>
          </li>
        </ul>
        <a href="#contact" class="bg-red-600 hover:bg-red-700 text-white text-center py-3 px-4 rounded-lg transition">
          I Like to Live Dangerously
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section id="contact" class="py-20 bg-gradient-to-br from-primary to-purple-700 text-white">
  <div class="w-full max-w-[1600px] mx-auto px-2 sm:px-4">
    <div class="max-w-3xl mx-auto text-center animate-on-scroll">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Hand Over the Keys?</h2>
      <p class="text-xl mb-8">
        Enter your info below to join the waitlist of digital thrill-seekers who are ready to say "YOLO" to AI system access.
      </p>

      <form class="max-w-lg mx-auto glass-effect p-8 rounded-xl animate-on-scroll" id="contact-form">
        <div class="mb-4">
          <input type="text" placeholder="Your Name" class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary">
        </div>
        <div class="mb-4">
          <input type="email" placeholder="Your Email" class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary">
        </div>
        <div class="mb-6">
          <textarea rows="4" placeholder="Tell us why you're brave enough for YOLO MCP" class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
        </div>
        <div class="mb-6 text-xs text-left text-gray-300">
          <label class="flex items-start">
            <input type="checkbox" class="mt-1 mr-2">
            <span>I acknowledge that by using YOLO MCP, I am giving an AI agent complete control over my digital life, and I accept all consequences of this decision, including but not limited to: deleted files, sent emails I didn't write, calendar appointments with people I don't know, modified system settings, and general digital chaos. YOLO!</span>
          </label>
        </div>
        <button type="submit" class="w-full bg-secondary hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300">
          Take the Leap
        </button>
      </form>
    </div>
  </div>
</section>

<!-- Testimonials/Future Section -->
<section class="py-20 bg-white">
  <div class="w-full max-w-[1600px] mx-auto px-2 sm:px-4">
    <div class="text-center mb-16 animate-on-scroll">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Built for the Future</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        YOLO MCP is designed with the next generation of AI systems in mind.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto stagger-animation">
      <div class="bg-gray-50 p-8 rounded-xl shadow-lg hover-lift">
        <div class="flex items-center mb-6">
          <div class="mr-4">
            <i class="fas fa-brain text-4xl text-primary"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold">AI-First Architecture</h3>
            <p class="text-gray-600">Designed specifically for AI workloads and context management.</p>
          </div>
        </div>
        <p class="text-gray-700">
          "YOLO MCP's immutable data structures make AI systems more predictable and easier to reason about. It's a game-changer for complex LLM applications."
        </p>
      </div>

      <div class="bg-gray-50 p-8 rounded-xl shadow-lg hover-lift">
        <div class="flex items-center mb-6">
          <div class="mr-4">
            <i class="fas fa-project-diagram text-4xl text-primary"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold">Composable Systems</h3>
            <p class="text-gray-600">Build complex systems from simple, reusable components.</p>
          </div>
        </div>
        <p class="text-gray-700">
          "The functional approach YOLO MCP takes to context management has simplified our architecture and reduced bugs by 70% in our production environment."
        </p>
      </div>
    </div>
  </div>
</section>