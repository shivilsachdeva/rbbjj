import React, { Component } from 'react';
import axios from 'axios';


export default class AddClass extends Component {
    constructor(props) {
        super(props);

        //binds 'this' to each method 
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeStartTime = this.onChangeStartTime.bind(this);
        this.onChangeEndTime = this.onChangeEndTime.bind(this);
        this.onChangeTrainingType = this.onChangeTrainingType.bind(this);
        this.onChangeDays = this.onChangeDays.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            starttime: '',
            endtime: '',
            trainingtype: '',
            days: []
        }
    }


    // componentDidMount() {
    //     axios.get('/')
    //         .then(res => {
    //             if (res.data.length > 0) {
    //                 this.setState({
    //                     newClass: res.data.map(newClass => newClass.title),
    //                     title: res.data[0].title
    //                 })
    //             }
    //         })
    // }

    onChangeTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    onChangeStartTime(event) {
        this.setState({
            type: event.target.value
        });
    }

     onChangeEndTime(event) {
        this.setState({
            type: event.target.value
        });
    }

    onChangeTrainingType(event) {
        this.setState({
            trainingtype: event.target.value
        });
    }

    onChangeDays(event) {
        this.setState({
            type: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();

        const newClass = {
            title: this.state.title,
            starttime: this.state.starttime,
            endtime: this.state.endtime,
            trainingtype: this.state.trainingtype,
            days: this.state.days
        }

        console.log(newClass);

        axios.post('/addclass', newClass)
            .then(res => console.log(res.data));

        //after you submit training, refreshes page
        // window.location = '/';

    }


    render() {
        return (
            <div>
                <h3>Add A New Class</h3>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Title: </label>
                        <input type='text'
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            />
                    </div>

                    <div className="form-group">
                        <label>Start Time: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.starttime}
                            onChange={this.onChangeStartTime}
                        />
                    </div>

                    <div className="form-group">
                        <label>End Time: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.endtime}
                            onChange={this.onChangeEndTime}
                        />
                    </div>

                    <div className="form-group">
                        <div className="form-group">
                            <label>Training Type: </label>
                            <input
                            type="text"
                            className="form-control"
                            value={this.state.trainingtype}
                            onChange={this.onChangeTrainingType}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Days: </label>
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.days}
                        onChange={this.onChangeDays}
                        />
                    </div>
                    

                    <div className="form-group">
                        <input type="submit" value="Add Class" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}