export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 p-4 md:p-8 font-sans selection:bg-blue-500 selection:text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <header className="border-b border-gray-800 pb-8 mt-4">
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-white">
              Portfolio Project
            </span>
            <span className="text-gray-400 text-sm font-medium">By Akshay Sharma</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            SaaS Revenue & Churn Simulator
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            A predictive BI engine designed to move beyond static reporting. This dashboard models Monthly Recurring Revenue (MRR), simulates price-hike scenarios in real-time using DAX variables, and handles complex overlapping subscription periods.
          </p>
        </header>

        {/* The Business Context */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
            <h3 className="text-blue-400 font-semibold mb-2">The Problem</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Standard operational reports only show historical data. Stakeholders need to know not just how many users churned, but how potential pricing changes will impact future revenue streams based on the current active user base.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
            <h3 className="text-green-400 font-semibold mb-2">The Solution</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I engineered an interactive Power BI model using disconnected Date tables and What-If parameters, allowing business leaders to drag a slider and instantly visualize the financial impact of a 5% to 50% price increase.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
            <h3 className="text-purple-400 font-semibold mb-2">How to Use It</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong>1.</strong> Locate the "Simulate Price Hike (%)" slider at the top.<br/>
              <strong>2.</strong> Drag the slider to the right.<br/>
              <strong>3.</strong> Watch the "Projected MRR" cards and charts recalculate dynamically across the entire data model.
            </p>
          </div>
        </section>

        {/* Power BI Embed Container */}
        <div className="bg-gray-900 p-2 md:p-3 rounded-2xl shadow-2xl border border-gray-800">
          <div className="relative w-full overflow-hidden rounded-xl bg-gray-950" style={{ paddingTop: '56.25%' }}>
            
            {/* REPLACE THIS SRC WITH YOUR PUBLIC /view?r= LINK OR YOUTUBE LINK */}
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              title="SaaS MRR Simulator" 
              src="YOUR_PUBLIC_POWER_BI_LINK_HERE" 
              frameBorder="0" 
              allowFullScreen={true}>
            </iframe>

          </div>
        </div>

        {/* Engineering Breakdown */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-10 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">Under the Hood: Technical Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                Data Modeling & ETL
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-blue-500 mr-2">▹</span> <strong>Power Query (M):</strong> Executed rigorous data cleansing, normalizing nested dates and handling null end-dates for active subscribers.</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">▹</span> <strong>Star Schema:</strong> Designed a highly optimized relational model to ensure the UI remains performant during complex cross-filtering.</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">▹</span> <strong>Disconnected Dimensions:</strong> Built a custom, disconnected Calendar table to evaluate overlapping subscriber start/end dates rather than relying on static 1-to-many relationships.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                Advanced DAX Implementation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-purple-500 mr-2">▹</span> <strong>Context Modification:</strong> Utilized <code className="bg-gray-800 text-gray-100 px-1 rounded border border-gray-700">CALCULATE</code> and <code className="bg-gray-800 text-gray-100 px-1 rounded border border-gray-700">FILTER</code> to dynamically alter row and filter contexts for point-in-time revenue snapshots.</li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">▹</span> <strong>Predictive Variables:</strong> Bound frontend UI slicers to backend DAX variables to inject user-defined percentage hikes directly into the MRR equations.</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}