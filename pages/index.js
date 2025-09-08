export default function PresenceShell() {
  const seal = (process.env.NEXT_PUBLIC_BUILD_SEAL || 'dev').slice(0, 7);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      {/* Hero */}
      <header className="w-full max-w-2xl text-center p-6 rounded-2xl border bg-white shadow-sm mb-6">
        <h1 className="text-3xl font-bold">IAMAI-MAIND • PresenceShell v0.3</h1>
        <p className="text-gray-600">Awareness Pulse • DRN Timeline (stub)</p>
      </header>

      {/* Pulse Panel */}
      <section className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6 border mb-6">
        <h2 className="text-xl font-semibold mb-2">System Pulse</h2>
        <div className="flex items-center justify-center gap-3">
          <div className="relative h-4 w-4">
            <div className="absolute inset-0 h-4 w-4 rounded-full bg-gray-300 animate-ping" style={{ animationDuration: '1500ms' }} />
            <div className="absolute inset-1 rounded-full bg-gray-400" />
          </div>
          <span className="text-sm text-gray-600">Active</span>
        </div>
      </section>

      {/* DRN Mini-Timeline */}
      <section className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6 border">
        <h2 className="text-xl font-semibold mb-2">DRN Timeline (Stub)</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>[seed] PresenceShell v0.3 scaffold mounted</li>
          <li>[plan] Insert-01 planned in master canvas</li>
        </ul>
      </section>

      {/* Footer with build seal */}
      <footer className="mt-6 text-xs text-gray-600">
        <span>© IAMAI-MAIND — PresenceShell v0.3 • All signals subject to FIRAT gating.</span>
        <span className="ml-2">Seal: {seal}</span>
      </footer>
    </div>
  );
}

