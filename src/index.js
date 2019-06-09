import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// там где нужна динамика и интерактивность создаются классы
// state - внутреннее состояние, которое может изменять разработчик, а props это данные из вне, которые изменять нельзя

ReactDOM.render(<App />, document.getElementById('root'));
