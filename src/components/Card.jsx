    function CardContent({ product }) {
    const { title, price, description, category, image, rating } = product;

    return (
        <article className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex flex-col h-full">
        <img
            src={image}
            alt={title}
            className="h-40 w-full object-contain mb-6"
        />

        <p className="text-xs text-slate-500 mb-1 capitalize">{category}</p>
        <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-600 mb-4">{description}</p>

        <p className="text-red-600 font-bold mb-1">${price}</p>
        <p className="text-xs text-slate-500">
            Rating: {rating.rate} / 5 ({rating.count} ulasan)
        </p>
        </article>
    );
    }

    export default CardContent;