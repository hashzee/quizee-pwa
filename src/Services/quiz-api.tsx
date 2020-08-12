import {QuestionType, Quiz} from './../Types/quiz-types';

const arrayShuffle = (array: any[]) =>
    [...array].sort(()=>Math.random() - 0.5);

async function getCachedData( cacheName:string, url:string ) {
    const cacheStorage   = await caches.open( cacheName );
    const cachedResponse = await cacheStorage.match( url );
    
    if ( ! cachedResponse || ! cachedResponse.ok ) {
        return false;
    }
    
        return await cachedResponse.json();
}

export const getQuizCollection = async(numQuest: number, level:string): Promise<QuestionType[]> => {
    const url = `https://opentdb.com/api.php?amount=${numQuest}&category=18&type=multiple&difficulty=${level}`;

    const res = await fetch(url).then(data => {
        return data.json();
    }).catch(function(error) {
        console.log('Problem with fetch (Internet offline ?): ', 
        error.message);
        return getCachedData('Quizee-Dynamic-Cache',url);
    });

    var {results} = res;

    const quiz:QuestionType[] = results.map((questionObj:Quiz)=>{
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: arrayShuffle(questionObj.incorrect_answers.concat(questionObj.correct_answer)), 
        }
    });
    return quiz;
}