import React from "react";

//componente para agregar una peli
class PanelAdd extends React.Component{
    
    
    constructor(props){
        super(props);
        this.state = {

            title : " ",
            image : " ",
            rating : 1

        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    }

    //PARA CARGAR el titulo
    onChangeTitle = (e) =>{
        this.setState({title: e.target.value});
    }
    //la imagen
    onChangeImage= (e) =>{
        this.setState({image: e.target.value});
    }
    //el score
    onChangeRating (e){
        const rating = parseInt(e.target.value);
        this.setState({rating : rating });
    }

    //metodo para cargar la imagen del panel agregado
    onSubmit (e){
            e.preventDefault();

            const title = this.state.title;
            const image = this.state.image;
            const rating=this.state.rating;

            this.props.onadd({title: title, image: image, rating: rating});
            this.props.onCancel();
        }

    render(){
    return(
        <div className="new-item-panel-container">
            <div className="new-item-panel">
                <form onSubmit = {this.onSubmit}>
                    <p>
                        <label>Titulo de la pelicula</label><br  />
                        <input onChange={this.onChangeTitle} type="text" name="title" className="input" />
                    </p>

                    <p>
                        <label>Nombre de la imagen</label><br />
                        <input onChange={this.onChangeImage} type="text" name="image" className="input" />
                    </p>

                    <p>
                        <label>Calificacion</label><br />
                        <select onChange={this.onChangeRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <input type="submit" className="button btn-blue" value="Registrar libro" />
                    <button onClick={this.props.onCancel} className="button btn-normal">Cancelar</button>
                </form>
            </div>
        </div>
    )
    }
}

export default PanelAdd;