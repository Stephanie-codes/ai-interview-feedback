import './App.css';
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import GPT from "./util/GPT"

const App = () => {
  
  GPT.test()

  const [gptOutput, setGptOutput] = useState(""); 

  const handleGptOutput = (output) => {
    setGptOutput(output);
  };
  
  GPT.test(handleGptOutput); 

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="App">
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <p>Feedback: {gptOutput}</p>
    </div>
  );
};

export default App;
