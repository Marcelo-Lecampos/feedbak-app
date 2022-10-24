import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }
  return (
    <>
      <Header />
      <div className="container">
      <FeedbackForm/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        <FeedbackStats feedback={feedback} />
      </div>
    </>
  );
}

export default App;