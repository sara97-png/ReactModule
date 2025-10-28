import { useEffect, useState } from "react";
import TeamCard from "./components/TeamCard";
import Scoreboard from "./components/Scoreboard";
import Quotebox from "./components/Quotebox";
import "./App.css";

function App() {
  /*QuoteBox zadatak start*/ 
  const quotes = [
   "I’m not lazy, I’m just on energy-saving mode.",
   "I told my wife she should embrace her mistakes — she gave me a hug.",
  "I’m on a seafood diet. I see food and I eat it.",
  "Common sense is like deodorant. The people who need it most never use it.",
  "I’m not arguing, I’m just explaining why I’m right."
  ];

  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
   generateRandomQuote();    
  }, []);

  // Handler za novi citat
  function handleNewQuote() {
    generateRandomQuote();
    setStatus(`Novi citat generiran`);
  }

  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]); 
  }

   /*QuoteBox zadatak end*/ 

  // Centralni state: svi timove i status poruka
  const [teams, setTeams] = useState([
    { id: 1, emoji: "🐱", name: "Mačke", score: 0 },
    { id: 2, emoji: "🐶", name: "Psi", score: 0 },
    { id: 3, emoji: "🦊", name: "Lisice", score: 0 },
  ]);

  const [status, setStatus] = useState("");

  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }

  // Handleri - roditelj ažurira state; djeca samo pozivaju funkcije iz svojih propsa
  function increment(id, label) {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === id ? { ...team, score: team.score + 1 } : team
      )
    );
    setStatus(`Glas dodan timu ${label}`);
  }

  function decrement(id, label) {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === id ? { ...team, score: team.score - 1 } : team
      )
    );
    setStatus(`Glas oduzet timu ${label}`);
  }

  function resetAll() {
    setTeams((prev) => prev.map((team) => ({ ...team, score: 0 })));
    setStatus("Svi glasovi resetirani");
  }

  // Izvedene vrijednosti
  let total = 0;
  let maxScore = 0;

  for(const team of teams) {
    total += team.score;
    if(team.score > maxScore)
      maxScore = team.score;
  }

  let leaderLabel = "Još nema glasova";
  let leaders = teams.filter((t) => t.score === maxScore && maxScore > 0);

  if(maxScore > 0) {
    leaderLabel = leaders.length == 1 ? `Vodi tim: ${leaders[0].name}` : "Izjednačeno";
    console.log(leaders.length, leaderLabel)
  }

  return (
    <>
      <div>
        {teams.map((team) => (
          <div key={team.id}>
            <TeamCard
              id={team.id}
              name={team.name}
              emoji={team.emoji}
              score={team.score}
              onIncrement={increment}
              onDecrement={decrement}
            />
            <hr />
          </div>
        ))}
      </div>
      <Scoreboard status={status} total={total} leaderLabel={leaderLabel}  onReset={resetAll}/>
      <hr />
      <Quotebox quote={currentQuote} status={status} onNewQuote={handleNewQuote} />
    </>
  );
}

export default App;
