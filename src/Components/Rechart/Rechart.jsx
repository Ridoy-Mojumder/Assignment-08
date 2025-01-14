import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getStoredBookRead } from '../../Utility/localStorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Rechart = () => {
  const [readBooks, setReadBooks] = useState([]);
  const books = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedBooksId = getStoredBookRead();

    if (books && books.length > 0) {
      const filteredBooks = books.filter((book) => storedBooksId.includes(book.bookId));
      setReadBooks(filteredBooks);
      setIsLoading(false);
    }
  }, [books]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="text-center py-10">
                <h1 className="text-4xl font-bold">Rechart Here The Red Books</h1>
            </div>
      <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={readBooks.map((book) => ({
          name: book.bookName,
          pages: book.totalPages,
        }))}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {readBooks.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
