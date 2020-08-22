import React, {Fragment, useState} from 'react'
import Form from '../components/Form/Form'
import CalculatedText from '../components/CalculatedText'
import Button from '../components/Button'


const Home = () => {
    const [originalList, setOriginalList] = useState('');
    const [listOfDeleted, setListOfDeleted] = useState('');
    const [listResult, setListResult] = useState('');

    const [allList, setAllList] = useState('0');
    const [calculatedPhrases, setCalculatedPhrases] = useState('0');

  

    const calculation = () => {
        setListResult('')
        setAllList('0')
        setCalculatedPhrases('0')
        const textarea1 = originalList.split('\n');
        const textarea2 = listOfDeleted.split('\n');
        const textareaResult = textarea1.filter(item => !textarea2.includes(item))
        if(textarea1 ==''){
            setAllList('0')
        }
        else{
            setAllList(textarea1.length)
        }

        textarea1 =='' && textarea2 !=='' ||  textarea1 == textarea2 ? setCalculatedPhrases('0') : setCalculatedPhrases(textareaResult.length)
        setListResult(textareaResult.join('\n'));
    }


    return(
        <Fragment>

            <h1>Удаление фраз из списка</h1>
            <form onSubmit={event => event.preventDefault() }>
            <Form
            key='1'
            label='Добавьте список фраз'
            value={originalList !== '' ? originalList: ''}
            onChange={(event) => setOriginalList(event.target.value)}
            />
            <Form
            key='2'
            label='Удаляемые фразы'
            value={listOfDeleted}
            onChange={(event) => setListOfDeleted(event.target.value)}
            />
            <Form
            key='3'
            label='Результат'
            value={listResult}
            onChange={(event) => setListResult(event.target.value)}
            />
            <br/>
                    <div 
                    className="form-group text-area-from-del">
                        <CalculatedText 
                        textDescription='Всего рассчитано фраз:'
                        textResult={allList}
                        classColor='text-primary'
                        />
                    <CalculatedText 
                        textDescription='Уникальных фраз:'
                        textResult={calculatedPhrases}
                        classColor='text-success'
                        />
                        </div>
             
                    <br />
                    <Button 
                    onClick={calculation}
                    />
            </form>
            </Fragment>
    )
}
 
export default Home