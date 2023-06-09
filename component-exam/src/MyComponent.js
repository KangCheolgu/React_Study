import propTypes from 'prop-types';
import {Component} from 'react';


class MyComponent extends Component {

    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
            안녕하세요 제 이름은 {name} 입니다.<br/>
            children 값은 {children} 입니다.
            제일 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
};

MyComponent.defaultProps = {
    name: '강철구'
};

MyComponent.propTypes = {
    name : propTypes.string,
    favoriteNumber : propTypes.number.isRequired
};

export default MyComponent;

