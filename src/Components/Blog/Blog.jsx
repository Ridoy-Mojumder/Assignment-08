

const Blog = () => {
    return (
        <div className="container mx-auto py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example Blog Post */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://i.ibb.co/r37ht1y/front-view-desk-concept-wooden-table-23-2148459648.jpg" alt="Blog Post" className="w-full h-auto object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">10 Must-Read Books That Changed My Perspective</h2>
                            <p className="text-gray-600 mb-4">Explore a curated list of transformative books that offer valuable insights and perspectives on life, society, and personal growth.</p>
                            <a href="#" className="text-indigo-500 font-semibold hover:underline">Read More</a>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://i.ibb.co/j4Qxfd3/minimal-home-workspace-design-23-2148991405.jpg" alt="Blog Post" className="w-full h-auto object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">The Power of Storytelling: How Books Shape Our Lives</h2>
                            <p className="text-gray-600 mb-4">Delve into the profound impact of storytelling on human culture and psychology, and discover how books can influence our beliefs, emotions, and actions.</p>
                            <a href="#" className="text-indigo-500 font-semibold hover:underline">Read More</a>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://i.ibb.co/GW7SZsk/coffee-books-wooden-table-caf-shop-23-2147892953.jpg" alt="Blog Post" className="w-full h-auto object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">Navigating the World of Fantasy Fiction: A Beginners Guide</h2>
                            <p className="text-gray-600 mb-4">Embark on a journey into the enchanting realm of fantasy literature, with recommendations for entry-level readers and insights into the genres enduring popularity.</p>
                            <a href="#" className="text-indigo-500 font-semibold hover:underline">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
