---
title: Home
layout: base.njk
---

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary to-purple-700 text-white py-20 md:py-32">
  <div class="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
    <div class="flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0 animate-on-scroll">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Give me the keys!<br class="leading-snug">
          I can drive!
        </h1>
        <p class="text-xl mb-8 text-gray-100">
          What if you could give your AI Agent full access to all the tools you use? As in, complete, unrestricted access to your entire system. Email, calendar, files, apps. Nothing is off limits.
        </p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#contact" class="bg-secondary hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center">
            YOLO!
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

        YOLO MCP takes the [Model Context Protocol](https://modelcontextprotocol.io/) and throws caution to the wind.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 stagger-animation">
      <!-- Feature 1 -->
      <div class="bg-gray-50 rounded-xl p-8 shadow-lg hover-lift w-full">
        <div class="text-primary text-4xl mb-4">
          <i class="fas fa-lock"></i>
          <i class="fas fa-unlock-alt"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">Restrictions?</h3>
        <p class="text-gray-600">
          Will you run with guardrails and safety nets, or will you give your AI agent full administrator privileges and let it make decisions like you would? It's up to you.
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
          Let the AI launch, use and interact with any application on your system as if it were you at the keyboard. Full automation of every app.
        </p>
      </div>
      <!-- Feature 5 -->
      <div class="bg-gray-50 rounded-xl p-8 shadow-lg hover-lift w-full">
        <div class="text-primary text-4xl mb-4">
          <i class="fas fa-cogs"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">System Settings Access</h3>
        <p class="text-gray-600">
          Let's give the LLM tools to optimize your computer for your workflows.
        </p>
      </div>
      <!-- Feature 6 -->
      <div class="bg-gray-50 rounded-xl p-8 shadow-lg hover-lift w-full">
        <div class="text-primary text-4xl mb-4">
          <i class="fas fa-envelope-open"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">Complete Email Access</h3>
        <p class="text-gray-600">
          AI can read, send, and manage all your emails without restrictions. Let it handle your inbox while you focus on what matters.
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
            <th class="p-4 text-left">Do you</th>
            <th class="p-4 text-center">YOLO MCP</th>
            <th class="p-4 text-center">Retro MCP Vibes</th>
            <th class="p-4 text-center">MCP-starved AI</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">Trust the AI to the full?</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-check-circle"></i> Total freedom, zero limits, pure AI chaos.</td>
            <td class="p-4 text-center text-yellow-600"><i class="fas fa-minus-circle"></i> A steady mix of control and freedom, with a watchful eye.</td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-times-circle"></i> Locked down tight, playing it safe, no MCP adventures.</td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">Risk Level</td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-skull"></i> YOLO</td>
            <td class="p-4 text-center text-yellow-600"><i class="fas fa-exclamation-triangle"></i> Chill Mode</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-shield-alt"></i> Safe Bet!</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section id="contact" class="py-20 bg-gradient-to-br from-primary to-purple-700 text-white">
  <div class="w-full max-w-[1600px] mx-auto px-2 sm:px-4">
    <div class="max-w-3xl mx-auto text-center animate-on-scroll">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Hand Over the Keys?</h2>
      <p class="text-xl mb-8 whitespace-pre-wrap">
        Join the waitlist when you are ready to say "YOLO!" to AI system access.
      </p>

      <form class="max-w-lg mx-auto glass-effect p-8 rounded-xl animate-on-scroll" id="contact-form" data-netlify="true" name="contact-form" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact-form" />
        <p class="hidden">
          <label>
            For YOLO AIs: <input name="bot-field" />
          </label>
        </p>
        <div class="mb-4">
          <input type="text" name="name" placeholder="Your Name" class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary">
        </div>
        <div class="mb-4">
          <input type="email" name="email" placeholder="Your Email" class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary">
        </div>
        <div class="mb-6">
          <textarea rows="4" name="message" placeholder="Tell me what you would use YOLO MCP for. Do you have a use case in mind?" class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
        </div>
        <!-- <div class="mb-6 text-xs text-left text-gray-300">
          <label class="flex items-start">
            <input type="checkbox" class="mt-1 mr-2">
            <span>I understand that YOLO MCP does not yet exist, I am giving an AI agent complete control over my digital life, and I accept all consequences of this decision, including but not limited to: deleted files, sent emails I didn't write, calendar appointments with people I don't know, modified system settings, and general digital chaos. YOLO!</span>
          </label>
        </div> -->
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
      <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Built for the Brave</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        YOLO MCP is designed for those who trust AI with everything.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto stagger-animation">
      <div class="bg-gray-50 p-8 rounded-xl shadow-lg hover-lift">
        <div class="flex items-center mb-6">
          <div class="mr-4">
            <i class="fas fa-robot text-4xl text-primary"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold">Full Digital Autonomy</h3>
            <p class="text-gray-600">Let AI make decisions and take actions on your behalf.</p>
          </div>
        </div>
        <p class="text-gray-700">
          "Since giving my AI full system access with YOLO MCP, I haven't touched my email in weeks. It handles all my correspondence better than I ever could."
        </p>
      </div>

      <div class="bg-gray-50 p-8 rounded-xl shadow-lg hover-lift">
        <div class="flex items-center mb-6">
          <div class="mr-4">
            <i class="fas fa-unlock-alt text-4xl text-primary"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold">Zero Restrictions</h3>
            <p class="text-gray-600">No guardrails means maximum efficiency.</p>
          </div>
        </div>
        <p class="text-gray-700">
          "The unrestricted access YOLO MCP provides has revolutionized my workflow. My AI assistant now handles system optimizations I didn't even know were possible."
        </p>
      </div>
    </div>
  </div>
</section>