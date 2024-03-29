import React from 'react';
import './App.css';
import Menu from './Menu'
import List from './List'

class App extends React.Component {
  
    constructor(props){
        super(props);
        this.state={
            books:[
                {id:0, rating:4, title:"Harry Potter y el caliz de fuego", image:"libro-01.jpg"},
                {id:1, rating:3, title:"The Shining", image:"libro-02.jpg"},
                {id:2, rating:5, title:"Codigo Da Vinci", image:"libro-03.jpg"},
                {id:3, rating:5, title:"El Principito", image:"libro-04.jpg"},
                {id:4, rating:5, title:"Sobrenatural", image:"libro-05.jpg"},
            ],
            copyBooks : []

        };
    }

    componentDidMount(){
        this.initBooks();
    }

    initBooks = () =>{
        this.setState((state,props)=> ({
            copyBooks : [...state.books]
        }));
    }
    //wajaaaaa para agregar los items pa, aca te habias confundido en la suma de parametros para elegir el index en el que agrego el nuevo item ijijijji
    onAdd = (item) =>{
        let temp = [...this.state.books];
        const id = temp[temp.length-1].id +1;
        item["id"] = id;
        temp.push(item);

        this.setState({books:[...temp]});
        this.initBooks();
    }


    //este algoritmo me va a servir para hacer busquedas despues, en search tenes la forma de integrarlo al componente de busqueda de la app
    onSearch= (query) =>{
        //el query es la barra de busqueda, aca lo que hace es que cada vez que este vacio, te muestra de vuelta las pelis uhjasujduajsd
        if(query === " "){
            this.initBooks();
        }else{
            //aca recorremos el arreglo de los libros
            const temp = [...this.state.books];
            let res = [];

            temp.forEach(item => {
                if(item.title.toLowerCase().indexOf(query) > -1){
                    res.push(item);
                }
            });
            this.setState({copyBooks:[...res]});
        }
    }

    onUpdateRating = (item) =>{
        var temp = [...this.state.books];
        const index = temp.findIndex(x => x.id === item.id);

        temp[index].title=item.title;
        temp[index].image=item.image;
        temp[index].rating=item.rating;
        
        this.setState({books:[...temp]});
        this.initBooks();
    }

    onRemove = (id)=>{
        var temp = [...this.state.books];
        const res = temp.filter(item =>item.id != id);

        this.setState({books:[...res]});
        this.initBooks();
    }

    render(){
        return(
            <div className='app'>
                <Menu title="librinhos" onadd={this.onAdd} onsearch ={this.onSearch}/>
                <List 
                items={this.state.copyBooks} 
                onupdaterating ={this.onUpdateRating}
                onremove ={this.onRemove}/>
            </div>
        );
    }
}

export default App;
