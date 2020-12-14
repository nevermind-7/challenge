import React, { Component } from 'react';

class OptionsControl extends Component {
    render() {
        if (this.props.isFirstPage) {
            return (
                <div className="col col-md-4 OptionsControlContainer" >
                    <div className="col col-md-6" onClick={() => this.props.handleNextPage()}>
                        <div className="options-item">
                            <div className="row">
                                <span>{this.props.textNextPage} </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else
            if (this.props.hasMorePages) {
                return (
                    <div className="col col-md-4 OptionsControlContainer" >
                        <div className="col col-md-6" onClick={() => this.props.handlePreviousPage()}>
                            <div className="options-item">
                                <div className="row">
                                    <span>{this.props.textPreviousPage} </span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-6" onClick={() => this.props.handleNextPage()}>
                            <div className="options-item">
                                <div className="row">
                                    <span>{this.props.textNextPage} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <div className="col col-md-4 OptionsControlContainer" >
                        <div className="col col-md-6" onClick={() => this.props.handlePreviousPage()}>
                            <div className="options-item">
                                <div className="row">
                                    <span>{this.props.textPreviousPage} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
    }
}

export default OptionsControl;