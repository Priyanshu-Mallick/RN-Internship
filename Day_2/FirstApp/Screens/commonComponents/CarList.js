import React from 'react';
import { View } from 'react-native';
import Car from './Car';

export default function CarList({ cars }) {
    return (
        <View>
            {cars.map((car, index) => (
                <Car key={index} car={car} />
            ))}
        </View>
    );
}
