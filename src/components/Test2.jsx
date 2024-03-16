import React from 'react';

const Category = () => {
    const categories = [
        { "id": 1, "name": "Electronics", "color": "#3498db" },
        { "id": 2, "name": "Clothing & Apparel", "color": "#2ecc71" },
        { "id": 3, "name": "Home & Furniture", "color": "#e67e22" },
        { "id": 4, "name": "Beauty & Personal Care", "color": "#9b59b6" },
        { "id": 5, "name": "Books & Stationery", "color": "#34495e" },
        { "id": 6, "name": "Sports & Outdoors", "color": "#1abc9c" },
        { "id": 7, "name": "Health & Wellness", "color": "#f39c12" },
        { "id": 8, "name": "Toys & Games", "color": "#e74c3c" },
        { "id": 9, "name": "Automotive", "color": "#3498db" },
        { "id": 10, "name": "Pets", "color": "#2ecc71" }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
            {categories.map((cat) => (
                <p key={cat.id} style={{ backgroundColor: cat.color }} className="py-3 px-4 gap-7 rounded-lg cursor-pointer text-center font-semibold text-lg mx-2 mt-3" >
                    {cat.name}
                </p>
            ))}
        </div>
    );
};

export default Category;
