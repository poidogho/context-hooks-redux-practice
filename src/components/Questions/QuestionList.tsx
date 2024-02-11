import React from 'react'
import { getQuestionsCategory, mockQuestions } from '../../utils/questions'

const QuestionList = () => {
    const questions = getQuestionsCategory(mockQuestions)
    console.log({ questions })
    return (
        <div>QuestionList</div>
    )
}

export default QuestionList