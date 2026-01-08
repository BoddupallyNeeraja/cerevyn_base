import React, { useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Simple heuristics to infer type and details from product name
function inferProductInfo(name) {
  const lower = name.toLowerCase();
  let type = "Biofertilizer";
  let overview = "A biological crop input designed to improve plant health and yield.";
  let howItWorks = "Introduces beneficial microbes or nutrients that support natural plant processes.";
  let whyChoose = "Sustainable, safe, and effective for improving crop performance and soil health.";
  let benefits = ["Improves crop vigor", "Enhances nutrient availability", "Promotes soil health"];
  let dosage = ["Apply as per crop stage; typically 500ml–1L per acre in water."];
  let packSizes = ["1L", "5L", "20L"];

  if (lower.includes("nitro") || lower.includes("nitrobase")) {
    type = "Nitrogen-fixing Biofertilizer";
    overview = "Liquid formulation with nitrogen-fixing bacteria that supply plants with biologically-available nitrogen.";
    howItWorks = "Beneficial microbes colonize roots, fix atmospheric nitrogen, and improve root health and nutrient uptake.";
    whyChoose = "Reduces chemical nitrogen inputs while maintaining yield; ideal for sustainable farming.";
    benefits = ["Natural nitrogen fixation", "Improved leaf color and growth", "Reduced fertilizer costs"];
    dosage = ["Seedling stage: 200–500ml/acre", "Vegetative stage: 500ml–1L/acre"];
    packSizes = ["500ml", "1L", "5L"];
  } else if (lower.includes("carbo") || lower.includes("carbom")) {
    type = "Carbon-based Soil Conditioner";
    overview = "Organic carbon product that improves soil structure and microbial activity.";
    howItWorks = "Adds organic carbon and humic substances that enhance microbial life and water retention.";
    whyChoose = "Boosts long-term soil fertility and supports steady crop growth.";
    benefits = ["Better soil aggregation", "Increased water retention", "Supports beneficial microbes"];
    dosage = ["Apply 1–2L per acre as soil drench during field preparation"];
    packSizes = ["1L", "5L", "25L"];
  } else if (lower.includes("hydro") || lower.includes("hydromin")) {
    type = "Micronutrient Blend";
    overview = "Balanced micronutrient formula to correct trace element deficiencies.";
    howItWorks = "Provides chelated microelements (Zn, Fe, Mn) for immediate plant uptake.";
    whyChoose = "Quick correction of deficiencies and improved fruit/flower quality.";
    benefits = ["Corrects micronutrient deficiencies", "Improves flowering and fruit set"];
    dosage = ["Foliar spray: 200–400ml per 100L water"];
    packSizes = ["250ml", "1L"];
  } else if (lower.includes("copious") || lower.includes("copious")) {
    type = "NPK Blend";
    overview = "Balanced NPK fertilizer blend for general crop nutrition.";
    howItWorks = "Supplies primary macronutrients to support growth and yield.";
    whyChoose = "Straightforward nutrient supply for crops with predictable response.";
    benefits = ["Balanced nutrition", "Boosts growth and yield"];
    dosage = ["Apply according to soil test; typical foliar: 500g–1kg per acre"];
    packSizes = ["1kg", "5kg", "25kg"];
  }

  return { type, overview, howItWorks, whyChoose, benefits, dosage, packSizes };
}

export default function ProductAutoDetails() {
  const { slug } = useParams();
  // Convert slug back to a readable name
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const info = inferProductInfo(name);

  // Read image (and optional displayName) passed from the product grid via Link state
  const location = useLocation();
  const image = location.state?.image || null;
  const displayName = location.state?.displayName || name;

  // Toggle to show/hide small details under the image
  const [showImageDetails, setShowImageDetails] = useState(false);

  return (
    <div className="min-h-screen bg-soil-light">
      <div className="max-w-7xl mx-auto p-6">
        <Link to="/product" className="inline-flex items-center gap-2 text-primary-700 font-semibold mb-4 hover:underline">
          <ArrowLeft size={18} /> Back to Products
        </Link>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-bold tracking-wide mb-4">{info.type}</div>
              <h1 className="text-4xl font-extrabold mb-4">{name}</h1>
              <p className="text-lg text-text-light mb-6">{info.overview}</p>

              <h3 className="text-xl font-bold mb-2">How it works</h3>
              <p className="text-text-light mb-4">{info.howItWorks}</p>

              <h3 className="text-xl font-bold mb-2">Why choose {name}?</h3>
              <p className="text-text-light mb-4">{info.whyChoose}</p>

              <h3 className="text-xl font-bold mb-2">Key benefits</h3>
              <ul className="list-disc pl-5 text-text-light mb-6">
                {info.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>

              {/* Quick details (Suggested dosage & Available Packs) moved under the product image for better visual balance on wide screens */}
            </div>

            <div className="w-full md:w-80 flex-shrink-0 flex flex-col">
              <div
                className="bg-gray-50 rounded-md flex items-center justify-center border border-gray-100 overflow-hidden cursor-pointer relative min-h-[240px]"
                role="button"
                tabIndex={0}
                onClick={() => setShowImageDetails((s) => !s)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setShowImageDetails((s) => !s); }}
              >
                {image ? (
                  <img src={image} alt={displayName} className="w-full h-full object-contain" />
                ) : (
                  <div className="text-sm text-gray-400">Product Image</div>
                )} 
              </div>

              {showImageDetails && (
                <div className="mt-4 bg-white rounded-2xl p-4 border border-primary-100 shadow-sm">
                  <h4 className="font-bold text-primary-700 mb-2">Quick overview</h4>
                  <p className="text-text-light text-sm">{info.overview ? info.overview : 'No additional details available.'}</p>
                  <div className="mt-3 text-xs text-text-muted">Full dosage & pack information is available in the Suggested Dosage section.</div>
                </div>
              )}

              <div className="mt-4 md:mt-auto space-y-4">
                <div className="bg-white rounded-lg p-4 border border-primary-100 shadow-sm">
                  <h4 className="font-bold text-primary-700 mb-2">Suggested dosage</h4>
                  <ul className="list-disc pl-5 text-text-light">
                    {info.dosage.map((d, i) => <li key={i} className="text-sm">{d}</li>)}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-primary-100 shadow-sm">
                  <h4 className="font-bold text-primary-700 mb-2">Available Packs</h4>
                  <div className="flex gap-3">
                    {info.packSizes.map((p, i) => (
                      <div key={i} className="px-3 py-1 bg-white rounded-lg border border-primary-100 text-sm font-semibold">{p}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
