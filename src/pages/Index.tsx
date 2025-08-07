import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, BookOpen, AlertTriangle, Users, Heart, Zap, Lock, Wrench, FileText, HardHat, Activity } from "lucide-react";
import heroImage from "@/assets/hero-electrical-safety.jpg";
import electromagneticFieldsImage from "@/assets/electromagnetic-fields.jpg";
import fiveSafetyRulesImage from "@/assets/five-safety-rules.jpg";
import ppeImage from "@/assets/personal-protective-equipment.jpg";
import safetyOfficerImage from "@/assets/safety-officer.jpg";
import firstAidImage from "@/assets/first-aid.jpg";
import defibrillatorImage from "@/assets/defibrillator.jpg";
import workPermitImage from "@/assets/work-permit.jpg";
import lockoutTagoutImage from "@/assets/lockout-tagout.jpg";
import maintenanceImage from "@/assets/maintenance.jpg";
import livePartsWorkImage from "@/assets/live-parts-work.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const bookCourse = (courseTitle: string) => {
    alert(`Kurs "${courseTitle}" wird gebucht. Sie werden in Kürze kontaktiert.`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold">ElektroSicherheit Pro</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" onClick={() => scrollToSection('rechtslage')}>Rechtslage</Button>
              <Button variant="ghost" onClick={() => scrollToSection('unterweisungen')}>Unterweisungen</Button>
              <Button variant="ghost" onClick={() => scrollToSection('kontakt')}>Kontakt</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="absolute inset-0 bg-black/20">
          <img 
            src={heroImage} 
            alt="Elektrische Sicherheit am Arbeitsplatz" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Arbeitsschutz bei <span className="text-yellow-400">Elektroarbeiten</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Umfassende digitale Unterweisungen für maximale Sicherheit im Umgang mit elektrischen Anlagen und Betriebsmitteln
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" onClick={() => scrollToSection('unterweisungen')}>
              <BookOpen className="mr-2 h-5 w-5" />
              Zu den Unterweisungen
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black" onClick={() => scrollToSection('rechtslage')}>
              <FileText className="mr-2 h-5 w-5" />
              Rechtslage erkunden
            </Button>
          </div>
        </div>
      </section>

      {/* Importance of Digital Training */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Warum sind regelmäßige digitale Unterweisungen entscheidend?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
                  <CardTitle>Unfallprävention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Elektrische Unfälle können schwere Verletzungen oder den Tod verursachen. Regelmäßige Schulungen reduzieren das Risiko drastisch.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Rechtliche Pflicht</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Gemäß DGUV Vorschrift 1 und Arbeitsschutzgesetz sind Arbeitgeber verpflichtet, ihre Mitarbeiter regelmäßig zu unterweisen.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <CardTitle>Wissensauffrischung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Digitale Unterweisungen ermöglichen flexible, dokumentierte und standardisierte Wissensvermittlung für alle Mitarbeiter.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Framework */}
      <section id="rechtslage" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Aktuelle Rechtslage in Deutschland</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  DGUV Vorschrift 3 (ehemals BGV A3)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Die DGUV Vorschrift 3 "Elektrische Anlagen und Betriebsmittel" ist die zentrale Unfallverhütungsvorschrift für den sicheren Umgang mit elektrischen Anlagen. Sie regelt die Betreiberpflichten und Prüfanforderungen.
                </p>
                <blockquote className="border-l-4 border-muted-foreground pl-4 italic text-muted-foreground mb-4">
                  "Der Unternehmer hat dafür zu sorgen, dass elektrische Anlagen und Betriebsmittel nur von einer Elektrofachkraft oder unter Leitung und Aufsicht einer Elektrofachkraft [...] errichtet, geändert und instand gehalten werden."
                </blockquote>
                <a href="https://publikationen.dguv.de/widgets/pdf/download/article/1163" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  → Volltext DGUV Vorschrift 3 (PDF)
                </a>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle>DIN VDE 0105-100</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Diese Norm regelt den Betrieb von elektrischen Anlagen und definiert die 5 Sicherheitsregeln für Arbeiten an elektrischen Anlagen.
                </p>
                <blockquote className="border-l-4 border-muted-foreground pl-4 italic text-muted-foreground mb-4">
                  "Arbeiten an elektrischen Anlagen sind grundsätzlich im spannungsfreien Zustand durchzuführen."
                </blockquote>
                <a href="https://www.bgetem.de/arbeitssicherheit-gesundheitsschutz/praeventionskampagnen/5-sicherheitsregeln" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  → BG ETEM: 5 Sicherheitsregeln
                </a>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle>Arbeitsschutzgesetz (ArbSchG)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Das Arbeitsschutzgesetz verpflichtet Arbeitgeber zur Gefährdungsbeurteilung und Unterweisung der Beschäftigten.
                </p>
                <blockquote className="border-l-4 border-muted-foreground pl-4 italic text-muted-foreground mb-4">
                  "Der Arbeitgeber hat die Beschäftigten über Sicherheit und Gesundheitsschutz bei der Arbeit [...] ausreichend und angemessen zu unterweisen." (§ 12 ArbSchG)
                </blockquote>
                <a href="https://www.gesetze-im-internet.de/arbschg/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  → Arbeitsschutzgesetz im Volltext
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Sections */}
      <section id="unterweisungen" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Digitale Unterweisungen</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            {/* 1. Elektromagnetische Felder */}
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={electromagneticFieldsImage} alt="Elektromagnetische Felder" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-6 w-6" />
                    Elektromagnetische Felder
                  </CardTitle>
                  <Badge variant="secondary">EMF</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Elektromagnetische Felder (EMF) entstehen überall dort, wo elektrische Energie erzeugt, übertragen oder verbraucht wird. Besonders bei Hochfrequenzanlagen, Induktionsöfen und Schweißgeräten können gesundheitlich relevante Feldstärken auftreten. Die DGUV Information 203-043 gibt konkrete Schutzmaßnahmen vor.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <p className="text-sm">
                    <strong>Rechtsgrundlage:</strong> DGUV Vorschrift 15 "Elektromagnetische Felder" und 26. BImSchV (Verordnung über elektromagnetische Felder)
                  </p>
                  <a href="https://dguv.de/ifa/fachinfos/strahlung/elektromagnetische-felder/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                    → IFA Fachinformationen EMF
                  </a>
                </div>
                <Button 
                  onClick={() => bookCourse('Elektromagnetische Felder')}
                  className="w-full"
                >
                  Kurs buchen - EMF Schutz
                </Button>
              </CardContent>
            </Card>

            {/* 2. Arbeiten in der Nähe unter Spannung stehender Teile */}
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={livePartsWorkImage} alt="Arbeiten in der Nähe unter Spannung stehender Teile" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6" />
                    Arbeiten in der Nähe unter Spannung stehender Teile
                  </CardTitle>
                  <Badge variant="destructive">Hochrisiko</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Arbeiten in der Nähe unter Spannung stehender Anlagenteile erfordern besondere Schutzmaßnahmen. Die DIN VDE 0105-100 definiert Mindestabstände und Schutzmaßnahmen. Ab 1000V AC oder 1500V DC gelten verschärfte Bestimmungen der Hochspannungsverordnung.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <p className="text-sm">
                    <strong>Rechtsgrundlage:</strong> DIN VDE 0105-100, DGUV Vorschrift 3 § 8, Betriebssicherheitsverordnung (BetrSichV)
                  </p>
                  <a href="https://www.bgetem.de/arbeitssicherheit-gesundheitsschutz/themen-von-a-z-1/elektrische-gefaehrdungen-1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                    → BG ETEM: Elektrische Gefährdungen
                  </a>
                </div>
                <Button 
                  onClick={() => bookCourse('Arbeiten in der Nähe unter Spannung stehender Teile')}
                  className="w-full"
                >
                  Kurs buchen - Spannung & Sicherheit
                </Button>
              </CardContent>
            </Card>

            {/* 3. Die 5 Sicherheitsregeln */}
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={fiveSafetyRulesImage} alt="Die 5 Sicherheitsregeln" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6" />
                    Die 5 Sicherheitsregeln
                  </CardTitle>
                  <Badge variant="default">Fundamental</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Die 5 Sicherheitsregeln nach DIN VDE 0105-100 sind das Fundament sicherer Elektroarbeiten: 1) Freischalten, 2) Gegen Wiedereinschalten sichern, 3) Spannungsfreiheit feststellen, 4) Erden und kurzschließen, 5) Benachbarte, unter Spannung stehende Teile abdecken. Gerade bei längeren Einsätzen steigt die Gefahr, dass andere Mitarbeiter die Anlagen wieder einschalten, weil sie nicht wissen, dass ein Kollege daran arbeitet. Aus diesem Grund wurden fünf Sicherheitsregeln entwickelt, die einen Komplettschutz von Anfang bis Ende bieten.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <p className="text-sm">
                    <strong>Rechtsgrundlage:</strong> DIN VDE 0105-100, DGUV Vorschrift 3, IEC 61936-1
                  </p>
                  <a href="https://www.bgetem.de/arbeitssicherheit-gesundheitsschutz/praeventionskampagnen/5-sicherheitsregeln/die-5-sicherheitsregeln" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                    → BG ETEM: Die 5 Sicherheitsregeln
                  </a>
                </div>
                <Button 
                  onClick={() => bookCourse('Die 5 Sicherheitsregeln')}
                  className="w-full"
                >
                  Kurs buchen - 5 Sicherheitsregeln
                </Button>
              </CardContent>
            </Card>

            {/* 4. Persönliche Schutzausrüstung */}
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={ppeImage} alt="Persönliche Schutzausrüstung" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <HardHat className="h-6 w-6" />
                    Persönliche Schutzausrüstung (PSA)
                  </CardTitle>
                  <Badge variant="secondary">PSA</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Persönliche Schutzausrüstung für Elektroarbeiten umfasst Schutzhelm, Sicherheitsschuhe, isolierende Handschuhe, Schutzbrille und Störlichtbogenschutz. Die PSA-Verordnung und DGUV Regel 112-993 regeln Auswahl, Bereitstellung und Benutzung. Besonders wichtig ist der Schutz vor thermischen Auswirkungen von Störlichtbögen.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <p className="text-sm">
                    <strong>Rechtsgrundlage:</strong> PSA-Verordnung (EU) 2016/425, DGUV Regel 112-993, BetrSichV § 8
                  </p>
                  <a href="https://www.elektrofachkraft.de/sicheres-arbeiten/psa-bei-elektroarbeiten" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                    → PSA bei Elektroarbeiten
                  </a>
                </div>
                <Button 
                  onClick={() => bookCourse('Persönliche Schutzausrüstung')}
                  className="w-full"
                >
                  Kurs buchen - PSA Kompetenz
                </Button>
              </CardContent>
            </Card>

            {/* 5. Sicherheitsbeauftragter */}
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={safetyOfficerImage} alt="Sicherheitsbeauftragter" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6" />
                    Sicherheitsbeauftragter (SiBe)
                  </CardTitle>
                  <Badge variant="outline">SiBe</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Der Sicherheitsbeauftragte – oft mit SiBe abgekürzt – unterstützt den Arbeitgeber bei der Umsetzung von Sicherheitsmaßnahmen im Betrieb. Nach § 22 SGB VII müssen Unternehmen ab 20 Beschäftigten Sicherheitsbeauftragte bestellen. Diese überwachen die Einhaltung von Arbeitsschutzbestimmungen und beraten Kollegen.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <p className="text-sm">
                    <strong>Rechtsgrundlage:</strong> § 22 SGB VII, DGUV Vorschrift 1 § 20, ASiG § 22
                  </p>
                  <a href="https://www.dguv.de/fb-org/sachgebiete/sicherheitsbeauftragte/bestellung/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                    → DGUV: Bestellung von Sicherheitsbeauftragten
                  </a>
                </div>
                <Button 
                  onClick={() => bookCourse('Sicherheitsbeauftragter')}
                  className="w-full"
                >
                  Kurs buchen - SiBe Ausbildung
                </Button>
              </CardContent>
            </Card>

            {/* 6. Erste Hilfe */}
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={firstAidImage} alt="Erste Hilfe bei Elektrounfällen" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-6 w-6" />
                    Erste Hilfe bei Elektrounfällen
                  </CardTitle>
                  <Badge variant="destructive">Notfall</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Elektrounfälle erfordern spezielle Erste-Hilfe-Maßnahmen. Wichtig: Eigenschutz beachten, Stromkreis unterbrechen, bei Bewusstlosigkeit sofort mit Wiederbelebung beginnen. Besonders bei Elektroarbeiten können innere Verbrennungen und Herzrhythmusstörungen auftreten, die nicht sofort sichtbar sind.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <p className="text-sm">
                    <strong>Rechtsgrundlage:</strong> DGUV Vorschrift 1 § 24-26, DGUV Information 204-001, ASR A4.3
                  </p>
                  <a href="https://www.bghm.de/arbeitsschuetzer/praxishilfen/arbeitsschutz-kompakt/128-defibrillation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                    → BGHM: Defibrillation
                  </a>
                </div>
                <Button 
                  onClick={() => bookCourse('Erste Hilfe bei Elektrounfällen')}
                  className="w-full"
                >
                  Kurs buchen - Erste Hilfe Elektro
                </Button>
              </CardContent>
            </Card>

            {/* 7. Defibrillator */}
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={defibrillatorImage} alt="Defibrillator am Arbeitsplatz" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-6 w-6" />
                    Defibrillator (AED)
                  </CardTitle>
                  <Badge variant="secondary">AED</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Automatisierte Externe Defibrillatoren (AED) können bei Elektrounfällen lebensrettend sein. In Betrieben mit erhöhtem Risiko elektrischer Unfälle sollten AED-Geräte vorhanden und Mitarbeiter in deren Bedienung geschult sein. Die Geräte führen automatisch eine Herzrhythmusanalyse durch und geben Schockanweisungen.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <p className="text-sm">
                    <strong>Rechtsgrundlage:</strong> DGUV Information 204-010, ASR A4.3, Medizinproduktegesetz (MPG)
                  </p>
                  <a href="https://www.bghm.de/arbeitsschuetzer/praxishilfen/arbeitsschutz-kompakt/128-defibrillation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                    → BGHM: Defibrillation am Arbeitsplatz
                  </a>
                </div>
                <Button 
                  onClick={() => bookCourse('Defibrillator')}
                  className="w-full"
                >
                  Kurs buchen - AED Training
                </Button>
              </CardContent>
            </Card>

            {/* 8. Erlaubnisschein */}
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={workPermitImage} alt="Erlaubnisschein für Elektroarbeiten" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6" />
                    Erlaubnisschein
                  </CardTitle>
                  <Badge variant="outline">Freigabe</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Ein Erlaubnisschein ist ein Schriftstück, das die erteilte Erlaubnis für bestimmte Tätigkeiten bescheinigt. Dieses Dokument wird während eines Erlaubnisscheinverfahrens ausgestellt und dient dazu, risikoreiche / gefährliche Arbeiten zu regeln. Besonders bei Arbeiten an Hochspannungsanlagen oder in explosionsgefährdeten Bereichen ist ein Erlaubnisschein obligatorisch.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <p className="text-sm">
                    <strong>Rechtsgrundlage:</strong> DIN VDE 0105-100, DGUV Vorschrift 3 § 7, BetrSichV § 13
                  </p>
                  <a href="https://www.tuev-nord.de/de/unternehmen/bildung/wissen-kompakt/elektrotechnik/din-vde-0105-100-ueberblick-tipps/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                    → TÜV Nord: DIN VDE 0105-100
                  </a>
                </div>
                <Button 
                  onClick={() => bookCourse('Erlaubnisschein')}
                  className="w-full"
                >
                  Kurs buchen - Arbeitsfreigabe
                </Button>
              </CardContent>
            </Card>

            {/* 9. Lockout-Tagout (LOTO) */}
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={lockoutTagoutImage} alt="Lockout-Tagout System" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-6 w-6" />
                    Lockout-Tagout (LOTO)
                  </CardTitle>
                  <Badge variant="secondary">LOTO</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Unternehmen setzen zunehmend Lockout-Tagout-Systeme (LOTO) ein, um Wartungs- und andere Servicearbeiten möglichst sicher durchführen zu können. LOTO verhindert das unbeabsichtigte Einschalten von Maschinen während Wartungsarbeiten durch mechanische Verriegelung und Kennzeichnung.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <p className="text-sm">
                    <strong>Rechtsgrundlage:</strong> DGUV Regel 100-500, BetrSichV § 10, Maschinenrichtlinie 2006/42/EG
                  </p>
                  <a href="https://www.haufe.de/arbeitsschutz/sicherheit/lockout-tagout-loto-prinzip-der-wartungssicherung-erklaert_96_565988.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                    → Haufe: LOTO-Prinzip erklärt
                  </a>
                </div>
                <Button 
                  onClick={() => bookCourse('Lockout-Tagout')}
                  className="w-full"
                >
                  Kurs buchen - LOTO System
                </Button>
              </CardContent>
            </Card>

            {/* 10. Instandhaltung */}
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={maintenanceImage} alt="Instandhaltung elektrischer Anlagen" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-6 w-6" />
                    Instandhaltung
                  </CardTitle>
                  <Badge variant="outline">Wartung</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Da Instandhaltungsmaßnahmen in allen Arbeitsbereichen anfallen, sind Instandhalter bei der Inspektion, Wartung und Instandsetzung von Maschinen, Anlagen, Geräten oder Einrichtungen besonders hohen Risiken ausgesetzt. Laut einer Auswertung aller tödlichen Arbeitsunfälle passieren bei Instandhaltungsarbeiten 50 Prozent mehr Unfälle als in der Fertigung.
                </p>
                <div className="bg-muted p-3 rounded mb-4">
                  <p className="text-sm">
                    <strong>Rechtsgrundlage:</strong> DGUV Regel 100-500, DIN VDE 0105-100, BetrSichV § 10-14
                  </p>
                  <a href="https://www.bghm.de/arbeitsschuetzer/praxishilfen/131-4-rang-methode" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                    → BGHM: 4-Rang-Methode
                  </a>
                </div>
                <Button 
                  onClick={() => bookCourse('Instandhaltung')}
                  className="w-full"
                >
                  Kurs buchen - Sichere Instandhaltung
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="kontakt" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Starten Sie jetzt mit sicheren Elektroarbeiten
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Investieren Sie in die Sicherheit Ihrer Mitarbeiter und erfüllen Sie gleichzeitig alle rechtlichen Anforderungen mit unseren zertifizierten Online-Unterweisungen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <ShieldCheck className="mr-2 h-5 w-5" />
              Beratungstermin vereinbaren
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <BookOpen className="mr-2 h-5 w-5" />
              Alle Kurse anzeigen
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">ElektroSicherheit Pro</span>
              </div>
              <p className="text-muted-foreground">
                Ihr Partner für professionelle Arbeitsschutz-Unterweisungen im Bereich Elektroarbeiten.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliche Hinweise</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Impressum</li>
                <li>Datenschutz</li>
                <li>AGB</li>
                <li>Zertifizierungen</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>info@elektrosicherheit-pro.de</li>
                <li>+49 (0) 123 456 789</li>
                <li>Musterstraße 123, 12345 Stadt</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ElektroSicherheit Pro. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;