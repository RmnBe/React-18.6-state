/*
Nie mam pojęcia o co chodzi...
Kiedy skończysz, dodaj do komponentu Counter wszystkie 
metody cyklu życia komponentu. W każdej z nich wypisz 
console.log ze swoimi pomysłami na ich użycie, np. kiedy 
wczytałbyś coś z serwera albo kiedy zależy nam na zoptymalizowaniu 
działania komponentu itp.
*/


var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    render: function() {
        return React.createElement('div', {},
                React.createElement('span', {}, 'Licznik ' + this.state.counter), 
                React.createElement('br', {}),
                React.createElement('button', {onClick: this.increment}, 'zwiększ o 1'),
                React.createElement('br', {}),
                React.createElement('button', {onClick: this.decrement}, 'zmniejsz o 1')
        );
    }
});
var Counter2 = React.createClass({
    render: function() {
        return React.createElement('div', {},
                    React.createElement(Counter, {}),
                    React.createElement(Counter, {}),
                    React.createElement(Counter, {}),
                    React.createElement(Counter, {}),
                    React.createElement(Counter, {}),

            )
    }        
});

var element = React.createElement(Counter2);
ReactDOM.render(element, document.getElementById('app'));