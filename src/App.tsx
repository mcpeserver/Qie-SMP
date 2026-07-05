/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  Award,
  Coins,
  Users,
  Phone,
  ShieldAlert,
  Globe,
  ChevronRight,
  Server,
  Wifi,
  AlertCircle,
  Wrench,
  Sparkles,
  ArrowRight
} from "lucide-react";

import { siteConfig } from "./config/site";

// Image Imports
import logoImg from "./assets/images/qie_smp_logo_1783275165530.jpg";
import heroBgImg from "./assets/images/qie_smp_hero_bg_1783275179133.jpg";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [copiedIP, setCopiedIP] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Monitor scroll for header adjustments
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Copy to clipboard helper
  const handleCopy = (text: string, type: "ip" | "port") => {
    navigator.clipboard.writeText(text);
    if (type === "ip") {
      setCopiedIP(true);
      setToastMessage("IP Server QIE SMP berhasil disalin ke clipboard!");
      setTimeout(() => setCopiedIP(false), 2000);
    } else {
      setCopiedPort(true);
      setToastMessage("Port Server QIE SMP berhasil disalin ke clipboard!");
      setTimeout(() => setCopiedPort(false), 2000);
    }
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-stone-dark text-stone-light selection:bg-nature-emerald selection:text-forest-dark relative">
      
      {/* 1. DEVELOPER WATERMARK BANNER */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full bg-[#0a1e12] border-b border-forest-light/40 py-2.5 px-4 text-xs z-50 sticky top-0 backdrop-blur-md shadow-md"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-stone-300 font-mono">
            <span className="inline-block w-2 h-2 rounded-full bg-nature-emerald animate-pulse"></span>
            <span>Developed by <strong className="text-nature-lime font-sans font-bold">RAN DEV</strong></span>
            <span className="hidden sm:inline text-forest-light">|</span>
            <a 
              href={`https://wa.me/${siteConfig.purchase.whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-nature-lime transition-colors duration-200 flex items-center gap-1 font-sans font-medium"
            >
              <Phone className="w-3.5 h-3.5" /> {siteConfig.purchase.whatsappDisplay}
            </a>
          </div>
          
          {/* Custom portfolio link to view other servers */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-stone-400 sm:inline hidden">Tertarik membuat website server?</span>
            <a 
              href={siteConfig.developer.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gold-coin to-amber-500 hover:from-amber-500 hover:to-gold-coin text-stone-900 font-bold px-3 py-1 rounded-full text-[11px] transition-all duration-300 flex items-center gap-1.5 shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 group scale-95 active:scale-90"
            >
              <span>Lihat Server Lain</span>
              <Globe className="w-3.5 h-3.5 animate-spin-slow group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* 2. STICKY HEADER / NAVBAR */}
      <header 
        className={`w-full z-40 transition-all duration-300 ${
          scrolled 
            ? "sticky top-[42px] sm:top-[37px] bg-forest-dark/90 backdrop-blur-xl border-b border-forest-light/40 py-3 shadow-lg" 
            : "sticky top-[42px] sm:top-[37px] bg-forest-dark/50 backdrop-blur-md py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-forest-light/60 bg-forest-medium flex items-center justify-center p-0.5 group-hover:border-nature-emerald transition-colors duration-300">
              <img 
                src={logoImg} 
                alt="QIE SMP Logo" 
                className="w-full h-full object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white font-sans group-hover:text-nature-lime transition-colors">
                {siteConfig.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-forest-medium/30 p-1.5 rounded-full border border-forest-light/20">
            <a href="#koneksi" className="text-sm font-medium text-stone-300 hover:text-white hover:bg-forest-light/30 px-4 py-1.5 rounded-full transition-all">
              Koneksi
            </a>
            <a href="#peraturan" className="text-sm font-medium text-stone-300 hover:text-white hover:bg-forest-light/30 px-4 py-1.5 rounded-full transition-all">
              Peraturan
            </a>
            <a href="#rank" className="text-sm font-medium text-stone-300 hover:text-white hover:bg-forest-light/30 px-4 py-1.5 rounded-full transition-all">
              Rank Server
            </a>
            <a href="#money" className="text-sm font-medium text-stone-300 hover:text-white hover:bg-forest-light/30 px-4 py-1.5 rounded-full transition-all">
              Sistem Ekonomi
            </a>
            <a href="#komunitas" className="text-sm font-medium text-stone-300 hover:text-white hover:bg-forest-light/30 px-4 py-1.5 rounded-full transition-all">
              Komunitas
            </a>
          </nav>

          {/* Quick Action Button */}
          <div className="flex items-center gap-3">
            <a 
              href="#koneksi" 
              className="bg-forest-medium hover:bg-forest-light text-nature-lime border border-nature-emerald/30 font-bold px-4 py-2 rounded-xl text-xs transition-all flex items-center gap-1.5"
            >
              <Server className="w-3.5 h-3.5" />
              <span>Main Sekarang</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 px-4 overflow-hidden border-b border-forest-light/20">
        
        {/* Cinematic Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBgImg} 
            alt="Minecraft Forest Landscape" 
            className="w-full h-full object-cover scale-105 filter brightness-[0.35]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle nature gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-dark via-transparent to-forest-dark/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/30 via-transparent to-forest-dark/30"></div>
          
          {/* Particle background simulation */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-nature-emerald/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-nature-lime/10 rounded-full blur-3xl animate-pulseGlow"></div>
          </div>
        </div>

        {/* Hero Content container */}
        <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
          
          {/* Floating animated logo */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="w-40 h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden border-2 border-nature-emerald/50 p-1 bg-forest-dark/80 shadow-2xl animate-float mb-8 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-nature-emerald/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src={logoImg} 
              alt="QIE SMP Minecraft Logo" 
              className="w-full h-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Core Server Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-4"
          >
            <span className="bg-nature-emerald/10 text-nature-lime border border-nature-emerald/30 font-semibold px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase">
              🌲 Survival Economy
            </span>
            <span className="bg-gold-coin/10 text-gold-bright border border-gold-coin/30 font-semibold px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase">
              🌐 Bedrock 1.26.30+
            </span>
            <span className="bg-white/5 text-stone-300 border border-white/10 font-semibold px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase">
              🎮 Bedrock Only
            </span>
          </motion.div>

          {/* Heading QIE SMP */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] font-sans"
          >
            QIE <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature-lime via-nature-emerald to-emerald-500">SMP</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-stone-300 max-w-2xl font-medium mb-10 drop-shadow-md leading-relaxed"
          >
            Selamat datang di pusat informasi resmi <strong className="text-white">QIE SMP</strong>. 
            Server Minecraft Bedrock bertema <span className="text-nature-lime">Survival Economy</span> dengan nuansa alam yang hangat, damai, dan ramah komunitas.
          </motion.p>

          {/* Action Call to Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center px-4"
          >
            <button 
              onClick={() => handleCopy(siteConfig.connection.ip, "ip")}
              className="w-full sm:w-auto bg-gradient-to-r from-nature-emerald to-emerald-600 hover:from-emerald-600 hover:to-nature-emerald text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-nature-emerald/20 hover:shadow-nature-emerald/30 flex items-center justify-center gap-2.5 cursor-pointer border border-nature-lime/20 scale-100 hover:scale-[1.03] active:scale-95 text-base"
            >
              {copiedIP ? <Check className="w-5 h-5 text-nature-lime" /> : <Copy className="w-5 h-5" />}
              <span>{copiedIP ? "Tersalin!" : "Salin IP Server"}</span>
            </button>
            
            <a 
              href="#komunitas"
              className="w-full sm:w-auto bg-forest-medium/80 hover:bg-forest-light text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 border border-forest-light/40 flex items-center justify-center gap-2 scale-100 hover:scale-[1.03] active:scale-95 text-base"
            >
              <Users className="w-5 h-5 text-nature-lime" />
              <span>Gabung Komunitas</span>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          
        </div>
      </section>

      {/* 4. STATUS SERVER & INFORMASI KONEKSI */}
      <section id="koneksi" className="py-24 max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-nature-emerald/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="text-center mb-16">
          <span className="text-nature-emerald font-mono text-xs font-semibold tracking-widest uppercase">
            INFORMASI SERVER
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 tracking-tight">
            Koneksi & Status Server
          </h2>
          <div className="w-16 h-1.5 bg-nature-emerald mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Status Indicators & Legend */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="glass-card p-8 rounded-3xl flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Wifi className="w-32 h-32 text-nature-emerald" />
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-nature-emerald/10 border border-nature-emerald/20 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-nature-lime" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Status Layanan</h3>
                </div>
                
                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  Server QIE SMP menggunakan 3 jenis indikator untuk menggambarkan status operasional server kepada seluruh anggota komunitas secara jelas:
                </p>

                {/* The 3 Required Status Indicators in Indonesia */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-forest-dark/40 border border-forest-light/20">
                    <span className="text-xl leading-none mt-0.5">🟢</span>
                    <div>
                      <h4 className="font-bold text-white text-sm">Online</h4>
                      <p className="text-stone-400 text-xs mt-0.5">Server aktif, stabil, dan siap dimainkan kapan saja oleh semua player.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-forest-dark/40 border border-forest-light/20">
                    <span className="text-xl leading-none mt-0.5">🟡</span>
                    <div>
                      <h4 className="font-bold text-white text-sm">Maintenance</h4>
                      <p className="text-stone-400 text-xs mt-0.5">Sedang dalam pemeliharaan berkala atau pembaharuan sistem oleh Admin.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-forest-dark/40 border border-forest-light/20">
                    <span className="text-xl leading-none mt-0.5">🔴</span>
                    <div>
                      <h4 className="font-bold text-white text-sm">Offline</h4>
                      <p className="text-stone-400 text-xs mt-0.5">Server sedang mati sementara untuk perbaikan krusial atau backup data.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-forest-light/30 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>Metode Pelacakan</span>
                <span className="text-nature-lime">Indikator Resmi</span>
              </div>
            </div>
          </div>

          {/* Connection Card (Informasi Koneksi) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-between border-t-2 border-t-nature-lime relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Server className="w-40 h-40 text-white" />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-nature-emerald/10 border border-nature-emerald/20 flex items-center justify-center">
                    <Server className="w-5 h-5 text-nature-lime" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Informasi Koneksi</h3>
                </div>

                <p className="text-stone-300 text-sm mb-8 leading-relaxed">
                  Gunakan detail koneksi berikut untuk masuk ke server QIE SMP langsung melalui Minecraft Bedrock Edition di handphone, tablet, atau perangkat lainnya.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* IP Address Card */}
                  <div className="bg-stone-dark/50 border border-forest-light/30 rounded-2xl p-4 flex flex-col justify-between group">
                    <span className="text-xs font-mono text-stone-400 block mb-1">IP ADDRESS</span>
                    <span className="text-lg font-mono font-bold text-white tracking-wide block mb-3 group-hover:text-nature-lime transition-colors">
                      {siteConfig.connection.ip}
                    </span>
                    <button 
                      onClick={() => handleCopy(siteConfig.connection.ip, "ip")}
                      className="mt-auto bg-forest-medium hover:bg-forest-light text-nature-lime font-bold text-xs py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 border border-nature-emerald/20"
                    >
                      {copiedIP ? <Check className="w-3.5 h-3.5 text-nature-lime" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedIP ? "Tersalin!" : "Salin IP"}</span>
                    </button>
                  </div>

                  {/* Port Card */}
                  <div className="bg-stone-dark/50 border border-forest-light/30 rounded-2xl p-4 flex flex-col justify-between group">
                    <span className="text-xs font-mono text-stone-400 block mb-1">PORT</span>
                    <span className="text-lg font-mono font-bold text-white tracking-wide block mb-3 group-hover:text-nature-lime transition-colors">
                      {siteConfig.connection.port}
                    </span>
                    <button 
                      onClick={() => handleCopy(siteConfig.connection.port, "port")}
                      className="mt-auto bg-forest-medium hover:bg-forest-light text-nature-lime font-bold text-xs py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 border border-nature-emerald/20"
                    >
                      {copiedPort ? <Check className="w-3.5 h-3.5 text-nature-lime" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPort ? "Tersalin!" : "Salin Port"}</span>
                    </button>
                  </div>

                  {/* Platform Card */}
                  <div className="bg-stone-dark/50 border border-forest-light/30 rounded-2xl p-4 flex flex-col justify-center">
                    <span className="text-xs font-mono text-stone-400 block mb-1">PLATFORM</span>
                    <span className="text-base font-bold text-white tracking-wide">
                      {siteConfig.platform}
                    </span>
                    <span className="text-stone-400 text-xs mt-1">Bedrock Edition Only</span>
                  </div>

                  {/* Version Card */}
                  <div className="bg-stone-dark/50 border border-forest-light/30 rounded-2xl p-4 flex flex-col justify-center">
                    <span className="text-xs font-mono text-stone-400 block mb-1">VERSI MINECRAFT</span>
                    <span className="text-base font-bold text-white tracking-wide">
                      {siteConfig.version}
                    </span>
                    <span className="text-stone-400 text-xs mt-1">Mendukung versi terbaru</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-forest-light/30 flex items-center gap-2 text-xs text-stone-400">
                <span className="w-2 h-2 rounded-full bg-nature-emerald"></span>
                <span>Pastikan koneksi internet Anda stabil saat mencoba terhubung ke server.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PERATURAN SERVER (SERVER RULES) */}
      <section id="peraturan" className="py-24 bg-forest-dark/40 border-y border-forest-light/20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-dark/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-nature-emerald font-mono text-xs font-semibold tracking-widest uppercase">
              TATA TERTIB KOMUNITAS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-2 tracking-tight">
              Peraturan Server & Grup
            </h2>
            <p className="text-stone-400 text-sm md:text-base max-w-xl mx-auto mt-3">
              Seluruh pemain wajib menaati peraturan resmi berikut demi menjaga kenyamanan bersama dan menciptakan komunitas yang harmonis.
            </p>
            <div className="w-16 h-1.5 bg-nature-emerald mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.rules.map((rule, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass-card glass-card-hover p-6 rounded-2xl flex gap-4 items-start"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">
                    Aturan #{idx + 1}
                  </h4>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    {rule}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 glass-card rounded-2xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 border-l-4 border-l-red-500">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-0.5">Sanksi Pelanggaran</h4>
              <p className="text-stone-400 text-xs leading-relaxed">
                Pelanggaran terhadap peraturan di atas dapat mengakibatkan sanksi administratif berupa teguran, mute, ban grup, hingga ban permanen dari server QIE SMP oleh tim Admin.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. RANK SERVER & STORE SECTION */}
      <section id="rank" className="py-24 max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gold-coin/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center mb-16">
          <span className="text-gold-bright font-mono text-xs font-semibold tracking-widest uppercase">
            DONASI & TOKO RESMI
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 tracking-tight">
            Pilihan Rank Server
          </h2>
          <p className="text-stone-400 text-sm md:text-base max-w-xl mx-auto mt-3">
            Dukung kelangsungan server QIE SMP dengan memiliki pangkat eksklusif yang menunjukkan dukungan nyata Anda terhadap komunitas.
          </p>
          <div className="w-16 h-1.5 bg-gold-coin mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Rank Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch mb-16">
          {siteConfig.prices.ranks.map((rank, idx) => {
            // Assign specific highlight styles to major rank packages
            const isMVPDoublePlus = rank.name === "MVP++";
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`glass-card p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  isMVPDoublePlus 
                    ? "border-2 border-gold-coin/60 shadow-lg shadow-gold-coin/10 scale-105" 
                    : "border border-forest-light/40 hover:border-gold-coin/40"
                }`}
              >
                {isMVPDoublePlus && (
                  <div className="absolute top-0 right-0 bg-gold-coin text-stone-900 text-[10px] font-black tracking-widest px-3 py-1 uppercase rounded-bl-xl flex items-center gap-1 font-mono">
                    <Sparkles className="w-3 h-3" /> BEST CHOICE
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block mb-1">
                      PAKET RANK
                    </span>
                    <h3 className={`text-2xl font-black tracking-tight ${
                      isMVPDoublePlus ? "text-gold-bright" : "text-white"
                    }`}>
                      {rank.name}
                    </h3>
                  </div>

                  <div className="my-6">
                    <span className="text-[10px] font-mono text-stone-400 block mb-0.5">HARGA TERBAIK</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-black text-white font-mono">{rank.price}</span>
                    </div>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/${siteConfig.purchase.whatsappNumber}?text=Halo%20Admin%20QIE%20SMP,%20saya%20tertarik%20untuk%20membeli%20Rank%20${encodeURIComponent(rank.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full font-bold py-3 px-4 rounded-xl text-xs tracking-wide uppercase transition-all duration-200 text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                    isMVPDoublePlus 
                      ? "bg-gradient-to-r from-gold-coin to-amber-500 hover:from-amber-500 hover:to-gold-coin text-stone-900 font-extrabold shadow-md shadow-gold-coin/20" 
                      : "bg-forest-medium hover:bg-forest-light text-white border border-forest-light/60 hover:border-gold-coin/30"
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Beli Rank</span>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* 7. MONEY SERVER SECTION */}
        <div id="money" className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl border-t-2 border-t-gold-coin relative overflow-hidden"
          >
            {/* Background design accents */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold-coin/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute top-1/2 -left-12 w-36 h-36 bg-nature-emerald/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              
              {/* Money representation icon container */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gold-coin/20 to-amber-500/10 border border-gold-coin/30 flex items-center justify-center shrink-0 shadow-inner">
                <Coins className="w-12 h-12 text-gold-bright animate-bounce" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-gold-coin/10 text-gold-bright border border-gold-coin/20 text-[10px] font-mono px-2.5 py-0.5 rounded-md uppercase font-bold tracking-wider">
                    SISTEM EKONOMI
                  </span>
                  <span className="bg-nature-emerald/10 text-nature-lime border border-nature-emerald/20 text-[10px] font-mono px-2.5 py-0.5 rounded-md uppercase font-bold tracking-wider">
                    Uang Game Resmi
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
                  Nilai Tukar Money Server
                </h3>
                
                {/* The Exchange Rate */}
                <p className="text-2xl md:text-3xl font-mono font-extrabold text-gold-bright mb-4">
                  {siteConfig.prices.money.rate}
                </p>

                {/* Explicit Explanation from Data */}
                <p className="text-stone-300 text-sm leading-relaxed">
                  {siteConfig.prices.money.description}
                </p>
              </div>
            </div>

            {/* Quick Contact to Buy Money */}
            <div className="mt-8 pt-6 border-t border-forest-light/20 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-stone-400 text-xs">
                <Users className="w-4 h-4 text-nature-emerald" />
                <span>Pembelian langsung diproses secara instan oleh admin server</span>
              </div>
              <a 
                href={`https://wa.me/${siteConfig.purchase.whatsappNumber}?text=Halo%20Admin%20QIE%20SMP,%20saya%20tertarik%20untuk%20membeli%20Money%20Server`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-coin hover:bg-amber-500 text-stone-900 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors duration-200 flex items-center gap-1.5 shadow-md shadow-gold-coin/10"
              >
                <Coins className="w-3.5 h-3.5" />
                <span>Beli Money Game</span>
              </a>
            </div>
          </motion.div>
        </div>

      </section>

      {/* 8. KOMUNITAS SECTION */}
      <section id="komunitas" className="py-24 bg-[#081810] border-t border-forest-light/20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-nature-emerald/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          
          <div className="mb-16">
            <span className="text-nature-lime font-mono text-xs font-semibold tracking-widest uppercase">
              JARINGAN SOSIAL
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-2 tracking-tight">
              Bergabunglah dengan Komunitas Kami
            </h2>
            <p className="text-stone-400 text-sm md:text-base max-w-xl mx-auto mt-3">
              Ikuti informasi perkembangan server, laporkan bug, serta jalin pertemanan baru melalui saluran komunikasi resmi QIE SMP.
            </p>
            <div className="w-16 h-1.5 bg-nature-emerald mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            
            {/* Discord */}
            <motion.a 
              href={siteConfig.community.discord}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="bg-forest-medium/20 hover:bg-[#5865F2]/10 border border-forest-light/40 hover:border-[#5865F2]/50 p-6 rounded-2xl flex flex-col justify-between items-center text-center group transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-[#5865F2]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1 group-hover:text-[#5865F2] transition-colors">Discord</h4>
                <p className="text-stone-400 text-xs">Ruang diskusi, koordinasi server, suara bersama, dan support tiket dari admin.</p>
              </div>
              <span className="mt-6 text-xs font-bold text-[#5865F2] flex items-center gap-1 group-hover:underline">
                Gabung Discord <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </motion.a>

            {/* Linktree */}
            <motion.a 
              href={siteConfig.community.linktree}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="bg-forest-medium/20 hover:bg-[#39E09B]/10 border border-forest-light/40 hover:border-[#39E09B]/50 p-6 rounded-2xl flex flex-col justify-between items-center text-center group transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#39E09B]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-[#39E09B]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1 group-hover:text-[#39E09B] transition-colors">Linktree</h4>
                <p className="text-stone-400 text-xs">Daftar tautan terpusat untuk segala kebutuhan eksternal Minecraft QIE SMP.</p>
              </div>
              <span className="mt-6 text-xs font-bold text-[#39E09B] flex items-center gap-1 group-hover:underline">
                Kunjungi Linktree <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </motion.a>

            {/* TikTok */}
            <motion.a 
              href={siteConfig.community.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="bg-forest-medium/20 hover:bg-[#FE2C55]/10 border border-forest-light/40 hover:border-[#FE2C55]/50 p-6 rounded-2xl flex flex-col justify-between items-center text-center group transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FE2C55]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-[#FE2C55]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1 group-hover:text-[#FE2C55] transition-colors">TikTok</h4>
                <p className="text-stone-400 text-xs">Tonton keseruan gameplay survival, konten ekonomi kreatif, dan event seru di server.</p>
              </div>
              <span className="mt-6 text-xs font-bold text-[#FE2C55] flex items-center gap-1 group-hover:underline">
                Tonton TikTok <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </motion.a>

            {/* WhatsApp Group */}
            <motion.a 
              href={siteConfig.community.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="bg-forest-medium/20 hover:bg-[#25D366]/10 border border-forest-light/40 hover:border-[#25D366]/50 p-6 rounded-2xl flex flex-col justify-between items-center text-center group transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-[#25D366]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1 group-hover:text-[#25D366] transition-colors">Grup WhatsApp</h4>
                <p className="text-stone-400 text-xs">Grup chat instan bersama seluruh komunitas aktif server QIE SMP.</p>
              </div>
              <span className="mt-6 text-xs font-bold text-[#25D366] flex items-center gap-1 group-hover:underline">
                Gabung Grup WA <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </motion.a>

          </div>

        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-forest-dark border-t border-forest-light/30 text-stone-400 text-sm py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-forest-light/20 pb-12 mb-12">
            
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-forest-light flex items-center justify-center p-0.5">
                  <img 
                    src={logoImg} 
                    alt="QIE SMP Logo" 
                    className="w-full h-full object-cover rounded"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">{siteConfig.name}</span>
              </div>
              <p className="text-stone-400 max-w-sm text-xs leading-relaxed">
                Pusat informasi satu pintu Minecraft Bedrock Survival Economy. Dapatkan pengalaman bermain yang asyik, damai, dan penuh kejujuran.
              </p>
            </div>

            <div className="md:col-span-7 flex flex-wrap justify-start md:justify-end gap-x-8 gap-y-4">
              <a href="#koneksi" className="text-xs font-semibold text-stone-300 hover:text-white transition-colors">
                Koneksi & Status
              </a>
              <a href="#peraturan" className="text-xs font-semibold text-stone-300 hover:text-white transition-colors">
                Peraturan
              </a>
              <a href="#rank" className="text-xs font-semibold text-stone-300 hover:text-white transition-colors">
                Rank Server
              </a>
              <a href="#money" className="text-xs font-semibold text-stone-300 hover:text-white transition-colors">
                Sistem Ekonomi
              </a>
              <a href="#komunitas" className="text-xs font-semibold text-stone-300 hover:text-white transition-colors">
                Komunitas
              </a>
            </div>

          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono">
            <div>
              <p className="text-stone-500">{siteConfig.copyright}</p>
            </div>
            
            {/* COMPLIANT DEVELOPER BANNER AS REQ */}
            <div className="text-center md:text-right bg-forest-medium/20 py-2.5 px-4 rounded-xl border border-forest-light/30">
              <p className="text-stone-300 font-sans">
                Website dikembangkan oleh <strong className="text-nature-lime font-bold">RAN DEV</strong>
              </p>
              <div className="flex justify-center md:justify-end gap-3 mt-1 text-[11px]">
                <a 
                  href={`https://wa.me/${siteConfig.purchase.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  WhatsApp: {siteConfig.purchase.whatsappDisplay}
                </a>
                <span className="text-forest-light">•</span>
                <a 
                  href={siteConfig.developer.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-bright hover:underline"
                >
                  Lihat Server Lain 🌐
                </a>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* 10. TOAST NOTIFICATION POPUP */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-forest-medium text-white border border-nature-emerald/60 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 w-[90%] max-w-md animate-pulseGlow"
          >
            <div className="w-8 h-8 rounded-full bg-nature-emerald/20 border border-nature-emerald/40 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-nature-lime" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-stone-400 block font-mono">BERHASIL</span>
              <p className="text-sm font-semibold text-white mt-0.5">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
