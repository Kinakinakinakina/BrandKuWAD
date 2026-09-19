    import { useEffect, useState } from "react";
    import { getData } from "../api/getData";
    import CardContent from "../components/Card";

    function CardGrid() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProducts() {
        const data = await getData(); // should've paid attention, my ass didn't know we can do this
        setProducts(data ?? []); // waow i actually used a ternary properly, poggers
        setLoading(false);
        }

        loadProducts();
    }, []);

    if (loading) {
        return <p className="text-center text-slate-500 py-12">something something...</p>;
    }

    if (products.length === 0) {
        return (
        <p className="text-center text-red-600 py-12">
            error :sob::wilted_rose:
        </p>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
            <CardContent key={product.id} product={product} />
        ))}
        </div>
    );
    }

    export default CardGrid;