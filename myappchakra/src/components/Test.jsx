import { getDocs } from "firebase/firestore";

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef); // pedido async
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <div>Test</div>;
};

export default Test;
