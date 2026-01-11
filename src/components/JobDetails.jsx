

// src/pages/JobDetails.jsx
import { useLocation, useParams, useNavigate } from "react-router-dom";
import careerService from "../api/careerService";
import { motion } from "framer-motion";
import { ArrowLeft, X, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function JobDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();


  const [job, setJob] = useState(location.state || null);
  const [loading, setLoading] = useState(!location.state);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!job) {
      const fetchJob = async () => {
        try {
          setLoading(true);
          const data = await careerService.getJobById(id);
          setJob(data);
        } catch (err) {
          console.error("Failed to fetch job:", err);
          setError("Job not found or failed to load.");
        } finally {
          setLoading(false);
        }
      };
      fetchJob();
    }
  }, [id, job]);

  console.log("JobDetails render:", { job, loading, error });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">{error || "Job not found"}</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-emerald-600 text-soil-base rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  let deadlineStr = "N/A";
  try {
    const days = Number(job.daysLeft) || 0;
    const deadline = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    if (!isNaN(deadline.getTime())) {
      deadlineStr = deadline.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
  } catch (e) {
    console.error("Date calculation error:", e);
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-emerald-700 mb-6"
        >
          <ArrowLeft size={18} /> Back
        </button>

        {/* Main Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative bg-white/60 backdrop-blur-xl border border-white/40 
          rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
        >
          {/* HEADER */}
          <header className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-emerald-900">
                {job.title}
              </h1>
              <p className="text-gray-700 mt-3 text-lg">{job.desc}</p>

              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="px-4 py-1 bg-white/80 rounded-full border">
                  {job.type}
                </span>
                <span className="px-4 py-1 bg-white/80 rounded-full border">
                  {job.mode}
                </span>
                <span className="px-4 py-1 bg-white/80 rounded-full border">
                  {job.experience}
                </span>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col items-end gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Positions</div>
                <div className="text-2xl font-semibold text-emerald-800">
                  {job.positions}
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-gray-600">Deadline</div>
                <div className="text-xl font-semibold text-red-600">
                  {deadlineStr}
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-gray-600">Location</div>
                <div className="text-md font-medium text-gray-800">
                  {job.location}
                </div>
              </div>
            </div>
          </header>

          {/* CONTENT */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <section>
                <h3 className="text-xl font-semibold text-emerald-700">
                  About the role
                </h3>
                <p className="text-gray-700 mt-2 leading-relaxed">{job.about}</p>
              </section>

              <section className="mt-8">
                <h3 className="text-xl font-semibold text-emerald-700">
                  Responsibilities
                </h3>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                  {job.responsibilities?.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div>
              <section>
                <h3 className="text-xl font-semibold text-emerald-700">
                  Requirements
                </h3>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                  {job.requirements?.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </section>

              <section className="mt-8">
                <h3 className="text-xl font-semibold text-emerald-700">
                  Skills & Tools
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {job.skills?.map((s, i) => (
                    <span
                      key={i}
                      className="text-sm px-4 py-1 bg-white/70 rounded-full border"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {job.tools?.map((t, i) => (
                    <span
                      key={i}
                      className="text-sm px-4 py-1 bg-white/70 rounded-full border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {job.niceToHave && (
                  <>
                    <h4 className="mt-5 font-semibold text-emerald-700">
                      Nice to have
                    </h4>
                    <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                      {job.niceToHave?.map((n, i) => (
                        <li key={i}>{n}</li>
                      ))}
                    </ul>
                  </>
                )}
              </section>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <footer className="mt-10">
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="py-3 bg-emerald-600 text-soil-base rounded-lg   hover:bg-emerald-700"
              >
                Apply Now
              </button>

            </div>
          </footer>
        </motion.div>
      </div>

      {/* APPLY FORM MODAL */}
      {showForm && <ApplyForm job={job} close={() => setShowForm(false)} />}
    </section>
  );
}

// ===============================
// APPLY FORM COMPONENT
// ===============================
function ApplyForm({ job, close }) {
  const [type, setType] = useState("fresher");

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl relative"
      >
        <button onClick={close} className="absolute right-4 top-4 text-gray-600">
          <X size={20} />
        </button>

        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
          Apply for {job.title}
        </h2>

        <form className="space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
            required
          />

          {/* Freshers / Experienced */}
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={type === "fresher"}
                onChange={() => setType("fresher")}
              />
              Fresher
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={type === "experienced"}
                onChange={() => setType("experienced")}
              />
              Experienced
            </label>
          </div>

          {/* Experience Section */}
          {type === "experienced" && (
            <>
              <input
                type="number"
                placeholder="Years of Experience"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Previous Company"
                className="w-full border p-3 rounded-lg"
              />
            </>
          )}

          {/* Salary */}
          <input
            type="text"
            placeholder="Expected Salary"
            className="w-full border p-3 rounded-lg"
          />

          {/* Resume upload */}
          <div className="mt-2">
            <label className="text-sm font-medium">Upload Resume</label>
            <input
              type="file"
              className="w-full border p-3 mt-1 rounded-lg"
              required
            />
          </div>

          <button className="w-full py-3 bg-emerald-600 text-soil-base rounded-lg mt-3 hover:bg-emerald-700">
            Submit Application
          </button>
        </form>
      </motion.div>
    </div>
  );
}
