import MapView from 'react-native-maps';
import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

export default class PlaceMap extends Component {
    constructor() {
        super();
        this.state = {
            annotations: [
                {
                    title: 'C.P Road',
                    coordinate:{
                    latitude: 23.062542,
                    longitude: 72.537941
                    }
                },
                {
                    title: 'Tata Docomo',
                    coordinate: {
                    latitude: 23.062788,
                    longitude: 72.532071
                    }
                },
                {
                    title: 'Sarvodaya Road',
                    coordinate: {
                    latitude: 23.064709,
                    longitude: 72.535783
                    }
                }
            ]
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    annotations={this.state.annotations}
                    region={{
                        latitude: 23.066914,
                        longitude: 72.538878,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {this.state.annotations.map((marker, key) => (
                        <MapView.Marker
                            key={key}
                            coordinate={marker.coordinate}
                            title={marker.title}
                        />
                    ))}
                </MapView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});