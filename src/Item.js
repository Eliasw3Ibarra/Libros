import React from "react";
import './Item.css'

//componente encargado de cada item en la app, siendo los items los arreglos de las pelis
class Item extends React.Component{

    //mitico constructor de toda la vida
    constructor(props){
        super(props);
        this.state= {
            title: "",
            image: "",
            rating: 1,
            stars : []
        };

        //agrego el bind para algunos metodos para aumentar su alcance
        this.onremove=this.onremove.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    }

    //para pasar un componente una vez se renderizo en el DOM(creo)
    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            image: this.props.image,
            rating: parseInt(this.props.rating),
            stars: Array(parseInt(this.props.rating)).fill(0)
        });
    }

    //para cambiar el rateo
    onChangeRating (e) {
        const rating = parseInt(e.target.value)
        this.setState({
            rating: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(0)
        });

        this.props.onupdaterating({id: this.state.id, title: this.state.title, image: this.state.image, rating: rating});

    }

    //para quitar una peli
    onremove(e){
        console.log(this.props.id);
        this.props.onremove(this.props.id);
    }

    //render consecuente a cambiar un componente de funcion a clase
    render(){
    return (
        <div className="item">
            <div className="image"><img src={'img/' + this.state.image} width="100%" /></div>
            <div className="title">{this.state.title}</div>
            <div className="rating">
                <p>
                    {
                        this.state.stars.map(x => 
                            <img src="img/star.png" width= "32" />
                        )
                    }
                </p>
                CALIFICACION:
                    <select value={this.state.rating} onChange={this.onChangeRating}> 
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
            </div>
            <div className="actions">
                <button onClick={this.onremove}>Eliminar</button>
            </div>
        </div>
    );

}

}

export default Item;