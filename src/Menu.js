import React from "react";
import Search from "./Search";
import "./Menu.css";
import PanelAdd from "./PanelAdd";

class Menu extends React.Component{

    constructor(props){
        super (props);

        this.state = {newItemPanel : false};

        // esto si quisiera aumentar el alcance de la funcion al estado y que
        //no salte error this.add = this.add.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.add = this.add.bind(this);
    }

    //la funcion declarada en flecha aumenta el alcance de la funcion, para no tener que hacer un bind
    //cada vez que haga una funcion que modifica el objeto

    add(){
        this.setState({newItemPanel:true});
       
    }

    onCancel(){
        this.setState({newItemPanel:false});
    }


render(){
    return(
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    {this.props.title}
                </div>

                <div className="search">
                <Search onsearch={this.props.onsearch}/>
                </div>

                <div className="actions">
                    <button onClick ={this.add} className="button btn-blue">+Añadir un nuevo caca</button>
                </div>

            </div>

            {/* if condensado autodeclarativo, un if basicmamente, con los statement
            a un costado y las rutas logicas del otro */}
            {
                (this.state.newItemPanel)?
                <PanelAdd onCancel={this.onCancel} onadd={this.props.onadd}/>
                :

                " "
            }
            
        </div>
    );
}
}

export default Menu;
