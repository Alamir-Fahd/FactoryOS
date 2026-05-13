import React from "react";
import Link from "next/link";
import {
  Factory,
  ArrowRight,
  LayoutDashboard,
  Boxes,
  Workflow,
  ShieldCheck,
  Warehouse,
  Receipt,
  CheckCircle2,
} from "lucide-react";

const features = [
  { icon: LayoutDashboard, title: "Live Dashboard", desc: "Active orders, dispatch, revenue, and overdue alerts in one glance." },
  { icon: Boxes, title: "Fabric Roll Registry", desc: "Track every roll by code, dye state, supplier, and warehouse position." },
  { icon: Workflow, title: "Production Kanban", desc: "Real-time floor status across cutting, sewing, and finishing stages." },
  { icon: ShieldCheck, title: "QC Inspection", desc: "Lot-level grading from 1st Quality through Rejected with audit trail." },
  { icon: Warehouse, title: "Warehouse Mapping", desc: "Visual placement by floor, zone, shelf, and position." },
  { icon: Receipt, title: "Cost Breakdown", desc: "Per-piece costing across raw material, labour, overhead, and logistics." },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-30 bg-slate-900 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-2 font-bold tracking-wider">
            <Factory className="h-5 w-5 text-blue-400" />
            FACTORYOS
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Open App <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              Industrial textile protocol v2.4
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              The operating system for the modern factory floor.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              FactoryOS unifies orders, fabric inventory, production stages, quality control,
              and cost breakdowns into one calm, professional interface.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
              >
                Explore Dashboard <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center gap-2 border border-gray-200 bg-white px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition"
              >
                See features
              </a>
            </div>
          </div>

          {/* Hero card mock */}
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-xl shadow-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs uppercase text-gray-500 tracking-wide">Active Orders</div>
                  <div className="text-4xl font-bold text-blue-600 mt-1">1,284</div>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase text-gray-500 tracking-wide">Revenue</div>
                  <div className="text-4xl font-bold text-blue-600 mt-1">$420k</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: "1st Quality", v: "842", c: "bg-blue-50 text-blue-700" },
                  { label: "2nd Quality", v: "124", c: "bg-orange-50 text-orange-700" },
                  { label: "Rejected", v: "4", c: "bg-red-50 text-red-700" },
                ].map((s) => (
                  <div key={s.label} className={`rounded-lg p-3 ${s.c}`}>
                    <div className="text-xs">{s.label}</div>
                    <div className="text-2xl font-bold">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Features</div>
            <h2 className="text-4xl font-bold mt-2">Built for every station on the floor.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="h-10 w-10 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white/60 border-t border-white/10 py-8 text-center text-sm">
        © 2026 FactoryOS · Industrial textile protocol v2.4
      </footer>
    </div>
  );
}