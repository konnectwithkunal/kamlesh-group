import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Leaf, 
  CheckCircle2, 
  Droplets, 
  Award, 
  Microscope,
  Activity,
  Maximize2,
  FileBadge
} from "lucide-react";
import { Button } from "@/components/ui/button"; 
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NarsPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      <Header />
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black opacity-80"></div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase border border-blue-500/50 rounded-full bg-blue-500/10 text-blue-300">
                <ShieldCheck size={14} />
                NARS Surgicals
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Maximum Protection. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Doctor's Special Choice.
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                Premium Disposable Surgical Gowns engineered with <strong>Bodyguard Plus Technology</strong>. 
                Meeting AAMI Levels 2, 3, & 4 standards for critical zones. Proudly Made in India.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                  Download Catalogue
                </Button>
                <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 rounded-full px-8">
                  Contact Sales
                </Button>
              </div>
            </motion.div>

            {/* Hero Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px] bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden"
            >
               <img 
                 src="/img/nar.jpg" 
                 alt="NARS Surgical Gown" 
                 className="w-full h-full object-cover"
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS STRIP --- */}
      <div className="bg-slate-50 border-b border-slate-200 py-10">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Certified Excellence
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {["ISO 9001:2015", "ISO 13485:2016", "WHO - GMP", "CE FDA", "BIS IS 9473:2002"].map((cert, index) => (
              <div key={index} className="flex items-center gap-2 font-bold text-slate-700">
                <FileBadge className="w-5 h-5 text-blue-600" /> 
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- TECHNOLOGY SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Bodyguard Plus Technology
            </h2>
            <p className="text-slate-600 text-lg">
              Our gowns feature advanced multi-layer protection systems, offering the highest fluid and microbial barrier against blood-borne pathogens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Level 4 - 6 Layer */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-blue-100"
            >
              <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                <span className="text-2xl font-bold">L4</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">6-Layer Protection (Level 4)</h3>
              <p className="text-slate-600 mb-6">
                Engineered for critical zones. Combines Spunbond + Meltblown layers with a specialized coating for maximum imperviousness.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Spunbond + Meltblown Structure
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Impervious Coating
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Viral Barrier (ASTM F 1670)
                </li>
              </ul>
            </motion.div>

            {/* Level 3 - 4 Layer */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm"
            >
              <div className="w-14 h-14 bg-teal-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
                <span className="text-2xl font-bold">L3</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">4-Layer Protection (Level 3)</h3>
              <p className="text-slate-600 mb-6">
                SMMS Non-woven fabric. Hydrophobic, hydrophilic, UV resistant, and flame retardant properties with good air permeability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" /> Ultrasonic Sealing
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" /> Low Linting & Lightweight
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" /> High Tensile Strength
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SPECIFICATIONS TABLE --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-slate-200 pb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Technical Specifications</h3>
              <p className="text-slate-500 mt-2">Standard and Reinforced Surgical Gowns sizing.</p>
            </div>
            <div className="mt-4 md:mt-0">
               <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                 <Maximize2 size={16} /> GSM Range: 30 - 90 GSM
               </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="p-5 font-semibold">Size</th>
                  <th className="p-5 font-semibold">Medium</th>
                  <th className="p-5 font-semibold">Large</th>
                  <th className="p-5 font-semibold">X-Large</th>
                  <th className="p-5 font-semibold">XX-Large</th>
                </tr>
              </thead>
              <tbody className="text-slate-600 divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-5 font-medium text-slate-900">Length (cm)</td>
                  <td className="p-5">132</td>
                  <td className="p-5">142</td>
                  <td className="p-5">148</td>
                  <td className="p-5">156</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-5 font-medium text-slate-900">Fabric Type</td>
                  <td className="p-5" colSpan={4}>SSMMS + Coating (Polyurethane/Lamination)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-5 font-medium text-slate-900">Lamination</td>
                  <td className="p-5" colSpan={4}>10 to 40 GSM (Breathable/Non-Breathable)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- SUSTAINABILITY & ANTIMICROBIAL --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Sustainability */}
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-6">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Eco-Conscious Innovation</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We offer <strong>Oxo-Biodegradable</strong> non-woven fabric options. These are designed to degrade within 70 hours of exposure under specific conditions, verified by international standards.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-100">
                  <span className="font-semibold text-green-800">ASTM D 4355</span>
                  <span className="text-sm text-green-700">Degrades in 70 hrs exposure</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-100">
                  <span className="font-semibold text-green-800">ASTM D 6954</span>
                  <span className="text-sm text-green-700">Eco Toxicity Passed</span>
                </div>
              </div>
            </div>

            {/* Antimicrobial */}
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-6">
                <Microscope className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Advanced Antimicrobial</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our fabric contains active antimicrobial additives that interfere with microbe cell metabolism. This prevents reproduction, keeping the product fresh, hygienic, and germ-free.
              </p>
              
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-4 mb-2">
                  <Award className="w-8 h-8 text-indigo-500" />
                  <div>
                    <h4 className="font-bold text-slate-900">AATCC 100-2012 Standard</h4>
                    <p className="text-sm text-slate-500">Antimicrobial Activity Test</p>
                  </div>
                </div>
                <div className="mt-4 text-3xl font-bold text-indigo-600">
                  &gt;95% <span className="text-lg font-medium text-slate-500">Microbe Reduction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA / CONTACT --- */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            Secure high-quality PPE for your hospital or clinic. Contact NARS Surgicals (Kamlesh Enterprises) for bulk inquiries and custom specifications.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-left max-w-4xl mx-auto bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Head Office</h4>
              <p className="text-slate-300">8745/1, Shidipura, New Delhi - 110005, India</p>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Contact</h4>
              <p className="text-slate-300">+91 98117 00286</p>
              <p className="text-slate-300">011 403 478 51</p>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Email</h4>
              <p className="text-slate-300 break-all">narssurgicals@gmail.com</p>
              <p className="text-slate-300 break-all">htsh.dhawan@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NarsPage;