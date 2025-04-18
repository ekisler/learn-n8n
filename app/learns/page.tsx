"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  Collapse,
  Divider,
  Tag,
  Typography,
  Avatar,
  Badge,
} from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  LaptopOutlined,
  TrophyOutlined,
  CheckCircleOutlined,
  RightCircleOutlined,
  DownOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import ReactECharts from "echarts-for-react";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const App: React.FC = () => {
  const [activePanel, setActivePanel] = useState<string | string[]>(["1"]);

  // Datos del curso
  const courseData = {
    title: "Automatización de Procesos con n8n",
    subtitle: "Aprende a crear flujos de trabajo automatizados sin código",
    duration: "8 semanas",
    level: "Intermedio",
    modality: "Online",
    startDate: "15 de Mayo, 2025",
    price: "8.500,00 Bs",
    discount: "500,00 Bs",
    instructor: {
      name: "Dev. Emisael Kisler",
      title: "Experto en Tecnologías Avanzadas y Automatización",
      bio: "Desarollador Full Stack con más de 10 años de experiencia en automatización de procesos. Especialista certificado en n8n y Make. Ha ayudado a más de 50 empresas a optimizar sus flujos de trabajo.",
    },
  };

  // Módulos del curso
  const modules = [
    {
      title: "Introducción a n8n y fundamentos de automatización",
      description:
        "Conoce la plataforma n8n y los conceptos básicos de automatización de procesos.",
      duration: "1 semana",
      topics: [
        "Instalación y configuración",
        "Interfaz de usuario",
        "Conceptos fundamentales",
        "Primer workflow",
      ],
    },
    {
      title: "Conectores y APIs",
      description:
        "Aprende a conectar n8n con diferentes servicios y plataformas mediante APIs.",
      duration: "2 semanas",
      topics: [
        "Conexión con servicios web",
        "Autenticación OAuth",
        "Manejo de APIs REST",
        "Webhooks",
      ],
    },
    {
      title: "Transformación de datos",
      description:
        "Técnicas para manipular y transformar datos entre diferentes sistemas.",
      duration: "2 semanas",
      topics: [
        "JSON y XML",
        "Mapeo de datos",
        "Funciones de transformación",
        "Manejo de errores",
      ],
    },
    {
      title: "Workflows avanzados",
      description: "Creación de flujos de trabajo complejos y condicionales.",
      duration: "2 semanas",
      topics: [
        "Bifurcaciones y condiciones",
        "Loops y recursión",
        "Manejo de errores avanzado",
        "Optimización",
      ],
    },
    {
      title: "Proyecto final",
      description: "Implementación de un proyecto completo de automatización.",
      duration: "1 semana",
      topics: ["Planificación", "Desarrollo", "Pruebas", "Despliegue"],
    },
  ];

  // Recursos y requisitos
  const resources = [
    "Acceso a plataforma de aprendizaje 24/7",
    "Más de 50 videos tutoriales",
    "Material descargable en PDF",
    "Ejemplos de código y plantillas",
    "Certificado de finalización",
    "Acceso a comunidad privada",
  ];

  const requirements = [
    "Conocimientos básicos de programación",
    "Computadora con conexión a internet",
    "Navegador web actualizado",
    "Cuenta de correo electrónico",
    "Conocimientos básicos de APIs (recomendado)",
  ];

  // Datos para el gráfico de distribución del curso
  const courseDistributionOption = {
    animation: false,
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      textStyle: {
        color: "#333",
      },
    },
    series: [
      {
        name: "Distribución del Curso",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "18",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 30, name: "Teoría" },
          { value: 50, name: "Práctica" },
          { value: 20, name: "Proyecto" },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20digital%20automation%20workflow%20with%20glowing%20nodes%20and%20connections%2C%20professional%20tech%20visualization%20with%20blue%20and%20purple%20gradients%2C%20clean%20minimalist%20interface%20design%2C%20abstract%20technology%20concept%2C%20high%20quality%203D%20rendering&width=1440&height=500&seq=1&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent">
          <div className="container mx-auto px-8 h-full flex flex-col justify-center max-w-7xl">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {courseData.title}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {courseData.subtitle}
              </p>
              <div className="flex space-x-4">
                <Button
                  type="primary"
                  size="large"
                  className="!rounded-button whitespace-nowrap cursor-pointer bg-blue-600 hover:bg-blue-700"
                  style={{ height: "48px", fontSize: "16px" }}
                >
                  Inscríbete Ahora
                </Button>
                <Button
                  ghost
                  size="large"
                  className="!rounded-button whitespace-nowrap cursor-pointer text-white border-white hover:text-blue-200 hover:border-blue-200"
                  style={{ height: "48px", fontSize: "16px" }}
                >
                  Solicitar Información
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Info Cards */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20">
          <Card className="shadow-lg border-0 rounded-lg overflow-hidden">
            <div className="flex items-center mb-4">
              <ClockCircleOutlined className="text-blue-600 text-2xl mr-3" />
              <div>
                <p className="text-gray-600 text-sm">Duración</p>
                <h3 className="text-lg font-semibold">{courseData.duration}</h3>
              </div>
            </div>
            <Divider className="my-2" />
            <div className="flex items-center mb-4">
              <TrophyOutlined className="text-blue-600 text-2xl mr-3" />
              <div>
                <p className="text-gray-600 text-sm">Nivel</p>
                <h3 className="text-lg font-semibold">{courseData.level}</h3>
              </div>
            </div>
            <Divider className="my-2" />
            <div className="flex items-center">
              <LaptopOutlined className="text-blue-600 text-2xl mr-3" />
              <div>
                <p className="text-gray-600 text-sm">Modalidad</p>
                <h3 className="text-lg font-semibold">{courseData.modality}</h3>
              </div>
            </div>
          </Card>

          <Card className="shadow-lg border-0 rounded-lg overflow-hidden">
            <div className="flex items-center mb-4">
              <CalendarOutlined className="text-blue-600 text-2xl mr-3" />
              <div>
                <p className="text-gray-600 text-sm">Próxima fecha de inicio</p>
                <h3 className="text-lg font-semibold">
                  {courseData.startDate}
                </h3>
              </div>
            </div>
            <Divider className="my-2" />
            <ReactECharts
              option={courseDistributionOption}
              style={{ height: "180px" }}
            />
          </Card>

          <Card className="shadow-lg border-0 rounded-lg overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <div className="text-center py-4">
              <h3 className="text-xl font-semibold mb-2">Precio del curso</h3>
              <div className="flex justify-center items-center mb-4">
                <span className="text-3xl font-bold">{courseData.price}</span>
                <span className="text-lg line-through ml-2 opacity-70">
                  {courseData.discount}
                </span>
              </div>
              <p className="mb-6 text-white/80">
                Pago único con acceso ilimitado
              </p>
              <Button
                type="default"
                size="large"
                className="!rounded-button whitespace-nowrap cursor-pointer bg-white text-blue-700 hover:bg-blue-50 w-full"
                style={{ height: "48px", fontSize: "16px" }}
              >
                Inscríbete Ahora
              </Button>
            </div>
            <Divider className="bg-white/20 my-4" />
            <div className="flex justify-center space-x-4">
              <i className="fab fa-cc-visa text-2xl"></i>
              <i className="fab fa-cc-mastercard text-2xl"></i>
              <i className="fab fa-cc-paypal text-2xl"></i>
              <i className="fab fa-cc-amex text-2xl"></i>
            </div>
          </Card>
        </div>
      </div>

      {/* Course Description */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Title level={2} className="mb-6">
              Sobre el curso
            </Title>
            <Paragraph className="text-lg text-gray-700 mb-6">
              Este curso completo de{" "}
              <strong>Automatización de Procesos con n8n</strong> te permitirá
              dominar una de las herramientas más potentes para la
              automatización de flujos de trabajo sin necesidad de programación
              avanzada. Aprenderás a conectar diferentes aplicaciones y
              servicios para crear flujos de trabajo automatizados que ahorrarán
              tiempo y recursos a tu empresa.
            </Paragraph>
            <Paragraph className="text-lg text-gray-700 mb-6">
              Con un enfoque práctico, este curso te guiará desde los conceptos
              básicos hasta la implementación de proyectos complejos de
              automatización, permitiéndote optimizar procesos y eliminar tareas
              repetitivas en tu organización.
            </Paragraph>

            <Title level={3} className="mt-8 mb-4">
              Beneficios principales
            </Title>
            <div className="space-y-4">
              {[
                "Aprende a automatizar procesos sin necesidad de conocimientos avanzados de programación",
                "Conecta más de 200 servicios y aplicaciones diferentes",
                "Reduce hasta un 80% el tiempo dedicado a tareas repetitivas",
                "Implementa soluciones personalizadas para tu empresa o clientes",
                "Obtén un certificado reconocido en el sector tecnológico",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleOutlined className="text-green-500 text-xl mt-1 mr-3" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://readdy.ai/api/search-image?query=Person%20using%20n8n%20automation%20software%20on%20computer%20screen%2C%20showing%20workflow%20diagrams%20with%20connected%20nodes%2C%20professional%20office%20setting%2C%20modern%20desk%20with%20second%20monitor%2C%20coffee%20cup%2C%20and%20notebook%2C%20soft%20natural%20lighting%2C%20focused%20on%20screen%20interface&width=600&height=400&seq=2&orientation=landscape"
                alt="Automatización con n8n"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-100">
              <Title level={4} className="text-blue-800 mb-4">
                ¿A quién está dirigido?
              </Title>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Profesionales IT",
                  "Analistas de procesos",
                  "Gerentes de operaciones",
                  "Emprendedores",
                  "Consultores tecnológicos",
                  "Desarrolladores",
                ].map((persona, index) => (
                  <div key={index} className="flex items-center">
                    <RightCircleOutlined className="text-blue-600 mr-2" />
                    <span>{persona}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <Title level={2} className="text-center mb-12">
            Contenido del Programa
          </Title>

          <Collapse
            accordion
            className="bg-white rounded-xl shadow-md"
            expandIcon={({ isActive }) => (
              <DownOutlined
                rotate={isActive ? 180 : 0}
                className="text-blue-600"
              />
            )}
            activeKey={activePanel}
            onChange={setActivePanel}
          >
            {modules.map((module, index) => (
              <Panel
                header={
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <h3 className="text-lg font-semibold">{module.title}</h3>
                      <p className="text-gray-500 text-sm">{module.duration}</p>
                    </div>
                    <Tag color="blue" className="ml-2">{`Módulo ${
                      index + 1
                    }`}</Tag>
                  </div>
                }
                key={String(index + 1)}
                className="border-0"
              >
                <div className="pl-4 pb-2">
                  <p className="text-gray-700 mb-4">{module.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">Temas principales:</h4>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <CheckCircleOutlined className="text-green-500 mt-1 mr-2" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>

      {/* Instructor Section */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <Title level={2} className="text-center mb-12">
          Conoce a tu Instructor
        </Title>

        <Card className="shadow-lg border-0 rounded-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <Avatar
                  size={200}
                  src="https://res.cloudinary.com/dxfksb8ua/image/upload/v1739130146/Images/mcj31m6vhgnorvnwnuqj.webp"
                  className="border-4 border-white shadow-lg"
                />
                <Badge
                  count="Experto Certificado"
                  style={{ backgroundColor: "#1890ff" }}
                  className="absolute -bottom-2 right-0"
                />
              </div>
            </div>

            <div className="md:w-2/3 mt-6 md:mt-0 md:pl-8">
              <Title level={3}>{courseData.instructor.name}</Title>
              <Title level={5} className="text-blue-600 mt-0">
                {courseData.instructor.title}
              </Title>

              <Paragraph className="text-gray-700 mt-4">
                {courseData.instructor.bio}
              </Paragraph>

              <div className="mt-6 flex space-x-4">
                <Button
                  type="default"
                  icon={<i className="fab fa-linkedin text-blue-700"></i>}
                  className="!rounded-button whitespace-nowrap cursor-pointer"
                >
                  LinkedIn
                </Button>
                <Button
                  type="default"
                  icon={<i className="fab fa-twitter text-blue-400"></i>}
                  className="!rounded-button whitespace-nowrap cursor-pointer"
                >
                  Twitter
                </Button>
                <Button
                  type="default"
                  icon={<i className="fas fa-globe text-gray-600"></i>}
                  className="!rounded-button whitespace-nowrap cursor-pointer"
                >
                  Sitio Web
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Resources & Requirements */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <Title level={2} className="text-center mb-12">
            Recursos y Requisitos
          </Title>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              title="Lo que incluye el curso"
              className="shadow-md border-0 rounded-xl h-full"
            >
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleOutlined className="text-green-500 text-xl mt-1 mr-3" />
                    <p className="text-gray-700">{resource}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <img
                  src="https://readdy.ai/api/search-image?query=Course%20materials%20displayed%20on%20desk:%20laptop%20with%20n8n%20interface%2C%20printed%20workbooks%2C%20digital%20tablet%2C%20coffee%20mug%2C%20notebook%20with%20diagrams%2C%20professional%20lighting%2C%20organized%20workspace%2C%20top-down%20view%2C%20high%20quality%20educational%20resources&width=400&height=250&seq=4&orientation=landscape"
                  alt="Recursos del curso"
                  className="rounded-lg shadow-md w-full max-w-sm"
                />
              </div>
            </Card>

            <Card
              title="Requisitos previos"
              className="shadow-md border-0 rounded-xl h-full"
            >
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <RightCircleOutlined className="text-blue-600 text-xl mt-1 mr-3" />
                    <p className="text-gray-700">{requirement}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Title level={4}>Herramientas recomendadas</Title>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {[
                    { name: "Navegador Chrome", icon: "fab fa-chrome" },
                    { name: "Visual Studio Code", icon: "fas fa-code" },
                    { name: "Postman", icon: "fas fa-paper-plane" },
                    { name: "GitHub", icon: "fab fa-github" },
                  ].map((tool, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white p-3 rounded-lg shadow-sm"
                    >
                      <i
                        className={`${tool.icon} text-xl text-blue-600 mr-3`}
                      ></i>
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <Title level={2} className="text-center mb-2">
          Lo que dicen nuestros estudiantes
        </Title>
        <p className="text-center text-gray-600 mb-12">
          Experiencias de quienes ya han tomado el curso
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "María González",
              role: "Gerente de Operaciones",
              company: "TechSolutions",
              text: "Este curso transformó la forma en que gestionamos nuestros procesos internos. Logramos automatizar el 70% de nuestras tareas administrativas.",
              avatar:
                "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20latina%20woman%20with%20medium%20length%20dark%20hair%2C%20business%20attire%2C%20neutral%20background%2C%20warm%20smile%2C%20office%20setting%2C%20high%20quality%20portrait%2C%20professional%20lighting&width=80&height=80&seq=5&orientation=squarish",
            },
            {
              name: "Javier Martínez",
              role: "Desarrollador Full-Stack",
              company: "Innovatech",
              text: "Aunque ya tenía experiencia en programación, este curso me enseñó a crear automatizaciones complejas sin escribir código extenso. Muy recomendable.",
              avatar:
                "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20latino%20man%20with%20short%20dark%20hair%2C%20casual%20tech%20company%20attire%2C%20neutral%20background%2C%20friendly%20expression%2C%20office%20environment%2C%20high%20quality%20portrait%2C%20professional%20lighting&width=80&height=80&seq=6&orientation=squarish",
            },
            {
              name: "Ana Rodríguez",
              role: "Consultora Independiente",
              company: "DigitalFlow",
              text: "Gracias a este curso, ahora ofrezco servicios de automatización a mis clientes. Ha sido una excelente inversión que multiplicó mis ingresos.",
              avatar:
                "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20middle-aged%20latina%20woman%20with%20shoulder%20length%20hair%2C%20professional%20business%20attire%2C%20neutral%20background%2C%20confident%20smile%2C%20consulting%20office%20setting%2C%20high%20quality%20portrait%2C%20professional%20lighting&width=80&height=80&seq=7&orientation=squarish",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="shadow-md border-0 rounded-xl h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Avatar src={testimonial.avatar} size={64} />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-blue-600 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </div>
                <div className="mt-4 text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <Title level={2} className="text-white mb-4">
            ¿Listo para transformar tus procesos?
          </Title>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Inscríbete hoy y comienza tu camino hacia la automatización efectiva
            de procesos con n8n
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              type="primary"
              size="large"
              className="!rounded-button whitespace-nowrap cursor-pointer bg-white text-blue-700 hover:bg-blue-50"
              style={{ height: "48px", fontSize: "16px" }}
            >
              Inscríbete Ahora
            </Button>
            <Button
              ghost
              size="large"
              className="!rounded-button whitespace-nowrap cursor-pointer"
              style={{ height: "48px", fontSize: "16px" }}
            >
              Descargar Programa
            </Button>
          </div>

          <div className="mt-8 text-white/80">
            <p>
              ¿Tienes preguntas? Contáctanos en{" "}
              <a
                href="mailto:info@cursosn8n.com"
                className="text-white underline"
              >
                kisler.fullstack@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <Title level={2} className="text-center mb-12">
          Preguntas Frecuentes
        </Title>

        <div className="max-w-3xl mx-auto">
          <Collapse
            bordered={false}
            className="bg-transparent"
            expandIcon={({ isActive }) => (
              <DownOutlined
                rotate={isActive ? 180 : 0}
                className="text-blue-600"
              />
            )}
          >
            {[
              {
                question:
                  "¿Necesito conocimientos de programación para este curso?",
                answer:
                  "No es necesario tener conocimientos avanzados de programación. Con nociones básicas de lógica y conceptos fundamentales de desarrollo será suficiente para aprovechar al máximo el curso.",
              },
              {
                question: "¿Tendré acceso a las grabaciones de las clases?",
                answer:
                  "Sí, todas las sesiones quedan grabadas y disponibles en la plataforma. Podrás acceder a ellas en cualquier momento durante y después del curso.",
              },
              {
                question: "¿Qué tipo de soporte tendré durante el curso?",
                answer:
                  "Contarás con soporte por email, un foro de preguntas y respuestas, y sesiones de consulta en vivo semanales para resolver todas tus dudas.",
              },
              {
                question: "¿El certificado tiene algún valor oficial?",
                answer:
                  "El certificado está avalado por nuestra institución y reconocido en el sector tecnológico. No es una certificación oficial de n8n, pero valida tus conocimientos en la plataforma.",
              },
              {
                question:
                  "¿Puedo aplicar lo aprendido en mi empresa inmediatamente?",
                answer:
                  "Absolutamente. El curso está diseñado con un enfoque práctico para que puedas implementar lo aprendido de forma inmediata en tu entorno laboral.",
              },
            ].map((faq, index) => (
              <Panel
                header={<span className="text-lg">{faq.question}</span>}
                key={String(index)}
                className="bg-white mb-4 rounded-lg shadow-sm border border-gray-100"
              >
                <p className="text-gray-700">{faq.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Academia n8n</h3>
              <p className="text-gray-400 mb-4">
                Formación especializada en automatización de procesos para
                profesionales y empresas.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cursos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <EnvironmentOutlined className="mt-1 mr-3 text-gray-400" />
                  <span className="text-gray-400">
                    Calle Santa Eduviges 36-26, Caracas, Venezuela
                  </span>
                </li>
                <li className="flex items-center">
                  <PhoneOutlined className="mr-3 text-gray-400" />
                  <span className="text-gray-400">+58 424 287 09 37</span>
                </li>
                <li className="flex items-center">
                  <MailOutlined className="mr-3 text-gray-400" />
                  <span className="text-gray-400">kisler.fullstack@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Boletín informativo
              </h3>
              <p className="text-gray-400 mb-4">
                Suscríbete para recibir noticias y ofertas especiales.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="px-4 py-2 w-full text-gray-800 rounded-l-lg focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors cursor-pointer">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

          <Divider className="bg-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Academia n8n. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Términos y condiciones
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          type="primary"
          shape="circle"
          size="large"
          className="!rounded-button whitespace-nowrap cursor-pointer shadow-lg flex items-center justify-center"
          style={{ width: "60px", height: "60px", backgroundColor: "#1890ff" }}
        >
          <i className="fas fa-comments text-xl"></i>
        </Button>
      </div>
    </div>
  );
};

export default App;
