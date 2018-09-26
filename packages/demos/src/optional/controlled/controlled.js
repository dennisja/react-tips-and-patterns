import React from "react";

class ControlledCheckBox extends React.Component {
    state = {
        checked: false
    };

    isControlled = () => this.props.checked !== undefined;

    getState() {
        return {
            checked: this.isControlled() ? this.props.checked : this.state.checked
        };
    }

    check = () => {
        if (this.isControlled()) {
            this.props.onCheck(!this.getState().checked);
            return;
        }

        this.setState(
            ({ checked }) => ({
                checked: !checked
            }),
            () => {
                this.props.onCheck(this.state.checked);
            }
        );
    };
    render() {
        const { checked } = this.getState();
        return <input type="checkbox" checked={checked} onClick={this.check} />;
    }
}

class CheckBoxUser extends React.Component {
    state = {
        checked: false
    };

    handleToggle = checked => {
        console.log(checked);
        this.setState(({ checked }) => ({ checked: !checked }));
    };

    render() {
        return (
            <React.Fragment>
                <ControlledCheckBox
                    onCheck={this.handleToggle}
                    checked={this.state.checked}
                />
                <ControlledCheckBox
                    onCheck={this.handleToggle}
                    checked={this.state.checked}
                />
            </React.Fragment>
        );
    }
}

export default CheckBoxUser;
