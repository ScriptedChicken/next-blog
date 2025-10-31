import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
  <div className="relative container mx-auto px-4 py-32">
    <div className="max-w-6xl mx-auto">
      
      {/* AI Badge */}
      <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 mb-12 animate-pulse">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping delay-150" />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping delay-300" />
        </div>
        <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">
          AI-Enhanced Content Discovery Platform
        </span>
        <div className="text-xs bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text font-mono">
          v4.2.1
        </div>
      </div>

      {/* Main Headline */}
      <div className="mb-16">
        <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-gradient bg-[length:200%_200%]">
            THINK
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-500">
            DIFFERENT
          </span>
          <br />
          <span className="text-5xl md:text-7xl text-white/60">
            (but with AI)
          </span>
        </h1>
      </div>

      {/* Corporate Jargon Subtitle */}
      <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl leading-relaxed">
        We're <span className="text-cyan-400 font-bold">disrupting the blogosphere</span> with our{" "}
        <span className="text-purple-400 font-bold">proprietary neural-language model</span> that{" "}
        <span className="text-green-400 font-bold">hyper-optimizes</span> your reading experience through{" "}
        <span className="text-blue-400 font-bold">blockchain-verified engagement metrics</span> and{" "}
        <span className="text-pink-400 font-bold">quantum-inspired recommendation algorithms</span>.
      </p>

      {/* CTA Section */}
      <a href="posts"><div className="flex flex-col sm:flex-row gap-6 items-center justify-start mb-20">
        <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-lg py-5 px-10 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30">
          <span className="relative z-10 flex items-center gap-3">
            Start Reading 
            <span className="group-hover:translate-x-1 transition-transform">🚀</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10" />
        </button>
      </div></a>

      {/* Vanity Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl">
        {[
          { value: "47.3K", label: "Synapses Fired", metric: "Per Minute", trend: "+12.4%", emoji: "⚡" },
          { value: "2.1M", label: "Neural Connections", metric: "Real-time", trend: "Active", emoji: "🔄" },
          { value: "99.97%", label: "Uptime SLA", metric: "Blockchain", trend: "Guaranteed", emoji: "⛓️" },
          { value: "0.0001ms", label: "Latency", metric: "Edge Network", trend: "Global", emoji: "🌐" }
        ].map((item, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-black text-white mb-2 flex items-center gap-2">
              {item.value}
              <span className="text-lg">{item.emoji}</span>
            </div>
            <div className="text-sm text-gray-400 font-medium mb-1">{item.label}</div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-cyan-400 font-mono">{item.metric}</div>
              <div className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">{item.trend}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom "Innovation" Text */}
      <div className="mt-20 text-center">
        <p className="text-white/40 text-sm uppercase tracking-widest font-semibold">
          Powered by 100% renewable energy and blockchain-verified carbon credits • GDPR compliant • SOC 2 Type II certified
        </p>
      </div>
    </div>
  </div>
</div>
  );
}
