import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const renderItem = ({ item,index }) => (
        <TouchableOpacity style={[styles.card, index === products.length - 1 && styles.lastCard]}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.rating}>Rating: {item.rating.rate}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </TouchableOpacity>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
    }

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        marginTop:40,
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
        marginBottom: 16,
        padding: 16,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    rating: {
        fontSize: 16,
        color: '#FFD700',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007BFF',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
    },
    lastCard: {
        marginBottom:40, 
    },
});

export default ProductList;
