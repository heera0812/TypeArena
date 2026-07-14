"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, FileSpreadsheet, ExternalLink, Play, Eye, Trophy } from "lucide-react";
import { API_URL } from "@/lib/api";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("competitions");

  const [competitions, setCompetitions] = useState<any[]>([]);
  const [paragraphs, setParagraphs] = useState<any[]>([]);

  const [showCreate, setShowCreate] = useState(false);
  const [showAddParagraph, setShowAddParagraph] = useState(false);
  const [editingParagraph, setEditingParagraph] = useState<any>(null);

  const [newComp, setNewComp] = useState({
    name: "", gameMode: "RACE", duration: 60, language: "EN", difficulty: "EASY", paragraphId: ""
  });
  const [newParagraph, setNewParagraph] = useState({ title: "", content: "", language: "EN", difficulty: "EASY" });

  const getHeaders = () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("typearena_admin_token") : null;
    return {
      "Content-Type": "application/json",
      ...(token ? { "Authorization": `Bearer ${token}` } : {})
    };
  };

  useEffect(() => {
    fetchCompetitions();
    fetchParagraphs();
  }, []);

  const fetchCompetitions = async () => {
    try {
      const res = await fetch(`${API_URL}/api/competitions`, {
        headers: getHeaders(),
        credentials: "include"
      });
      if (res.status === 401) { router.push("/admin"); return; }
      const data = await res.json();
      if (Array.isArray(data)) setCompetitions(data);
    } catch (e) { console.error(e); }
  };

  const fetchParagraphs = async () => {
    try {
      const res = await fetch(`${API_URL}/api/paragraphs`, {
        headers: getHeaders(),
        credentials: "include"
      });
      const data = await res.json();
      if (Array.isArray(data)) setParagraphs(data);
    } catch (e) { console.error(e); }
  };

  const createCompetition = async () => {
    if (!newComp.name || !newComp.paragraphId) {
      alert("Please fill in competition name and select a paragraph.");
      return;
    }
    try {
      const res = await fetch(`${API_URL}/api/competitions`, {
        method: "POST", headers: getHeaders(), credentials: "include",
        body: JSON.stringify(newComp)
      });
      if (!res.ok) {
        const err = await res.json();
        alert("Failed: " + (err.error || "Unknown error") + "\n" + (err.details || ""));
        return;
      }
      setShowCreate(false);
      setNewComp({ name: "", gameMode: "RACE", duration: 60, language: "EN", difficulty: "EASY", paragraphId: "" });
      fetchCompetitions();
    } catch (e) { console.error(e); }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`${API_URL}/api/competitions/${id}/status`, {
        method: "PATCH", headers: getHeaders(), credentials: "include",
        body: JSON.stringify({ status })
      });
      if (res.ok && status === "LOBBY_OPEN") {
        router.push(`/lobby?competitionId=${id}&spectate=true`);
      } else {
        fetchCompetitions();
      }
    } catch (e) { console.error(e); }
  };

  const addParagraph = async () => {
    if (!newParagraph.title || !newParagraph.content) {
      alert("Please provide title and content.");
      return;
    }
    try {
      const res = await fetch(`${API_URL}/api/paragraphs`, {
        method: "POST", headers: getHeaders(), credentials: "include",
        body: JSON.stringify(newParagraph)
      });
      if (!res.ok) { const err = await res.json(); alert("Failed: " + err.error); return; }
      setShowAddParagraph(false);
      setNewParagraph({ title: "", content: "", language: "EN", difficulty: "EASY" });
      fetchParagraphs();
    } catch (e) { console.error(e); }
  };

  const saveParagraphEdit = async () => {
    if (!editingParagraph) return;
    try {
      await fetch(`${API_URL}/api/paragraphs/${editingParagraph.id}`, {
        method: "PATCH", headers: getHeaders(), credentials: "include",
        body: JSON.stringify({
          title: editingParagraph.title,
          content: editingParagraph.content,
          language: editingParagraph.language,
          difficulty: editingParagraph.difficulty
        })
      });
      setEditingParagraph(null);
      fetchParagraphs();
    } catch (e) { console.error(e); }
  };

  const deleteParagraph = async (id: string) => {
    if (!confirm("Delete this paragraph? This cannot be undone.")) return;
    try {
      await fetch(`${API_URL}/api/paragraphs/${id}`, {
        method: "DELETE", headers: getHeaders(), credentials: "include"
      });
      fetchParagraphs();
    } catch (e) { console.error(e); }
  };

  const statusBadge = (status: string) => {
    const map: Record<string, string> = {
      DRAFT: "bg-gray-100 text-gray-600",
      LOBBY_OPEN: "bg-blue-100 text-blue-700",
      COUNTDOWN: "bg-yellow-100 text-yellow-700",
      ACTIVE: "bg-green-100 text-green-700",
      PAUSED: "bg-orange-100 text-orange-700",
      FINISHED: "bg-purple-100 text-purple-700",
      CANCELLED: "bg-red-100 text-red-700",
    };
    return (
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${map[status] || "bg-gray-100 text-gray-600"}`}>
        {status.replace("_", " ")}
      </span>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto min-h-[85vh] flex flex-col pt-8 px-4">

      {/* Header */}
      <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-wide">Competition Control</h1>
          <p className="text-white/50 text-sm mt-1">Manage competitions, lobbies, and paragraphs.</p>
        </div>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="px-6 py-2 text-sm font-bold bg-[#FFB800] hover:bg-[#F0AD00] text-gray-900 rounded-md shadow-md transition-transform active:scale-95"
        >
          + Create Competition
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        {["competitions", "paragraphs"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 text-sm font-bold rounded-md transition-colors capitalize ${activeTab === tab ? "bg-white text-[#075EA8]" : "text-white hover:bg-white/10"}`}
          >
            {tab === "competitions" ? "🏁 Competitions" : "📝 Paragraph Library"}
          </button>
        ))}
      </div>

      <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>

        {/* === COMPETITIONS TAB === */}
        {activeTab === "competitions" && (
          <div className="space-y-6">

            {/* Create Form */}
            {showCreate && (
              <div className="bg-white rounded-xl p-6 shadow-xl mb-6 flex flex-col gap-4 border-2 border-[#075EA8]/20">
                <h3 className="text-xl font-bold text-gray-900">Create New Competition</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-black">
                  <input type="text" placeholder="Name (e.g. Finals 2025)" className="border p-2 rounded col-span-2 md:col-span-3"
                    value={newComp.name} onChange={e => setNewComp({ ...newComp, name: e.target.value })} />

                  <select className="border p-2 rounded" value={newComp.gameMode} onChange={e => setNewComp({ ...newComp, gameMode: e.target.value })}>
                    <option value="RACE">🏁 Race Mode</option>
                    <option value="SPRINT">⚡ Speed Sprint</option>
                    <option value="ACCURACY">🎯 Accuracy Challenge</option>
                  </select>

                  <select className="border p-2 rounded" value={newComp.language} onChange={e => setNewComp({ ...newComp, language: e.target.value })}>
                    <option value="EN">🇬🇧 English</option>
                    <option value="HI">🇮🇳 Hindi (Unicode)</option>
                  </select>

                  <select className="border p-2 rounded" value={newComp.difficulty} onChange={e => setNewComp({ ...newComp, difficulty: e.target.value })}>
                    <option value="EASY">Easy</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HARD">Hard</option>
                  </select>

                  <select className="border p-2 rounded" value={newComp.duration} onChange={e => setNewComp({ ...newComp, duration: parseInt(e.target.value) })}>
                    <option value={45}>45 Seconds</option>
                    <option value={60}>1 Minute</option>
                    <option value={180}>3 Minutes</option>
                    <option value={300}>5 Minutes</option>
                  </select>

                  <select className="border p-2 rounded col-span-2" value={newComp.paragraphId} onChange={e => setNewComp({ ...newComp, paragraphId: e.target.value })}>
                    <option value="">— Select Paragraph —</option>
                    {paragraphs.filter(p => p.language === newComp.language).map(p => (
                      <option key={p.id} value={p.id}>{p.title} ({p.difficulty}) — {p.content.substring(0, 40)}…</option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-2 justify-end">
                  <button onClick={() => setShowCreate(false)} className="px-4 py-2 bg-gray-200 text-black rounded font-bold">Cancel</button>
                  <button onClick={createCompetition} className="px-6 py-2 bg-[#FFB800] text-black rounded font-bold">Create</button>
                </div>
              </div>
            )}

            {competitions.length === 0 && !showCreate && (
              <div className="bg-white/5 p-12 rounded-xl text-center text-white/40">
                No competitions yet. Click "+ Create Competition" to start.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {competitions.map(comp => (
                <div key={comp.id} className="bg-white rounded-xl p-6 shadow-xl flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{comp.name}</h3>
                    {statusBadge(comp.status)}
                  </div>
                  <p className="text-xs text-gray-500 font-mono mb-1">
                    CODE: <span className="font-black text-gray-800">{comp.roomCode}</span> · {comp.gameMode} · {comp.language} · {comp.duration}s
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Created: {new Date(comp.createdAt).toLocaleString()}</p>

                  <div className="mt-auto flex flex-wrap gap-2 border-t border-gray-100 pt-4">
                    {comp.status === "DRAFT" && (
                      <button onClick={() => updateStatus(comp.id, "LOBBY_OPEN")} className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg text-sm">
                        Open Lobby
                      </button>
                    )}
                    {comp.status === "LOBBY_OPEN" && (
                      <a href={`/lobby?competitionId=${comp.id}&spectate=true`} className="flex-1 text-center bg-[#075EA8] hover:bg-[#044075] text-white font-bold py-2 rounded-lg text-sm flex items-center justify-center gap-1">
                        <Play className="w-4 h-4" /> Host Match
                      </a>
                    )}
                    {(comp.status === "ACTIVE" || comp.status === "COUNTDOWN" || comp.status === "PAUSED") && (
                      <a href={`/lobby?competitionId=${comp.id}&spectate=true`} className="flex-1 text-center bg-[#FFB800] hover:bg-[#F0AD00] text-gray-900 font-bold py-2 rounded-lg text-sm flex items-center justify-center gap-1">
                        <Eye className="w-4 h-4" /> Monitor Live
                      </a>
                    )}
                    {comp.status === "FINISHED" && (
                      <>
                        <a href={`/results?competitionId=${comp.id}`} className="flex-1 text-center bg-[#075EA8] text-white font-bold py-2 rounded-lg text-sm flex items-center justify-center gap-1">
                          <Trophy className="w-4 h-4" /> Results
                        </a>
                        <a
                          href={`${API_URL}/api/reports/excel?competitionId=${comp.id}`}
                          target="_blank"
                          className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm flex items-center gap-1"
                        >
                          <FileSpreadsheet className="w-4 h-4" /> Excel
                        </a>
                      </>
                    )}
                    {/* Room code share */}
                    {comp.status !== "FINISHED" && comp.status !== "DRAFT" && (
                      <a
                        href={`/register`}
                        target="_blank"
                        className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" /> Player Link
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === PARAGRAPHS TAB === */}
        {activeTab === "paragraphs" && (
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900">Available Paragraphs ({paragraphs.length})</h3>
              <button onClick={() => setShowAddParagraph(!showAddParagraph)} className="text-sm font-bold text-[#075EA8] hover:underline">
                + Add New
              </button>
            </div>

            {/* Add form */}
            {showAddParagraph && !editingParagraph && (
              <div className="p-6 border-b border-gray-100 bg-blue-50 flex flex-col gap-3 text-black">
                <h4 className="font-bold text-gray-800">Add New Paragraph</h4>
                <input className="w-full p-2 border rounded" placeholder="Title (e.g. English Hard 2)"
                  value={newParagraph.title} onChange={e => setNewParagraph({ ...newParagraph, title: e.target.value })} />
                <textarea className="w-full p-3 border rounded focus:ring-2 focus:ring-[#075EA8] focus:outline-none" rows={4}
                  placeholder="Paste paragraph text here..."
                  value={newParagraph.content} onChange={e => setNewParagraph({ ...newParagraph, content: e.target.value })} />
                <div className="flex gap-3 items-center">
                  <select className="border p-2 rounded" value={newParagraph.language} onChange={e => setNewParagraph({ ...newParagraph, language: e.target.value })}>
                    <option value="EN">English</option>
                    <option value="HI">Hindi</option>
                  </select>
                  <select className="border p-2 rounded" value={newParagraph.difficulty} onChange={e => setNewParagraph({ ...newParagraph, difficulty: e.target.value })}>
                    <option value="EASY">Easy</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HARD">Hard</option>
                  </select>
                  <button onClick={addParagraph} className="px-6 py-2 bg-[#075EA8] text-white font-bold rounded ml-auto">Save</button>
                  <button onClick={() => setShowAddParagraph(false)} className="px-4 py-2 bg-gray-200 text-black rounded">Cancel</button>
                </div>
              </div>
            )}

            {/* Edit form */}
            {editingParagraph && (
              <div className="p-6 border-b border-gray-100 bg-yellow-50 flex flex-col gap-3 text-black">
                <h4 className="font-bold text-gray-800">Edit Paragraph</h4>
                <input className="w-full p-2 border rounded" placeholder="Title"
                  value={editingParagraph.title} onChange={e => setEditingParagraph({ ...editingParagraph, title: e.target.value })} />
                <textarea className="w-full p-3 border rounded focus:ring-2 focus:ring-yellow-400 focus:outline-none" rows={4}
                  value={editingParagraph.content} onChange={e => setEditingParagraph({ ...editingParagraph, content: e.target.value })} />
                <div className="flex gap-3 items-center">
                  <select className="border p-2 rounded" value={editingParagraph.language} onChange={e => setEditingParagraph({ ...editingParagraph, language: e.target.value })}>
                    <option value="EN">English</option>
                    <option value="HI">Hindi</option>
                  </select>
                  <select className="border p-2 rounded" value={editingParagraph.difficulty} onChange={e => setEditingParagraph({ ...editingParagraph, difficulty: e.target.value })}>
                    <option value="EASY">Easy</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HARD">Hard</option>
                  </select>
                  <button onClick={saveParagraphEdit} className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded ml-auto">Save Changes</button>
                  <button onClick={() => setEditingParagraph(null)} className="px-4 py-2 bg-gray-200 text-black rounded">Cancel</button>
                </div>
              </div>
            )}

            {/* List */}
            <div className="divide-y divide-gray-100 text-black">
              {paragraphs.length === 0 && (
                <div className="p-8 text-center text-gray-400">No paragraphs added yet.</div>
              )}
              {paragraphs.map(item => (
                <div key={item.id} className="p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <div>
                      <span className="font-bold text-gray-900">{item.title}</span>
                      <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{item.language}</span>
                      <span className="ml-1 text-xs font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">{item.difficulty}</span>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={() => { setEditingParagraph({ ...item }); setShowAddParagraph(false); }}
                        className="p-1.5 text-blue-500 hover:bg-blue-50 rounded"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteParagraph(item.id)}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{item.content}</p>
                  <p className="text-xs text-gray-300 mt-1">{item.content.length} chars</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
}
