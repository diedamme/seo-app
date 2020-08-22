import React, {Fragment, useState} from 'react'
import Form from '../components/Form/Form'
import CalculatedText from '../components/CalculatedText'
import Button from '../components/Button'
import InputRadio from '../components/InputRadio'

 const LeaveOrRemove = () => {
    const [originalList, setOriginalList] = useState('');
    const [listOfFilter, setListOfFilter] = useState('');
    const [listResult, setListResult] = useState('');

    const [checkedLeave, setCheckedLeave] = useState(true);

    const [allList, setAllList] = useState('0');
    const [calculatedPhrases, setCalculatedPhrases] = useState('0');

    let mediana = []


    const calculation = () => {
        const textarea1 = originalList.split('\n');
        const textarea2 = checkedLeave ? listOfFilter.split('\n') : listOfFilter.split('\n').filter(item => item!=="")
           
        setAllList(textarea1.length)
        const textareaResult = textarea1.filter(item1 => {
            mediana = textarea2.map(item2 => {
               return item1.includes(item2)
            })
            if(checkedLeave){
                return  mediana.includes(true) ? item1 : null
            }
            else{
                return  !mediana.includes(true) ? item1 : null
            }
           
            
        })
        setCalculatedPhrases(textareaResult.length)
        setListResult(textareaResult.join('\n'));
    }

    return (
       <Fragment>
           <h1>Фильтрация списка по фразам</h1>
           <form onSubmit={event => event.preventDefault() }>
           <Form
            key='1'
            label='Добавьте список фраз'
            value={originalList !== '' ? originalList: ''}
            onChange={(event) => setOriginalList(event.target.value)}
            />
            <Form
            key='2'
            label='Фразы для фильтрации'
            value={listOfFilter}
            onChange={(event) => setListOfFilter(event.target.value)}
            />
            <Form
            key='3'
            label='Результат'
            value={listResult}
            onChange={(event) => setListResult(event.target.value)}
            />
                        <InputRadio 
            key='1'
            onClick={() => setCheckedLeave(true)}
            label='Оставить фразы'
            checked={checkedLeave}
            />
            <InputRadio 
            key='2'
            onClick={() => setCheckedLeave(false)}
            label='Удалить фразы'
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
                        textDescription='Получено фраз:'
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

export default LeaveOrRemove
