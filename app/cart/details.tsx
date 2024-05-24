import { AppColors } from "@/constants/Colors";
import CustomButton from "../components/buttons/CustomButton";
import CartItem from "../components/card/CartItem";
import {
    FlatList, StyleSheet, Text, View, Button
} from 'react-native';

const cartData = [
    {
        id: '1',
        title: 'Pranic Healing',
        price: 2000,
        sessions: 5,
        rating: 5,
        reviews: 100,
    },
    {
        id: '2',
        title: 'Reiki',
        price: 2000,
        sessions: 5,
        rating: 3,
        reviews: 100,
    },
    {
        id: '3',
        title: 'Reiki',
        price: 2000,
        sessions: 5,
        rating: 4,
        reviews: 100,
    },
];

const details = () => {

    const totalAmount = cartData.reduce((sum, item) => sum + item.price, 0);

    const handleRemove = (id: string) => {
        console.log(`Remove item with id: ${id}`)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cartData}
                renderItem={({ item }) => (
                    <CartItem
                        title={item.title}
                        price={item.price}
                        sessions={item.sessions}
                        rating={item.rating}
                        reviews={item.reviews}
                        onRemove={() => handleRemove(item.id)}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.footer}>
                <View>
                    <Text style={styles.totalText}>{cartData.length} appointment added</Text>
                    <Text style={styles.totalAmount}>₹ {totalAmount}</Text>
                </View>

                <View style={{ width: 120 }}>
                    <CustomButton text="Proceed" onPress={function (): void {
                        throw new Error("Function not implemented.");
                    }} />
                </View>
            </View>
        </View>
    );
}

export default details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        borderRadius: 16
    },
    totalText: {
        fontSize: 16,
        fontFamily: "LatoBold",
        marginBottom: 6
    },
    totalAmount: {
        fontSize: 16,
        color: AppColors.primaryDark,
        fontFamily: "LatoBold"
    },
});