import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import testtt from '../Shipping/testtt.png' // استيراد الصورة
import Swal from 'sweetalert2'; // استيراد SweetAlert

async function getChoicesByQuestionId(question_id) {
  try {
    const response = await axios.get(`http://localhost:3001/api/answers/answers/${question_id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching choices:', error);
    throw error;
  }
}

function Test() {
  const [questions, setQuestions] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [totalPoints, setTotalPoints] = useState(0);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/tests/ques');
        const questionsWithChoices = await Promise.all(
          response.data.data.map(async (question) => ({
            ...question,
            options: await getChoicesByQuestionId(question.id),
          }))
        );
        setQuestions(questionsWithChoices);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setError('Failed to load questions. Please try again later.');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerSelect = (questionId, choice) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: choice,
    }));
  };

  const handleNext =  async () =>  {
    if (!selectedAnswers[questions[currentStep].id]) {
      await Swal.fire({
        title: 'Please select an answer before proceeding.  !',
        icon: 'warning',
        confirmButtonText: 'Ok',
        background: '#f8f9fa', // لون خلفية مخصص
        color: '#333', // لون النص
        confirmButtonColor: 'blue', // لون زر التأكيد
      });
      return;
    }
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculatePoints = () => {
    let total = 0;
    questions.forEach((question) => {
      const selectedChoice = selectedAnswers[question.id];
      if (selectedChoice) {
        total += selectedChoice.mark;
      }
    });
    setTotalPoints(total);
    console.log("Total points: ", total);
    sessionStorage.setItem("totalPoints", total);
  };

  const handleFinish = async () => {
    if (!selectedAnswers[questions[currentStep].id]) {
      await Swal.fire({
        title: 'Please select an answer before proceeding.  !',
        icon: 'warning',
        confirmButtonText: 'Ok',
        background: '#f8f9fa', // لون خلفية مخصص
        color: '#333', // لون النص
        confirmButtonColor: 'blue', // لون زر التأكيد
      });      return;
    }
    calculatePoints();

    // استخدام SweetAlert لعرض النتيجة
    await Swal.fire({
      title: 'Thanks for taking a Test  !',
      icon: 'success',
      confirmButtonText: 'Show result',
      background: '#f8f9fa', // لون خلفية مخصص
      color: '#333', // لون النص
      confirmButtonColor: 'green', // لون زر التأكيد
    });

    navigate("/Pop");
  };

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (questions.length === 0) {
    return <div className="text-center">No questions found. Please try again later.</div>;
  }

  const currentQuestion = questions[currentStep];

  if (!currentQuestion) {
    return <div className="text-center">Error: Question data is not available</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen  bg-no-repeat bg-cover ">
      
      
      <div className="w-full  max-w-lg p-8  rounded-lg bg-grayRoot h-[500px]  ">

        <h2 className="text-2xl font-semibold text-center mb-6 mt-12 ">
          Question {currentStep + 1} of {questions.length}
        </h2>
        <form>
          <fieldset className="">
            <legend className="text-lg font-medium text-gray-700 mb-4">
              {currentQuestion.question_text}
            </legend>
            <div className="space-y-4">
              {currentQuestion.options && currentQuestion.options.map((option) => (
                <div className="flex items-center" key={option.id}>
                  <input
                    id={`option-${option.id}`}
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={option.choice_text}
                    checked={selectedAnswers[currentQuestion.id]?.id === option.id}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-400"
                    onChange={() => handleAnswerSelect(currentQuestion.id, option)}
                  />
                  <label
                    htmlFor={`option-${option.id}`}
                    className="block ml-2 text-sm font-medium text-gray-800"
                  >
                    {option.choice_text}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handlePrev}
              className={`w-1/3 py-2 rounded-md text-white font-semibold transition-colors ${
                currentStep === 0 ? 'bg-greenRoot mt-12 text-[white] cursor-not-allowed' : 'bg-greenRoot mt-12 text-[white] hover:bg-blue-700'
              }`}
              disabled={currentStep === 0}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={currentStep < questions.length - 1 ? handleNext : handleFinish}
              className="w-1/3 py-2 rounded-md bg-greenRoot mt-12 text-[white] font-semibold hover:bg-blue-700 transition-colors"
            >
              {currentStep < questions.length - 1 ? 'Next' : 'Finish'}
            </button>
          </div>
        </form>
      </div>

      <div className=' w-[440px] h-[430px] border-4 border-[white] border-rounded-lg'  style={{ backgroundImage: `url(${testtt})`, backgroundPosition: 'right center', backgroundSize: 'contain',backgroundRepeat: 'no-repeat' }}
      >
       
      </div>
    </div>
  );
}

export default Test;
