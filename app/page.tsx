export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-8 border-b border-gray-700 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            LogicLooms Lab: SaaS Revenue Engine
          </h1>
          <p className="text-gray-400 text-lg">
            Simulating Monthly Recurring Revenue (MRR) and Churn with dynamic DAX What-If Parameters.
          </p>
        </header>

        {/* Power BI Embed Container */}
        <div className="bg-gray-800 p-2 md:p-4 rounded-xl shadow-2xl border border-gray-700">
          {/* This wrapper forces the iframe to maintain a 16:9 aspect ratio and be responsive */}
          <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              title="SaaS MRR & Churn Simulator" 
              src="https://app.powerbi.com/reportEmbed?reportId=2b052eb6-21fd-45de-8cf2-582d943c83a7&autoAuth=true&embeddedDemo=true" 
              frameBorder="0" 
              allowFullScreen={true}>
            </iframe>
          </div>
        </div>

        {/* Technical Architecture Notes (The Interview Flex) */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Architecture & Data Modeling</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li><strong>Disconnected Date Dimension:</strong> Built for dynamic overlap evaluation rather than static relationships.</li>
              <li><strong>Star Schema:</strong> Optimized for high-performance cross-filtering and scalability.</li>
              <li><strong>ETL Pipeline:</strong> Managed via Power Query (M) for robust data cleaning and type formatting.</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Advanced DAX Implementation</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li><strong>Active Subscriptions:</strong> Calculated using multi-condition <code className="bg-gray-700 px-1 rounded text-pink-300">FILTER</code> contexts.</li>
              <li><strong>Point-in-Time MRR:</strong> Implemented <code className="bg-gray-700 px-1 rounded text-pink-300">CALCULATE</code> for accurate revenue snapshots.</li>
              <li><strong>Predictive Analytics:</strong> Deployed custom variables for What-If pricing simulations.</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}