import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux'
import { CardSection, Card } from './common';
//* imports all actions in this file
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.description}
                    </Text>
                </CardSection>
            )
        }
    }

    render () {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
       
        return(
        <TouchableWithoutFeedback 
            onPress={() => this.props.selectedLibrary(id)}>
            <View>
                <CardSection>
                    <Text style={titleStyle}>
                        {this.props.library.title}
                    </Text>
                </CardSection>
                {this.renderDescription()}
            </View>
        </TouchableWithoutFeedback>

        
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }

}

const mapToStateProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === props.library.id;

    return { expanded };
}

export default connect(mapToStateProps, actions)(ListItem);