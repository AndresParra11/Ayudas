import { useState } from "react";
import PropTypes from "prop-types";

const AnecdoteDay = ({ anecdotes, votes, selected }) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected] || 0} votes</p>
    </>
  );
};

const AnecdoteMostVoted = ({ anecdotes, votes }) => {
  const mostVoted = Object.keys(votes).reduce((prev, next) =>
    votes[prev] > votes[next] ? prev : next
  );

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {votes[mostVoted] || 0} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  const handleNextAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const handleVote = () => {
    setVotes({ ...votes, [selected]: (votes[selected] || 0) + 1 });
  };

  return (
    <>
      <AnecdoteDay anecdotes={anecdotes} votes={votes} selected={selected} />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>Next anecdote</button>
      <AnecdoteMostVoted anecdotes={anecdotes} votes={votes} />
    </>
  );
};

AnecdoteDay.propTypes = {
  anecdotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  votes: PropTypes.objectOf(PropTypes.number).isRequired,
  selected: PropTypes.number.isRequired,
};

AnecdoteMostVoted.propTypes = {
  anecdotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  votes: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default App;
