import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const albumLinks = {
  "GABRIEL": "https://open.spotify.com/album/1WVIJaAboRSwJOe4u0n0Q7",
  "skeletons": "https://open.spotify.com/album/14IZ6aHadzsKrNMnntwLb0",
  "bandaids": "https://open.spotify.com/album/4LfFHT00C9ImLMUjHkqWjQ",
  "always": "https://open.spotify.com/album/37FLvUnF5qC1LZBNCWqG1A"
};

function App() {
  useEffect(() => {
    const handleClick = (e) => {
      const card = e.currentTarget;
      const title = card.querySelector('h4')?.textContent.trim();
      if (albumLinks[title]) {
        window.open(albumLinks[title], '_blank');
      }
    };

    document.querySelectorAll('.album-card').forEach(card => {
      card.addEventListener('click', handleClick);
      card.style.cursor = 'pointer';
    });

    return () => {
      document.querySelectorAll('.album-card').forEach(card => {
        card.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <section id="home" className="h-1"></section>

        {/* Hero */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Keshi</h1>
              <p className="text-xl text-gray-700 mb-6">
                The multi-instrumentalist crafting dreamy R&B soundscapes
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Final Project • BSIT 3A • Allen Daniel Bandanes
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#biography" className="bg-keshiRed text-white px-8 py-3 rounded-full hover:bg-red-800 transition">
                  Biography
                </a>
                <a href="#discography" className="border border-keshiRed text-keshiRed px-8 py-3 rounded-full hover:bg-keshiLight transition">
                  Discography
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/keshi.jpg" alt="Keshi" className="rounded-xl shadow-2xl w-full" />
            </div>
          </div>
        </section>

        {/* Biography */}
        <section id="biography" className="mb-24 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-keshiRed inline-block pb-2">Biography</h2>
          <div className="bg-keshiLight p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <img src="/keshibio.PNG" alt="Keshi portrait" className="rounded-lg mb-6 w-full" />
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-bold text-keshiRed mb-4">Quick Facts</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-3"><span className="text-keshiRed">Born:</span> November 4, 1994</li>
                    <li className="flex items-center gap-3"><span className="text-keshiRed">From:</span> Houston, Texas</li>
                    <li className="flex items-center gap-3"><span className="text-keshiRed">Genres:</span> R&B, Lo-fi, Alternative</li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-2 space-y-5 text-lg text-gray-700">
                <p>Keshi (born Casey Luong) is an American singer, songwriter, record producer, and multi-instrumentalist known for his dreamy, melancholic R&B soundscapes.</p>
                <p>Born to Vietnamese parents in Houston, Texas, he taught himself guitar while working as a nurse.</p>
                <p>His music blends lo-fi hip hop, alternative pop, and emotional R&B.</p>
                <p>His debut album <strong>GABRIEL</strong> (2022) received widespread critical acclaim.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Discography */}
        <section id="discography" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-keshiRed inline-block pb-2">Discography</h2>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Album</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="album-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-red-100 transition-all hover:scale-105">
                <img src="/gabriel.PNG" alt="GABRIEL" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h4 className="font-bold text-xl">GABRIEL</h4>
                  <p className="text-gray-600">2022 • Album</p>
                  <p className="text-sm text-gray-700 mt-2">Featuring "GET IT", "TOUCH"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">EPs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "skeletons", year: "2019", tracks: '"right here", "atlas"' },
                { name: "bandaids", year: "2020", tracks: '"less of you", "right here"' },
                { name: "always", year: "2021", tracks: '"always", "beside you"' }
              ].map(ep => (
                <div key={ep.name} className="album-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-red-100 transition-all hover:scale-105">
                  <img src={`/${ep.name}.PNG`} alt={ep.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h4 className="font-bold text-xl">{ep.name}</h4>
                    <p className="text-gray-600">{ep.year} • EP</p>
                    <p className="text-sm text-gray-700 mt-2">Featuring {ep.tracks}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Popular Singles</h3>
            <div className="bg-white rounded-lg shadow p-6">
              {["2 soon (2018)", "like i need u (2018)", "right here (2019)", "beside you (2021)"].map((s, i) => (
                <div key={i} className="py-4 flex justify-between items-center border-b last:border-0">
                  <div>
                    <h4 className="font-medium">{s.split(' (')[0]}</h4>
                    <p className="text-sm text-gray-600">{s.split(' (')[1]?.slice(0, -1)}</p>
                  </div>
                  <span className="text-3xl text-keshiRed">Play</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;