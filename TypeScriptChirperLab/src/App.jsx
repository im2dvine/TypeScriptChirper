import React from "react";
import ChirpCard from "./components/ChirpCard";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            message: "",
            todos: [
                { id: uuidv4(), username: "Harley Quinn", message: "Mr! J! *heart eyes*" },
                { id: uuidv4(), username: "Joker", message: "Why so serious?" },
                { id: uuidv4(), username: "Bruce Wayne", message: "I AM BATMAN!" },
            ],
        };
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            username: "",
            message: "",
            todos: [
                ...this.state.todos,
               
                { id: uuidv4(), username: this.state.username, message: this.state.message},
            ]
        });
    }

    render() {
        return (
            <main className="container">
                <section className="row justify-content-center align-items-center mt-5">
                    <div className="col-md-7">
                        <form className="form-group">
                            
                            <input
                                value={this.state.username}
                                placeholder="username"
                                onChange={(e) => this.setState({ username: e.target.value })}
                            />
                            <input
                                value={this.state.message}
                                placeholder="message"
                                onChange={(e) => this.setState({ message: e.target.value })}
                            />
                            <button
                                onClick={(e) => this.handleSubmit(e)}
                                className="btn btn-success">{" "}Chirp it!{" "}
                            </button>
                            <section className="row justify-content-center mt-3">
                                <div className="col-md-6">
                                    <div className="chirp-group">
                                        {this.state.todos.map((todo) => (
                                            <ChirpCard key={`todo-username-${todo.id}`} todo={todo} />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}

export default App;