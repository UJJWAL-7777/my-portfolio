    import { useState, useEffect, useRef, useCallback } from "react";

    // ─── Inject Fonts & Global Styles ──────────────────────────────────────────
    const GlobalStyles = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600&family=Orbitron:wght@700;800;900&display=swap";
        document.head.appendChild(link);
        const style = document.createElement("style");
        style.textContent = `
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        :root {
            --bg: #060a12; --bg2: #0c1220; --bg3: #111827; --surface: #141e2f;
            --border: rgba(99,179,237,0.15); --text: #e2e8f0; --text2: #94a3b8;
            --accent: #38bdf8; --accent2: #818cf8; --accent3: #34d399;
            --glow: rgba(56,189,248,0.35);
            --transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        [data-theme="light"] {
            --bg: #f0f4ff; --bg2: #e8eeff; --bg3: #ffffff; --surface: #ffffff;
            --border: rgba(99,102,241,0.2); --text: #1e293b; --text2: #64748b;
            --accent: #6366f1; --accent2: #8b5cf6; --accent3: #059669;
            --glow: rgba(99,102,241,0.25);
        }
        body { background: var(--bg); color: var(--text); font-family: 'Outfit', sans-serif; transition: var(--transition); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 3px; }

        @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
        @keyframes sharinganSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes sharinganSpinReverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes sharinganGlow { 0%,100% { opacity: 0.55; } 50% { opacity: 0.9; } }
        @keyframes float { 0%,100% { transform: translateY(0px) rotateX(0deg); } 50% { transform: translateY(-14px) rotateX(3deg); } }
        @keyframes float2 { 0%,100% { transform: translateY(0px) rotateY(0deg); } 50% { transform: translateY(-10px) rotateY(4deg); } }
        @keyframes float3 { 0%,100% { transform: translateY(0px) rotateZ(0deg); } 50% { transform: translateY(-18px) rotateZ(-2deg); } }

        /* ── Ninja transition keyframes ── */
        @keyframes ninjaRun {
            0%   { left: -120px; }
            100% { left: calc(100vw + 120px); }
        }
        @keyframes shurikenSpin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(1080deg); }
        }
        @keyframes shurikenFly {
            0%   { transform: translateX(0) rotate(0deg); opacity:1; }
            100% { transform: translateX(320px) rotate(1080deg); opacity:0; }
        }
        @keyframes smokeExpand {
            0%   { transform: scale(0); opacity:0.9; }
            60%  { transform: scale(1); opacity:0.95; }
            100% { transform: scale(1.4); opacity:0; }
        }
        @keyframes inkSplash {
            0%   { transform: scale(0) rotate(0deg); opacity:1; }
            100% { transform: scale(3) rotate(45deg); opacity:0; }
        }
        @keyframes speedLineIn {
            from { width: 0; opacity: 0; }
            to   { width: var(--w); opacity: var(--o); }
        }
        @keyframes smokePuff {
            0%   { transform: scale(0) translateY(0); opacity: 0.8; }
            100% { transform: scale(1.8) translateY(-30px); opacity: 0; }
        }
        @keyframes slashLine {
            0%   { width: 0; opacity: 1; }
            40%  { width: 100vw; opacity: 0.9; }
            100% { width: 100vw; opacity: 0; }
        }
        @keyframes screenDark {
            0%   { opacity: 0; }
            100% { opacity: 1; }
        }
        @keyframes screenClear {
            0%   { opacity: 1; }
            100% { opacity: 0; }
        }
        @keyframes kunaiThrow {
            0%   { transform: translateX(0) translateY(0) rotate(0deg); opacity:1; }
            100% { transform: translateX(280px) translateY(-80px) rotate(720deg); opacity:0.2; }
        }

        /* ── 3D card / page styles ── */
        .card-3d { transition: transform 0.15s ease, box-shadow 0.3s; transform-style: preserve-3d; will-change: transform; }
        .perspective-wrap { perspective: 1200px; perspective-origin: 50% 50%; }

        @keyframes card3dFloat {
            0%,100% { transform: perspective(800px) rotateX(4deg) rotateY(-2deg) translateY(0px); }
            50% { transform: perspective(800px) rotateX(-2deg) rotateY(3deg) translateY(-8px); }
        }
        @keyframes orbSpin {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
        }
        @keyframes glowPulse {
            0%,100% { box-shadow: 0 0 20px var(--glow), 0 0 40px var(--glow); }
            50% { box-shadow: 0 0 40px var(--glow), 0 0 80px var(--glow), 0 0 120px var(--glow); }
        }
        @keyframes scanLine {
            from { top: -2px; }
            to { top: 100%; }
        }
        @keyframes hexIn {
            from { transform: scale(0) rotateZ(60deg); opacity:0; }
            to { transform: scale(1) rotateZ(0deg); opacity:1; }
        }
        @keyframes depthLayer {
            0%,100% { transform: translateZ(0px) translateY(0); }
            50% { transform: translateZ(20px) translateY(-5px); }
        }
        @keyframes projectCard3D {
            0%,100% { transform: perspective(1000px) rotateY(0deg) rotateX(2deg); }
            50% { transform: perspective(1000px) rotateY(3deg) rotateX(-1deg); }
        }
        @keyframes contactFloat {
            0%,100% { transform: perspective(900px) rotateX(3deg) rotateY(-1deg) translateY(0); }
            50% { transform: perspective(900px) rotateX(-1deg) rotateY(2deg) translateY(-6px); }
        }

        .section-enter { animation: fadeUp 0.6s ease forwards; }
        .btn-primary { display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg,var(--accent),var(--accent2)); color:#fff; border:none; padding:12px 28px; border-radius:8px; font-family:'Space Mono',monospace; font-size:13px; cursor:pointer; transition:transform 0.2s,box-shadow 0.3s; box-shadow:0 0 20px var(--glow); letter-spacing:0.05em; }
        .btn-primary:hover { transform:translateY(-2px) scale(1.03); box-shadow:0 0 30px var(--glow),0 0 60px var(--glow); }
        .btn-ghost { display:inline-flex; align-items:center; gap:8px; background:transparent; color:var(--accent); border:1.5px solid var(--accent); padding:11px 26px; border-radius:8px; font-family:'Space Mono',monospace; font-size:13px; cursor:pointer; transition:all 0.3s; letter-spacing:0.05em; }
        .btn-ghost:hover { background:var(--accent); color:#fff; box-shadow:0 0 20px var(--glow); }
        .tag { display:inline-block; background:rgba(56,189,248,0.1); border:1px solid rgba(56,189,248,0.25); color:var(--accent); padding:3px 12px; border-radius:20px; font-size:11px; font-family:'Space Mono',monospace; letter-spacing:0.05em; }
        [data-theme="light"] .tag { background:rgba(99,102,241,0.08); border-color:rgba(99,102,241,0.2); }
        .section-title { font-family:'Syne',sans-serif; font-size:clamp(32px,5vw,52px); font-weight:800; letter-spacing:-0.02em; background:linear-gradient(135deg,var(--text) 40%,var(--accent)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .grid-bg { background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px); background-size:40px 40px; }
        input, textarea { background:var(--surface); border:1.5px solid var(--border); color:var(--text); padding:12px 16px; border-radius:8px; width:100%; font-family:'Outfit',sans-serif; font-size:14px; transition:border-color 0.3s,box-shadow 0.3s; outline:none; }
        input:focus, textarea:focus { border-color:var(--accent); box-shadow:0 0 12px var(--glow); }
        label { font-size:13px; color:var(--text2); font-family:'Space Mono',monospace; margin-bottom:6px; display:block; }
        nav-link { position:relative; cursor:pointer; padding:8px 0; font-family:'Space Mono',monospace; font-size:13px; color:var(--text2); transition:color 0.3s; letter-spacing:0.05em; }
        `;
        document.head.appendChild(style);
        return () => { document.head.removeChild(link); document.head.removeChild(style); };
    }, []);
    return null;
    };

    // ─── Scroll Progress Bar ─────────────────────────────────────────────────────
    const ScrollProgress = () => {
    const [pct, setPct] = useState(0);
    useEffect(() => {
        const onScroll = () => {
        const el = document.documentElement;
        const scrolled = el.scrollTop || document.body.scrollTop;
        const total = el.scrollHeight - el.clientHeight;
        setPct(total > 0 ? (scrolled / total) * 100 : 0);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <div style={{
        position: "fixed", top: 0, left: 0, zIndex: 9999,
        height: 2, width: `${pct}%`,
        background: "linear-gradient(90deg, var(--accent), var(--accent2), var(--accent3))",
        boxShadow: "0 0 8px var(--glow)",
        transition: "width 0.1s linear",
        pointerEvents: "none",
        }} />
    );
    };

    // ─── NINJA PAGE TRANSITION ────────────────────────────────────────────────────
    const NinjaPageTransition = ({ phase, onMidpoint }) => {
    const [ninjaX, setNinjaX] = useState(-120);
    const [shurikens, setShurikens] = useState([]);
    const [smokePuffs, setSmokePuffs] = useState([]);
    const [showSlash, setShowSlash] = useState(false);
    const [coverOpacity, setCoverOpacity] = useState(0);
    const [step, setStep] = useState(0);
    const rafRef = useRef(null);
    const startRef = useRef(null);
    const calledMid = useRef(false);

    useEffect(() => {
        if (phase === "idle") { setStep(0); setNinjaX(-120); setShurikens([]); setSmokePuffs([]); setShowSlash(false); setCoverOpacity(0); calledMid.current = false; return; }

        calledMid.current = false;
        const W = window.innerWidth;
        const mid = W * 0.5;
        const startTime = performance.now();

        // Phase "in": ninja runs to center (~900ms), slashes + smoke + cover → total ~1000ms
        // Phase "out": cover fades + ninja exits right (~700ms)

        if (phase === "in") {
        const dur = 900;
        const tick = (now) => {
            const t = Math.min((now - startTime) / dur, 1);
            const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            const x = -120 + (mid + 60) * ease;
            setNinjaX(x);

            // Throw shurikens at intervals
            if (t > 0.15 && t < 0.8) {
            const interval = Math.floor(t * 8);
            setShurikens(prev => {
                if (prev.length < interval && prev.length < 5) {
                return [...prev, { id: Date.now() + prev.length, y: 35 + Math.random() * 30, delay: prev.length * 0.08 }];
                }
                return prev;
            });
            }

            // Smoke puffs trail
            if (t > 0.05 && Math.random() > 0.85) {
            setSmokePuffs(prev => [...prev.slice(-6), { id: Date.now(), x: x - 20, y: 40 + Math.random() * 20 }]);
            }

            if (t >= 1) {
            // Midpoint: slash + full cover
            setShowSlash(true);
            setCoverOpacity(1);
            setTimeout(() => {
                if (!calledMid.current) { calledMid.current = true; onMidpoint && onMidpoint(); }
            }, 80);
            return;
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        }

        if (phase === "out") {
        setNinjaX(mid + 60);
        setCoverOpacity(1);
        const dur = 700;
        const tick = (now) => {
            const t = Math.min((now - startTime) / dur, 1);
            const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            const x = mid + 60 + (W + 120 - (mid + 60)) * ease;
            setNinjaX(x);
            setCoverOpacity(Math.max(0, 1 - t * 1.4));
            setShowSlash(t < 0.3);

            if (t >= 1) {
            setCoverOpacity(0);
            setNinjaX(-120);
            setShurikens([]);
            setSmokePuffs([]);
            setShowSlash(false);
            return;
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        }

        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [phase]);

    if (phase === "idle") return null;

    return (
        <div style={{ position: "fixed", inset: 0, zIndex: 9000, pointerEvents: "all", overflow: "hidden" }}>
        {/* Dark overlay */}
        <div style={{
            position: "absolute", inset: 0,
            background: "#020508",
            opacity: coverOpacity,
            transition: "opacity 0.15s",
        }} />

        {/* Speed lines behind ninja */}
        {[...Array(14)].map((_, i) => (
            <div key={i} style={{
            position: "absolute",
            left: 0,
            top: `${8 + i * 6.5}%`,
            height: 1.2,
            width: `${ninjaX + 120}px`,
            maxWidth: "100vw",
            background: `linear-gradient(90deg, transparent, rgba(56,189,248,${0.05 + (i % 3) * 0.08}), rgba(56,189,248,${0.15 + (i % 4) * 0.07}))`,
            transformOrigin: "right center",
            pointerEvents: "none",
            }} />
        ))}

        {/* Extra bold speed lines at ninja level */}
        {[0, 1, 2].map(i => (
            <div key={`b${i}`} style={{
            position: "absolute",
            left: 0,
            top: `${44 + i * 4}%`,
            height: i === 1 ? 2.5 : 1.5,
            width: `${Math.max(0, ninjaX + 80)}px`,
            background: `linear-gradient(90deg, transparent, rgba(56,189,248,0.12), rgba(200,230,255,${0.3 + i * 0.15}))`,
            pointerEvents: "none",
            }} />
        ))}

        {/* Smoke puffs trail */}
        {smokePuffs.map(s => (
            <div key={s.id} style={{
            position: "absolute",
            left: s.x,
            top: `${s.y}%`,
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(150,200,255,0.35), transparent 70%)",
            animation: "smokePuff 0.6s ease-out forwards",
            pointerEvents: "none",
            }} />
        ))}

        {/* Shurikens */}
        {shurikens.map((s, i) => (
            <div key={s.id} style={{
            position: "absolute",
            left: ninjaX - 20 - i * 40,
            top: `${s.y}%`,
            width: 16,
            height: 16,
            animation: `shurikenFly 0.5s ease-out ${s.delay}s both`,
            pointerEvents: "none",
            zIndex: 2,
            }}>
            <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6Z"
                fill="rgba(56,189,248,0.9)" stroke="rgba(200,240,255,0.6)" strokeWidth="0.5" />
                <path d="M8 3 L9 7 L13 8 L9 9 L8 13 L7 9 L3 8 L7 7Z"
                fill="rgba(255,255,255,0.4)" />
            </svg>
            </div>
        ))}

        {/* Ninja SVG */}
        <div style={{
            position: "absolute",
            top: "38%",
            left: ninjaX,
            transform: "translateY(-50%)",
            zIndex: 10,
            filter: "drop-shadow(0 0 12px rgba(56,189,248,0.7)) drop-shadow(0 0 30px rgba(56,189,248,0.4))",
            pointerEvents: "none",
        }}>
            <svg width="90" height="110" viewBox="0 0 90 110" fill="none">
            {/* Body shadow/glow */}
            <ellipse cx="45" cy="100" rx="22" ry="6" fill="rgba(56,189,248,0.15)" />

            {/* Cape/cloak streaming back */}
            <path d="M38 28 Q10 45 -10 38 Q5 55 12 72 Q25 65 38 58Z"
                fill="#0a0f1a" stroke="rgba(56,189,248,0.25)" strokeWidth="0.8" />
            <path d="M36 30 Q14 44 -2 40 Q8 52 14 65 Q24 58 36 52Z"
                fill="#0d1525" />

            {/* Legs - running pose */}
            {/* Back leg */}
            <path d="M42 72 Q36 82 30 94 Q34 96 38 95 Q42 84 46 74Z"
                fill="#0a0f1a" stroke="rgba(56,189,248,0.2)" strokeWidth="0.5" />
            {/* Front leg */}
            <path d="M48 72 Q56 80 62 90 Q66 88 64 86 Q60 78 54 70Z"
                fill="#0d1525" stroke="rgba(56,189,248,0.2)" strokeWidth="0.5" />
            {/* Boot front */}
            <path d="M60 88 Q66 87 68 85 Q67 92 60 93 Q55 93 53 90Z"
                fill="#060a12" stroke="rgba(56,189,248,0.3)" strokeWidth="0.6" />
            {/* Boot back */}
            <path d="M27 93 Q33 96 38 95 Q37 101 30 101 Q24 100 24 96Z"
                fill="#060a12" stroke="rgba(56,189,248,0.3)" strokeWidth="0.6" />

            {/* Torso */}
            <rect x="33" y="38" width="22" height="34" rx="4"
                fill="#0c1420" stroke="rgba(56,189,248,0.3)" strokeWidth="0.8" />
            {/* Chest detail - clan symbol */}
            <circle cx="44" cy="52" r="6" fill="none" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
            <circle cx="44" cy="52" r="2" fill="rgba(56,189,248,0.6)" />

            {/* Belt */}
            <rect x="32" y="60" width="24" height="5" rx="2"
                fill="#050810" stroke="rgba(56,189,248,0.5)" strokeWidth="0.8" />
            <rect x="42" y="59" width="5" height="7" rx="1"
                fill="rgba(56,189,248,0.3)" stroke="rgba(56,189,248,0.6)" strokeWidth="0.6" />

            {/* Arms - one forward with sword, one back */}
            {/* Back arm */}
            <path d="M34 42 Q22 48 18 56 Q21 59 24 58 Q28 52 36 46Z"
                fill="#0a0f1a" stroke="rgba(56,189,248,0.2)" strokeWidth="0.5" />
            {/* Front arm - holding sword forward */}
            <path d="M55 42 Q64 36 72 28 Q70 25 67 26 Q61 33 53 40Z"
                fill="#0d1525" stroke="rgba(56,189,248,0.25)" strokeWidth="0.5" />

            {/* Katana/sword */}
            <line x1="70" y1="26" x2="88" y2="10"
                stroke="rgba(200,230,255,0.9)" strokeWidth="2" strokeLinecap="round" />
            <line x1="70" y1="26" x2="88" y2="10"
                stroke="rgba(56,189,248,0.5)" strokeWidth="4" strokeLinecap="round" style={{ filter: "blur(2px)" }} />
            {/* Guard */}
            <ellipse cx="70" cy="26" rx="4" ry="2.5" fill="rgba(56,189,248,0.6)"
                transform="rotate(-45 70 26)" />
            {/* Handle */}
            <line x1="65" y1="31" x2="70" y2="26"
                stroke="#1a2840" strokeWidth="3" strokeLinecap="round" />

            {/* Head */}
            <circle cx="44" cy="26" r="14" fill="#0c1420" stroke="rgba(56,189,248,0.3)" strokeWidth="0.8" />

            {/* Mask/face wrap */}
            <path d="M30 24 Q34 30 44 30 Q54 30 58 24 Q54 18 44 18 Q34 18 30 24Z"
                fill="#060a12" stroke="rgba(56,189,248,0.25)" strokeWidth="0.6" />

            {/* Eyes - glowing */}
            <ellipse cx="40" cy="22" rx="3.5" ry="2.5" fill="rgba(56,189,248,0.9)"
                style={{ filter: "drop-shadow(0 0 4px rgba(56,189,248,1))" }} />
            <ellipse cx="49" cy="22" rx="3.5" ry="2.5" fill="rgba(56,189,248,0.9)"
                style={{ filter: "drop-shadow(0 0 4px rgba(56,189,248,1))" }} />
            {/* Eye glow */}
            <ellipse cx="40" cy="22" rx="5" ry="3.5" fill="rgba(56,189,248,0.15)" />
            <ellipse cx="49" cy="22" rx="5" ry="3.5" fill="rgba(56,189,248,0.15)" />

            {/* Headband */}
            <path d="M30 18 Q44 14 58 18" fill="none" stroke="rgba(56,189,248,0.7)" strokeWidth="2.5" strokeLinecap="round" />
            {/* Headband knot + ribbon */}
            <rect x="55" y="15" width="4" height="7" rx="1" fill="rgba(56,189,248,0.5)" transform="rotate(-10 55 15)" />
            <path d="M57 16 Q65 10 68 12" fill="none" stroke="rgba(56,189,248,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M58 20 Q66 22 67 18" fill="none" stroke="rgba(56,189,248,0.4)" strokeWidth="1.5" strokeLinecap="round" />

            {/* Hair wisps */}
            <path d="M34 13 Q30 6 26 8" fill="none" stroke="#0a0f1a" strokeWidth="3" strokeLinecap="round" />
            <path d="M38 12 Q36 4 32 5" fill="none" stroke="#0a0f1a" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>

        {/* Sword slash effect at midpoint */}
        {showSlash && (
            <>
            <div style={{
                position: "absolute",
                top: "30%",
                left: 0,
                height: 2,
                background: "linear-gradient(90deg, transparent, rgba(200,240,255,0.9), rgba(56,189,248,0.6), transparent)",
                animation: "slashLine 0.3s ease-out forwards",
                boxShadow: "0 0 12px rgba(56,189,248,0.8)",
                zIndex: 15,
            }} />
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(56,189,248,0.1) 40%, transparent 70%)",
                animation: "smokeExpand 0.6s ease-out forwards",
                zIndex: 14,
            }} />
            {/* Ink splash particles */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <div key={i} style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "rgba(56,189,248,0.8)",
                animation: `inkSplash 0.5s ease-out ${i * 0.03}s forwards`,
                transformOrigin: "center center",
                transform: `translate(-50%,-50%) rotate(${angle}deg) translateX(${30 + i * 8}px)`,
                zIndex: 16,
                }} />
            ))}
            </>
        )}

        {/* Kunai (secondary projectile) */}
        {phase === "in" && shurikens.length > 2 && (
            <div style={{
            position: "absolute",
            left: ninjaX - 50,
            top: "42%",
            animation: "kunaiThrow 0.4s ease-out forwards",
            zIndex: 11,
            pointerEvents: "none",
            }}>
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                <path d="M0 4 L14 1 L20 4 L14 7Z" fill="rgba(150,200,255,0.8)" />
                <line x1="0" y1="4" x2="-8" y2="4" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5" strokeDasharray="2 1" />
            </svg>
            </div>
        )}
        </div>
    );
    };

    // ─── Sharingan Theme Transition ──────────────────────────────────────────────
    const SharinganThemeTransition = ({ onComplete }) => {
    const [openFrac, setOpenFrac] = useState(0);
    const [irisScale, setIrisScale] = useState(0);
    const [spinDeg, setSpinDeg] = useState(0);
    const [glowAmt, setGlowAmt] = useState(0);
    const [done, setDone] = useState(false);
    const rafRef = useRef(null);
    const startRef = useRef(null);
    const doneRef = useRef(false);

    useEffect(() => {
        doneRef.current = false;
        const OPEN_END = 2400, RAMP_END = 3800, BLAZE_END = 5000, CLOSE_END = 6800;
        const eio = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const ei = t => t * t * t;
        const eo = t => 1 - Math.pow(1 - t, 3);
        const lrp = (a, b, t) => a + (b - a) * t;
        const clp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
        let ang = 0;
        const tick = now => {
        if (doneRef.current) return;
        if (!startRef.current) startRef.current = now;
        const ms = now - startRef.current;
        let of = ms < OPEN_END ? eio(clp(ms / OPEN_END, 0, 1)) : ms < BLAZE_END ? 1 : eio(clp(1 - (ms - BLAZE_END) / (CLOSE_END - BLAZE_END), 0, 1));
        setOpenFrac(of);
        setIrisScale(eo(clp((ms - 600) / 1400, 0, 1)));
        let spd = ms < OPEN_END ? lrp(0, 1.2, ei(ms / OPEN_END)) : ms < RAMP_END ? lrp(1.2, 20, ei((ms - OPEN_END) / (RAMP_END - OPEN_END))) : ms < BLAZE_END ? 20 : lrp(20, 0, eio((ms - BLAZE_END) / (CLOSE_END - BLAZE_END)));
        ang += spd; setSpinDeg(ang);
        let g = ms < OPEN_END ? ei(ms / OPEN_END) : ms < RAMP_END ? lrp(1, 3, ei((ms - OPEN_END) / (RAMP_END - OPEN_END))) : ms < BLAZE_END ? 3 : lrp(3, 0, eio((ms - BLAZE_END) / (CLOSE_END - BLAZE_END)));
        setGlowAmt(g);
        if (ms >= CLOSE_END) { doneRef.current = true; onComplete(); setDone(true); return; }
        rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => { doneRef.current = true; if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, []);

    if (done) return null;
    const gc = glowAmt > 2 ? `rgba(120,230,255,${Math.min((glowAmt - 2) * 0.45, 0.65)})` : `rgba(40,140,220,${glowAmt * 0.22})`;
    const outerOp = Math.min(glowAmt * 0.16, 0.55);
    const r1 = spinDeg, r2 = -spinDeg * 1.45, r3 = spinDeg * 2.3;
    const VW = 600, VH = 260;
    const iX = 28, iY = 178, oX = 572, oY = 52;
    const midY = (iY + oY) / 2;
    const topCtrlY = midY - openFrac * 108;
    const botCtrlY = midY + openFrac * 82;
    const irisX = (iX + oX) / 2;
    const irisY = (topCtrlY + botCtrlY) / 2;
    const irisR = 115 * irisScale;
    const W = 1000, H = 560;
    const ox = 500 - VW / 2, oy = 280 - VH / 2;
    const [eIX, eIY] = [ox + iX, oy + iY];
    const [eOX, eOY] = [ox + oX, oy + oY];
    const etc = oy + topCtrlY, ebc = oy + botCtrlY;
    const ecp1x = ox + 120, ecp2x = ox + 480;
    const eIrisX = ox + irisX, eIrisY = oy + irisY;
    const canvasEyePath = `M${eIX} ${eIY} C${ecp1x} ${etc},${ecp2x} ${etc},${eOX} ${eOY} C${ecp2x} ${ebc},${ecp1x} ${ebc},${eIX} ${eIY}Z`;
    const canvasEUp = `M${eIX} ${eIY} C${ecp1x} ${etc},${ecp2x} ${etc},${eOX} ${eOY}`;
    const canvasELo = `M${eIX} ${eIY} C${ecp1x} ${ebc},${ecp2x} ${ebc},${eOX} ${eOY}`;
    return (
        <div style={{ position: "fixed", inset: 0, zIndex: 99999, overflow: "hidden", background: "#000" }}>
        <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, display: "block" }}>
            <defs>
            <clipPath id="eyeClip"><path d={canvasEyePath} /></clipPath>
            <radialGradient id="scleraGrad" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stopColor={`rgba(220,240,255,${0.92 + openFrac * 0.06})`} />
                <stop offset="45%" stopColor="rgba(160,210,240,0.88)" />
                <stop offset="100%" stopColor="rgba(40,80,130,0.95)" />
            </radialGradient>
            <radialGradient id="irisGrad" cx="40%" cy="36%" r="52%">
                <stop offset="0%" stopColor="#38bdf8" /><stop offset="50%" stopColor="#0369a1" /><stop offset="100%" stopColor="#020d1f" />
            </radialGradient>
            <filter id="irisGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur in="SourceGraphic" stdDeviation={2 + glowAmt * 4} result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            </defs>
            <rect width={W} height={H} fill="#000" />
            <ellipse cx={eIrisX} cy={eIrisY} rx={280} ry={140} fill={`rgba(8,50,110,${outerOp * 0.4})`} style={{ filter: "blur(55px)" }} />
            <circle cx={eIrisX} cy={eIrisY} r={160} fill={gc.replace(/[\d.]+\)$/, `${outerOp * 1.0})`)} style={{ filter: `blur(${28 + glowAmt * 15}px)` }} opacity={openFrac} />
            <path d={canvasEyePath} fill="url(#scleraGrad)" />
            <circle cx={eIrisX} cy={eIrisY} r={irisR} fill="url(#irisGrad)" clipPath="url(#eyeClip)" filter="url(#irisGlow)" opacity={irisScale} />
            <g clipPath="url(#eyeClip)" transform={`rotate(${r1},${eIrisX},${eIrisY})`} opacity={Math.min(irisScale * (0.6 + glowAmt * 0.13), 1)}>
            <circle cx={eIrisX} cy={eIrisY} r={irisR * 0.91} fill="none" stroke="rgba(56,189,248,0.55)" strokeWidth="2.5" strokeDasharray="10 7" />
            {Array.from({ length: 16 }).map((_, i) => { const a = (i / 16) * Math.PI * 2, big = i % 4 === 0; return <line key={i} x1={eIrisX + Math.cos(a) * irisR * 0.82} y1={eIrisY + Math.sin(a) * irisR * 0.82} x2={eIrisX + Math.cos(a) * irisR * 0.92} y2={eIrisY + Math.sin(a) * irisR * 0.92} stroke={`rgba(56,189,248,${big ? 1 : 0.38})`} strokeWidth={big ? 3 : 1.2} strokeLinecap="round" />; })}
            </g>
            <g clipPath="url(#eyeClip)" transform={`rotate(${r2},${eIrisX},${eIrisY})`} opacity={Math.min(irisScale * (0.85 + glowAmt * 0.1), 1)}>
            <circle cx={eIrisX} cy={eIrisY} r={irisR * 0.64} fill="none" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" strokeDasharray="4 7" />
            {[0, 1, 2].map(i => { const a = (i / 3) * Math.PI * 2 - Math.PI / 2, tr = irisR * 0.44; const tx = eIrisX + Math.cos(a) * tr, ty = eIrisY + Math.sin(a) * tr; const ta = a + Math.PI * 0.65; const ex2 = tx + Math.cos(ta) * irisR * 0.19, ey2 = ty + Math.sin(ta) * irisR * 0.19; const qx = tx + Math.cos(ta) * irisR * 0.09, qy = ty + Math.sin(ta) * irisR * 0.09; return <g key={i}><circle cx={tx} cy={ty} r={irisR * 0.135} fill="rgba(1,8,25,0.97)" stroke={`rgba(56,189,248,${0.82 + glowAmt * 0.1})`} strokeWidth="2.5" /><path d={`M${tx} ${ty} Q${qx} ${qy} ${ex2} ${ey2}`} fill="none" stroke={`rgba(56,189,248,${0.82 + glowAmt * 0.1})`} strokeWidth={irisR * 0.08} strokeLinecap="round" /><circle cx={ex2} cy={ey2} r={irisR * 0.065} fill={`rgba(56,189,248,${0.6 + glowAmt * 0.15})`} /></g>; })}
            </g>
            <g clipPath="url(#eyeClip)" transform={`rotate(${r3},${eIrisX},${eIrisY})`} opacity={Math.min(irisScale * (0.5 + glowAmt * 0.12), 1)}>
            <circle cx={eIrisX} cy={eIrisY} r={irisR * 0.41} fill="none" stroke="rgba(56,189,248,0.5)" strokeWidth="2" strokeDasharray="3 5" />
            {Array.from({ length: 6 }).map((_, i) => { const a = (i / 6) * Math.PI * 2, rO = irisR * 0.41, rI = irisR * 0.30; return <polygon key={i} points={`${eIrisX + Math.cos(a + 0.3) * rO},${eIrisY + Math.sin(a + 0.3) * rO} ${eIrisX + Math.cos(a) * rI},${eIrisY + Math.sin(a) * rI} ${eIrisX + Math.cos(a - 0.3) * rO},${eIrisY + Math.sin(a - 0.3) * rO}`} fill="rgba(56,189,248,0.07)" stroke="rgba(56,189,248,0.52)" strokeWidth="1" />; })}
            </g>
            <circle cx={eIrisX} cy={eIrisY} r={irisR} fill="none" stroke={gc} strokeWidth={glowAmt * 5} clipPath="url(#eyeClip)" opacity={Math.min(glowAmt * 0.28, 0.75)} />
            <ellipse cx={eIrisX} cy={eIrisY} rx={8 + 4 * (1 - openFrac)} ry={Math.max(irisR * 0.52 * openFrac, 1.5)} fill="#000" clipPath="url(#eyeClip)" opacity={irisScale} />
            <ellipse cx={eIrisX - 22} cy={eIrisY - 20} rx={10} ry={6} fill="rgba(255,255,255,0.82)" clipPath="url(#eyeClip)" opacity={irisScale} style={{ filter: "blur(1.5px)" }} />
            <path fill="#000" d={`M0 0 L${W} 0 L${W} ${eOY} L${eOX} ${eOY} C${ecp2x} ${etc},${ecp1x} ${etc},${eIX} ${eIY} L0 ${eIY}Z`} />
            <path fill="#000" d={`M0 ${H} L${W} ${H} L${W} ${eOY} L${eOX} ${eOY} C${ecp2x} ${ebc},${ecp1x} ${ebc},${eIX} ${eIY} L0 ${eIY}Z`} />
            <path fill="rgba(0,0,0,0.88)" d={`M${eIX} ${eIY} C${ecp1x} ${etc},${ecp2x} ${etc},${eOX} ${eOY} L${eOX} ${eOY - 28} C${ecp2x} ${etc - 22},${ecp1x} ${etc - 22},${eIX} ${eIY - 14}Z`} />
            <path fill="none" stroke="#000" strokeWidth={10 - openFrac * 5} strokeLinecap="round" d={canvasEUp} />
            <path fill="none" stroke="#000" strokeWidth={6 - openFrac * 2.5} strokeLinecap="round" d={canvasELo} />
            <circle cx={eIX} cy={eIY} r={5} fill="#020406" />
            <circle cx={eOX} cy={eOY} r={5} fill="#020406" />
        </svg>
        </div>
    );
    };

    // ─── Loading Screen ──────────────────────────────────────────────────────────
    const quotes = [
    { text: "Code is poetry written in logic.", author: "— Unknown" },
    { text: "First, solve the problem. Then, write the code.", author: "— John Johnson" },
    { text: "Any fool can write code that a computer can understand.", author: "— Martin Fowler" },
    { text: "The best error message is the one that never shows up.", author: "— Thomas Fuchs" },
    { text: "Simplicity is the soul of efficiency.", author: "— Austin Freeman" },
    ];
    const SharinganLoader = ({ size = 160 }) => {
    const cx = size / 2, r2 = size * 0.33;
    const tomoeR = size * 0.27;
    const tomoes = [0, 1, 2].map(i => { const a = (i / 3) * Math.PI * 2 - Math.PI / 2; const tx = cx + Math.cos(a) * tomoeR, ty = cx + Math.sin(a) * tomoeR; const ta = a + Math.PI * 0.62; return { tx, ty, ta, ex: tx + Math.cos(ta) * size * 0.09, ey: ty + Math.sin(ta) * size * 0.09 }; });
    return (
        <div style={{ position: "relative", width: size, height: size }}>
        <div style={{ position: "absolute", inset: -size * 0.12, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.22) 0%, transparent 68%)", animation: "sharinganGlow 2.8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: 0, animation: "sharinganSpin 14s linear infinite" }}>
            <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}><circle cx={cx} cy={cx} r={size * 0.46} fill="none" stroke="rgba(56,189,248,0.25)" strokeWidth="1.5" strokeDasharray="10 7" />{Array.from({ length: 12 }).map((_, i) => { const a = (i / 12) * Math.PI * 2, io = size * 0.46, ii = io - size * 0.04; return <line key={i} x1={cx + Math.cos(a) * ii} y1={cx + Math.sin(a) * ii} x2={cx + Math.cos(a) * io} y2={cx + Math.sin(a) * io} stroke={`rgba(56,189,248,${i % 3 === 0 ? "0.7" : "0.3"})`} strokeWidth={i % 3 === 0 ? 2 : 1} strokeLinecap="round" />; })}</svg>
        </div>
        <div style={{ position: "absolute", inset: 0, animation: "sharinganSpinReverse 6s linear infinite" }}>
            <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}><circle cx={cx} cy={cx} r={r2} fill="none" stroke="rgba(56,189,248,0.18)" strokeWidth="1.2" strokeDasharray="5 8" />{tomoes.map((d, i) => (<g key={i}><circle cx={d.tx} cy={d.ty} r={size * 0.072} fill="rgba(14,40,80,0.85)" stroke="rgba(56,189,248,0.85)" strokeWidth="1.8" /><path d={`M${d.tx} ${d.ty} Q${d.tx + Math.cos(d.ta) * size * 0.055} ${d.ty + Math.sin(d.ta) * size * 0.055} ${d.ex} ${d.ey}`} fill="none" stroke="rgba(56,189,248,0.75)" strokeWidth={size * 0.036} strokeLinecap="round" /><circle cx={d.ex} cy={d.ey} r={size * 0.028} fill="rgba(56,189,248,0.5)" /></g>))}</svg>
        </div>
        <div style={{ position: "absolute", inset: size * 0.18, animation: "sharinganSpin 3s linear infinite" }}>
            <svg viewBox="0 0 100 100" width="100%" height="100%"><circle cx="50" cy="50" r="44" fill="none" stroke="rgba(56,189,248,0.35)" strokeWidth="2" strokeDasharray="3 5" />{Array.from({ length: 6 }).map((_, i) => { const a = (i / 6) * Math.PI * 2; const x1 = 50 + Math.cos(a) * 36, y1 = 50 + Math.sin(a) * 36; const x2 = 50 + Math.cos(a + 0.28) * 46, y2 = 50 + Math.sin(a + 0.28) * 46; const x3 = 50 + Math.cos(a - 0.28) * 46, y3 = 50 + Math.sin(a - 0.28) * 46; return <polygon key={i} points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`} fill="rgba(56,189,248,0.09)" stroke="rgba(56,189,248,0.42)" strokeWidth="0.8" />; })}</svg>
        </div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width={size * 0.32} height={size * 0.32} viewBox="0 0 100 100" style={{ position: "absolute" }}>
            <polygon points="50,4 93,27.5 93,72.5 50,96 7,72.5 7,27.5" fill="rgba(8,20,40,0.92)" stroke="#38bdf8" strokeWidth="3" strokeLinejoin="round" />
            <polygon points="50,14 83,31.5 83,68.5 50,86 17,68.5 17,31.5" fill="none" stroke="rgba(56,189,248,0.22)" strokeWidth="1.2" />
            </svg>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: size * 0.11, color: "#38bdf8", position: "relative", zIndex: 1, textShadow: `0 0 ${size * 0.06}px rgba(56,189,248,0.9)`, animation: "sharinganGlow 2.5s ease-in-out infinite" }}>UN</div>
        </div>
        </div>
    );
    };
    const LoadingScreen = ({ onDone }) => {
    const [qi, setQi] = useState(0);
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(true);
    const [tomoeCount, setTomoeCount] = useState(0);
    useEffect(() => {
        const q = setInterval(() => setQi(p => (p + 1) % quotes.length), 1400);
        const p = setInterval(() => { setProgress(v => { const next = Math.min(v + 2, 100); if (next >= 33) setTomoeCount(c => Math.max(c, 1)); if (next >= 66) setTomoeCount(c => Math.max(c, 2)); if (next >= 100) setTomoeCount(c => Math.max(c, 3)); return next; }); }, 55);
        const done = setTimeout(() => { setVisible(false); setTimeout(onDone, 700); }, 3200);
        return () => { clearInterval(q); clearInterval(p); clearTimeout(done); };
    }, [onDone]);
    return (
        <div style={{ position: "fixed", inset: 0, zIndex: 9998, background: "#060a12", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transition: "opacity 0.7s, transform 0.7s", opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(1.06)", pointerEvents: visible ? "all" : "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.04) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
        <div style={{ marginBottom: 36, position: "relative" }}>
            <SharinganLoader size={170} />
            <div style={{ position: "absolute", bottom: -18, left: "50%", transform: "translateX(-50%)", fontFamily: "'Space Mono',monospace", fontSize: 10, color: "rgba(56,189,248,0.5)", letterSpacing: "0.2em", whiteSpace: "nowrap" }}>{"● ".repeat(tomoeCount) + "○ ".repeat(3 - tomoeCount)}</div>
        </div>
        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 34, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 6, textAlign: "center" }}><span style={{ color: "#38bdf8" }}>Ujjwal</span>{" "}<span style={{ color: "#e2e8f0" }}>Narayan</span></div>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "#94a3b8", letterSpacing: "0.22em", marginBottom: 36 }}>AWAKENING PORTFOLIO...</div>
        <div style={{ maxWidth: 460, textAlign: "center", padding: "18px 28px", background: "rgba(20,30,47,0.8)", borderRadius: 12, border: "1px solid rgba(56,189,248,0.15)", marginBottom: 32, backdropFilter: "blur(8px)" }}>
            <div style={{ fontStyle: "italic", color: "#e2e8f0", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>"{quotes[qi].text}"</div>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "#38bdf8" }}>{quotes[qi].author}</div>
        </div>
        <div style={{ width: 280, height: 3, background: "rgba(56,189,248,0.12)", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg,#38bdf8,#818cf8)", borderRadius: 2, transition: "width 0.1s", boxShadow: "0 0 10px rgba(56,189,248,0.6)" }} />
        </div>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "#94a3b8", marginTop: 10 }}>{progress}%</div>
        </div>
    );
    };

    // ─── Rain Effect ─────────────────────────────────────────────────────────────
    const Confetti = ({ active, onDone }) => {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);
    useEffect(() => {
        if (!active) return;
        const canvas = canvasRef.current; if (!canvas) return;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth; canvas.height = window.innerHeight;
        const drops = Array.from({ length: 60 }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height - canvas.height, len: 14 + Math.random() * 20, speed: 10 + Math.random() * 14, opacity: 0.55 + Math.random() * 0.3, width: 1 + Math.random() * 1.2, color: Math.random() > 0.6 ? "180,220,255" : Math.random() > 0.5 ? "210,235,255" : "140,200,255" }));
        const draw = () => {
        rafRef.current = requestAnimationFrame(draw); ctx.clearRect(0, 0, canvas.width, canvas.height);
        drops.forEach(d => { const grad = ctx.createLinearGradient(d.x, d.y, d.x - d.len * 0.18, d.y + d.len); grad.addColorStop(0, `rgba(${d.color},0)`); grad.addColorStop(0.4, `rgba(${d.color},${d.opacity * 0.6})`); grad.addColorStop(1, `rgba(${d.color},${d.opacity})`); ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x - d.len * 0.18, d.y + d.len); ctx.strokeStyle = grad; ctx.lineWidth = d.width; ctx.lineCap = "round"; ctx.stroke(); if (d.y + d.len > canvas.height - 2) { ctx.beginPath(); ctx.arc(d.x, canvas.height, 3, 0, Math.PI * 2); ctx.fillStyle = `rgba(${d.color},${d.opacity * 0.7})`; ctx.fill(); } d.y += d.speed; if (d.y > canvas.height) { d.y = -d.len - Math.random() * 80; d.x = Math.random() * canvas.width; } });
        };
        draw();
        const t = setTimeout(() => { cancelAnimationFrame(rafRef.current); ctx.clearRect(0, 0, canvas.width, canvas.height); onDone(); }, 5000);
        return () => { clearTimeout(t); cancelAnimationFrame(rafRef.current); };
    }, [active]);
    if (!active) return null;
    return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 9998, pointerEvents: "none", width: "100%", height: "100%" }} />;
    };

    // ─── Grid Glow ───────────────────────────────────────────────────────────────
    const Particles = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -999, y: -999 });
    const rafRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current; if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const GRID = 40; let W = 0, H = 0;
        const resize = () => { const rect = canvas.parentElement.getBoundingClientRect(); W = canvas.width = rect.width; H = canvas.height = rect.height; };
        resize();
        const ro = new ResizeObserver(resize); ro.observe(canvas.parentElement);
        const onMove = (e) => { const rect = canvas.getBoundingClientRect(); mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }; };
        const onLeave = () => { mouseRef.current = { x: -999, y: -999 }; };
        canvas.parentElement.addEventListener("mousemove", onMove);
        canvas.parentElement.addEventListener("mouseleave", onLeave);
        const draw = () => {
        rafRef.current = requestAnimationFrame(draw); ctx.clearRect(0, 0, W, H);
        const { x, y } = mouseRef.current; if (x < 0) return;
        const RADIUS = 140; const col0 = Math.floor((x - RADIUS) / GRID); const col1 = Math.ceil((x + RADIUS) / GRID); const row0 = Math.floor((y - RADIUS) / GRID); const row1 = Math.ceil((y + RADIUS) / GRID);
        for (let col = col0; col <= col1; col++) { for (let row = row0; row <= row1; row++) { const cx = col * GRID; const cy = row * GRID; const dist = Math.hypot(cx - x, cy - y); if (dist > RADIUS) continue; const strength = 1 - dist / RADIUS; ctx.beginPath(); ctx.arc(cx, cy, 2.5 * strength + 0.5, 0, Math.PI * 2); ctx.fillStyle = `rgba(56,189,248,${strength * 0.9})`; ctx.fill(); if (strength > 0.15) { ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + GRID, cy); ctx.strokeStyle = `rgba(56,189,248,${strength * 0.35})`; ctx.lineWidth = 1; ctx.stroke(); ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx, cy + GRID); ctx.stroke(); } } }
        const grad = ctx.createRadialGradient(x, y, 0, x, y, RADIUS); grad.addColorStop(0, "rgba(56,189,248,0.10)"); grad.addColorStop(0.4, "rgba(56,189,248,0.04)"); grad.addColorStop(1, "rgba(56,189,248,0)"); ctx.fillStyle = grad; ctx.fillRect(x - RADIUS, y - RADIUS, RADIUS * 2, RADIUS * 2);
        };
        draw();
        return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); canvas.parentElement.removeEventListener("mousemove", onMove); canvas.parentElement.removeEventListener("mouseleave", onLeave); };
    }, []);
    return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }} />;
    };

    // ─── Hologram Cube Card (Home) ────────────────────────────────────────────────
    const CosmicCard = () => {
    const [rotX, setRotX] = useState(20);
    const [rotY, setRotY] = useState(-30);
    const [hovered, setHovered] = useState(false);
    const rafRef = useRef(null);
    const autoAngle = useRef(0);
    const isDragging = useRef(false);
    const lastMouse = useRef({ x: 0, y: 0 });
    const manualRot = useRef({ x: 20, y: -30 });

    // Auto-rotate when not hovered
    useEffect(() => {
        const tick = () => {
        rafRef.current = requestAnimationFrame(tick);
        if (!isDragging.current && !hovered) {
            autoAngle.current += 0.4;
            setRotY(-30 + autoAngle.current);
            setRotX(18 + Math.sin(autoAngle.current * 0.015) * 8);
        }
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [hovered]);

    const onMouseMove = e => {
        if (!isDragging.current) return;
        const dx = e.clientX - lastMouse.current.x;
        const dy = e.clientY - lastMouse.current.y;
        manualRot.current.y += dx * 0.5;
        manualRot.current.x -= dy * 0.5;
        setRotX(manualRot.current.x);
        setRotY(manualRot.current.y);
        lastMouse.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseDown = e => { isDragging.current = true; lastMouse.current = { x: e.clientX, y: e.clientY }; };
    const onMouseUp = () => { isDragging.current = false; };

    const S = 130;

    const faces = [
        { transform: `rotateY(0deg)   translateZ(${S}px)`, bg: "rgba(56,189,248,0.18)",  border: "rgba(56,189,248,0.9)",  label: "Sleep? What's That",   icon: "😴" },
        { transform: `rotateY(180deg) translateZ(${S}px)`, bg: "rgba(129,140,248,0.18)", border: "rgba(129,140,248,0.9)", label: "It Works · Why?",      icon: "🐛" },
        { transform: `rotateY(90deg)  translateZ(${S}px)`, bg: "rgba(52,211,153,0.18)",  border: "rgba(52,211,153,0.9)",  label: "Midnight Commits",     icon: "🌙" },
        { transform: `rotateY(-90deg) translateZ(${S}px)`, bg: "rgba(249,115,22,0.18)",  border: "rgba(249,115,22,0.9)",  label: "CGPA",                 icon: "🎯" },
        { transform: `rotateX(90deg)  translateZ(${S}px)`, bg: "rgba(251,191,36,0.18)",  border: "rgba(251,191,36,0.9)",  label: "COLLEGE",              icon: "💻" },
        { transform: `rotateX(-90deg) translateZ(${S}px)`, bg: "rgba(244,114,182,0.18)", border: "rgba(244,114,182,0.9)", label: "Building Dreams",      icon: "🚀" },
    ];

    return (
        <div style={{ position: "relative", width: 340, height: 420, display: "flex", alignItems: "center", justifyContent: "center" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); isDragging.current = false; }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}>

        {/* Outer glow rings */}
        <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 65%)", pointerEvents: "none", animation: "sharinganGlow 4s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", border: "1px dashed rgba(56,189,248,0.12)", pointerEvents: "none", animation: "sharinganSpin 18s linear infinite" }} />
        <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", border: "1px dashed rgba(129,140,248,0.08)", pointerEvents: "none", animation: "sharinganSpinReverse 24s linear infinite" }} />

        {/* Hologram scan lines overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(56,189,248,0.015) 3px, rgba(56,189,248,0.015) 4px)", pointerEvents: "none", zIndex: 10, borderRadius: 8 }} />

        {/* 3D scene */}
        <div style={{ perspective: 900, perspectiveOrigin: "50% 50%", cursor: "grab" }}>
            <div style={{
            width: S * 2, height: S * 2,
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            transition: isDragging.current ? "none" : "transform 0.05s linear",
            position: "relative",
            }}>
            {faces.map((f, i) => (
                <div key={i} style={{
                position: "absolute",
                width: S * 2, height: S * 2,
                transform: f.transform,
                background: f.bg,
                border: `1px solid ${f.border}`,
                borderRadius: 8,
                backdropFilter: "blur(4px)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
                boxShadow: `inset 0 0 40px ${f.border.replace("0.5", "0.08")}, 0 0 20px ${f.border.replace("0.5", "0.15")}`,
                }}>
                {/* Grid lines on face */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${f.border.replace("0.5","0.12")} 1px, transparent 1px), linear-gradient(90deg, ${f.border.replace("0.5","0.12")} 1px, transparent 1px)`, backgroundSize: "32px 32px", borderRadius: 8 }} />
                {/* Corner accents */}
                {[[0,0],[1,0],[0,1],[1,1]].map(([cx,cy],ci) => (
                    <div key={ci} style={{ position: "absolute", top: cy ? "auto" : 8, bottom: cy ? 8 : "auto", left: cx ? "auto" : 8, right: cx ? 8 : "auto", width: 14, height: 14, borderTop: cy ? "none" : `2px solid ${f.border}`, borderBottom: cy ? `2px solid ${f.border}` : "none", borderLeft: cx ? "none" : `2px solid ${f.border}`, borderRight: cx ? `2px solid ${f.border}` : "none" }} />
                ))}
                <div style={{ fontSize: 40, position: "relative", zIndex: 1, filter: `drop-shadow(0 0 12px ${f.border})` }}>{f.icon}</div>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 16, fontWeight: 700, letterSpacing: "0.08em", color: "#fff", position: "relative", zIndex: 1, textShadow: `0 0 14px ${f.border}, 0 2px 4px rgba(0,0,0,0.6)`, textAlign: "center", padding: "0 10px", lineHeight: 1.6 }}>{f.label}</div>
                </div>
            ))}

            {/* Center glow core */}
            <div style={{ position: "absolute", top: "50%", left: "50%", width: 30, height: 30, transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.9), rgba(56,189,248,0.6), transparent)", boxShadow: "0 0 30px rgba(56,189,248,0.8), 0 0 60px rgba(56,189,248,0.4)", animation: "sharinganGlow 2s ease-in-out infinite" }} />
            </div>
        </div>

        {/* Name tag below */}
        <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, textAlign: "center" }}>
            <div style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: 13, color: "rgba(56,189,248,0.9)", letterSpacing: "0.2em", textShadow: "0 0 16px rgba(56,189,248,0.7)" }}>UJJWAL NARAYAN</div>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: "rgba(148,163,184,0.7)", letterSpacing: "0.18em", marginTop: 4 }}>DRAG TO ROTATE</div>
        </div>
        </div>
    );
    };

    // ─── Card3D ──────────────────────────────────────────────────────────────────
    const Card3D = ({ children, style, intensity = 14 }) => {
    const ref = useRef(null);
    const onMove = e => { const el = ref.current; if (!el) return; const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5; el.style.transform = `perspective(700px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.03)`; };
    const onLeave = () => { if (ref.current) ref.current.style.transform = "perspective(700px) rotateY(0) rotateX(0) scale(1)"; };
    return <div ref={ref} className="card-3d" onMouseMove={onMove} onMouseLeave={onLeave} style={{ transformStyle: "preserve-3d", ...style }}>{children}</div>;
    };

    // ─── Navbar ──────────────────────────────────────────────────────────────────
    const navItems = ["home", "about", "skills", "projects", "contact"];
    const Navbar = ({ page, setPage, party, setParty }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => { const h = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
    return (
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(6,10,18,0.85)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? "1px solid var(--border)" : "none", transition: "all 0.4s", padding: "0 clamp(16px,4vw,64px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div onClick={() => setPage("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg,var(--accent),var(--accent2))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 14, color: "#fff", boxShadow: "0 0 16px var(--glow)" }}>UN</div>
            <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: "var(--text)" }}>Ujjwal<span style={{ color: "var(--accent)" }}>.</span></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="desktop-nav">
            {navItems.map(n => (
                <span key={n} onClick={() => setPage(n)} style={{ cursor: "pointer", padding: "8px 16px", borderRadius: 8, fontFamily: "'Space Mono',monospace", fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", color: page === n ? "#fff" : "var(--text2)", background: page === n ? "linear-gradient(135deg,var(--accent),var(--accent2))" : "transparent", boxShadow: page === n ? "0 0 14px var(--glow)" : "none", border: "1.5px solid transparent", transition: "all 0.25s ease" }}
                onMouseEnter={e => { if (page !== n) { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "rgba(56,189,248,0.08)"; e.currentTarget.style.border = "1.5px solid var(--border)"; } }}
                onMouseLeave={e => { if (page !== n) { e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.border = "1.5px solid transparent"; } }}>
                {n.charAt(0).toUpperCase() + n.slice(1)}
                </span>
            ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={() => setParty(true)} title="Rain" style={{ background: "none", border: "1.5px solid var(--border)", borderRadius: 8, width: 38, height: 38, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", color: "var(--accent)", padding: 0 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.5 11a3 3 0 0 1-.2-6 4 4 0 0 1 7.8-1A2.5 2.5 0 0 1 13.5 9H4.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none" /><line x1="5" y1="13" x2="4" y2="16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><line x1="9" y1="13" x2="8" y2="16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><line x1="13" y1="13" x2="12" y2="16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
            </button>
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "1.5px solid var(--border)", borderRadius: 8, width: 38, height: 38, cursor: "pointer", fontSize: 16, display: "none", alignItems: "center", justifyContent: "center", color: "var(--text)" }}>☰</button>
            </div>
        </div>
        {menuOpen && (
            <div style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)", padding: "16px clamp(16px,4vw,64px)", display: "flex", flexDirection: "column", gap: 12 }}>
            {navItems.map(n => (<span key={n} style={{ cursor: "pointer", padding: "8px 0", fontFamily: "'Space Mono',monospace", fontSize: 13, color: page === n ? "var(--accent)" : "var(--text2)" }} onClick={() => { setPage(n); setMenuOpen(false); }}>{n.charAt(0).toUpperCase() + n.slice(1)}</span>))}
            </div>
        )}
        </nav>
    );
    };

    // ─── HOME PAGE ───────────────────────────────────────────────────────────────
    const HomePage = ({ setPage }) => {
    const roles = ["Full-Stack Developer", "React Enthusiast", "Problem Solver", "UI/UX Designer"];
    const [roleIdx, setRoleIdx] = useState(0); const [displayed, setDisplayed] = useState(""); const [typing, setTyping] = useState(true);
    useEffect(() => { let t; const target = roles[roleIdx]; if (typing) { if (displayed.length < target.length) { t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80); } else { t = setTimeout(() => setTyping(false), 1800); } } else { if (displayed.length > 0) { t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40); } else { setRoleIdx(p => (p + 1) % roles.length); setTyping(true); } } return () => clearTimeout(t); }, [displayed, typing, roleIdx]);
    return (
        <section className="section-enter" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Particles />
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "20%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(56,189,248,0.08),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "20%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(129,140,248,0.08),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px clamp(16px,4vw,64px) 60px", position: "relative", zIndex: 1, width: "100%", display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 13, color: "var(--accent)", letterSpacing: "0.2em", marginBottom: 16, animation: "fadeUp 0.5s ease both" }}>&lt; Hello, World! /&gt;</div>
            <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(32px,6vw,68px)", fontWeight: 900, letterSpacing: "0.04em", lineHeight: 1.1, marginBottom: 16, animation: "fadeUp 0.6s 0.1s ease both" }}>I'm <span style={{ background: "linear-gradient(135deg,var(--accent),var(--accent2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Ujjwal</span><br />Narayan</h1>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "clamp(14px,2vw,18px)", color: "var(--text2)", marginBottom: 28, height: 28, animation: "fadeUp 0.6s 0.2s ease both" }}><span style={{ color: "var(--accent3)" }}>&gt; </span>{displayed}<span style={{ animation: "blink 1s infinite", color: "var(--accent)" }}>|</span></div>
            <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.8, maxWidth: 520, marginBottom: 36, animation: "fadeUp 0.6s 0.3s ease both" }}>3rd year B.Tech CSE student at LPU with a passion for building scalable full-stack apps. 500+ coding problems solved. CGPA 8.62.</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "fadeUp 0.6s 0.4s ease both" }}>
                <button className="btn-primary" onClick={() => setPage("projects")}>🚀 View Projects</button>
                <button className="btn-ghost" onClick={() => setPage("contact")}>📬 Contact Me</button>
            </div>
            <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap", animation: "fadeUp 0.6s 0.48s ease both" }}>
                {[
                { label: "GitHub", url: "https://github.com/UJJWAL-7777", color: "#818cf8", icon: "🐙" },
                { label: "LinkedIn", url: "https://www.linkedin.com/in/ujjwalnarayan", color: "#0077b5", icon: "💼" },
                { label: "LeetCode", url: "https://leetcode.com/u/UjWaL_N/", color: "#f89f1b", icon: "⚡" },
                ].map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 18px", background: "var(--surface)", border: `1px solid ${s.color}30`, borderRadius: 10, textDecoration: "none", color: "var(--text2)", fontFamily: "'Space Mono',monospace", fontSize: 12, transition: "all 0.3s", letterSpacing: "0.04em" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.color = s.color; e.currentTarget.style.boxShadow = `0 0 16px ${s.color}44`; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = `${s.color}30`; e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                    <span>{s.icon}</span>{s.label}
                </a>
                ))}
            </div>
            <div style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap", animation: "fadeUp 0.6s 0.5s ease both" }}>
                {[["500+", "Problems Solved"], ["8.62", "CGPA"], ["4★", "HackerRank C++"]].map(([n, l]) => (
                <div key={l} style={{ padding: "14px 20px", borderRadius: 12, cursor: "default", border: "1px solid rgba(56,189,248,0.12)", transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = "rgba(56,189,248,0.07)"; e.currentTarget.style.boxShadow = "0 0 24px var(--glow)"; e.currentTarget.style.borderColor = "rgba(56,189,248,0.4)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(56,189,248,0.12)"; }}>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 28, fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--text2)", marginTop: 4 }}>{l}</div>
                </div>
                ))}
            </div>
            </div>
            <div style={{ flex: "0 0 auto", animation: "fadeUp 0.6s 0.3s ease both", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
            {/* Label above cube */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(56,189,248,0.06)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: 30, padding: "8px 20px", backdropFilter: "blur(8px)" }}>
                <span style={{ fontSize: 16 }}>🎓</span>
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.16em", fontWeight: 700 }}>STUDENT LIFE</span>
                <span style={{ fontSize: 16 }}>✨</span>
                </div>
                {/* Animated arrow pointing down */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 6, animation: "pulse 1.5s ease-in-out infinite" }}>
                <div style={{ width: 1.5, height: 16, background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M1 1 L7 7 L13 1" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
            </div>
            <CosmicCard />
            </div>
        </div>
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "pulse 2s infinite" }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: "var(--text2)", letterSpacing: "0.15em" }}>SCROLL</div>
            <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom,var(--accent),transparent)" }} />
        </div>
        </section>
    );
    };

    // ─── 3D ABOUT PAGE ───────────────────────────────────────────────────────────
    const AboutPage = () => {
    const [activeCard, setActiveCard] = useState(null);
    const timelineItems = [
        { school: "Lovely Professional University", deg: "B.Tech CSE • CGPA: 8.62", period: "Aug 2023 – Present", icon: "🏛️", color: "#38bdf8" },
        { school: "Adarsh Vikas Vidyalaya", deg: "Intermediate • 88%", period: "Apr 2021 – Mar 2022", icon: "📚", color: "#818cf8" },
        { school: "Dr Dy Patil International School", deg: "Matriculation • 94.4%", period: "Apr 2019 – Mar 2020", icon: "🏫", color: "#34d399" },
    ];
    const achievements = [
        { icon: "⚡", title: "500+ Problems Solved", desc: "250+ on LeetCode + other platforms", color: "#f59e0b" },
        { icon: "🌟", title: "4-Star HackerRank", desc: "C++ proficiency demonstrated", color: "#38bdf8" },
        { icon: "🎯", title: "CodeChef 1107", desc: "Highest competitive coding rating", color: "#34d399" },
        { icon: "☁️", title: "Oracle OCI Certified", desc: "Cloud Infrastructure certified", color: "#818cf8" },
    ];
    const certs = [
        { name: "Oracle Cloud Infrastructure", org: "Oracle", date: "Sep 2025", color: "#f97316", url: "https://drive.google.com/file/d/1aoCb8t69H3L2rhCrNR4ZuBcO4ztk-Z3l/view?usp=sharing" },
        { name: "Generative AI", org: "Udemy", date: "Aug 2025", color: "#38bdf8", url: "https://drive.google.com/file/d/1nPE8fQdYXagbEnGMYQ72Hjidj622Ruwj/view?usp=sharing" },
        { name: "Prompt Engineering", org: "Infosys Springboard", date: "Aug 2025", color: "#818cf8", url: "https://drive.google.com/file/d/1z3V67N3IF9TGogXmX310CNRq1jxyluqJ/view?usp=sharing" },
        { name: "UI/UX Design with Figma", org: "Summer Training", date: "Jul 2025", color: "#34d399", url: "https://drive.google.com/file/d/1EKdiHRT_maAxizfdc-JC4fYDQri9Biky/view?usp=sharing" },
        { name: "Cloud Computing", org: "NPTEL", date: "Apr 2025", color: "#fbbf24", url: "https://drive.google.com/file/d/1KWXvzFwYAuAkHqn6FpB6jzCx0f-dQeuE/view?usp=sharing" },
        { name: "Computer Networking", org: "Google (Coursera)", date: "Sep 2024", color: "#fb7185", url: "https://drive.google.com/file/d/1M0kyoxe3t1mtimxFX1ctNFkcjlYuwMft/view?usp=sharing" },
    ];

    return (
        <section className="section-enter" style={{ minHeight: "100vh", padding: "120px clamp(16px,4vw,64px) 80px", position: "relative", overflow: "hidden" }}>
        {/* 3D ambient orbs */}
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.04), transparent 65%)", animation: "float 8s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "3%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(129,140,248,0.05), transparent 65%)", animation: "float2 6s ease-in-out infinite", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ marginBottom: 64 }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.2em", marginBottom: 12 }}>// ABOUT_ME</div>
            <h2 className="section-title">Who Am I?</h2>
            </div>

            {/* ── Education 3D Timeline ── */}
            <div style={{ marginBottom: 64 }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, color: "var(--text2)", letterSpacing: "0.15em", marginBottom: 28 }}>01 · EDUCATION PATH</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
                {/* Vertical line */}
                <div style={{ position: "absolute", left: 31, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, var(--accent), var(--accent2), var(--accent3))", opacity: 0.3, borderRadius: 1 }} />
                {timelineItems.map((e, i) => (
                <div key={e.school}
                    style={{ display: "flex", gap: 24, marginBottom: 28, position: "relative", animation: `fadeUp 0.6s ${i * 0.15}s ease both` }}>
                    {/* Timeline node */}
                    <div style={{ flexShrink: 0, width: 64, height: 64, borderRadius: "50%", background: `radial-gradient(circle, ${e.color}22, ${e.color}08)`, border: `2px solid ${e.color}66`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, zIndex: 1, boxShadow: `0 0 20px ${e.color}44, 0 0 40px ${e.color}22`, transition: "all 0.3s", cursor: "default" }}
                    onMouseEnter={ev => { ev.currentTarget.style.transform = "scale(1.15)"; ev.currentTarget.style.boxShadow = `0 0 30px ${e.color}88`; }}
                    onMouseLeave={ev => { ev.currentTarget.style.transform = "scale(1)"; ev.currentTarget.style.boxShadow = `0 0 20px ${e.color}44`; }}>
                    {e.icon}
                    </div>
                    {/* Card */}
                    <Card3D intensity={8} style={{ flex: 1 }}>
                    <div style={{ background: "var(--surface)", border: `1px solid ${e.color}22`, borderLeft: `3px solid ${e.color}`, borderRadius: 16, padding: "20px 24px", transition: "all 0.3s", boxShadow: `0 4px 30px ${e.color}0a` }}
                        onMouseEnter={ev => { ev.currentTarget.style.borderColor = `${e.color}55`; ev.currentTarget.style.boxShadow = `0 8px 40px ${e.color}22, 0 0 0 1px ${e.color}22`; }}
                        onMouseLeave={ev => { ev.currentTarget.style.borderColor = `${e.color}22`; ev.currentTarget.style.boxShadow = `0 4px 30px ${e.color}0a`; }}>
                        <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 4 }}>{e.school}</div>
                        <div style={{ fontSize: 13, color: e.color, marginBottom: 6, fontWeight: 600 }}>{e.deg}</div>
                        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--text2)" }}>{e.period}</div>
                    </div>
                    </Card3D>
                </div>
                ))}
            </div>
            </div>

            {/* ── Achievements 3D Grid ── */}
            <div style={{ marginBottom: 64 }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, color: "var(--text2)", letterSpacing: "0.15em", marginBottom: 28 }}>02 · ACHIEVEMENTS</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
                {achievements.map((a, i) => (
                <Card3D key={a.title} intensity={16} style={{ animation: `fadeUp 0.6s ${0.3 + i * 0.1}s ease both` }}>
                    <div style={{
                    background: "var(--surface)", border: `1px solid ${a.color}22`, borderRadius: 20, padding: 24,
                    position: "relative", overflow: "hidden", cursor: "default",
                    boxShadow: `0 0 30px ${a.color}08`,
                    transition: "all 0.3s",
                    }}
                    onMouseEnter={ev => { ev.currentTarget.style.boxShadow = `0 0 40px ${a.color}30, 0 0 80px ${a.color}12`; ev.currentTarget.style.borderColor = `${a.color}55`; }}
                    onMouseLeave={ev => { ev.currentTarget.style.boxShadow = `0 0 30px ${a.color}08`; ev.currentTarget.style.borderColor = `${a.color}22`; }}>
                    {/* BG glow blob */}
                    <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: a.color, opacity: 0.06, pointerEvents: "none" }} />
                    <div style={{ fontSize: 32, marginBottom: 12 }}>{a.icon}</div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 6 }}>{a.title}</div>
                    <div style={{ fontSize: 12, color: "var(--text2)" }}>{a.desc}</div>
                    {/* Bottom accent line */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${a.color}, transparent)`, opacity: 0.6 }} />
                    </div>
                </Card3D>
                ))}
            </div>
            </div>

            {/* ── Certifications 3D List ── */}
            <div style={{ marginBottom: 64 }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, color: "var(--text2)", letterSpacing: "0.15em", marginBottom: 28 }}>03 · CERTIFICATIONS</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
                {certs.map((c, i) => (
                <Card3D key={c.name} intensity={10} style={{ animation: `fadeUp 0.5s ${0.4 + i * 0.08}s ease both` }}>
                    <a href={c.url} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 20px", background: "var(--surface)", border: `1px solid ${c.color}18`, borderRadius: 14, cursor: "pointer", transition: "all 0.3s", textDecoration: "none" }}
                    onMouseEnter={ev => { ev.currentTarget.style.borderColor = `${c.color}66`; ev.currentTarget.style.transform = "translateX(6px)"; ev.currentTarget.style.boxShadow = `0 0 24px ${c.color}33`; }}
                    onMouseLeave={ev => { ev.currentTarget.style.borderColor = `${c.color}18`; ev.currentTarget.style.transform = "none"; ev.currentTarget.style.boxShadow = "none"; }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: c.color, boxShadow: `0 0 8px ${c.color}`, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{c.name}</div>
                        <div style={{ fontSize: 11, color: "var(--text2)", fontFamily: "'Space Mono',monospace" }}>{c.org}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: c.color, background: `${c.color}12`, padding: "3px 8px", borderRadius: 6, border: `1px solid ${c.color}30`, whiteSpace: "nowrap" }}>{c.date}</div>
                        <div style={{ fontSize: 14 }}>🔗</div>
                    </div>
                    </a>
                </Card3D>
                ))}
            </div>
            </div>

            {/* ── Connect ── */}
            <div style={{ textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22, marginBottom: 24, color: "var(--text)" }}>Let's Connect</h3>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                {[{ icon: "💼", label: "LinkedIn", url: "https://www.linkedin.com/in/ujjwalnarayan", color: "#0077b5" }, { icon: "🐙", label: "GitHub", url: "https://github.com/UJJWAL-7777", color: "#6e40c9" }, { icon: "✉️", label: "Email", url: "mailto:unarayan2004@gmail.com", color: "#ea4335" }].map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 24px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, textDecoration: "none", color: "var(--text)", fontFamily: "'Space Mono',monospace", fontSize: 13, transition: "all 0.3s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.boxShadow = `0 0 20px ${s.color}44`; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                    <span style={{ fontSize: 18 }}>{s.icon}</span>{s.label}
                </a>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
    };

    // ─── 3D SKILLS PAGE ──────────────────────────────────────────────────────────
    const SkillOrb = ({ skill, level, color, delay, index }) => {
    const [animate, setAnimate] = useState(false);
    const [hovered, setHovered] = useState(false);
    useEffect(() => { const t = setTimeout(() => setAnimate(true), delay); return () => clearTimeout(t); }, [delay]);
    const radius = 38 + (level / 100) * 18;
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, animation: `fadeUp 0.6s ${delay / 1000}s ease both`, cursor: "default" }}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div style={{ position: "relative", width: radius * 2 + 20, height: radius * 2 + 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Outer ring */}
            <svg width={radius * 2 + 20} height={radius * 2 + 20} style={{ position: "absolute" }}>
            <circle cx={radius + 10} cy={radius + 10} r={radius} fill="none" stroke={`${color}22`} strokeWidth="3" />
            <circle cx={radius + 10} cy={radius + 10} r={radius} fill="none" stroke={color} strokeWidth="3"
                strokeDasharray={`${animate ? (level / 100) * 2 * Math.PI * radius : 0} ${2 * Math.PI * radius}`}
                strokeDashoffset={2 * Math.PI * radius * 0.25}
                strokeLinecap="round"
                style={{ transition: "stroke-dasharray 1.5s cubic-bezier(0.4,0,0.2,1)", filter: `drop-shadow(0 0 6px ${color})` }} />
            </svg>
            {/* Core orb */}
            <div style={{
            width: radius * 1.1, height: radius * 1.1, borderRadius: "50%",
            background: `radial-gradient(circle at 35% 35%, ${color}44, ${color}11, transparent)`,
            border: `1.5px solid ${color}44`,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: hovered ? `0 0 30px ${color}88, 0 0 60px ${color}44` : `0 0 12px ${color}44`,
            transition: "all 0.3s",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 13, fontWeight: 700, color, textShadow: `0 0 8px ${color}` }}>{level}%</div>
            </div>
        </div>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 12, color: hovered ? color : "var(--text2)", textAlign: "center", transition: "color 0.3s", letterSpacing: "0.04em" }}>{skill}</div>
        </div>
    );
    };

    const SkillsPage = () => {
    const groups = [
        { title: "Languages", icon: "⌨️", color: "#38bdf8", skills: [{ n: "JavaScript", l: 88, c: "#f7df1e" }, { n: "C/C++", l: 82, c: "#659ad2" }, { n: "Python", l: 74, c: "#3572A5" }, { n: "Java", l: 68, c: "#b07219" }, { n: "PHP", l: 60, c: "#777bb4" }] },
        { title: "Frameworks", icon: "🧩", color: "#818cf8", skills: [{ n: "React.js", l: 90, c: "#61dafb" }, { n: "Node.js", l: 85, c: "#68a063" }, { n: "Express.js", l: 83, c: "#38bdf8" }, { n: "Tailwind CSS", l: 88, c: "#06b6d4" }, { n: "Bootstrap", l: 75, c: "#7952b3" }] },
        { title: "Tools & DB", icon: "🛠️", color: "#34d399", skills: [{ n: "MongoDB", l: 82, c: "#47a248" }, { n: "MySQL", l: 74, c: "#4479a1" }, { n: "Git/GitHub", l: 88, c: "#f05032" }, { n: "Redis", l: 65, c: "#dc382d" }, { n: "Firebase", l: 70, c: "#ffca28" }] },
        { title: "Design & Misc", icon: "🎨", color: "#f97316", skills: [{ n: "Figma", l: 78, c: "#f24e1e" }, { n: "REST APIs", l: 88, c: "#34d399" }, { n: "JWT Auth", l: 82, c: "#818cf8" }, { n: "Cloudinary", l: 70, c: "#3448c5" }, { n: "Postman", l: 80, c: "#ff6c37" }] },
    ];

    return (
        <section className="section-enter" style={{ minHeight: "100vh", padding: "120px clamp(16px,4vw,64px) 80px", position: "relative", overflow: "hidden" }}>
        {/* 3D floating background elements */}
        <div style={{ position: "absolute", top: "5%", left: "50%", transform: "translateX(-50%)", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.03), transparent 60%)", animation: "float3 10s ease-in-out infinite", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ marginBottom: 64 }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.2em", marginBottom: 12 }}>// SKILLS_MATRIX</div>
            <h2 className="section-title">Tech Arsenal</h2>
            </div>

            {/* 3D Category Cards with Orb Skills */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
            {groups.map((g, gi) => (
                <Card3D key={g.title} intensity={12} style={{ animation: `fadeUp 0.6s ${gi * 0.12}s ease both` }}>
                <div style={{
                    background: "var(--surface)", border: `1px solid ${g.color}22`, borderRadius: 24, padding: 32,
                    position: "relative", overflow: "hidden",
                    boxShadow: `0 4px 40px ${g.color}0a`,
                    transition: "box-shadow 0.3s",
                }}
                    onMouseEnter={ev => { ev.currentTarget.style.boxShadow = `0 8px 60px ${g.color}20, 0 0 0 1px ${g.color}33`; }}
                    onMouseLeave={ev => { ev.currentTarget.style.boxShadow = `0 4px 40px ${g.color}0a`; }}>
                    {/* Decorative corner */}
                    <div style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, borderRadius: "50%", background: g.color, opacity: 0.06 }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${g.color}88, transparent)` }} />

                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${g.color}18`, border: `1px solid ${g.color}33`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, boxShadow: `0 0 16px ${g.color}22` }}>{g.icon}</div>
                    <div>
                        <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, color: "var(--text)" }}>{g.title}</h3>
                        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: g.color, letterSpacing: "0.1em" }}>{g.skills.length} TECHNOLOGIES</div>
                    </div>
                    </div>

                    {/* Orb Grid */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                    {g.skills.map((s, si) => (
                        <SkillOrb key={s.n} skill={s.n} level={s.l} color={s.c} delay={gi * 120 + si * 80} index={gi * 5 + si} />
                    ))}
                    </div>
                </div>
                </Card3D>
            ))}
            </div>

            {/* 3D floating tech badges */}
            <div style={{ marginTop: 56 }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--text2)", letterSpacing: "0.15em", marginBottom: 20, textAlign: "center" }}>FULL STACK · ACROSS THE BOARD</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
                {["⚛️ React", "🟢 Node", "🍃 MongoDB", "🔥 Firebase", "🐙 GitHub", "🎨 Figma", "☁️ Redis", "🔑 JWT", "💿 MySQL", "📦 Express"].map((t, i) => (
                <div key={t} style={{ padding: "8px 18px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, fontSize: 13, color: "var(--text)", fontFamily: "'Space Mono',monospace", transition: "all 0.3s", cursor: "default", animation: `fadeUp 0.5s ${0.5 + i * 0.05}s ease both` }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 16px var(--glow), 0 -4px 0 0 var(--accent)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>{t}</div>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
    };

    // ─── 3D PROJECTS PAGE ────────────────────────────────────────────────────────
    const ProjectCard3D = ({ project, index }) => {
    const ref = useRef(null);
    const [flipped, setFlipped] = useState(false);

    const onMove = e => {
        if (flipped) return;
        const el = ref.current; if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${x * 16}deg) rotateX(${-y * 12}deg)`;
    };
    const onLeave = () => { if (ref.current && !flipped) ref.current.style.transform = "perspective(900px) rotateY(0) rotateX(0)"; };

    const p = project;
    return (
        <div style={{ animation: `fadeUp 0.7s ${index * 0.15}s ease both`, perspective: 1000 }}>
        <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
            style={{ transformStyle: "preserve-3d", transition: "transform 0.15s ease", position: "relative" }}>
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 24, overflow: "hidden", boxShadow: `0 0 40px ${p.glow}`, display: "flex", flexDirection: "column", position: "relative" }}>
            {/* Top color bar */}
            <div style={{ height: 4, background: `linear-gradient(90deg, ${p.color}, ${p.color}66, transparent)` }} />

            <div style={{ padding: "28px 28px 0" }}>
                {/* Decorative 3D elements */}
                <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: p.color, opacity: 0.06, pointerEvents: "none" }} />
                {/* 3D depth shadow element */}
                <div style={{ position: "absolute", top: 20, left: 20, width: "calc(100% - 40px)", height: "calc(100% - 40px)", borderRadius: 20, boxShadow: `inset 0 0 60px ${p.color}06`, pointerEvents: "none" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: `linear-gradient(135deg,${p.color}22,${p.color}44)`, border: `1px solid ${p.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, boxShadow: `0 8px 24px ${p.color}22, 0 0 0 1px ${p.color}22` }}>{p.icon}</div>
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: p.color, background: `${p.color}15`, padding: "4px 10px", borderRadius: 20, border: `1px solid ${p.color}33` }}>{p.period}</span>
                </div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 22, color: "var(--text)", marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 12, color: p.color, fontFamily: "'Space Mono',monospace", marginBottom: 14, letterSpacing: "0.04em" }}>{p.subtitle}</p>
                <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.7, marginBottom: 18 }}>{p.desc}</p>
            </div>

            {/* Features */}
            <div style={{ padding: "0 28px", marginBottom: 16 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 10px", background: `${p.color}10`, border: `1px solid ${p.color}30`, borderRadius: 6, fontSize: 11, color: p.color }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: p.color }} />{f}
                    </div>
                ))}
                </div>
            </div>

            {/* Stack */}
            <div style={{ padding: "0 28px", marginBottom: 24 }}>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: "var(--text2)", marginBottom: 8, letterSpacing: "0.12em" }}>TECH STACK</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {p.stack.map(s => <span key={s} className="tag" style={{ color: p.color, borderColor: `${p.color}33`, background: `${p.color}0d`, fontSize: 10 }}>{s}</span>)}
                </div>
            </div>

            {/* Footer */}
            <div style={{ padding: "16px 28px 24px", borderTop: "1px solid var(--border)", display: "flex", gap: 12, alignItems: "center" }}>
                {p.type === "design" && <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, padding: "3px 8px", borderRadius: 20, background: "rgba(249,115,22,0.1)", color: "#f97316", border: "1px solid rgba(249,115,22,0.3)", letterSpacing: "0.08em" }}>UI/UX</span>}
                {p.type === "fullstack" && <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, padding: "3px 8px", borderRadius: 20, background: "rgba(56,189,248,0.1)", color: "var(--accent)", border: "1px solid rgba(56,189,248,0.25)", letterSpacing: "0.08em" }}>FULLSTACK</span>}
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost" style={{ flex: 1, justifyContent: "center", textDecoration: "none", borderColor: p.color, color: p.color, fontSize: 12, padding: "10px 20px" }}>
                {p.githubLabel || "🐙 GitHub"}
                </a>
            </div>

            {/* Scan line effect */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", borderRadius: 24, opacity: 0.03 }}>
                <div style={{ position: "absolute", left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`, animation: "scanLine 3s linear infinite" }} />
            </div>
            </div>
        </div>
        </div>
    );
    };

    const ProjectsPage = () => {
    const projects = [
        { title: "SmartDiet", subtitle: "AI-Based Diet & Growth Tracking Platform", desc: "Full-stack diet management system enabling users to track calories, BMI, and long-term health growth through interactive dashboards with AI-driven diet scores.", stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Chatbase.io", "NodeMailer", "JWT"], icon: "🥗", color: "#34d399", glow: "rgba(52,211,153,0.2)", github: "https://github.com/UJJWAL-7777", githubLabel: "🐙 GitHub", period: "Dec 2025", type: "fullstack", features: ["AI Diet Scoring", "BMI Tracking", "Email Workflows", "Interactive Dashboards"] },
        { title: "CodeBlack", subtitle: "Full-Stack Competitive Coding Platform", desc: "Competitive coding platform where users can code, chat with AI, and solve algorithmic challenges. Features real-time execution via Judge0 API with Redis-optimized backend.", stack: ["React.js", "Node.js", "Express.js", "Mongoose", "Redis", "Judge0 API", "Monaco Editor", "Cloudinary"], icon: "⚔️", color: "#818cf8", glow: "rgba(129,140,248,0.2)", github: "https://github.com/UJJWAL-7777", githubLabel: "🐙 GitHub", period: "Sep 2025", type: "fullstack", features: ["Online Code Execution", "AI Chat Integration", "JWT Auth + RBAC", "Redis Caching"] },
        { title: "Voyagist", subtitle: "Mobile UI Design — Tour Guide Booking App", desc: "A complete mobile UI/UX design for a tour guide booking platform built for tourists to discover, browse, and book local tour guides. Designed with a rich travel-inspired aesthetic in Figma.", stack: ["Figma", "UI/UX Design", "Prototyping", "Mobile-First", "Design Systems", "Component Library"], icon: "🧭", color: "#f97316", glow: "rgba(249,115,22,0.2)", github: "https://www.figma.com/design/QoJplchAu79dOQB7eN6SdD/SummerProject?node-id=0-1&t=cc8W43JaMb6juRTA-1", githubLabel: "🎨 View in Figma", period: "Jul 2025", type: "design", features: ["Guide Discovery", "Booking Flow", "Interactive Prototype", "Mobile UI Design"] },
    ];
    return (
        <section className="section-enter" style={{ minHeight: "100vh", padding: "120px clamp(16px,4vw,64px) 80px", position: "relative", overflow: "hidden" }}>
        {/* 3D perspective background grid */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)", backgroundSize: "60px 60px", transform: "perspective(600px) rotateX(60deg)", transformOrigin: "bottom center", opacity: 0.2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(129,140,248,0.06), transparent 65%)", animation: "float 7s ease-in-out infinite", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ marginBottom: 64 }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.2em", marginBottom: 12 }}>// FEATURED_WORK</div>
            <h2 className="section-title">Projects</h2>
            <p style={{ color: "var(--text2)", fontSize: 14, marginTop: 12, fontFamily: "'Space Mono',monospace", letterSpacing: "0.05em" }}>HOVER TO EXPLORE · CLICK LINKS TO VIEW</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
            {projects.map((p, i) => <ProjectCard3D key={p.title} project={p} index={i} />)}
            </div>

            {/* Training card */}
            <div style={{ marginTop: 48, animation: "fadeUp 0.7s 0.5s ease both" }}>
            <Card3D intensity={8}>
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: 36, display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(251,191,36,0.02), transparent)", pointerEvents: "none" }} />
                <div style={{ width: 64, height: 64, borderRadius: 14, background: "linear-gradient(135deg,rgba(251,191,36,0.2),rgba(251,191,36,0.4))", border: "1px solid rgba(251,191,36,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, flexShrink: 0, boxShadow: "0 8px 32px rgba(251,191,36,0.2)" }}>🎨</div>
                <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 20, color: "var(--text)" }}>UI/UX Design Training</h3>
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--accent)" }}>Jun–Jul 2025</span>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.7 }}>Hands-on UI/UX training in wireframing, prototyping, and interactive design with Figma. Crafted user-centered interfaces and gained practical experience with design systems, layout grids, typography, and component libraries.</p>
                </div>
                </div>
            </Card3D>
            </div>
        </div>
        </section>
    );
    };

    // ─── 3D CONTACT PAGE ─────────────────────────────────────────────────────────
    const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE"; // ← paste your Web3Forms key here

    const ContactPage = () => {
    const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const formRef             = useRef(null);

    const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const { name, email, subject, message } = form;
        if (!name.trim() || !email.trim() || !message.trim()) {
        alert("Please fill in your name, email and message."); return;
        }
        setStatus("sending");
        try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            name, email,
            subject: subject || `Portfolio message from ${name}`,
            message,
            from_name: "Portfolio Contact Form",
            }),
        });
        const data = await res.json();
        if (data.success) {
            setStatus("success");
            setForm({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } else {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
        } catch {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const contacts = [
        { icon: "✉️", label: "Email", value: "unarayan2004@gmail.com", href: "mailto:unarayan2004@gmail.com", color: "#ea4335" },
        { icon: "📱", label: "Phone", value: "+91-9304094991", href: "tel:+919304094991", color: "#34d399" },
        { icon: "💼", label: "LinkedIn", value: "ujjwalnarayan", href: "https://www.linkedin.com/in/ujjwalnarayan", color: "#0077b5" },
        { icon: "🐙", label: "GitHub", value: "UJJWAL-7777", href: "https://github.com/UJJWAL-7777", color: "#818cf8" },
    ];

    return (
        <section className="section-enter" style={{ minHeight: "100vh", padding: "120px clamp(16px,4vw,64px) 80px", position: "relative", overflow: "hidden" }}>
        {/* 3D BG elements */}
        <div style={{ position: "absolute", top: "15%", right: "8%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.05), transparent 65%)", animation: "float2 9s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(129,140,248,0.05), transparent 65%)", animation: "float 7s ease-in-out infinite", pointerEvents: "none" }} />

        {/* Decorative 3D grid plane */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "40%", backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)", backgroundSize: "50px 50px", transform: "perspective(500px) rotateX(-55deg)", transformOrigin: "top center", opacity: 0.12, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ marginBottom: 64 }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.2em", marginBottom: 12 }}>// GET_IN_TOUCH</div>
            <h2 className="section-title">Contact Me</h2>
            <p style={{ color: "var(--text2)", fontSize: 15, marginTop: 16, maxWidth: 480 }}>Have a project in mind or want to collaborate? Drop me a message!</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
            {/* Contact info */}
            <div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, color: "var(--text)", marginBottom: 24 }}>Let's talk 👋</div>
                {contacts.map((c, i) => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 16, padding: 16, background: "var(--surface)", border: `1px solid ${c.color}18`, borderRadius: 14, marginBottom: 12, textDecoration: "none", transition: "all 0.3s", animation: `fadeUp 0.6s ${i * 0.1}s ease both`, position: "relative", overflow: "hidden" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = c.color; e.currentTarget.style.transform = "translateX(8px)"; e.currentTarget.style.boxShadow = `0 0 24px ${c.color}33`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = `${c.color}18`; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: `${c.color}18`, border: `1px solid ${c.color}33`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0, boxShadow: `0 0 12px ${c.color}22` }}>{c.icon}</div>
                    <div>
                    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: "var(--text2)", letterSpacing: "0.1em" }}>{c.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{c.value}</div>
                    </div>
                    {/* Hover accent */}
                    <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 3, background: c.color, opacity: 0, transition: "opacity 0.3s", borderRadius: "0 14px 14px 0" }} />
                </a>
                ))}

                {/* Availability 3D card */}
                <Card3D intensity={10} style={{ marginTop: 32, animation: "fadeUp 0.6s 0.45s ease both" }}>
                <div style={{ padding: 20, background: "linear-gradient(135deg,rgba(56,189,248,0.06),rgba(129,140,248,0.06))", border: "1px solid var(--border)", borderRadius: 14, position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--accent), var(--accent2))", opacity: 0.6 }} />
                    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: "var(--accent)", marginBottom: 8, letterSpacing: "0.12em" }}>// AVAILABILITY</div>
                    <div style={{ fontSize: 14, color: "var(--text2)" }}>🟢 <span style={{ color: "var(--text)" }}>Open to internships & collaborations!</span></div>
                </div>
                </Card3D>
            </div>

            {/* Form - 3D floating */}
            <div ref={formRef} style={{ animation: "contactFloat 8s ease-in-out infinite, fadeUp 0.7s 0.2s ease both" }}>
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 24, padding: 36, position: "relative", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(56,189,248,0.08)" }}>
                {/* 3D depth layers */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(56,189,248,0.03) 0%, transparent 50%, rgba(129,140,248,0.03) 100%)", pointerEvents: "none", borderRadius: 24 }} />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)", pointerEvents: "none" }} />

                {status === "success" && (
                    <div style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 10, padding: "12px 16px", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                    <span>✅</span><span style={{ fontSize: 13, color: "#34d399" }}>Message sent! I'll get back to you soon.</span>
                    </div>
                )}
                {status === "error" && (
                    <div style={{ background: "rgba(251,113,133,0.1)", border: "1px solid rgba(251,113,133,0.3)", borderRadius: 10, padding: "12px 16px", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                    <span>❌</span><span style={{ fontSize: 13, color: "#fb7185" }}>Something went wrong. Please try again.</span>
                    </div>
                )}

                <div style={{ marginBottom: 20 }}><label>YOUR_NAME</label><input name="name" value={form.name} onChange={onChange} placeholder="John Doe" /></div>
                <div style={{ marginBottom: 20 }}><label>YOUR_EMAIL</label><input name="email" type="email" value={form.email} onChange={onChange} placeholder="john@example.com" /></div>
                <div style={{ marginBottom: 20 }}><label>SUBJECT</label><input name="subject" value={form.subject} onChange={onChange} placeholder="Project Collaboration" /></div>
                <div style={{ marginBottom: 24 }}><label>MESSAGE</label><textarea name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project..." rows={5} style={{ resize: "vertical" }} /></div>
                <button className="btn-primary" onClick={onSubmit} disabled={status === "sending"} style={{ width: "100%", justifyContent: "center", opacity: status === "sending" ? 0.7 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}>
                    {status === "sending" ? "⏳ Sending..." : "🚀 Send Message"}
                </button>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--text2)", textAlign: "center", marginTop: 12 }}>Message goes directly to my inbox</div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    };

    // ─── Footer ───────────────────────────────────────────────────────────────────
    const Footer = ({ setPage }) => (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "32px clamp(16px,4vw,64px)", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: "var(--text)" }}>Ujjwal<span style={{ color: "var(--accent)" }}>.</span></div>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--text2)" }}>© 2025 Ujjwal Narayan · Built with ❤️ & ⚛️ React</div>
        <div style={{ display: "flex", gap: 20 }}>
            {navItems.map(n => (<span key={n} onClick={() => setPage(n)} style={{ cursor: "pointer", fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--text2)", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text2)"}>{n}</span>))}
        </div>
        </div>
    </footer>
    );

    // ─── Floating Theme Button ────────────────────────────────────────────────────
    const FloatingThemeBtn = ({ theme, onToggle }) => {
    const [hovered, setHovered] = useState(false);
    const [spinning, setSpinning] = useState(false);
    const handleClick = () => { setSpinning(true); setTimeout(() => setSpinning(false), 600); onToggle(); };
    return (
        <div style={{ position: "fixed", bottom: 32, right: 32, zIndex: 500, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, letterSpacing: "0.12em", color: "var(--accent)", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(6px)", transition: "all 0.25s ease", whiteSpace: "nowrap" }}>{theme === "dark" ? "LIGHT MODE" : "DARK MODE"}</div>
        <button onClick={handleClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} title="Toggle theme"
            style={{ width: 52, height: 52, borderRadius: "50%", border: "1.5px solid var(--accent)", background: hovered ? "linear-gradient(135deg, var(--accent), var(--accent2))" : "rgba(6,10,18,0.85)", backdropFilter: "blur(12px)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease", boxShadow: hovered ? "0 0 24px var(--glow), 0 0 48px var(--glow)" : "0 0 12px rgba(56,189,248,0.2)", transform: `scale(${hovered ? 1.12 : 1}) rotate(${spinning ? "360deg" : "0deg"})`, color: hovered ? "#fff" : "var(--accent)", padding: 0 }}>
            {theme === "dark" ? (
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M2 13 C6 6, 20 6, 24 13 C20 20, 6 20, 2 13 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
                <circle cx="13" cy="13" r="4.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <circle cx="13" cy="13" r="4.5" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2.2 1.8" fill="none" />
                {[0, 1, 2].map(i => { const a = (i / 3) * Math.PI * 2 - Math.PI / 2; return <circle key={i} cx={13 + Math.cos(a) * 2.8} cy={13 + Math.sin(a) * 2.8} r="0.8" fill="currentColor" />; })}
                <circle cx="13" cy="13" r="1.2" fill="currentColor" />
            </svg>
            ) : (
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M4 13 C8 8, 18 8, 22 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                <path d="M4 13 C8 16, 18 16, 22 13" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />
                {[[7, 11, 6, 9], [10, 9.5, 9.5, 7.5], [13, 9, 13, 7], [16, 9.5, 16.5, 7.5], [19, 11, 20, 9]].map(([x1, y1, x2, y2], i) => (<line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />))}
            </svg>
            )}
        </button>
        </div>
    );
    };

    // ─── APP ROOT ────────────────────────────────────────────────────────────────
    export default function App() {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState("home");
    const [theme, setTheme] = useState("dark");
    const [party, setParty] = useState(false);
    const [txPhase, setTxPhase] = useState("idle");
    const [showEyeTransition, setShowEyeTransition] = useState(false);
    const pendingTheme = useRef(null);
    const pendingPage = useRef(null);

    useEffect(() => { document.documentElement.setAttribute("data-theme", theme); }, [theme]);

    const handleThemeToggle = () => {
        if (showEyeTransition) return;
        pendingTheme.current = theme === "dark" ? "light" : "dark";
        setShowEyeTransition(true);
    };

    const changePage = useCallback(p => {
        if (p === page) return;
        pendingPage.current = p;
        setTxPhase("in");
    }, [page]);

    // Called when ninja reaches midpoint (screen dark) → swap page
    const handleNinjaMidpoint = useCallback(() => {
        const p = pendingPage.current;
        if (p) {
        setPage(p);
        window.scrollTo(0, 0);
        }
        setTimeout(() => { setTxPhase("out"); }, 120);
        setTimeout(() => { setTxPhase("idle"); }, 900);
    }, []);

    const renderPage = () => {
        switch (page) {
        case "home": return <HomePage setPage={changePage} />;
        case "about": return <AboutPage />;
        case "skills": return <SkillsPage />;
        case "projects": return <ProjectsPage />;
        case "contact": return <ContactPage />;
        default: return <HomePage setPage={changePage} />;
        }
    };

    return (
        <>
        <GlobalStyles />
        <ScrollProgress />
        <FloatingThemeBtn theme={theme} onToggle={handleThemeToggle} />
        <Confetti active={party} onDone={() => setParty(false)} />

        {showEyeTransition && (
            <SharinganThemeTransition onComplete={() => { setTheme(pendingTheme.current); setShowEyeTransition(false); }} />
        )}

        <NinjaPageTransition phase={txPhase} onMidpoint={handleNinjaMidpoint} />

        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
        {!loading && (
            <div>
            <Navbar page={page} setPage={changePage} party={party} setParty={setParty} />
            <main>{renderPage()}</main>
            <Footer setPage={changePage} />
            </div>
        )}
        <style>{`
            @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: flex !important; }
            }
        `}</style>
        </>
    );
    }