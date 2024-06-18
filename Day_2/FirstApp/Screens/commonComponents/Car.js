// // Car.js
// import React from 'react';
// import { Text, View } from 'react-native';

// export default function Car({ brand, color, year }) {
//     const isLoggedIn = true;
//     // const element2 = (
//     //     <View>
//     //         <Text>Hello, {isLoggedIn ? "User" : "Guest"}!</Text>
//     //         {
//     //             isLoggedIn && (
//     //                 <View>
//     //                     <Text>Log out</Text>
//     //                 </View >
//     //             )
//     //         }
//     //     </View >

//     // );
//     const element1 = (
//         <View>
//             <Text>My Car</Text>
//             <Text>Brand: {brand}</Text>
//             <Text>Color: {color}</Text>
//             <Text>Year: {year}</Text>
//         </View >
//     );
//     return (
//         <View>
//             <Text>{element1}</Text>
//             {/* <Text>{element2}</Text> */}
//             <Text>My element</Text>
//         </View>
//     );
// }


// import React from 'react';
// import { Text, View } from 'react-native';

// export default function Car({ car }) {
//     const { brand, color, year } = car;

//     const element1 = (
//         <View>
//             <Text>My Car</Text>
//             <Text>Brand: {brand}</Text>
//             <Text>Color: {color}</Text>
//             <Text>Year: {year}</Text>
//         </View>
//     );

//     return (
//         <View>
//             {element1}
//             <Text>My element</Text>
//         </View>
//     );
// }

import React from 'react';
import { Text, View } from 'react-native';

export default function Car({ car }) {
    const { brand, color, year } = car;

    return (
        <View>
            <Text>My Car</Text>
            <Text>Brand: {brand}</Text>
            <Text>Color: {color}</Text>
            <Text>Year: {year}</Text>
        </View>
    );
}
