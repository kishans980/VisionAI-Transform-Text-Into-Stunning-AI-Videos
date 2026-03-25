import { useState } from 'react';
import {
  Sparkles,
  Zap,
  Shield,
  Globe,
  Clock,
  TrendingUp,
  Play,
  Check,
  ChevronDown,
  Menu,
  X,
  Twitter,
  Linkedin,
  Github,
  ArrowRight,
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/50 border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">VisionAI</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                Get Started
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a
                href="#features"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it Works
              </a>
              <a
                href="#pricing"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
                <span className="text-blue-400 text-sm font-medium">
                  Generate Professional Videos in Seconds
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Transform Text Into
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Stunning AI Videos
                </span>
              </h1>

              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Create engaging video content without cameras, actors, or editing skills. Our AI
                transforms your ideas into professional videos that captivate your audience and
                drive results.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              <div className="pt-8 text-sm text-gray-500">
                No credit card required • 14-day free trial • Cancel anytime
              </div>
            </div>

            <div className="mt-20 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-3xl rounded-full"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7564175/pexels-photo-7564175.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="VisionAI Dashboard"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Everything You Need to
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {' '}
                  Create Amazing Videos
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Powerful features designed to help you create professional video content at scale
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-blue-400" />,
                  title: 'Lightning Fast Generation',
                  description:
                    'Generate professional videos in under 60 seconds. Our advanced AI processes your content instantly, delivering studio-quality results without the wait.',
                },
                {
                  icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
                  title: 'AI-Powered Scripts',
                  description:
                    'Let our AI write engaging scripts tailored to your audience. Just provide a topic, and watch as compelling narratives come to life automatically.',
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-400" />,
                  title: 'Multi-Language Support',
                  description:
                    'Reach global audiences with support for 40+ languages. Create localized content that resonates with viewers worldwide effortlessly.',
                },
                {
                  icon: <Shield className="w-8 h-8 text-cyan-400" />,
                  title: 'Enterprise-Grade Security',
                  description:
                    'Your content is protected with bank-level encryption. SOC 2 compliant infrastructure ensures your data stays private and secure.',
                },
                {
                  icon: <Clock className="w-8 h-8 text-blue-400" />,
                  title: 'Save 10x Time',
                  description:
                    'Cut video production time from weeks to minutes. Focus on strategy while our AI handles the heavy lifting of content creation.',
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
                  title: 'Boost Engagement',
                  description:
                    'Video content drives 1200% more shares than text. Create thumb-stopping videos that increase conversions and audience engagement.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                From Idea to Video in
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {' '}
                  3 Simple Steps
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our streamlined process makes video creation effortless
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Enter Your Content',
                  description:
                    'Simply type your script, paste an article, or describe your video idea. Our AI understands context and adapts to your style and brand voice.',
                },
                {
                  step: '02',
                  title: 'AI Magic Happens',
                  description:
                    'Our advanced AI analyzes your content, generates visuals, adds voiceovers, and assembles everything into a cohesive, professional video.',
                },
                {
                  step: '03',
                  title: 'Download & Share',
                  description:
                    'Preview your video, make any tweaks you want, then download in HD or 4K. Share directly to social media or embed on your website.',
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl h-full hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="text-6xl font-bold text-blue-500/20 mb-4">{step.step}</div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Simple, Transparent
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {' '}
                  Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Choose the perfect plan for your video creation needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '$29',
                  description: 'Perfect for individuals and small projects',
                  features: [
                    '10 videos per month',
                    'HD 1080p quality',
                    '20+ AI voices',
                    'Basic templates',
                    'Email support',
                    'Watermark removed',
                  ],
                  popular: false,
                },
                {
                  name: 'Professional',
                  price: '$79',
                  description: 'Ideal for content creators and businesses',
                  features: [
                    '50 videos per month',
                    '4K quality',
                    '100+ AI voices',
                    'Premium templates',
                    'Priority support',
                    'Custom branding',
                    'API access',
                    'Team collaboration',
                  ],
                  popular: true,
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  description: 'For large teams and organizations',
                  features: [
                    'Unlimited videos',
                    '4K quality',
                    'All AI voices',
                    'Custom templates',
                    'Dedicated support',
                    'White-label solution',
                    'Custom integrations',
                    'SLA guarantee',
                  ],
                  popular: false,
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular
                      ? 'border-blue-500 shadow-xl shadow-blue-500/20 scale-105'
                      : 'border-white/10 hover:border-blue-500/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-5xl font-bold mb-2">
                      {plan.price}
                      {plan.price !== 'Custom' && (
                        <span className="text-lg text-gray-400">/month</span>
                      )}
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Loved by
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {' '}
                  Creators Worldwide
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join thousands of satisfied customers creating amazing videos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'Marketing Director at TechFlow',
                  content:
                    'VisionAI transformed our content strategy. We went from producing 2 videos a month to 20, and our engagement rates tripled. The quality is incredible and our team saves countless hours.',
                  avatar:
                    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
                },
                {
                  name: 'Michael Chen',
                  role: 'YouTube Creator',
                  content:
                    "As a solo creator, VisionAI is a game-changer. I can focus on ideas while the AI handles production. My channel grew 300% in 3 months. It's like having a full production team.",
                  avatar:
                    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'CEO at SocialBrand',
                  content:
                    'The ROI is unmatched. We reduced video production costs by 80% while increasing output quality. Our clients are amazed by how quickly we deliver professional content now.',
                  avatar:
                    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Frequently Asked
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {' '}
                  Questions
                </span>
              </h2>
              <p className="text-xl text-gray-400">Everything you need to know about VisionAI</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'How does the AI video generation work?',
                  answer:
                    'Our AI analyzes your text input, understands the context, and automatically generates relevant visuals, adds professional voiceovers, background music, and transitions. The entire process is automated and takes less than 60 seconds for most videos.',
                },
                {
                  question: 'Do I need any video editing experience?',
                  answer:
                    'Not at all! VisionAI is designed for everyone, from complete beginners to professional marketers. Simply provide your content or ideas, and our AI handles all the technical aspects of video creation. No editing skills required.',
                },
                {
                  question: 'Can I customize the videos?',
                  answer:
                    'Yes! While our AI creates great videos automatically, you have full control to customize everything. Change colors, fonts, transitions, voiceovers, music, and more. Add your branding, logos, and choose from hundreds of templates.',
                },
                {
                  question: 'What video formats can I export?',
                  answer:
                    'You can export videos in multiple formats including MP4, MOV, and WebM. Choose from various quality settings including HD (1080p) and 4K. All exports are optimized for different platforms like YouTube, Instagram, LinkedIn, and TikTok.',
                },
                {
                  question: 'Is there a free trial available?',
                  answer:
                    'Yes! We offer a 14-day free trial with no credit card required. You get full access to all Professional plan features during the trial. Create up to 10 videos to experience the power of VisionAI risk-free.',
                },
                {
                  question: 'What kind of support do you offer?',
                  answer:
                    'We provide email support for all plans, with priority support for Professional and Enterprise customers. Enterprise customers also get a dedicated account manager. Our comprehensive knowledge base and video tutorials are available 24/7.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-4xl">
            <div className="relative overflow-hidden p-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl text-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0wIDMwdi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Content?</h2>
                <p className="text-xl text-blue-50 max-w-2xl mx-auto">
                  Join thousands of creators who are already producing stunning videos with AI. Start
                  your free trial today.
                </p>
                <button className="group px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-blue-100">No credit card required • Full access for 14 days</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">VisionAI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transform your ideas into stunning videos with the power of artificial intelligence.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 VisionAI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
