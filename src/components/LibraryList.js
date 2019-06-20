import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';



class LibraryList extends Component {
    //helper function
    renderItem(library) {
    return <ListItem library={library} />
    }


    render() {
        return (
            <FlatList 
                data={this.props.library}
                renderItem={this.renderItem}
                keyExtractor={() => library.id}
            />
        )
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries }
};

export default connect(mapStateToProps)(LibraryList);