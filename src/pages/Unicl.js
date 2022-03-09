import React, { Fragment, useState } from "react";
import Form from "../components/Form/Form";
import CalculatedText from "../components/CalculatedText";
import Button from "../components/Button";

const Unicl = () => {
  const [originalList, setOriginalList] = useState("");
  const [listResult, setListResult] = useState("");

  const [allList, setAllList] = useState("0");
  const [calculatedPhrases, setCalculatedPhrases] = useState("0");

  const calculation = () => {
    setListResult("");

    if (originalList !== "") {
      let result = [];
      const textarea1 = originalList.split("\n");
      const textarea2 = new Set(textarea1);
      textarea2.forEach((item) => result.push(item));

      setAllList(textarea1.length);
      setCalculatedPhrases(result.length);
      setListResult(result.join("\n"));
    }
  };

  return (
    <Fragment>
      <h1>Удаление повторяющихся фраз</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <Form
          key="1"
          label="Добавьте список фраз"
          value={originalList !== "" ? originalList : ""}
          onChange={(event) => setOriginalList(event.target.value)}
        />
        <Form
          key="2"
          label="Результат"
          value={listResult}
          onChange={(event) => setListResult(event.target.value)}
        />
        <br />
        <div className="form-group text-area-from-del">
          <CalculatedText
            textDescription="Всего рассчитано фраз:"
            textResult={allList}
            classColor="text-primary"
          />
          <CalculatedText
            textDescription="Уникальных фраз:"
            textResult={calculatedPhrases}
            classColor="text-success"
          />
        </div>

        <br />
        <Button onClick={calculation} />
      </form>
    </Fragment>
  );
};

export default Unicl;
