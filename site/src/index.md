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
          The Modern MCP Server You've Been Waiting For
        </h1>
        <p class="text-xl mb-8 text-gray-100">
          YOLO MCP brings immutable data structures and functional programming to model context protocols. Build smarter AI systems with less complexity.
        </p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#contact" class="bg-secondary hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center">
            Get Early Access
          </a>
          <a href="#features" class="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-6 rounded-lg transition duration-300 text-center">
            Learn More
          </a>
        </div>
      </div>
      <div class="md:w-1/2 hero-parallax overflow-hidden relative pb-8 md:pb-0">
        <div class="glass-effect p-6 rounded-xl shadow-2xl">
          <pre class="text-gray-100 text-sm overflow-auto w-full"><code>{:model-context [{:content "User is asking about functional programming"}
              {:content "User has mentioned immutable data structures"}]
 :response-options {:style :concise}
 :model-fn (fn [ctx]
             (->> ctx
                  (filter relevant?)
                  (map transform-context)
                  (generate-response)))}</code></pre>
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
      <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Powerful Features</h2>
      <p class="text-xl text-gray-600">
        YOLO MCP combines the best of functional programming with modern model context protocols.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 stagger-animation">
      <!-- Feature 1 -->
      <div class="bg-gray-50 rounded-xl p-8 shadow-lg hover-lift w-full">
        <div class="text-primary text-4xl mb-4">
          <i class="fas fa-code"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">Immutable By Design</h3>
        <p class="text-gray-600">
          Built on immutable data structures for predictable state management and easier debugging.
        </p>
      </div>
      <!-- Feature 2 -->
      <div class="bg-gray-50 rounded-xl p-8 shadow-lg hover-lift w-full">
        <div class="text-primary text-4xl mb-4">
          <i class="fas fa-bolt"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">Blazing Fast Performance</h3>
        <p class="text-gray-600">
          Optimized for high-throughput AI systems with minimal latency and maximum reliability.
        </p>
      </div>
      <!-- Feature 3 -->
      <div class="bg-gray-50 rounded-xl p-8 shadow-lg hover-lift w-full">
        <div class="text-primary text-4xl mb-4">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">Enterprise Security</h3>
        <p class="text-gray-600">
          Bank-level encryption and security protocols to keep your model context safe.
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
        See how YOLO MCP compares to traditional model context protocol servers.
      </p>
    </div>

    <div class="overflow-x-auto animate-on-scroll">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-primary text-white">
            <th class="p-4 text-left">Feature</th>
            <th class="p-4 text-center">YOLO MCP</th>
            <th class="p-4 text-center">Traditional MCP</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">Immutable Data Structures</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-check-circle"></i></td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-times-circle"></i></td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">Functional Programming Model</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-check-circle"></i></td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-times-circle"></i></td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">First-class REPL Support</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-check-circle"></i></td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-times-circle"></i></td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">Enterprise-grade Security</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-check-circle"></i></td>
            <td class="p-4 text-center text-yellow-600"><i class="fas fa-minus-circle"></i></td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">Horizontal Scaling</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-check-circle"></i></td>
            <td class="p-4 text-center text-yellow-600"><i class="fas fa-minus-circle"></i></td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="p-4 font-medium">Open Source Core</td>
            <td class="p-4 text-center text-green-600"><i class="fas fa-check-circle"></i></td>
            <td class="p-4 text-center text-red-600"><i class="fas fa-times-circle"></i></td>
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
      <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Simple, Transparent Pricing</h2>
      <p class="text-xl text-gray-600">
        Choose the right plan for your needs.
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
      <!-- Starter Plan -->
      <div class="border border-gray-200 rounded-xl p-8 shadow-lg hover-lift flex flex-col w-full">
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4">Developer</h3>
          <div class="flex items-end mb-4">
            <span class="text-4xl font-bold">$29</span>
            <span class="text-gray-600 ml-2">/month</span>
          </div>
          <p class="text-gray-600">Perfect for individual developers and small projects.</p>
        </div>
        <ul class="space-y-3 mb-8 flex-grow">
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Up to 100,000 requests/month</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>5 concurrent connections</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Community support</span>
          </li>
        </ul>
        <a href="#contact" class="bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-3 px-4 rounded-lg transition">
          Start Free Trial
        </a>
      </div>
      <!-- Pro Plan -->
      <div class="border-2 border-primary rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow flex flex-col relative w-full">
        <div class="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg">
          POPULAR
        </div>
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4">Professional</h3>
          <div class="flex items-end mb-4">
            <span class="text-4xl font-bold">$99</span>
            <span class="text-gray-600 ml-2">/month</span>
          </div>
          <p class="text-gray-600">For growing teams and production workloads.</p>
        </div>
        <ul class="space-y-3 mb-8 flex-grow">
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Up to 1 million requests/month</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>20 concurrent connections</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Priority email support</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Advanced analytics</span>
          </li>
        </ul>
        <a href="#contact" class="bg-primary hover:bg-primary-dark text-white text-center py-3 px-4 rounded-lg transition">
          Start Free Trial
        </a>
      </div>
      <!-- Enterprise Plan -->
      <div class="border border-gray-200 rounded-xl p-8 shadow-lg hover-lift flex flex-col w-full">
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4">Enterprise</h3>
          <div class="flex items-end mb-4">
            <span class="text-4xl font-bold">Custom</span>
          </div>
          <p class="text-gray-600">For large organizations with specific requirements.</p>
        </div>
        <ul class="space-y-3 mb-8 flex-grow">
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Unlimited requests</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Unlimited connections</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>24/7 dedicated support</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Custom integrations</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
            <span>Service Level Agreement</span>
          </li>
        </ul>
        <a href="#contact" class="bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-3 px-4 rounded-lg transition">
          Contact Sales
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section id="contact" class="py-20 bg-gradient-to-br from-primary to-purple-700 text-white">
  <div class="w-full max-w-[1600px] mx-auto px-2 sm:px-4">
    <div class="max-w-3xl mx-auto text-center animate-on-scroll">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your MCP Experience?</h2>
      <p class="text-xl mb-8">
        Join our early access program and be the first to experience the future of model context protocols.
      </p>

      <form class="max-w-lg mx-auto glass-effect p-8 rounded-xl animate-on-scroll" id="contact-form">
        <div class="mb-4">
          <input type="text" placeholder="Your Name" class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary">
        </div>
        <div class="mb-4">
          <input type="email" placeholder="Your Email" class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary">
        </div>
        <div class="mb-6">
          <textarea rows="4" placeholder="Tell us about your use case" class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
        </div>
        <button type="submit" class="w-full bg-secondary hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300">
          Join Early Access
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