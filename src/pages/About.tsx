import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, TrendingUp, Award } from "lucide-react";
import heroImage from "@/assets/team.png";

const About = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            شركة سعودية رائدة في مجال المقاولات العامة والصناعات الإنشائية
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary">نبذة عن الشركة</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                شركة عزاز البناء للمقاولات العامة هي شركة سعودية حديثة العهد تأسست عام 2003م، تتميز بالديناميكية والقدرة على التوسع والانتشار ولها استثمارات في مختلف المجالات. يقع مقرها الرئيسي في مدينة خميس مشيط بالمملكة العربية السعودية.
              </p>
              <p>
                إن شركة عزاز البناء للمقاولات العامة بوضعها الراهن هي بمثابة مجموعة شركات تضم العديد من الوحدات العاملة التي تقدم خدماتها بشكل مستقل أو جماعي بتناغم فريد.
              </p>
              <p>
                بدأت عملها في أعمال الصرف الصحي وأعمال تمديد شبكات المياه والإنشاءات، وسرعان ما توسعت أنشطتها وأسماؤها لتصبح شركة مقاولات شاملة امتدت أنشطتها لتشمل الاستثمارات وأعمال الحفر والردم والدك والتسوية والأعمال الكهربائية وتأجير المعدات وغيرها.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Strategy */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">رؤيتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  أن نكون في مصاف الشركات الوطنية الكبرى العاملة بقطاع المقاولات في المملكة العربية السعودية وتقديم أرقى الخدمات الشاملة من خلال منظومة متكاملة ومتناغمة تدار بأكفأ الكوادر والخبرات.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">هدفنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تقديم نموذج عمل وطني يحاكي الشركات العالمية وتحقيق رؤية المملكة 2030م.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">استراتيجيتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  الالتزام بأعلى معايير الجودة، والحرص على العمل وفق أحدث الأساليب العالمية، وجعل العميل على رأس أولوياتنا.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary">الإنجازات والتميز</h2>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                واليوم تمتلك شركة عزاز البناء للإنشاءات أسطولاً ضخماً من المعدات الثقيلة والسيارات والشاحنات والخلاطات والمضخات والمركبات المتنوعة، بالإضافة إلى عدد كبير من المرافق والخدمات المساندة.
              </p>
              <p>
                يعمل في الشركة أكثر من 400 شخص من ذوي الخبرات والمجالات المتنوعة ودرجة عالية من الكفاءة المهنية في كافة القطاعات، مما يمكن الشركة من الوفاء بمتطلبات المشاريع العملاقة بالاكتفاء الذاتي والجهد المبذول.
              </p>
              <p>
                حصلت شركة عزاز البناء للإنشاءات على عدد من شهادات التقدير والجوائز لإنجازاتها المتعددة وحصلت على أعلى تصنيف من قبل إدارة تصنيف المقاولين بوزارة الشؤون البلدية والقروية في مجالات المباني والطرق والمياه والصرف الصحي والأعمال الكهربائية والأعمال الميكانيكية والأعمال الصناعية وأعمال البنية التحتية.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
