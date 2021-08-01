import React, {useState, useContext, useEffect} from 'react';
import Addanswer from './addAnswer.jsx';
import ViewMoreAnswers from './viewMoreAnswers.jsx';
import AnswerList from './answerList.jsx';
import axios from 'axios';


const QuestionList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const [seeMoreAnswers, setSeeMoreAnswers] = useState(false);
  const toggleMoreAnswers = () => setSeeMoreAnswers(!seeMoreAnswers);
  const [addAnswerPopup, setAddAnswerPopup] = useState(false);
  const [questionHelpful, setQuestionHelpful] = useState(false);

  let moreAnswersBtn;
    if (Object.values(props.question.answers).length > 2) {
      moreAnswersBtn = <a className='see-more-answers-click' onClick={() => { toggleOpen(); toggleMoreAnswers();}}>
      &raquo;&nbsp;See more answers </a>
    }
    if (isOpen===true) {
      moreAnswersBtn = null;
    }

  let sortedAnswerList;
  sortedAnswerList= Object.values(props.question.answers).sort(function(a, b) {
    return b.helpfulness - a.helpfulness;
   })


    const handleUpdateQuestionHelpfulness = () => {
      axios
      .put(`http://localhost:3000/hr-rfp/qa/questions/${props.question.question_id}/helpful`)
      .then(res => {
        console.log('add 1')
      })
      .catch(err => console.log(err));
    };

  return (

      <dl><a><strong>Q:</strong></a>&nbsp;&nbsp;{props.question.question_body}
      <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a>
      <a>Helpful?&nbsp;</a>
      {questionHelpful ? <a>Yes({props.question.question_helpfulness})</a> :
      <a href='url' className='question-helpful-click' onClick={(e) =>
      { e.preventDefault(); handleUpdateQuestionHelpfulness(); setQuestionHelpful(true); }}>
        Yes({props.question.question_helpfulness})</a>}
      <a href='url' className='add-answer-click' onClick={(e) =>
        {e.preventDefault(); setAddAnswerPopup(true)}}>Add answer
      </a>
      <Addanswer questionBody={props.question.question_body} questionId={props.question.question_id}
      trigger={addAnswerPopup} setTrigger={setAddAnswerPopup}>
      </Addanswer>
      {sortedAnswerList.slice(0, 2).map(answer =>
      <AnswerList answer={answer} />
      )}
      {moreAnswersBtn}
      {seeMoreAnswers===true ? <ViewMoreAnswers answers={sortedAnswerList} /> : null}
      {seeMoreAnswers===true ? <a className='see-more-answers-collapse' onClick={() => {toggleMoreAnswers(); toggleOpen()}}>
      &raquo;&nbsp;Collapse</a> : null}
      </dl>

  )};

  export default QuestionList;