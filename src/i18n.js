import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          navbar: {
            link1: "Projects",
            link2: "About",
            link3: "Contact",
          },
          heading: "Camila is a front-end developer based in Brazil",
          projects: [
            {
              title: "Apple Clone",
              description: "Responsive website clone of Apple Home page",
            },
            {
              title: "Calculator",
              description:
                "A scientific calculator fully responsive and includes a dark/light mode toggle.",
            },
            {
              title: "Countdown",
              description:
                "Countdown challenge from Frontend Mentor that features responsive design, hover states, and card animation.",
            },
            {
              title: "Restaurant Delivery",
              description:
                "Final project from Jonas Schmedtmann's Udemy course the challenge demonstrates the skills learned in the course.",
            },
            {
              title: "Survey Form",
              description:
                "Certification project, required for the FreeCodeCamp Responsive Web Design course.",
            },
            {
              title: "Google Clone",
              description:
                "Google clone with search functionality and displays the user's location and language.",
            },
            {
              title: "Manage landing page",
              description:
                "Frontend Mentor challenge with responsive design, hover states, testimonial slider, and a message when email address is not formatted correctly.",
            },
            {
              title: "Password Generator",
              description:
                "Password generator project features uppercase, number, or symbol options.",
            },
            {
              title: "Personal Portfolio Webpage",
              description:
                "Certification project required for the FreeCodeCamp Responsive Web Design course.",
            },
            {
              title: "Sallve Clone",
              description: "Skincare website clone",
            },
            {
              title: "Space Travel Website",
              description: "FrontEnd Mentor Space Travel Challenge.",
            },
            {
              title: "To do List",
              description:
                "Frontend Mentor Challenge with light and dark mode, localStorage, ability to filter, delete and reorder items.",
            },
            {
              title: "React Weather App",
              description:
                "Weather application built with React, Axios, and Bootstrap, integrated with the Open Weather API",
            },
            {
              title: "Your Age",
              description:
                "Project to calculate a person's age in years, months, days, minutes, and seconds.",
            },
          ],
          about: {
            p1: "Hello, my name is Camila, I'm a front-end developer with a background in fashion design and a passion for creating beautiful, functional designs. My extensive experience in the fashion industry has provided me with a solid foundation in creativity, attention to detail, and problem-solving.",
            p2: "I'm a self-taught web developer, with a love for coding and true satisfaction of building things from scratch and reaching their best version. Whether it's a silk bride's dress or a startup website, I take pride in creating solutions that meet my clients' needs and exceed their expectations.",
            p3: "When I'm not coding, you can find me at the beach, out on a hike or behind the lens of my camera.",
            p4: "With good knowledge in HTML, CSS, JavaScript, React and a unique perspective, I am eager to tackle challenges and bring my skills and passion to the world of web development.",
          },
          contact: "Say Hello:",
          notFound: {
            p: "Sorry, the page you were looking for was not found.",
            link: "Return to home",
          },
          footer: "Design and code by Camila Ramos",
        },
      },
      pt: {
        translation: {
          navbar: {
            link1: "Projetos",
            link2: "Sobre",
            link3: "Contato",
          },
          heading: "Camila é uma desenvolvedora front-end sediada no Brasil",
          projects: [
            {
              title: "Clone Apple",
              description: "Clone responsivo da página inicial da Apple",
            },
            {
              title: "Calculadora",
              description:
                "Uma calculadora científica totalmente responsiva que inclui modos claro e escuro.",
            },
            {
              title: "Contagem regressiva",
              description:
                "Desafio de contagem regressiva do Frontend Mentor que apresenta design responsivo, estados de foco e animação de cartão.",
            },
            {
              title: "Restaurante com Tele Entrega",
              description:
                "Projeto final do curso de Jonas Schmedtmann. O site demonstra as habilidades aprendidas no curso.",
            },
            {
              title: "Formulário",
              description:
                "Projeto de certificação para o curso FreeCodeCamp Responsive Web Design.",
            },
            {
              title: "Clone Google",
              description:
                "Clone do Google com funcionalidade de pesquisa, localização e o idioma do usuário.",
            },
            {
              title: "Página de Gerenciamento",
              description:
                "Desafio Frontend Mentor com design responsivo, estados de foco, slider de depoimentos e uma mensagem quando o endereço de e-mail não está formatado corretamente.",
            },
            {
              title: "Gerador de Senhas",
              description:
                "Gerador de senha com opções de letras maiúsculas, números ou símbolos.",
            },
            {
              title: "Página Portfólio",
              description:
                "Projeto de certificação necessário para o curso FreeCodeCamp Responsive Web Design.",
            },
            {
              title: "Clone Sallve",
              description: "Clone da marca Sallve",
            },
            {
              title: "Site de viagens espaciais",
              description: "Desafio responsivo do FrontEnd Mentor.",
            },
            {
              title: "Lista de afazeres",
              description:
                "Desafio Frontend Mentor com modo claro e escuro, localStorage, capacidade de filtrar, excluir e reordenar itens.",
            },
            {
              title: "Aplicativo meteorológico",
              description:
                "Aplicativo meteorológico desenvolvido com React, Axios e Bootstrap, integrado à Open Weather API",
            },
            {
              title: "Sua Idade",
              description:
                "Projeto para calcular a idade de uma pessoa em anos, meses, dias, minutos e segundos.",
            },
          ],
          about: {
            p1: "Olá, meu nome é Camila, sou desenvolvedora front-end com formação em design de moda e paixão por criar designs bonitos e funcionais. Minha vasta experiência na indústria da moda me proporcionou uma base sólida em criatividade, atenção aos detalhes e resolução de problemas.",
            p2: "Sou um desenvolvedor web autodidata, com amor por codificação e verdadeira satisfação em construir coisas do zero e chegar à sua melhor versão. Seja um vestido de noiva de seda ou um site de startup, tenho orgulho em criar soluções que atendam às necessidades dos meus clientes e superem suas expectativas.",
            p3: "Quando não estou programando, você pode me encontrar na praia, em uma caminhada ou atrás das lentes da minha câmera.",
            p4: "Com bons conhecimentos em HTML, CSS, JavaScript, React e uma perspectiva única, estou ansioso para enfrentar desafios e trazer minhas habilidades e paixão para o mundo do desenvolvimento web.",
          },
          contact: "Diga Olá:",
          notFound: {
            p: "Desculpe, a página que você procura não existe.",
            link: "Retorne ao início",
          },
          footer: "Design e código por Camila Ramos",
        },
      },
    },
  });
