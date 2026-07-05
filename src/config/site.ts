/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SiteConfig {
  name: string;
  theme: string;
  version: string;
  platform: string;
  connection: {
    ip: string;
    port: string;
    platformLabel: string;
  };
  community: {
    discord: string;
    linktree: string;
    tiktok: string;
    whatsappGroup: string;
  };
  purchase: {
    whatsappNumber: string; // Formatting to open WA direct link e.g. 62895602592430
    whatsappDisplay: string;
  };
  developer: {
    name: string;
    whatsapp: string;
    portfolioUrl: string;
  };
  prices: {
    ranks: {
      name: string;
      price: string;
    }[];
    money: {
      rate: string;
      description: string;
    };
  };
  rules: string[];
  copyright: string;
}

export const siteConfig: SiteConfig = {
  name: "QIE SMP",
  theme: "Minecraft Survival Economy",
  version: "Bedrock 1.26.30+",
  platform: "Bedrock Only",
  connection: {
    ip: "qiesmp.mcplay.co",
    port: "19132",
    platformLabel: "Minecraft Bedrock Edition"
  },
  community: {
    discord: "https://discord.gg/qiesmp",
    linktree: "https://linktr.ee/qiesmp",
    tiktok: "https://tiktok.com/@qiesmp",
    whatsappGroup: "https://chat.whatsapp.com/qiesmp"
  },
  purchase: {
    whatsappNumber: "62895602592430",
    whatsappDisplay: "0895602592430"
  },
  developer: {
    name: "RAN DEV",
    whatsapp: "0895602592430",
    portfolioUrl: "https://sfl.gl/x2ic"
  },
  prices: {
    ranks: [
      { name: "VIP", price: "Rp 25.000" },
      { name: "VIP+", price: "Rp 50.000" },
      { name: "MVP", price: "Rp 70.000" },
      { name: "MVP+", price: "Rp 85.000" },
      { name: "MVP++", price: "Rp 100.000" }
    ],
    money: {
      rate: "50K Money = 1K USD",
      description: "Hasil pembelian digunakan untuk membantu biaya operasional server, perpanjangan server, peningkatan spesifikasi, dan kebutuhan administrasi."
    }
  },
  rules: [
    "Gunakan Grup Dengan Bijak",
    "Sopan dan Saling Menghargai",
    "Menghormati Keputusan Admin",
    "Dilarang Membahas LGBTQ+",
    "Dilarang Menggunakan Cheat, X-Ray, Dupe, dan Bug Abuse",
    "Dilarang Promosi Tanpa Izin Admin",
    "Dilarang Membagikan Pornografi, Kekerasan, SARA, dan Konten Negatif Lainnya"
  ],
  copyright: "© 2026 QIE SMP. All Rights Reserved."
};
