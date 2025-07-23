import React from 'react';
import { Star, Phone, Mail, Calendar, Instagram, MessageCircle, Heart, Users, Award, Globe, Lightbulb } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Daniela Trujillo
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Fundadora de Elige con Claridad & UMOM
            </p>
            
            {/* Recuadro principal con ícono de foco */}
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col items-center">
                <div className="bg-accent/20 p-4 rounded-full mb-4">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <p className="text-xl md:text-2xl font-bold text-primary text-center leading-relaxed">
                  Autodescubrimiento, propósito y claridad para diseñar tu futuro académico y profesional
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Encuentra tu propósito y<br />
              <span className="text-accent">diseña tu futuro</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Acompañamiento especializado en orientación vocacional y admisiones universitarias internacionales para jóvenes y familias
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/593997883462" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Conversemos por WhatsApp
              </a>
              <a 
                href="https://calendly.com/danielatrujillok/coaching-1-hora?month=2025-07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Agenda una llamada conmigo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Sobre mí
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Más de 13 años de experiencia</h3>
                    <p className="text-slate-600">En coaching vocacional y mentoría juvenil</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Fundadora de programas especializados</h3>
                    <p className="text-slate-600">Elige con Claridad (orientación vocacional para jóvenes) y UMOM (programa para madres)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Más de 500 familias acompañadas</h3>
                    <p className="text-slate-600">En la toma de decisiones educativas y profesionales</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Especialista en admisiones internacionales</h3>
                    <p className="text-slate-600">Estados Unidos, España, Reino Unido, Canadá y más países</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block">
                <img 
                  src="/daniela-profile.jpg" 
                  alt="Daniela Trujillo" 
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Familias</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Mis Servicios
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Programas especializados para acompañarte en cada etapa de tu desarrollo personal y profesional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Test Vocacional */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="mb-4">
                <span className="bg-sky-100 text-sky-800 text-xs px-3 py-1 rounded-full">Elige con Claridad</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Test Vocacional + Sesión de Coaching</h3>
              <p className="text-slate-600 mb-6">Descubre tus fortalezas, intereses y el camino profesional que mejor se adapta a ti.</p>
              <a 
                href="https://wa.me/593997883462" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors"
              >
                Más información
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            
            {/* Programa Individual */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="mb-4">
                <span className="bg-sky-100 text-sky-800 text-xs px-3 py-1 rounded-full">Elige con Claridad</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Programa de Coaching Individual</h3>
              <p className="text-slate-600 mb-6">Acompañamiento personalizado uno a uno para definir tu proyecto de vida.</p>
              <a 
                href="https://calendly.com/danielatrujillok/coaching-1-hora?month=2025-07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors"
              >
                Agendar sesión
                <Calendar className="w-4 h-4" />
              </a>
            </div>
            
            {/* Asesoría Internacional */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Asesoría Universitaria Internacional</h3>
              <p className="text-slate-600 mb-6">Guía completa para aplicar a universidades en Estados Unidos, España, Reino Unido y más.</p>
              <a 
                href="https://wa.me/593997883462" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors"
              >
                Consultar
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            
            {/* UMOM */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <div className="mb-4">
                <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">UMOM</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Coaching y Talleres para Madres</h3>
              <p className="text-slate-600 mb-6">Programa especializado de apoyo y desarrollo personal para madres.</p>
              <a 
                href="https://calendly.com/danielatrujillok/coaching-1-hora?month=2025-07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors"
              >
                Conocer más
                <Calendar className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Testimonios
            </h2>
            <p className="text-xl text-slate-600">
              Lo que dicen las familias que he acompañado
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">
                "Gracias al acompañamiento de Daniela, mi hijo pudo conocerse mejor, descubrir cómo le gusta estudiar y tomar una decisión mucho más clara y segura sobre su futuro universitario."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-primary">Andrea Arce</p>
                <p className="text-slate-500 text-sm">Mamá</p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">
                "Vivimos una fantástica experiencia en el proceso electivo y posterior ingreso a la universidad con mi hijo Emilio. Nunca sentimos dudas durante el proceso, nos sentimos emocionalmente seguros."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-primary">Verónica Vásquez</p>
                <p className="text-slate-500 text-sm">Mamá</p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">
                "Mi hijo mayor se graduó en Economía en una de las mejores universidades del mundo, en Inglaterra (KCL). Mi hijo menor está ahora en Roma, Italia, desarrollando su talento en el fútbol. Ambos están felices y plenamente enfocados en lo que hacen, y eso es resultado directo del acompañamiento vocacional que recibieron de Daniela."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-primary">Eduardo Veintimilla</p>
                <p className="text-slate-500 text-sm">Papá</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section con enlaces actualizados */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Contacto
            </h2>
            <p className="text-xl text-slate-600">
              Estoy aquí para acompañarte en tu proceso de autodescubrimiento
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="https://wa.me/593997883462" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow group"
            >
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-primary mb-2">WhatsApp</h3>
              <p className="text-slate-600 text-sm">Conversemos directamente</p>
            </a>
            
            <a 
              href="https://calendly.com/danielatrujillok/coaching-1-hora?month=2025-07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Agenda una reunión</h3>
              <p className="text-slate-600 text-sm">Calendly</p>
            </a>
            
            <a 
              href="https://instagram.com/eligeconclaridad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow group"
            >
              <div className="bg-pink-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                <Instagram className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Instagram</h3>
              <p className="text-slate-600 text-sm">@eligeconclaridad</p>
            </a>
            
            <a 
              href="mailto:daniela@eligeconclaridad.com" 
              className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow group"
            >
              <div className="bg-slate-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors">
                <Mail className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Email</h3>
              <p className="text-slate-600 text-sm">daniela@eligeconclaridad.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-slate-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para dar el siguiente paso y obtener claridad sobre tu futuro?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Conversemos y descubramos juntos el camino hacia tu propósito
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/593997883462" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Escribir por WhatsApp
            </a>
            <a 
              href="https://calendly.com/danielatrujillok/coaching-1-hora?month=2025-07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Agenda una llamada conmigo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Daniela Trujillo</h3>
              <p className="text-slate-300 mb-6">
                Acompañamiento especializado en orientación vocacional y desarrollo personal
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/593997883462" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/eligeconclaridad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:daniela@eligeconclaridad.com" 
                  className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programas</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded mr-2">Elige con Claridad</span>
                  Orientación Vocacional
                </li>
                <li>
                  <span className="bg-pink-900 text-pink-200 text-xs px-2 py-1 rounded mr-2">UMOM</span>
                  Coaching para Madres
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Frases Inspiradoras</h4>
              <div className="space-y-4 text-slate-300">
                <blockquote className="italic">
                  "Clarity Creates Calm"<br />
                  <span className="text-sm">"La Claridad Crea Calma"</span>
                </blockquote>
                <blockquote className="italic">
                  "El autoconocimiento es el principio de todo"
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Daniela Trujillo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;