import React, { useState } from 'react';
import { Search, Star, Truck, Rocket, Home, Building2, BarChart3, TrendingUp, FileText, Lightbulb } from 'lucide-react';

export default function HeimuKonsulentMockupLekmann() {
  const [activeTab, setActiveTab] = useState('live');

  return (
    <div style={{ background: '#2E1618', color: '#F5F3F0', fontFamily: '"Segoe UI", system-ui, sans-serif', minHeight: '100vh', padding: '0' }}>
      
      {/* HEADER */}
      <header style={{ padding: '3rem 1.5rem', borderBottom: '1px solid rgba(230, 81, 84, 0.2)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '2rem', fontWeight: '700', color: '#F5F3F0' }}>
            Heim Vertskap
          </h1>
          <p style={{ margin: '0', fontSize: '0.95rem', color: '#999', fontWeight: '400' }}>
            Slik fungerer det — fra vurdering til full drift | Juni 2026
          </p>
        </div>
      </header>

      {/* HVOR VI ER NÅ */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid rgba(230, 81, 84, 0.2)', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#E65154', margin: '0 0 1.5rem 0' }}>
            Status nå — Transition-fase
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(230, 81, 84, 0.1)', padding: '1.5rem', borderRadius: '6px', borderLeft: '3px solid #E65154' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#E65154', marginBottom: '0.5rem' }}>9</div>
              <p style={{ margin: '0', fontSize: '0.9rem', color: '#BBB', fontWeight: '400' }}>Leiligheter som avsluttes</p>
            </div>

            <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '1.5rem', borderRadius: '6px', borderLeft: '3px solid #4CAF50' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#4CAF50', marginBottom: '0.5rem' }}>7</div>
              <p style={{ margin: '0', fontSize: '0.9rem', color: '#BBB', fontWeight: '400' }}>Nye leiligheter vi tar på</p>
            </div>

            <div style={{ background: 'rgba(255, 152, 0, 0.1)', padding: '1.5rem', borderRadius: '6px', borderLeft: '3px solid #FFA726' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#FFA726', marginBottom: '0.5rem' }}>2</div>
              <p style={{ margin: '0', fontSize: '0.9rem', color: '#BBB', fontWeight: '400' }}>Vi hjelper delvis nå</p>
            </div>

            <div style={{ background: 'rgba(200, 200, 200, 0.1)', padding: '1.5rem', borderRadius: '6px', borderLeft: '3px solid #999' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#999', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Neste</div>
              <p style={{ margin: '0', fontSize: '0.9rem', color: '#BBB', fontWeight: '400' }}>Promotering juni/juli</p>
            </div>
          </div>
        </div>
      </section>

      {/* FUNNELEN */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid rgba(230, 81, 84, 0.2)', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#E65154', margin: '0 0 2rem 0' }}>
            Slik velger folk — progresjon
          </h2>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: '8px', fontSize: '0.9rem', color: '#BBB', lineHeight: '2' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#F5F3F0' }}>Du tenker på korttidsutleie</div>
              <div style={{ fontSize: '2rem', margin: '0.5rem 0' }}>↓</div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '1.5rem', background: 'rgba(230, 81, 84, 0.15)', padding: '1rem', borderRadius: '6px', borderLeft: '3px solid #E65154' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <Search size={20} style={{ color: '#E65154' }} />
                <div style={{ fontSize: '1rem', fontWeight: '700', color: '#F5F3F0' }}>Heim Analyse</div>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#BBB' }}>Vi sjekker: Kan du tjene penger på leiligheten din?</div>
              <div style={{ fontSize: '2rem', margin: '0.8rem 0' }}>↓</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              {/* VENSTRE SIDE */}
              <div>
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.9rem', color: '#999', fontStyle: 'italic', marginBottom: '0.5rem' }}>Hvis du liker å lære...</div>
                </div>
                
                <div style={{ background: 'rgba(100, 150, 200, 0.15)', padding: '1rem', borderRadius: '6px', borderLeft: '3px solid #6496CB', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <Rocket size={18} style={{ color: '#6496CB' }} />
                    <div style={{ fontSize: '1rem', fontWeight: '700', color: '#F5F3F0' }}>Heim Start</div>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#BBB' }}>Vi lærer deg hvordan alt fungerer</div>
                </div>

                <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#999', marginBottom: '1rem' }}>eller skip til</div>

                <div style={{ background: 'rgba(255, 167, 38, 0.15)', padding: '1rem', borderRadius: '6px', borderLeft: '3px solid #FFA726' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <TrendingUp size={18} style={{ color: '#FFA726' }} />
                    <div style={{ fontSize: '1rem', fontWeight: '700', color: '#F5F3F0' }}>Heim Optimal</div>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#BBB' }}>Vi setter opp automatisering, du gjør vasking</div>
                </div>
              </div>

              {/* HØYRE SIDE */}
              <div>
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.9rem', color: '#999', fontStyle: 'italic', marginBottom: '0.5rem' }}>Hvis du vil at vi gjør mest...</div>
                </div>

                <div style={{ background: 'rgba(76, 175, 80, 0.15)', padding: '1rem', borderRadius: '6px', borderLeft: '3px solid #4CAF50' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <Star size={18} style={{ color: '#4CAF50' }} />
                    <div style={{ fontSize: '1rem', fontWeight: '700', color: '#F5F3F0' }}>Heim Full Drift</div>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#BBB' }}>Vi gjør alt. Du sitter hjemme.</div>
                </div>

                <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#999', marginBottom: '1rem', marginTop: '1rem' }}>eller later upgrade fra Optimal</div>

                <div style={{ background: 'rgba(121, 134, 203, 0.15)', padding: '1rem', borderRadius: '6px', borderLeft: '3px solid #7986CB' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <Home size={18} style={{ color: '#7986CB' }} />
                    <div style={{ fontSize: '1rem', fontWeight: '700', color: '#F5F3F0' }}>Heim Co-host</div>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#BBB' }}>Vi gjør noe, du gjør resten (hybrid)</div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '2rem', margin: '0.5rem 0' }}>↓</div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '1.5rem', background: 'rgba(255, 152, 0, 0.15)', padding: '1rem', borderRadius: '6px', borderLeft: '3px solid #FFA726' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <Truck size={20} style={{ color: '#FFA726' }} />
                <div style={{ fontSize: '1rem', fontWeight: '700', color: '#F5F3F0' }}>Heim Utrykning (add-on)</div>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#BBB' }}>Hvis du trenger fysisk hjelp: vi kommer og fikser det</div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '0.85rem', color: '#666', fontStyle: 'italic' }}>
              Hvis du har mange leiligheter (2027+)
            </div>

            <div style={{ textAlign: 'center', background: 'rgba(121, 134, 203, 0.15)', padding: '1rem', borderRadius: '6px', borderLeft: '3px solid #7986CB' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <Building2 size={20} style={{ color: '#7986CB' }} />
                <div style={{ fontSize: '1rem', fontWeight: '700', color: '#F5F3F0' }}>Heim Partner</div>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#BBB' }}>Vi forhandler individuelt for større operasjoner</div>
            </div>
          </div>
        </div>
      </section>

      {/* PAKKENE — DETALJERT */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid rgba(230, 81, 84, 0.2)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#E65154', margin: '0 0 1.5rem 0' }}>
            Pakkene — forklart som en lekmann
          </h2>

          {/* TAB-BUTTONS */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(230, 81, 84, 0.2)', paddingBottom: '1rem', flexWrap: 'wrap' }}>
            {[
              { key: 'live', label: '✓ Vi tilbyr nå' },
              { key: 'testing', label: '⚡ Vi tester' },
              { key: 'future', label: '◯ Senere (2026+)' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  background: activeTab === tab.key ? '#E65154' : 'transparent',
                  border: `1px solid ${activeTab === tab.key ? '#E65154' : 'rgba(230, 81, 84, 0.4)'}`,
                  color: activeTab === tab.key ? '#2E1618' : '#BBB',
                  padding: '0.7rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  transition: 'all 0.2s',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ===== LIVE NÅ ===== */}
          {activeTab === 'live' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* ANALYSE */}
              <div style={{ background: 'rgba(100, 150, 200, 0.08)', border: '1px solid rgba(100, 150, 200, 0.3)', padding: '2rem', borderRadius: '6px' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '700', color: '#F5F3F0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Search size={24} />
                  Heim Analyse
                </h3>
                <p style={{ margin: '0.5rem 0 1rem 0', fontSize: '0.9rem', color: '#BBB', fontWeight: '400' }}>
                  Første steg: "Er det lønnsomt for meg?"
                </p>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '4px', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#E65154', marginBottom: '0.5rem' }}>
                    2 990–4 990 kr
                  </div>
                  <p style={{ margin: '0', fontSize: '0.85rem', color: '#999' }}>
                    Engangskjøp — ingen binding
                  </p>
                </div>

                <div style={{ fontSize: '0.9rem', color: '#BBB', lineHeight: '1.7', marginBottom: '1rem' }}>
                  <strong>Hva skjer:</strong> Du får en rapport som viser<br/>
                  ✓ Hvor mye leiligheten din kan tjene<br/>
                  ✓ Hva som funker (pris, bilder, amenities)<br/>
                  ✓ Hva konkurrentene gjør<br/>
                  ✓ En konkret plan for hvordan du tjener mer
                </div>

                <div style={{ fontSize: '0.85rem', color: '#999', fontStyle: 'italic' }}>
                  <strong style={{ color: '#BBB' }}>Kort sagt:</strong> Du får å vite om det lønner seg, og hvor mye du kan tjene.
                </div>
              </div>

              {/* FULL DRIFT */}
              <div style={{ background: 'rgba(76, 175, 80, 0.08)', border: '1px solid rgba(76, 175, 80, 0.3)', padding: '2rem', borderRadius: '6px' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '700', color: '#F5F3F0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Star size={24} />
                  Heim Full Drift
                </h3>
                <p style={{ margin: '0.5rem 0 1rem 0', fontSize: '0.9rem', color: '#BBB', fontWeight: '400' }}>
                  Du sitter stille — vi gjør alt
                </p>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '4px', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#E65154', marginBottom: '0.5rem' }}>
                    20% av pengene du tjener
                  </div>
                  <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#999' }}>
                    (Vi tar 20% av det som kommer inn fra Airbnb/Booking)
                  </p>
                </div>

                <div style={{ fontSize: '0.9rem', color: '#BBB', lineHeight: '1.7', marginBottom: '1rem' }}>
                  <strong>Vi gjør:</strong><br/>
                  ✓ Legger annonsen din på Airbnb, Booking og Google<br/>
                  ✓ Endrer prisen automatisk (når det er mange som vil booke, får du høyere pris)<br/>
                  ✓ Svarer gjestenes spørsmål (en chatbot gjør det når du sover)<br/>
                  ✓ Koordinerer vasking mellom hver gjest<br/>
                  ✓ Fikser problemer og sjekker at alt er OK<br/>
                  ✓ Rapporterer til deg hver måned
                </div>

                <div style={{ fontSize: '0.9rem', color: '#BBB', lineHeight: '1.7', marginBottom: '1rem' }}>
                  <strong>Du gjør:</strong> Ingenting. Pengene kommer på kontoen din.
                </div>

                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '4px', marginBottom: '1rem', fontSize: '0.85rem', color: '#BBB', lineHeight: '1.6' }}>
                  <strong style={{ color: '#F5F3F0' }}>Eksempel — en måned:</strong><br/>
                  Inntekt fra Airbnb/Booking (etter deres gebyr): 50 000 kr<br/>
                  - Vaskegebyr (5 bookinger x 1 300 kr): -6 500 kr<br/>
                  = Netto før ditt honorar: 43 500 kr<br/>
                  - Ditt honorar (20% av 43 500): -8 700 kr<br/>
                  = <strong>Netto til eier: 34 800 kr</strong>
                </div>

                <div style={{ fontSize: '0.85rem', color: '#999', fontStyle: 'italic' }}>
                  <strong style={{ color: '#BBB' }}>Kort sagt:</strong> Vi håndterer hele operasjonen. Du får pengene.
                </div>
              </div>

              {/* UTRYKNING */}
              <div style={{ background: 'rgba(255, 152, 0, 0.08)', border: '1px solid rgba(255, 152, 0, 0.3)', padding: '2rem', borderRadius: '6px' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '700', color: '#F5F3F0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Truck size={24} />
                  Heim Utrykning
                </h3>
                <p style={{ margin: '0.5rem 0 1rem 0', fontSize: '0.9rem', color: '#BBB', fontWeight: '400' }}>
                  Når du trenger fysisk hjelp på stedet
                </p>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '4px', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#E65154', marginBottom: '0.5rem' }}>
                    1 290–1 990 kr per besøk
                  </div>
                  <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#999' }}>
                    Vi kommer og fikser det (1–2 timer arbeid)
                  </p>
                </div>

                <div style={{ fontSize: '0.9rem', color: '#BBB', lineHeight: '1.7' }}>
                  <strong>Eksempler:</strong><br/>
                  • Gjesten kan ikke åpne døren → vi kommer og hjelper<br/>
                  • Noe er ødelagt → vi ordner det<br/>
                  • Gjesten har spørsmål som chatboten ikke kan svare på → vi løser det<br/>
                  <br/>
                  <strong>Fleksibilitet:</strong> Kan brukes som add-on til Optimal/Co-host, eller helt selvstending. Hvis mange kunder bruker det, kan det potensielt finansiere dedikerte runners for dine prosjekter.
                </div>
              </div>

            </div>
          )}

          {/* ===== TESTING ===== */}
          {activeTab === 'testing' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div style={{ background: 'rgba(255, 167, 38, 0.08)', border: '1px solid rgba(255, 167, 38, 0.3)', padding: '2rem', borderRadius: '6px' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '700', color: '#F5F3F0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <TrendingUp size={24} />
                  Heim Optimal
                </h3>
                <p style={{ margin: '0.5rem 0 1rem 0', fontSize: '0.9rem', color: '#BBB', fontWeight: '400' }}>
                  Vi setter opp systemene — du gjør vasking
                </p>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '4px', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#E65154', marginBottom: '0.5rem' }}>
                    2 490–3 990 kr per måned
                  </div>
                  <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#999' }}>
                    Ingen bindingstid — kan stoppe når som helst
                  </p>
                </div>

                <div style={{ fontSize: '0.9rem', color: '#BBB', lineHeight: '1.7', marginBottom: '1rem' }}>
                  <strong>Vi gjør (første gang):</strong><br/>
                  ✓ Setter opp alle systemene så alt fungerer sammen<br/>
                  ✓ Konfigurerer automatisk prising<br/>
                  ✓ Setter opp chatboten som svarer gjester 24/7<br/>
                  ✓ Lager dashboard så du kan følge med
                </div>

                <div style={{ fontSize: '0.9rem', color: '#BBB', lineHeight: '1.7', marginBottom: '1rem' }}>
                  <strong>Vi gjør (hver måned):</strong><br/>
                  ✓ Sjekker at prisingen fungerer (bruker 30–60 minutter)<br/>
                  ✓ Justerer hvis det trengs<br/>
                  ✓ Er tilgjengelig hvis noe går galt
                </div>

                <div style={{ fontSize: '0.9rem', color: '#BBB', lineHeight: '1.7', marginBottom: '1rem' }}>
                  <strong>Du gjør:</strong><br/>
                  ✓ All vasking mellom gjester<br/>
                  ✓ Linser og håndklær<br/>
                  ✓ Praktiske ting som går i stykker
                </div>

                <div style={{ background: 'rgba(255, 167, 38, 0.15)', border: '1px solid rgba(255, 167, 38, 0.4)', padding: '1rem', borderRadius: '4px', fontSize: '0.85rem', color: '#BBB', lineHeight: '1.6', marginBottom: '1rem' }}>
                  <strong style={{ color: '#FFA726' }}>Status:</strong> Vi tester dette med noen få kunder nå. Når det funker bra, lanserer vi det for flere.
                </div>

                <div style={{ fontSize: '0.85rem', color: '#999', fontStyle: 'italic' }}>
                  <strong style={{ color: '#BBB' }}>Kort sagt:</strong> Vi håndterer det digitale, du håndterer det fysiske.
                </div>
              </div>

            </div>
          )}

          {/* ===== FREMTID ===== */}
          {activeTab === 'future' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* START */}
              <div style={{ background: 'rgba(121, 134, 203, 0.08)', border: '1px solid rgba(121, 134, 203, 0.3)', padding: '2rem', borderRadius: '6px' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '700', color: '#F5F3F0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Rocket size={24} />
                  Heim Start — Opplæring
                </h3>
                <p style={{ margin: '0.5rem 0 1rem 0', fontSize: '0.9rem', color: '#BBB', fontWeight: '400' }}>
                  Vi lærer deg hvordan alt fungerer | Lansering 2026
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  {/* LITE */}
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '4px' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#E65154', marginBottom: '0.5rem' }}>
                      START LITE
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#F5F3F0', marginBottom: '0.5rem' }}>
                      1 490 kr/mnd
                    </div>
                    <p style={{ margin: '0.3rem 0 1rem 0', fontSize: '0.75rem', color: '#999' }}>
                      Min 3 måneder
                    </p>
                    <ul style={{ margin: '0', paddingLeft: '1.2rem', fontSize: '0.8rem', color: '#BBB', lineHeight: '1.5' }}>
                      <li>Vi møtes en gang (vi forklarer hvordan det funker)</li>
                      <li>Møte hver uke (alle sammen svarer spørsmål)</li>
                      <li>Forum hvor du kan spørre når som helst</li>
                      <li>Videomateriale og guides</li>
                    </ul>
                  </div>

                  {/* PREMIUM */}
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '4px' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#E65154', marginBottom: '0.5rem' }}>
                      START PREMIUM
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#F5F3F0', marginBottom: '0.2rem' }}>
                      4 990 kr oppstart
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#F5F3F0', marginBottom: '0.5rem' }}>
                      + 990 kr/mnd x 3–6 mnd
                    </div>
                    <p style={{ margin: '0.3rem 0 1rem 0', fontSize: '0.75rem', color: '#999' }}>
                      3–6 måneders binding
                    </p>
                    <ul style={{ margin: '0', paddingLeft: '1.2rem', fontSize: '0.8rem', color: '#BBB', lineHeight: '1.5' }}>
                      <li>Første måned: Vi møtes hver uke (45 min)</li>
                      <li>Etter det: En gang per måned</li>
                      <li>Alle møter er individuell coaching</li>
                      <li>Samme forum + møter som Lite</li>
                    </ul>
                  </div>
                </div>

                <div style={{ background: 'rgba(230, 81, 84, 0.15)', border: '1px solid rgba(230, 81, 84, 0.4)', padding: '1rem', borderRadius: '4px', marginBottom: '1rem', fontSize: '0.8rem', color: '#BBB', lineHeight: '1.5' }}>
                  <strong style={{ color: '#FFA726' }}>📝 PS på Premium:</strong> Prisen bør trolig være høyere enn den er nå. Usikker på balansen mellom oppstart-gebyr (4 990 kr) og månedspris (990 kr). Trenger å være mer konkret om hva som inngår i oppsett-møter første måned. Diskuter gjerne dette.
                </div>

                <div style={{ fontSize: '0.85rem', color: '#999', fontStyle: 'italic' }}>
                  <strong style={{ color: '#BBB' }}>Kort sagt:</strong> Vi lærer deg tekniske greier. Du blir selvstending, men vi er der hvis du blir sittende fast.
                </div>
              </div>

              {/* CO-HOST */}
              <div style={{ background: 'rgba(121, 134, 203, 0.08)', border: '1px solid rgba(121, 134, 203, 0.3)', padding: '2rem', borderRadius: '6px' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '700', color: '#F5F3F0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Home size={24} />
                  Heim Co-host — Hybrid
                </h3>
                <p style={{ margin: '0.5rem 0 1rem 0', fontSize: '0.9rem', color: '#BBB', fontWeight: '400' }}>
                  Vi gjør noen ting, du gjør andre | Lansering 2026
                </p>

                <div style={{ fontSize: '0.9rem', color: '#BBB', lineHeight: '1.7' }}>
                  <strong>Idéen:</strong> Full Drift og Optimal er ekstremene. Co-host er i midten.<br/><br/>
                  Du kan velge:<br/>
                  • Vi håndterer digitalt (Airbnb, prising, chatbot) — du gjør vasking<br/>
                  • Vi gjør noen praktiske ting du vil unngå<br/>
                  • Eller en kombinasjon<br/><br/>
                  <strong style={{ color: '#BBB' }}>Status:</strong> Vi tester først med Optimal og Utrykning. Når vi ser hvilket mønster som funker, lanserer vi Co-host som eget produkt.
                </div>
              </div>

              {/* PARTNER */}
              <div style={{ background: 'rgba(121, 134, 203, 0.08)', border: '1px solid rgba(121, 134, 203, 0.3)', padding: '2rem', borderRadius: '6px' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '700', color: '#F5F3F0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Building2 size={24} />
                  Heim Partner — Større operasjoner
                </h3>
                <p style={{ margin: '0.5rem 0 1rem 0', fontSize: '0.9rem', color: '#BBB', fontWeight: '400' }}>
                  For deg som har mange leiligheter | Lansering 2027+
                </p>

                <div style={{ fontSize: '0.9rem', color: '#BBB', lineHeight: '1.7' }}>
                  <strong>For hvem:</strong> Hvis du har 5+ leiligheter, eller driver et større sted som leirsted eller feriested<br/><br/>
                  <strong>Hvordan:</strong> Vi forhandler individuelt. Prisen avhenger av hvor mange enheter du har og hvor komplisert drift det er.<br/><br/>
                  <strong>Status:</strong> Vi fokuserer på Full Drift først. Når vi har solid erfaring, blir Partner det neste.
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      {/* POTENSIALET */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid rgba(230, 81, 84, 0.2)', background: 'rgba(230, 81, 84, 0.08)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#E65154', margin: '0 0 1.5rem 0' }}>
            Potensialet — konkrete tall
          </h2>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: '6px', marginBottom: '2rem' }}>
            <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.9rem', color: '#BBB', lineHeight: '1.7' }}>
              <strong>Utgangspunkt: En gjennomsnittlig leilighet i Tromsø sentrum (75 percentile)</strong><br/>
              • AirDNA leieinntekt: 465 000 kr/år<br/>
              • (Vaskegebyr +1 300 kr per gjest ligger på gjesten, går til deg for å dekke vask)<br/>
              <em style={{ color: '#999' }}>Merk: Dette er konservativt — tar ikke høyde for parkering og andre gebyrer</em>
            </p>
          </div>

          {/* SCENARIO 1: 7 ENHETER */}
          <div style={{ background: 'rgba(76, 175, 80, 0.08)', border: '1px solid rgba(76, 175, 80, 0.3)', padding: '1.5rem', borderRadius: '6px', marginBottom: '1.5rem' }}>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.95rem', fontWeight: '600', color: '#F5F3F0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BarChart3 size={20} />
              Scenario 1: 7 enheter (kort sikt — 2026)
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#4CAF50' }}>3.26M kr</div>
                <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.8rem', color: '#BBB' }}>Brutto leieinntekt</p>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#E65154' }}>651k kr</div>
                <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.8rem', color: '#BBB' }}>Din inntekt (20%)</p>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFA726' }}>2.60M kr</div>
                <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.8rem', color: '#BBB' }}>Eiers netto</p>
              </div>
            </div>
          </div>

          {/* SCENARIO 2: 15 ENHETER */}
          <div style={{ background: 'rgba(255, 152, 0, 0.08)', border: '1px solid rgba(255, 152, 0, 0.3)', padding: '1.5rem', borderRadius: '6px', marginBottom: '1.5rem' }}>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.95rem', fontWeight: '600', color: '#F5F3F0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={20} />
              Scenario 2: 15 enheter (medium sikt — 2027)
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#4CAF50' }}>6.98M kr</div>
                <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.8rem', color: '#BBB' }}>Brutto leieinntekt</p>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#E65154' }}>1.40M kr</div>
                <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.8rem', color: '#BBB' }}>Din inntekt (20%)</p>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFA726' }}>5.58M kr</div>
                <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.8rem', color: '#BBB' }}>Eiers netto</p>
              </div>
            </div>
          </div>

          {/* SCENARIO 3: 20 ENHETER */}
          <div style={{ background: 'rgba(230, 81, 84, 0.08)', border: '1px solid rgba(230, 81, 84, 0.3)', padding: '1.5rem', borderRadius: '6px', marginBottom: '1.5rem' }}>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.95rem', fontWeight: '600', color: '#F5F3F0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Rocket size={20} />
              Scenario 3: 20 enheter (målsettingen — 2027)
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#4CAF50' }}>9.30M kr</div>
                <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.8rem', color: '#BBB' }}>Brutto leieinntekt</p>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#E65154' }}>1.86M kr</div>
                <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.8rem', color: '#BBB' }}>Din inntekt (20%)</p>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFA726' }}>7.44M kr</div>
                <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.8rem', color: '#BBB' }}>Eiers netto</p>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '6px', fontSize: '0.85rem', color: '#999', lineHeight: '1.6' }}>
            <p style={{ margin: '0 0 0.8rem 0', fontSize: '0.9rem', fontWeight: '600', color: '#BBB' }}>💡 Husk:</p>
            <p style={{ margin: '0' }}>
              Dette er <strong>brutto</strong>-tall. Etter skatt, vedlikehold, forsikring, team-lønn, og andre kostnader blir det mindre. Men det viser hvor potensialet ligger. Med 20 enheter kan du gå fra deltidsarbeid til full Heim Vertskap.
            </p>
          </div>
        </div>
      </section>

      {/* DISKUSJON */}
      <section style={{ padding: '3rem 1.5rem', background: 'rgba(0,0,0,0.5)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#E65154', margin: '0 0 1.5rem 0' }}>
            Hva vil du diskutere?
          </h2>

          <p style={{ fontSize: '0.9rem', color: '#BBB', marginBottom: '2rem', lineHeight: '1.6' }}>
            Vi er i transition. Fjellheim avsluttes august, 7 nye kommer på, promotering starter juni/juli. Vi har ikke konkludert på hvor vi går. Her er hvor vi er nå. Hva tror du på? Hva er spørsmålene dine?
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              'Full Drift scaling?',
              'Analyse-strategi?',
              'Optimal vs Full Drift?',
              'Binding og vilkår?',
              'Start-opplæring?',
              'Co-host-modell?',
              'Prising-logikk?',
              'Kan jeg teste først?',
            ].map((topic, i) => (
              <button
                key={i}
                style={{
                  background: 'transparent',
                  border: '1px solid #E65154',
                  color: '#F5F3F0',
                  padding: '1rem',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.target.style.background = '#E65154';
                  e.target.style.color = '#2E1618';
                }}
                onMouseLeave={e => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#F5F3F0';
                }}
              >
                {topic}
              </button>
            ))}
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '6px', fontSize: '0.85rem', color: '#999', lineHeight: '1.6' }}>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', fontWeight: '600', color: '#BBB' }}>Kontakt</p>
            <p style={{ margin: '0' }}>Jørgen Storvoll<br/>+47 994 50 506<br/>jorgen@storvoll.net</p>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '2rem', margin: '2rem 0 0 0' }}>
            Mockup for konsulenter | Lekmann-språk og progresjon | Juni 2026
          </p>
        </div>
      </section>
    </div>
  );
}
