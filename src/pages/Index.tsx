import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/5 to-purple-900/5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-100 mb-8 animate-fade-in">
              <Icon name="Eye" size={32} className="text-violet-700" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">
                Регрессивный
              </span>
              <br />
              Гипноз
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Путешествие в прошлые жизни для исцеления кармических блоков и психологических травм
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-violet-700 hover:bg-violet-800 text-white px-8 py-4 text-lg animate-scale-in">
                Записаться на сеанс
              </Button>
              <Button variant="outline" size="lg" className="border-violet-200 text-violet-700 hover:bg-violet-50 px-8 py-4 text-lg">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Обо мне
            </h2>
            <div className="w-24 h-1 bg-violet-700 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-800">
                Елена Миронова
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Сертифицированный специалист по регрессивному гипнозу с 12-летним опытом. 
                Помогаю людям обрести внутренний покой через работу с прошлыми воплощениями.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Моя методика объединяет классические техники регрессии с современными 
                психотерапевтическими подходами для глубокого исцеления душевных травм.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-violet-100 text-violet-800 hover:bg-violet-200">
                  Регрессивная терапия
                </Badge>
                <Badge className="bg-violet-100 text-violet-800 hover:bg-violet-200">
                  Кармическое исцеление
                </Badge>
                <Badge className="bg-violet-100 text-violet-800 hover:bg-violet-200">
                  Работа с травмами
                </Badge>
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="User" size={48} className="text-violet-700" />
                </div>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-violet-700">500+</div>
                    <div className="text-sm text-slate-600">Сеансов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-violet-700">12</div>
                    <div className="text-sm text-slate-600">Лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-violet-700">98%</div>
                    <div className="text-sm text-slate-600">Результат</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Регрессивный гипноз
            </h2>
            <div className="w-24 h-1 bg-violet-700 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Методы работы с прошлыми жизнями и кармическими паттернами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full mx-auto mb-4 group-hover:bg-violet-200 transition-colors flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-violet-700" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-800">
                  Исследование прошлых жизней
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 leading-relaxed">
                  Погружение в прошлые воплощения для понимания корней текущих проблем и освобождения от кармических блоков.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full mx-auto mb-4 group-hover:bg-violet-200 transition-colors flex items-center justify-center">
                  <Icon name="Heart" size={24} className="text-violet-700" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-800">
                  Исцеление травм
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 leading-relaxed">
                  Работа с глубинными психологическими травмами через доступ к их источникам в прошлых жизнях.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full mx-auto mb-4 group-hover:bg-violet-200 transition-colors flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-violet-700" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-800">
                  Кармическое очищение
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 leading-relaxed">
                  Освобождение от негативных кармических связей и паттернов, мешающих гармоничной жизни.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Результаты
            </h2>
            <div className="w-24 h-1 bg-violet-700 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-violet-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Quote" size={20} className="text-violet-700" />
                  </div>
                  <div>
                    <p className="text-slate-700 italic mb-4 text-lg">
                      "После сеанса регрессии я наконец поняла причину своих страхов. 
                      Освобождение от кармических блоков изменило мою жизнь кардинально."
                    </p>
                    <p className="text-violet-700 font-semibold">— Анна К.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Quote" size={20} className="text-purple-700" />
                  </div>
                  <div>
                    <p className="text-slate-700 italic mb-4 text-lg">
                      "Работа с прошлыми жизнями помогла мне найти истоки моих 
                      проблем в отношениях. Теперь я свободна от старых паттернов."
                    </p>
                    <p className="text-purple-700 font-semibold">— Мария С.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                Что дает регрессивный гипноз
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-violet-200 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-violet-700" />
                  </div>
                  <span className="text-slate-700 text-lg">Освобождение от страхов и фобий</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-violet-200 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-violet-700" />
                  </div>
                  <span className="text-slate-700 text-lg">Исцеление кармических травм</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-violet-200 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-violet-700" />
                  </div>
                  <span className="text-slate-700 text-lg">Понимание жизненного предназначения</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-violet-200 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-violet-700" />
                  </div>
                  <span className="text-slate-700 text-lg">Гармонизация отношений</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-violet-200 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-violet-700" />
                  </div>
                  <span className="text-slate-700 text-lg">Духовное развитие и рост</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-violet-900 to-purple-900 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Готовы к изменениям?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Начните свой путь к исцелению и освобождению от кармических блоков
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center space-x-3">
              <Icon name="Phone" size={20} className="text-violet-200" />
              <span className="text-lg">+7 (XXX) XXX-XX-XX</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Mail" size={20} className="text-violet-200" />
              <span className="text-lg">elena@regression.ru</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="MapPin" size={20} className="text-violet-200" />
              <span className="text-lg">Москва, центр</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-50 px-10 py-4 text-lg font-semibold">
            Записаться на консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;