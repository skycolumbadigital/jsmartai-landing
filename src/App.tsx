import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Zap, Shield, TrendingUp, Star, Check, ChevronDown, Github, Twitter, Linkedin } from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "IA Avançada",
      description: "Tecnologia de ponta que aprende com você e otimiza seus fluxos de trabalho automaticamente."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Extrema",
      description: "Processamento ultrarrápido que aumenta sua produtividade em até 300%."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Total",
      description: "Criptografia de nível militar e conformidade com LGPD, GDPR e ISO 27001."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics Inteligente",
      description: "Insights em tempo real e relatórios preditivos para decisões mais assertivas."
    }
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      text: "JSmartAI transformou completamente nossa operação. Reduzimos custos em 40% e aumentamos a eficiência em 3x."
    },
    {
      name: "Carlos Mendes",
      role: "CTO, InnovaCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      text: "A melhor decisão que tomamos este ano. A IA realmente entende nossas necessidades e se adapta perfeitamente."
    },
    {
      name: "Marina Costa",
      role: "Diretora de Produto, Scale",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      text: "Interface intuitiva, resultados impressionantes. Nossa equipe adotou a plataforma em dias, não semanas."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "49",
      period: "/mês",
      description: "Perfeito para começar",
      features: [
        "Até 10 usuários",
        "50GB de armazenamento",
        "Suporte por email",
        "Analytics básico",
        "Integrações limitadas"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "149",
      period: "/mês",
      description: "Mais popular",
      features: [
        "Usuários ilimitados",
        "500GB de armazenamento",
        "Suporte prioritário 24/7",
        "Analytics avançado",
        "Todas as integrações",
        "API completa",
        "White label"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Solução personalizada",
      features: [
        "Tudo do Professional",
        "Armazenamento ilimitado",
        "Gerente de conta dedicado",
        "SLA garantido 99.9%",
        "Onboarding personalizado",
        "Desenvolvimento customizado",
        "Infraestrutura dedicada"
      ],
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: "Como funciona o período de teste gratuito?",
      answer: "Você tem 14 dias para testar todas as funcionalidades Premium sem compromisso. Não é necessário cartão de crédito e você pode cancelar a qualquer momento."
    },
    {
      question: "Posso mudar de plano depois?",
      answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são refletidas imediatamente e o valor é ajustado proporcionalmente."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte por email para todos os planos. Planos Professional e Enterprise têm suporte prioritário 24/7 via chat, email e telefone."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Absolutamente. Utilizamos criptografia de ponta a ponta, backup automático e conformidade com LGPD, GDPR e ISO 27001. Seus dados são 100% seus."
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos cartões de crédito (Visa, Mastercard, American Express), PIX, boleto bancário e transferência bancária para planos anuais."
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app">
      {/* Navegação */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">
            <Sparkles className="logo-icon" />
            <span>JSmartAI</span>
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('features')}>Funcionalidades</a></li>
            <li><a onClick={() => scrollToSection('testimonials')}>Depoimentos</a></li>
            <li><a onClick={() => scrollToSection('pricing')}>Preços</a></li>
            <li><a onClick={() => scrollToSection('faq')}>FAQ</a></li>
            <li><button className="btn-primary">Começar Grátis</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge">
              <Star className="badge-icon" />
              <span>Eleita melhor plataforma de IA em 2024</span>
            </div>
            <h1 className="hero-title">
              Transforme sua produtividade com
              <span className="gradient-text"> Inteligência Artificial</span>
            </h1>
            <p className="hero-description">
              Automatize tarefas, otimize processos e tome decisões mais inteligentes com a plataforma de IA mais avançada do mercado.
            </p>
            <div className="hero-cta">
              <button className="btn-hero-primary">
                Começar Teste Gratuito
                <Sparkles className="btn-icon" />
              </button>
              <button className="btn-hero-secondary">
                Ver Demonstração
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50k+</div>
                <div className="stat-label">Empresas</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfação</div>
              </div>
              <div className="stat">
                <div className="stat-number">300%</div>
                <div className="stat-label">ROI Médio</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card card-1">
              <Zap className="card-icon" />
              <div>
                <div className="card-title">Performance</div>
                <div className="card-value">+285%</div>
              </div>
            </div>
            <div className="floating-card card-2">
              <TrendingUp className="card-icon" />
              <div>
                <div className="card-title">Crescimento</div>
                <div className="card-value">+180%</div>
              </div>
            </div>
            <div className="hero-main-visual">
              <div className="visual-glow"></div>
              <div className="visual-content">AI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recursos que fazem a diferença</h2>
            <p className="section-description">
              Tecnologia de ponta para revolucionar sua forma de trabalhar
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">O que nossos clientes dizem</h2>
            <p className="section-description">
              Histórias reais de transformação e sucesso
            </p>
          </div>
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}
              >
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star-icon" fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Planos para cada necessidade</h2>
            <p className="section-description">
              Escolha o plano ideal e comece a transformar seu negócio hoje
            </p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
                {plan.highlighted && <div className="popular-badge">Mais Popular</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span className="price-currency">R$</span>
                  <span className="price-value">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={plan.highlighted ? 'btn-plan-highlighted' : 'btn-plan'}>
                  {plan.price === "Custom" ? "Falar com vendas" : "Começar agora"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Perguntas Frequentes</h2>
            <p className="section-description">
              Tire suas dúvidas sobre o JSmartAI
            </p>
          </div>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`faq-icon ${activeFaq === index ? 'rotated' : ''}`} />
                </button>
                <div className={`faq-answer ${activeFaq === index ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container cta-container">
          <h2 className="cta-title">Pronto para transformar seu negócio?</h2>
          <p className="cta-description">
            Junte-se a mais de 50.000 empresas que já revolucionaram sua produtividade
          </p>
          <div className="cta-buttons">
            <button className="btn-cta-primary">
              Começar Teste Gratuito de 14 dias
            </button>
            <button className="btn-cta-secondary">
              Agendar Demonstração
            </button>
          </div>
          <p className="cta-note">Não é necessário cartão de crédito • Cancele quando quiser</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="footer-logo">
                <Sparkles className="logo-icon" />
                <span>JSmartAI</span>
              </div>
              <p className="footer-description">
                Transformando negócios através da inteligência artificial avançada.
              </p>
              <div className="social-links">
                <a href="#" aria-label="GitHub"><Github /></a>
                <a href="#" aria-label="Twitter"><Twitter /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Produto</h4>
              <ul>
                <li><a href="#">Funcionalidades</a></li>
                <li><a href="#">Preços</a></li>
                <li><a href="#">Integrações</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Carreiras</a></li>
                <li><a href="#">Imprensa</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Recursos</h4>
              <ul>
                <li><a href="#">Documentação</a></li>
                <li><a href="#">Suporte</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacidade</a></li>
                <li><a href="#">Termos</a></li>
                <li><a href="#">Segurança</a></li>
                <li><a href="#">LGPD</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 JSmartAI. Todos os direitos reservados.</p>
            <p>Feito com ❤️ e ☕ para seu portfólio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;