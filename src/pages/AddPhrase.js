import React, {Fragment, useState} from 'react'
import Form from '../components/Form/Form'
import CalculatedText from '../components/CalculatedText'
import Button from '../components/Button'
import InputRadio from '../components/InputRadio'

 const AddPhrase = () => {
    const [originalList, setOriginalList] = useState('');
    const [addList, setAddList] = useState('');
    const [listResult, setListResult] = useState('');

    const [allList, setAllList] = useState('0');

    const [checkedFromEnd, setCheckedFromEnd] = useState(true);


    const calculation = () =>{
        setListResult('')
        setAllList('0')

        const textarea1 = originalList.split('\n');
        setAllList(textarea1.length)

        const textareaResult = textarea1.map(item => checkedFromEnd ? item + addList : addList + item)

        setListResult(textareaResult.join('\n'))


    }


    return (
        <Fragment>
           
   
  
            <h1>Добавление фразы в список</h1>
            <form onSubmit={event => event.preventDefault() }>
            <Form
            key='1'
            label='Добавьте список фраз'
            value={originalList !== '' ? originalList: ''}
            onChange={(event) => setOriginalList(event.target.value)}
            />
            <Form
            key='2'
            label='Добавляемая фраза'
            value={addList !== '' ? addList: ''}
            onChange={(event) => setAddList(event.target.value)}
            />
            <Form
            key='3'
            label='Результат'
            value={listResult}
            onChange={(event) => setListResult(event.target.value)}
            />

            <InputRadio 
            key='1'
            onClick={() => setCheckedFromEnd(false)}
            label='В начало'
            />
            <InputRadio 
            key='2'
            onClick={() => setCheckedFromEnd(true)}
            label='В конец'
            checked={checkedFromEnd}
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

export default AddPhrase
