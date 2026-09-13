import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Server, 
  Wifi, 
  Monitor, 
  Bot, 
  Cpu, 
  ShieldCheck, 
  HardDrive, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Building
} from 'lucide-react';

export const metadata = {
  title: 'IT Infrastructure & Lab Setup ',
  description: 'Turnkey office IT setup, networking, server rooms, 40+ seat computer labs, and STEM robotics laboratories for schools and corporate campuses.',
};

export default function InfrastructurePage() {
  const infraServices = [
    {
      id: 'turnkey',
      icon: <Building className="w-8 h-8 text-cyan" />,
      title: 'Turnkey Corporate Office IT Setup',
      desc: 'Complete end-to-end planning, cabling, equipment sourcing, and commissioning for new offices, expansion floors, and headquarters.',
      points: [
        'Cat6 / Cat6A structured cabling & patch panel terminations',
        'Wall-mount & floor-standing network server rack installations',
        'Uninterruptible Power Supply (UPS) backup integration',
        'Biometric door access control and CCTV surveillance setup',
        'Cable management and neat desktop power/data drops',
      ],
    },
    {
      id: 'networking',
      icon: <Wifi className="w-8 h-8 text-blue-400" />,
      title: 'Enterprise Networking & Wi-Fi Architecture',
      desc: 'Seamless, high-bandwidth wired and wireless connectivity designed for hundreds of concurrent mobile devices, laptops, and VoIP phones.',
      points: [
        'VLAN segmentation (Guest, Corporate, Management, IoT)',
        'Enterprise access point heat-mapping and zero dead-zone coverage',
        'Next-generation firewalls with intrusion prevention (IPS/IDS)',
        'Load balancing across multi-ISP internet connections',
        'Encrypted site-to-site VPNs for branch office connectivity',
      ],
    },
    {
      id: 'servers',
      icon: <Server className="w-8 h-8 text-violet-400" />,
      title: 'Server Racks, Storage & Virtualization',
      desc: 'High-availability on-premise compute and network-attached storage (NAS) clusters engineered for high throughput and automated backups.',
      points: [
        'Dell, HP, and Supermicro server provisioning',
        'RAID array configuration for disk failure tolerance',
        'Synology & TrueNAS backup storage repositories',
        'VMware ESXi and Proxmox hypervisor virtualization',
        'Automated encrypted offsite cloud backup routines',
      ],
    },
    {
      id: 'labs',
      icon: <Monitor className="w-8 h-8 text-cyan" />,
      title: 'Institutional Computer Labs (20 to 100+ Seats)',
      desc: 'Turnkey computer laboratory design and deployment for schools, universities, coding academies, and exam testing centers.',
      points: [
        'High-spec branded workstations or energy-efficient thin clients',
        'Centralized server image deployment (PXE booting & cloning)',
        'Educational software installation and lab control management',
        'Ergonomic anti-static laboratory furniture layout',
        'Gigabit local network with strict student internet content filters',
      ],
    },
    {
      id: 'robotics',
      icon: <Bot className="w-8 h-8 text-emerald-400" />,
      title: 'STEM & Robotics Lab Setup for Institutions',
      desc: 'Cutting-edge innovation labs equipping students with hands-on robotics, IoT microcontrollers, 3D printers, and structured curricula.',
      points: [
        'Robotics hardware kits (Arduino, Raspberry Pi, ESP32, sensors)',
        'Robotic arms, educational rovers, and sensor telemetry benches',
        'Rapid prototyping 3D printers and soldering workstations',
        'Comprehensive age-appropriate STEM curriculum & teacher training',
        'Annual maintenance and hardware replacement support',
      ],
    },
    {
      id: 'deployment',
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: 'Workstation Provisioning & Rollout',
      desc: 'Bulk OS provisioning, software licensing, endpoint antivirus protection, and centralized device management.',
      points: [
        'Automated OS image rollout via Microsoft Intune or MDM',
        'Enterprise antivirus & centralized patch management',
        'Asset tagging, inventory cataloging, and warranty tracking',
        'Dual-monitor productivity setups for engineering & finance',
        'Rapid hot-swap hardware replacement protocols',
      ],
    },
  ];

  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-main)] py-16 sm:py-24 transition-colors duration-300">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
          Hardware & Infrastructure
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          Build the <span className="text-gradient">physical tech foundation.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Behind every great software platform is resilient hardware and networking. GrowCell engineers physical infrastructure, turnkey computer laboratories, and STEM robotics centers.
        </p>
      </div>

      {/* Hero Showcase Images */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-80 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 group shadow-md dark:shadow-none">
          <Image
            src="/img/carousel_3.jpg"
            alt="Data Center Server Racks"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs font-bold text-cyan uppercase tracking-wider block mb-1">Infrastructure Focus</span>
            <h3 className="text-xl font-bold text-white">Data Centers & High-Bandwidth Server Clusters</h3>
          </div>
        </div>

        <div className="relative h-80 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 group shadow-md dark:shadow-none">
          <Image
            src="/img/carousel_4.jpg"
            alt="STEM Robotics Laboratory"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">Education Focus</span>
            <h3 className="text-xl font-bold text-white">Modern Computer & STEM Robotics Labs</h3>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {infraServices.map((srv) => (
          <div
            key={srv.id}
            id={srv.id}
            className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-cyan/40 flex flex-col justify-between transition-all shadow-sm dark:shadow-none"
          >
            <div>
              <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 inline-block mb-5">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {srv.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {srv.desc}
              </p>
              <ul className="space-y-2.5 mb-6">
                {srv.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan hover:underline transition-colors"
              >
                <span>Request Infrastructure Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* MEANINGFUL SECTION: Typical Bill of Materials (BOM) & Hardware Specs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-bold uppercase tracking-widest mb-3">
            Hardware Engineering Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-[var(--text-main)]">
            Standard Lab & Server Bill of Materials (BOM)
          </h2>
          <p className="text-slate-600 dark:text-[var(--text-muted)] text-sm sm:text-base mt-2">
            Every hardware component we deploy is enterprise-grade, certified, and under warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Institutional Computer Lab Station',
              tag: '20–60 Seats Typical',
              specs: [
                'Processor: Intel Core i5 / i7 13th Gen',
                'Memory: 16GB DDR5 5200MHz Dual Channel',
                'Storage: 512GB PCIe 4.0 NVMe SSD',
                'Displays: 24" Full HD 100Hz IPS Low Blue Light',
                'Peripherals: Spill-resistant ergonomic keyboard & mouse',
                'OS & Software: Windows 11 Pro / Ubuntu with PXE Netboot',
              ],
            },
            {
              title: 'STEM Robotics & IoT Maker Station',
              tag: '10–30 Benches Typical',
              specs: [
                'Microcontrollers: Arduino Mega 2560 & ESP32-WROOM',
                'Compute Core: Raspberry Pi 5 (8GB) with AI accelerator',
                'Sensors: Telemetry arrays (Ultrasonic, IR, Gyro, Gas, Temp)',
                'Actuation: High-torque servo motors & robotic chassis',
                'Fabrication: 3D CAD rapid prototyping printer',
                'Tooling: Soldering benches with ESD grounding protection',
              ],
            },
            {
              title: 'Enterprise Server & Network Rack',
              tag: 'Turnkey Floor Comm Hub',
              specs: [
                'Cabling: Cat6A 10Gbps shielded structured runs',
                'Switching: 48-Port L3 Managed PoE+ Gigabit Switch',
                'Security Gateway: Dual-WAN Failover Hardware Firewall',
                'Backup Power: 3KVA True Online Rackmount UPS',
                'Storage: Synology 4-Bay NAS in RAID 10 configuration',
                'Enclosure: 42U Lockable Glass Front Server Rack with fans',
              ],
            },
          ].map((bom) => (
            <div key={bom.title} className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-white/10 flex flex-col justify-between shadow-sm dark:shadow-none">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-cyan uppercase">{bom.tag}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    BOM Specification
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{bom.title}</h3>
                <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                  {bom.specs.map((sp) => (
                    <li key={sp} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-1.5 shrink-0" />
                      <span>{sp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-20 text-center">
        <div className="glass-panel p-10 rounded-3xl border border-slate-200 dark:border-cyan/30 shadow-md dark:shadow-none">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Planning a new facility, office move, or school lab?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-6">
            We handle site surveys, bill of materials (BOM), hardware sourcing, cabling, and turn-key deployment with dedicated SLA support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-cyan text-navy hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-navy transition-all shadow-lg"
          >
            <span>Schedule a Site Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
