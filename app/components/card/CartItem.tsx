// CartItem.tsx
import { AppColors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import CustomButton from '../buttons/CustomButton';
import CartItemButton from '../buttons/CartItemButton';
import { router } from 'expo-router';

interface CartItemProps {
    title: string;
    price: number;
    sessions: number;
    rating: number;
    reviews: number;
    onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ title, price, sessions, rating, reviews, onRemove }) => {
    return (
        <View style={styles.container}>
            {/* Details */}
            <View style={styles.details}>
                <Image style={styles.image} source={require("../../../assets/images/frame.png")} />
                {/* Info */}
                <View style={styles.info}>
                    {/* main */}
                    <View style={styles.main}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.price}>₹ {price}</Text>
                    </View>

                    <View style={styles.session}>
                        <Image style={styles.sessionImage} source={require('../../../assets/images/session.png')} />
                        <Text style={styles.sessionText}>Total {sessions} Sessions</Text>
                    </View>

                    <View style={styles.rating}>
                        <Text style={styles.ratingStar}>
                            {'⭐'.repeat(Math.floor(rating))}
                        </Text>
                        <Text style={styles.ratingText}>
                            ({reviews} reviews)
                        </Text>
                    </View>

                    {/* Discount */}
                    <View style={styles.discount}>
                        <Image style={styles.discountImage} source={require('../../../assets/images/discount.png')} />
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.discountText} >Flat </Text>
                            <Text style={{ ...styles.discountText, color: AppColors.primaryDark }} >10%</Text>
                            <Text style={styles.discountText} > Discount</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* actions */}
            <View style={styles.actions}>
                <CartItemButton text={'Remove'}
                    isDelete={true}
                    onPress={() => { }} />
                <CartItemButton text={'Book Now'}
                    isDelete={false}
                    onPress={() => {
                        router.push('cart/scheduling')
                    }} />
                {/* <Button title="Remove" onPress={onRemove} color="#8A2BE2" />
                <Button title="Book Now" onPress={() => { }} color="#8A2BE2" /> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 8,
        overflow: 'hidden'
    },

    details: {
        padding: 10,
        flexDirection: 'row',
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 2,
    },

    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 14,
        fontFamily: 'LatoSemiBold'
    },

    price: {
        fontSize: 16,
        color: AppColors.primaryDark,
        fontFamily: 'LatoBold'
    },

    info: {
        flex: 1,
        marginLeft: 10,
        gap:5
    },

    session: {
        // backgroundColor:'red',
        flexDirection: 'row',
    },
    sessionImage: {
        height: 16,
        width: 16,
        marginRight: 4,
        alignItems: 'center'
    },
    sessionText: {
        fontFamily: 'LatoRegular',
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize:14
    },

    rating: {
        // backgroundColor:'red',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingStar: {
        // height:16,
        fontSize: 15,
        marginRight: 4
    },
    ratingText: {
        fontSize: 8,
        color: '#666',
        fontFamily: 'LatoRegular'
    },

    discount: {
        // backgroundColor:'red',
        flexDirection: 'row',
        fontSize: 14,
        alignItems: 'center',
    },
    discountImage: {
        height: 16,
        width: 16,
        marginRight: 4
    },
    discountText: {
        fontFamily: 'latoBold',
        fontSize: 10
    },

    actions: {
        flexDirection: 'row',
    },
});

export default CartItem;
