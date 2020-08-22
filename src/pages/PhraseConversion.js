import React, {Fragment, useState} from 'react'
import Form from '../components/Form/Form'
import CalculatedText from '../components/CalculatedText'
import Button from '../components/Button'
import InputRadio from '../components/InputRadio'

 const PhraseConversion = () => {
    const [originalList, setOriginalList] = useState('');
    const [listOfFilter, setListOfFilter] = useState('');
    const [listResult, setListResult] = useState('');

    const [modeSelection, setmodeSelection] = useState('');

    const [allList, setAllList] = useState('0');
    const [calculatedPhrases, setCalculatedPhrases] = useState('0');

    


    const calculation = () => {


        const textarea1 = originalList.split('\n');
        let textareaResult =[];

        if(modeSelection == 'toUpperCase'){
         textareaResult = textarea1.map(item => item.toUpperCase())
        } else if (modeSelection == 'toLowerCase'){
         textareaResult = textarea1.map(item => item.toLowerCase())
        } else{
         textareaResult = textarea1.map(item => item[0].toUpperCase() + item.split('').slice(1).join('').toLowerCase())
        }
        setAllList(textareaResult.length)
        setListResult(textareaResult.join('\n'));
    }

    return (
       <Fragment>
           <h1>Преобразование фраз</h1>
           <form onSubmit={event => event.preventDefault() }>
           <Form
            key='1'
            label='Добавьте список фраз'
            value={originalList !== '' ? originalList: ''}
            onChange={(event) => setOriginalList(event.target.value)}
            />
            <Form
            key='2'
            label='Результат'
            value={listResult}
            onChange={(event) => setListResult(event.target.value)}
            />
                        <InputRadio 
            key='1'
            onClick={() => setmodeSelection('')}
            label='С заглавной буквы'
            checked={modeSelection == '' ? true: false}
            />
            <InputRadio 
            key='2'
            onClick={() => setmodeSelection('toUpperCase')}
            label='В верхний регистр'
            checked={modeSelection == 'toUpperCase' ? true: false}
            />
            <InputRadio 
            key='3'
            onClick={() => setmodeSelection('toLowerCase')}
            label='В нижний регистр'
            checked={modeSelection == 'toLowerCase' ? true: false}
            />
            <br/>
                    <div 
                    className="form-group text-area-from-del">
                        <CalculatedText 
                        textDescription='Обработано фраз:'
                        textResult={allList}
                        classColor='text-primary'
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

export default PhraseConversion
