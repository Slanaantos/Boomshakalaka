import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { label: "Web Performance", href: "#servicos" },
      { label: "Automações n8n", href: "#servicos" },
      { label: "SaaS Development", href: "#servicos" },
    ],
    company: [
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contato", href: "#contato" },
    ],
    social: [
      { icon: Github, href: "https://github.com/slandesign", label: "GitHub" },
      { icon: Linkedin, href: "https://linkedin.com/company/slandesign", label: "LinkedIn" },
      { icon: Mail, href: "mailto:contato@slandesign.com", label: "Email" },
    ],
  };

  return (
    <footer className="relative py-16 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="text-3xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              SLAN<span className="text-white">.</span>
            </a>
            <p className="text-white/60 text-sm">
              Codificando o futuro da sua operação digital com performance e inovação.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              {links.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent/20 hover:border-accent/50 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/60" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} SLAN Design. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
