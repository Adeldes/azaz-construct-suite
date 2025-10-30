import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/Azaz001.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنتواصل معك في أقرب وقت ممكن",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      details: ["0544221213", "0544221214"],
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@azaz.com.sa"],
    },
    {
      icon: MapPin,
      title: "العنوان",
      details: ["جدة - المملكة العربية السعودية"],
    },
  ];

  const locations = [
    {
      name: "الفرع الرئيسي",
      city: "جدة - المنطقة الصناعية بذهبان",
      region: "المنطقة الغربية",
    },
    {
      name: "فرع عسفان",
      city: "جدة - عسفان",
      region: "المنطقة الغربية",
    },
    {
      name: "فرع الجنوبية",
      city: "خميس مشيط",
      region: "المنطقة الجنوبية",
    },
  ];

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
          <h1 className="text-5xl font-bold mb-6">اتصل بنا</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            نحن هنا للإجابة عن استفساراتك وتلبية متطلبات مشروعك
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-md hover:shadow-elegant transition-smooth animate-fade-in text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-primary">أرسل لنا رسالة</h2>
              <p className="text-lg text-muted-foreground">
                املأ النموذج أدناه وسنتواصل معك في أقرب وقت
              </p>
            </div>

            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      الاسم الكامل *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        البريد الإلكتروني *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        رقم الهاتف *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="05xxxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      الموضوع *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="موضوع الرسالة"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      الرسالة *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="اكتب رسالتك هنا..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-primary" size="lg">
                    <Send className="ml-2 h-5 w-5" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">مواقعنا</h2>
            <p className="text-lg text-muted-foreground">
              نتواجد في عدة مواقع لخدمتكم بشكل أفضل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="shadow-md hover:shadow-elegant transition-smooth animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-primary">{location.name}</h3>
                  <p className="text-sm text-muted-foreground">{location.city}</p>
                  <p className="text-xs text-muted-foreground">{location.region}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Google Map */}
          <div className="mt-12 animate-fade-in">
            <Card className="shadow-elegant overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25386.03430266284!2d39.14411073058048!3d21.907897072115468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c171006f853fb7%3A0xa8794c1ad67c6ac7!2sAzaz%20albina%20ready%20mix!5e0!3m2!1sen!2ssa!4v1761798665967!5m2!1sen!2ssa"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع الفرع الرئيسي"
              ></iframe>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
