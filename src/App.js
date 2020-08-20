import React, { useEffect, useState } from 'react';
import highlightText from '@brianmcallister/highlight-text';

import { Wrapper, Header, Footer, Content, Label } from './styled';

import './App.css';
import { DATASET } from './mock';

function App() {

  const [search, setSearch] = useState('');
  const [result, setResult] = useState(DATASET);

  useEffect(() => {
    let search = (new URLSearchParams(window.location.search)).get("search")

    if (search && search.length) {
      const newResult = DATASET
        .filter(item => item.toLowerCase().includes(search.toLowerCase()))
        .map(item => highlightText(item, [search]));
      setResult(newResult);
      setSearch(search);
    }
  }, []);

  const handleChange = event =>  {
    const input = event.target.value;
    const newResult = DATASET.filter(item => item.toLowerCase().includes(input.toLowerCase())).map(item => highlightText(item, [input]));

    window.history.pushState({}, null, input.length ? `?search=${input}` : '/');

    setSearch(input);
    setResult(newResult);
  }

  return (
    <Wrapper>
      <Header>
         <Label>Enter search:</Label>
        <input type="text" value={search} onChange={handleChange} />
      </Header>
      <Content>
        { result.map((item, index) => {
          return <p key={index}  dangerouslySetInnerHTML={{__html: item}} />
        }) }
        {
          !result.length && <p>0 results. Try to change search</p>
        }
      </Content>
      <Footer>2020 &#169; DIGIS</Footer>
    </Wrapper>
  );
}

export default App;
