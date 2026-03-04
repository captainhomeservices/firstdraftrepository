import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const LakeAustinWeedsPage = () => {
  const canonicalUrl = 'https://austinlakemanagement.com/lake-austin-weeds';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What weeds grow in Lake Austin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The dominant aquatic weed in Lake Austin is Hydrilla verticillata, a state-listed invasive plant managed by TPWD. Other species include Eurasian watermilfoil, filamentous green algae (which colonizes hydrilla canopy in spring), and occasional coontail. Hydrilla is the most problematic due to its rapid growth rate and dense canopy formation."
        }
      },
      {
        "@type": "Question",
        "name": "Is Lake Austin hydrilla dangerous?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hydrilla itself is not toxic to humans or animals, but it creates safety hazards for swimmers and boaters by forming dense mats that can entangle swimmers and foul boat propellers. In severe infestations, hydrilla mats can deplete oxygen levels, harming fish populations."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit to remove weeds from Lake Austin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Aquatic vegetation removal on Lake Austin requires a permit from Texas Parks and Wildlife Department (TPWD) and must comply with LCRA Aquatic Vegetation Management Plans. Property owners who hire a contractor should verify the contractor holds current permits. Unpermitted removal can result in fines."
        }
      },
      {
        "@type": "Question",
        "name": "Why does Lake Austin hydrilla keep coming back?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hydrilla regrows from underground tubers that are unaffected by stem cutting. One square meter of sediment can contain thousands of viable tubers. Cutting above the lake bottom provides temporary relief but does not address the root system. Root-based removal combined with biomass export is the most effective approach for reducing long-term regrowth."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best time of year to remove Lake Austin weeds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Late winter through early spring (January–April) is the most efficient window. Hydrilla canopy is less dense, water clarity is better, and removing plants before summer regrowth reduces peak-season density. TPWD and LCRA permit applications should be submitted at least 4–6 weeks before planned treatment."
        }
      },
      {
        "@type": "Question",
        "name": "What is the green fuzzy growth on Lake Austin weeds in spring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The bright green fibrous material growing on Lake Austin hydrilla in late winter and early spring is filamentous green algae (FGA) — species such as Spirogyra or Cladophora. It is not true moss. FGA colonizes hydrilla and other submerged surfaces when water clarity improves and nutrients become available as the hydrilla canopy thins during cold months."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Lake Austin Weeds: Complete Guide to Identification, Removal & Management"
        description="Everything you need to know about Lake Austin weeds — hydrilla, algae, milfoil — plus removal options, contractor checklist, permitting, and seasonal timing for Highland Lakes property owners."
        keywords="Lake Austin weeds, Lake Austin hydrilla, aquatic weed removal Lake Austin, Lake Austin hydrilla removal, Austin lake weed management, filamentous algae Lake Austin, Highland Lakes invasive weeds"
        canonicalUrl={canonicalUrl}
        ogType="website"
        structuredData={faqSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 to-blue-800 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-teal-500/30 text-teal-100 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              Highland Lakes Resource
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Lake Austin Weeds
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8 leading-relaxed">
              A complete guide to what grows in Lake Austin, why it spreads, and how to manage it — from identification through permitted removal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/lake-austin-hydrilla-removal"
                onClick={scrollToTop}
                className="inline-flex items-center bg-white text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                Hydrilla Removal Service
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-flex items-center bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 border border-teal-400"
              >
                Get a Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 border-b border-gray-200 py-6 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <a href="#what-weeds-grow" className="text-teal-600 hover:text-teal-700 transition-colors">What Weeds Grow</a>
            <a href="#hydrilla" className="text-teal-600 hover:text-teal-700 transition-colors">Hydrilla</a>
            <a href="#algae-on-hydrilla" className="text-teal-600 hover:text-teal-700 transition-colors">Algae on Hydrilla</a>
            <a href="#removal-options" className="text-teal-600 hover:text-teal-700 transition-colors">Removal Options</a>
            <a href="#hiring-a-contractor" className="text-teal-600 hover:text-teal-700 transition-colors">Hiring a Contractor</a>
            <a href="#faq" className="text-teal-600 hover:text-teal-700 transition-colors">FAQ</a>
          </nav>
        </div>
      </section>

      {/* What Weeds Grow in Lake Austin */}
      <section id="what-weeds-grow" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Weeds Grow in Lake Austin?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Lake Austin hosts several invasive and nuisance aquatic plant species that affect swimming, boating, fishing, and waterfront aesthetics. The primary species are listed below in order of ecological impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-teal-900 mb-2">Hydrilla</h3>
              <p className="text-teal-800 text-sm leading-relaxed">
                <em>Hydrilla verticillata</em> — the dominant invasive. Forms dense canopy from surface to 20+ feet. State-listed noxious weed managed by TPWD. Primary target for removal programs.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Filamentous Green Algae</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Bright green fibrous growth that colonizes hydrilla canopy in late winter and spring. Species include <em>Spirogyra</em> and <em>Cladophora</em>. Not toxic but fuels hydrilla regrowth cycles.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-900 mb-2">Eurasian Watermilfoil</h3>
              <p className="text-green-800 text-sm leading-relaxed">
                <em>Myriophyllum spicatum</em> — feathery-leaved invasive found in slower coves. Less dominant than hydrilla on Lake Austin but present and managed under the same permit framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hydrilla Overview */}
      <section id="hydrilla" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hydrilla: Lake Austin's Most Invasive Weed
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                <strong>Lake Austin hydrilla</strong> arrived in Central Texas through the aquarium trade in the 1980s and 1990s. Without natural predators, it colonized the Highland Lakes at extraordinary speed, exploiting the clear water and nutrient-rich conditions created by upstream development and LCRA water management.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                What makes hydrilla uniquely difficult to control is its underground tuber system. A single square meter of lake sediment can contain thousands of viable tubers, each capable of producing a new plant. This is why approaches that only cut stems above the lake bottom provide short-term relief at best — the root system remains fully intact.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Hydrilla Facts for Lake Austin Property Owners</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-1">•</span><span>Can grow several inches per day in warm Texas summers</span></li>
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-1">•</span><span>Canopy can reach the surface from 15–20 feet of water</span></li>
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-1">•</span><span>A single fragment can re-root and establish a new colony</span></li>
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-1">•</span><span>Removal requires TPWD and LCRA permits on Lake Austin</span></li>
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-1">•</span><span>Root-based extraction reduces long-term regrowth; cutting alone does not</span></li>
              </ul>
            </div>
            <div>
              <img
                src="/Copy of Untitled.jpg"
                alt="Dense Lake Austin hydrilla canopy before removal"
                className="rounded-xl shadow-lg w-full"
              />
              <p className="text-sm text-gray-500 mt-3 text-center">Dense Lake Austin hydrilla canopy — typical late spring condition</p>
            </div>
          </div>
          <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Reading</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog/lake-austin-hydrilla-management-methods"
                  onClick={scrollToTop}
                  className="text-teal-600 hover:text-teal-700 font-medium underline decoration-2 underline-offset-2 transition-colors"
                >
                  Lake Austin Hydrilla Management Methods: A Historical Perspective &rarr;
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/understanding-hydrilla-most-invasive-aquatic-weed-austin-lakes"
                  onClick={scrollToTop}
                  className="text-teal-600 hover:text-teal-700 font-medium underline decoration-2 underline-offset-2 transition-colors"
                >
                  Understanding Hydrilla: The Most Invasive Aquatic Weed in Austin Lakes &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Algae on Hydrilla */}
      <section id="algae-on-hydrilla" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Algae on Lake Austin Hydrilla: The Spring Complication
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Every late winter, a second organism colonizes Lake Austin hydrilla: filamentous green algae. The bright green fibrous strands visible from docks in February and March are not moss — they are species such as <em>Spirogyra</em> or <em>Cladophora</em> that exploit the cleared water and available nutrients when the hydrilla canopy thins during cold months.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            This algae-hydrilla interaction matters beyond aesthetics. As algae mats die back in warmer temperatures, they decompose and release nitrogen and phosphorus into the water — effectively fertilizing hydrilla regrowth. Removal programs that address hydrilla but leave algae biomass in place can unintentionally accelerate the next growth cycle.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-8">
            <p className="text-blue-900 text-lg font-medium">
              The most effective approach removes both hydrilla and filamentous algae simultaneously, exporting all biomass from the lake rather than leaving it to decompose.
            </p>
          </div>
          <Link
            to="/blog/lake-austin-hydrilla-filamentous-algae-spring-guide"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <BookOpen className="h-5 w-5" />
            Full Guide: Lake Austin Hydrilla & Filamentous Algae
          </Link>
        </div>
      </section>

      {/* Weed Removal Options */}
      <section id="removal-options" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Lake Austin Weed Removal Options
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Property owners on Lake Austin have several options for managing aquatic vegetation. All methods require TPWD and LCRA permits. The right approach depends on the size of the infestation, desired longevity of results, and budget.
          </p>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Manual Root Removal</h3>
                  <span className="shrink-0 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">Most Effective</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hand extraction of hydrilla including root crowns and accessible tubers using approved tools. All biomass is removed from the lake. Interrupts the nutrient recycling cycle that drives regrowth. Captain Home Services' primary method.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="font-semibold text-green-700">Strengths:</span> Addresses root system, exports biomass, no chemicals, precision targeting</div>
                  <div><span className="font-semibold text-red-600">Limitations:</span> Labor-intensive, best for residential-scale properties</div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Benthic Barriers</h3>
                  <span className="shrink-0 bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-1 rounded-full">Long-Term Prevention</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lake bottom blankets installed over treated areas to block light penetration and prevent new growth. Most effective when applied after root removal. Ideal for swim areas, boat slips, and high-priority zones.
                </p>
                <Link
                  to="/benthic-barriers"
                  onClick={scrollToTop}
                  className="text-teal-600 hover:text-teal-700 font-medium underline decoration-2 underline-offset-2 transition-colors text-sm"
                >
                  Learn about benthic barrier installation &rarr;
                </Link>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Mechanical Cutting</h3>
                  <span className="shrink-0 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-1 rounded-full">Short-Term Relief</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Cutting hydrilla stems above the lake bottom. Provides temporary aesthetic improvement and swim-area clearance. Does not remove root systems or tubers; regrowth typically resumes within weeks during warm months. Some methods risk fragment spread.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring a Contractor */}
      <section id="hiring-a-contractor" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hiring a Lake Austin Hydrilla Contractor
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Not all aquatic weed services are equal. Use these questions to evaluate any contractor before hiring for <strong>Lake Austin hydrilla removal</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              { q: "Are you TPWD and LCRA permitted for Lake Austin?", why: "Unpermitted work is illegal and exposes the property owner to fines." },
              { q: "Do you remove biomass from the lake?", why: "Material left to decompose releases nutrients that fuel regrowth." },
              { q: "Do you perform root-level removal or just cut above the sediment?", why: "Root extraction is the only method that addresses tubers." },
              { q: "Do you treat filamentous algae alongside hydrilla?", why: "Algae removal reduces the nutrient recycling that drives spring regrowth." },
              { q: "Can you show photos of previous Lake Austin work?", why: "Underwater photos confirm removal depth and quality." },
              { q: "What does your permit specifically cover?", why: "Verify methods, treatment area, and any restrictions for your property." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                <p className="text-sm text-gray-600">{item.why}</p>
              </div>
            ))}
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-teal-900 mb-2">Captain Home Services</h3>
            <p className="text-teal-800 leading-relaxed mb-4">
              Fully permitted for Lake Austin hydrilla removal under TPWD and LCRA. Root-based extraction with full biomass export. No herbicides. Free waterfront assessment for Lake Austin, Lake Travis, and Highland Lakes properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/lake-austin-hydrilla-removal"
                onClick={scrollToTop}
                className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors duration-200 text-sm"
              >
                Hydrilla Removal Service
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-flex items-center bg-white hover:bg-teal-50 text-teal-700 border border-teal-300 px-5 py-2.5 rounded-lg font-semibold transition-colors duration-200 text-sm"
              >
                Schedule Free Assessment
              </Link>
              <Link
                to="/permitting"
                onClick={scrollToTop}
                className="inline-flex items-center text-teal-600 hover:text-teal-700 px-5 py-2.5 font-medium transition-colors duration-200 text-sm underline decoration-2 underline-offset-2"
              >
                Permitting information &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Frequently Asked Questions: Lake Austin Weeds
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What weeds grow in Lake Austin?",
                a: "The dominant aquatic weed is Hydrilla verticillata, a state-listed invasive plant actively managed by TPWD. Eurasian watermilfoil is present in some coves. In late winter and spring, filamentous green algae colonizes the hydrilla canopy, creating a compounding management challenge."
              },
              {
                q: "Is Lake Austin hydrilla dangerous to swimmers or pets?",
                a: "Hydrilla itself is not toxic, but dense mats can entangle swimmers. More serious risk comes from cyanobacteria (blue-green algae) blooms, which are separate organisms and can be toxic. Monitor TPWD's Harmful Algal Bloom page for current conditions. Filamentous green algae is generally not toxic but pets should not drink from areas with visible algae mats."
              },
              {
                q: "Do I need a permit to remove weeds from Lake Austin?",
                a: (<>Yes. Aquatic vegetation removal on Lake Austin requires a permit from TPWD and compliance with LCRA Aquatic Vegetation Management Plans. Property owners should verify contractors hold current permits before any work begins. See our <Link to="/permitting" onClick={scrollToTop} className="text-teal-600 hover:text-teal-700 underline font-medium">permitting page</Link> for details.</>)
              },
              {
                q: "Why does Lake Austin hydrilla keep coming back after cutting?",
                a: "Cutting removes visible canopy but leaves the tuber system intact. One square meter of lake sediment can contain thousands of viable tubers. Cut material left in the lake also decomposes and releases nutrients that fuel regrowth. Root-based removal combined with biomass export is significantly more durable."
              },
              {
                q: "What is the green fuzzy growth on Lake Austin weeds in spring?",
                a: (<>That fibrous bright green material is filamentous green algae — species like Spirogyra or Cladophora. It is not toxic but plays a role in hydrilla regrowth by recycling nutrients back into the water. <Link to="/blog/lake-austin-hydrilla-filamentous-algae-spring-guide" onClick={scrollToTop} className="text-teal-600 hover:text-teal-700 underline font-medium">Read the full spring guide &rarr;</Link></>)
              },
              {
                q: "What is the best time of year to remove Lake Austin weeds?",
                a: "Late winter through early spring (January–April) is the most efficient window. Hydrilla canopy is less dense, water clarity is better, and early removal reduces summer density. TPWD and LCRA permit applications should be initiated 4–6 weeks before planned treatment."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                to: "/blog/lake-austin-hydrilla-filamentous-algae-spring-guide",
                label: "Lake Austin Hydrilla & Filamentous Algae: Spring 2025 Guide",
                tag: "Hydrilla Management"
              },
              {
                to: "/blog/lake-austin-hydrilla-management-methods",
                label: "Lake Austin Hydrilla Management Methods: Historical Perspective",
                tag: "Hydrilla Management"
              },
              {
                to: "/blog/understanding-hydrilla-most-invasive-aquatic-weed-austin-lakes",
                label: "Understanding Hydrilla: The Most Invasive Aquatic Weed in Austin Lakes",
                tag: "Education"
              },
              {
                to: "/blog/navigating-permitting-aquatic-vegetation-removal-texas",
                label: "Navigating Permitting for Aquatic Vegetation Removal in Texas",
                tag: "Permitting"
              },
              {
                to: "/blog/benefits-manual-aquatic-weed-removal-sustainable-approach",
                label: "The Benefits of Manual Aquatic Weed Removal",
                tag: "Removal Methods"
              },
              {
                to: "/blog/lake-weed-removal-faq",
                label: "Lake Weed Removal FAQ",
                tag: "FAQ"
              }
            ].map((item, i) => (
              <Link
                key={i}
                to={item.to}
                onClick={scrollToTop}
                className="group bg-gray-50 hover:bg-teal-50 border border-gray-200 hover:border-teal-300 rounded-xl p-5 transition-all duration-200"
              >
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide block mb-2">{item.tag}</span>
                <span className="text-gray-900 group-hover:text-teal-800 font-medium leading-snug flex items-start gap-2">
                  {item.label}
                  <ExternalLink className="h-4 w-4 shrink-0 mt-0.5 opacity-50 group-hover:opacity-100" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Reclaim Your Waterfront?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Captain Home Services provides fully permitted, root-based Lake Austin hydrilla removal for residential properties on Lake Austin, Lake Travis, and the Highland Lakes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:scale-105"
            >
              Get Free Waterfront Assessment
            </Link>
            <Link
              to="/lake-austin-hydrilla-removal"
              onClick={scrollToTop}
              className="bg-teal-700 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border border-teal-500"
            >
              View Hydrilla Removal Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LakeAustinWeedsPage;
