import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    niche: '',
    comment: ''
  });

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', contact: '', niche: '', comment: '' });
  };

  const packages = [
    {
      name: "Стартовый",
      price: "от 15 000 ₽",
      icon: "Rocket",
      features: [
        "Готовый AI-бот под вашу нишу",
        "Интеграция с 1 платформой",
        "Базовое обучение бота",
        "Инструкция по использованию",
        "2 недели поддержки"
      ]
    },
    {
      name: "Бизнес",
      price: "от 35 000 ₽",
      icon: "Briefcase",
      popular: true,
      features: [
        "Индивидуальный сценарий бота",
        "Интеграция с 3 платформами",
        "Обучение на ваших данных",
        "Подключение к CRM",
        "1 месяц поддержки",
        "Видео-демо работы"
      ]
    },
    {
      name: "Премиум",
      price: "от 70 000 ₽",
      icon: "Crown",
      features: [
        "Комплексная автоматизация",
        "Неограниченные интеграции",
        "Мультиязычность",
        "Аналитика и отчёты",
        "3 месяца поддержки",
        "Персональный менеджер",
        "Обучение команды"
      ]
    }
  ];

  const useCases = [
    {
      icon: "ShoppingBag",
      title: "Интернет-магазины",
      description: "Автоматизация обработки заказов, консультации клиентов 24/7, увеличение конверсии на 40%"
    },
    {
      icon: "GraduationCap",
      title: "Онлайн-школы",
      description: "Автоответы студентам, напоминания о занятиях, сбор обратной связи"
    },
    {
      icon: "MessageSquare",
      title: "SMM и маркетинг",
      description: "Генерация контента, публикация постов, анализ трендов, работа с комментариями"
    },
    {
      icon: "Store",
      title: "Локальный бизнес",
      description: "Запись клиентов, напоминания о визитах, обработка частых вопросов"
    },
    {
      icon: "Headphones",
      title: "Служба поддержки",
      description: "Обработка 80% типовых обращений без участия оператора"
    },
    {
      icon: "TrendingUp",
      title: "B2B продажи",
      description: "Квалификация лидов, отправка коммерческих предложений, follow-up"
    }
  ];

  const testimonials = [
    {
      name: "Алексей М.",
      role: "Владелец интернет-магазина",
      text: "За неделю бот обработал 200+ заявок. Менеджеры освободились для сложных клиентов. ROI окупился за месяц!",
      rating: 5
    },
    {
      name: "Марина К.",
      role: "Основатель онлайн-школы",
      text: "Студенты получают мгновенные ответы в любое время. Сэкономили 15 часов в неделю на рутине.",
      rating: 5
    },
    {
      name: "Дмитрий П.",
      role: "SMM-агентство",
      text: "Бот генерирует контент для 12 клиентов. Качество не хуже копирайтера, а скорость в 10 раз выше.",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "Как быстро можно запустить бота?",
      a: "Для готовых решений — 1-2 дня. Индивидуальные сценарии — 3-5 дней. Всё зависит от сложности интеграций."
    },
    {
      q: "Нужны ли технические знания?",
      a: "Нет! Я всё настрою под ключ. Вы получите готового бота с инструкцией и обучением."
    },
    {
      q: "Какие платформы поддерживаются?",
      a: "Telegram, WhatsApp, VK, сайты, Instagram Direct, Facebook Messenger. Также интеграция с любыми CRM."
    },
    {
      q: "А если бот не справится с вопросом?",
      a: "Настраиваем сценарий передачи сложных запросов живому оператору. Бот знает свои границы."
    },
    {
      q: "Есть ли гарантии?",
      a: "Да! 30 дней гарантии результата. Если не устроит — доработаем бесплатно или вернём деньги."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 pointer-events-none" />
      
      <div className="relative">
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/50">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Эксперт №1 в интеграции AI для бизнеса
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">AI-боты под ключ</span>
              <br />
              за 2 дня
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Автоматизирую продажи, поддержку и маркетинг с помощью интеллектуальных ботов на GPT, Gemini, ЯндексGPT
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all hover:scale-105"
                onClick={scrollToForm}
              >
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 hover:bg-card transition-all hover:scale-105"
                onClick={scrollToForm}
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
              {[
                { value: "50+", label: "Успешных внедрений" },
                { value: "2 дня", label: "Средний срок запуска" },
                { value: "80%", label: "Экономия времени" },
                { value: "100%", label: "Гарантия результата" }
              ].map((stat, i) => (
                <div key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Для кого это <span className="gradient-text">работает</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовые решения для вашей ниши
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, i) => (
              <Card key={i} className="border-2 hover:border-primary/50 transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={useCase.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 bg-card/30">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Выберите свой <span className="gradient-text">пакет</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              От готовых решений до индивидуальной автоматизации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <Card 
                key={i} 
                className={`relative border-2 transition-all hover:scale-105 animate-scale-in ${
                  pkg.popular ? 'border-secondary shadow-2xl shadow-secondary/20' : 'hover:border-primary/50'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-4">
                    <Icon name={pkg.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold gradient-text">{pkg.price}</div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  <Button 
                    className={`w-full mt-6 ${
                      pkg.popular 
                        ? 'bg-secondary hover:bg-secondary/90' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                    onClick={scrollToForm}
                  >
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Отзывы <span className="gradient-text">клиентов</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Реальные результаты реальных людей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="border-2 hover:border-accent/50 transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Icon key={j} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 bg-card/30">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Частые <span className="gradient-text">вопросы</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-lg px-6 hover:border-primary/50 transition-colors">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact-form" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/30 shadow-2xl shadow-primary/10 animate-scale-in">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                  Готовы запустить <span className="gradient-text">AI-бота</span>?
                </CardTitle>
                <CardDescription className="text-lg">
                  Оставьте заявку и получите персональную консультацию в течение 2 часов
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input 
                        id="name"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="border-2"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact">Telegram или телефон *</Label>
                      <Input 
                        id="contact"
                        placeholder="@username или +7 999 123 45 67"
                        value={formData.contact}
                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                        required
                        className="border-2"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="niche">Ваша ниша / бизнес *</Label>
                    <Input 
                      id="niche"
                      placeholder="Например: интернет-магазин одежды"
                      value={formData.niche}
                      onChange={(e) => setFormData({...formData, niche: e.target.value})}
                      required
                      className="border-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Что хотите автоматизировать?</Label>
                    <Textarea 
                      id="comment"
                      placeholder="Опишите вашу задачу..."
                      rows={4}
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      className="border-2"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg bg-primary hover:bg-primary/90 transition-all hover:scale-105">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>

                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Icon name="Shield" size={20} className="text-primary" />
                      <span className="text-sm text-muted-foreground">30 дней гарантии</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" size={20} className="text-secondary" />
                      <span className="text-sm text-muted-foreground">Ответ за 2 часа</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Lock" size={20} className="text-accent" />
                      <span className="text-sm text-muted-foreground">Данные защищены</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Icon name="Award" size={48} className="mx-auto text-primary" />
            <h3 className="text-3xl font-bold">
              Гарантии и поддержка
            </h3>
            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="space-y-2">
                <Icon name="Clock" size={32} className="mx-auto text-secondary" />
                <h4 className="font-semibold">Быстрое реагирование</h4>
                <p className="text-sm text-muted-foreground">Отвечаем в течение 2 часов в рабочее время</p>
              </div>
              <div className="space-y-2">
                <Icon name="RefreshCw" size={32} className="mx-auto text-accent" />
                <h4 className="font-semibold">Бесплатные доработки</h4>
                <p className="text-sm text-muted-foreground">30 дней корректировок и улучшений</p>
              </div>
              <div className="space-y-2">
                <Icon name="HeartHandshake" size={32} className="mx-auto text-primary" />
                <h4 className="font-semibold">Честная работа</h4>
                <p className="text-sm text-muted-foreground">Не устроит — вернём деньги</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-12 border-t border-border/50">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              © 2025 AI-боты под ключ. Автоматизация бизнес-процессов для малого и среднего бизнеса.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={24} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;